/*
 * netflow.js — TikZ-style nodes & arcs for network-flow diagrams, reveal.js friendly.
 *
 * NetFlow.draw(container, spec)
 *
 * spec = {
 *   unit: 90,            // px per coordinate unit (like TikZ cm)
 *   radius: 16,          // default node radius (px)
 *   pad: 30,             // padding around the picture (px)
 *   labelOffset: 4,      // distance of arc labels from the arc (px)
 *   group: 'name',       // optional: diagrams with the same group morph into each other
 *                        //   on <section data-auto-animate> transitions
 *   nodes: [{ id, x, y, label?, shape?: 'circle'|'rect', r?, w?, h?, class?, fragment? }],
 *   arcs:  [{ from, to, id?, label?, bend?: deg (+ = left, like TikZ "bend left"),
 *             looseness?: 1, pos?: 0.5, swap?: false, class?, fragment? }]
 * }
 * - Coordinates are TikZ-like: y points up.
 * - Labels: if window.katex exists, "$...$" parts are rendered as math; otherwise plain text.
 * - fragment: true | n  -> element gets class "fragment" (+ data-fragment-index=n).
 *   Draw before Reveal.initialize(), or call Reveal.sync() afterwards.
 * - Morphing: diagrams sharing a group share one coordinate frame. On an auto-animate
 *   transition, nodes move and arcs/labels are redrawn every frame so they stay attached.
 *   Nodes/arcs are matched by node id and arc id (default "from-to"); bends are interpolated;
 *   new non-fragment elements fade in. Duration/easing follow reveal's autoAnimateDuration /
 *   autoAnimateEasing (or data-auto-animate-duration / -easing on the target slide).
 * - Font sizes: CSS vars --nf-arc-font (default 0.4em), --nf-node-font (default 0.55em).
 */
(function (global) {
  const SVG = 'http://www.w3.org/2000/svg';
  const rad = d => d * Math.PI / 180;
  const lerp = (a, b, t) => a + (b - a) * t;

  function el(tag, attrs, parent) {
    const e = document.createElementNS(SVG, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  function setFragment(e, f, cls) {
    if (cls) cls.split(/\s+/).forEach(c => c && e.classList.add(c));
    if (f === undefined || f === false) return;
    e.classList.add('fragment');
    if (typeof f === 'number') e.setAttribute('data-fragment-index', f);
  }

  function renderLabel(div, text) {
    if (global.katex && /\$/.test(text)) {
      div.innerHTML = text.split(/(\$[^$]+\$)/).map(part =>
        part.startsWith('$') && part.endsWith('$')
          ? global.katex.renderToString(part.slice(1, -1), { throwOnError: false })
          : part.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]))
      ).join('');
    } else {
      div.textContent = text;
    }
  }

  // Point where a ray from node center at angle a (screen radians) leaves the node boundary.
  function boundary(n, a) {
    const dx = Math.cos(a), dy = Math.sin(a);
    if (n.shape === 'rect') {
      const s = Math.min(n.w / 2 / Math.abs(dx || 1e-9), n.h / 2 / Math.abs(dy || 1e-9));
      return [n.px + dx * s, n.py + dy * s];
    }
    return [n.px + dx * n.r, n.py + dy * n.r];
  }

  const bez = (p, t) => {
    const u = 1 - t;
    return [0, 1].map(i => u*u*u*p[0][i] + 3*u*u*t*p[1][i] + 3*u*t*t*p[2][i] + t*t*t*p[3][i]);
  };
  const bezD = (p, t) => {
    const u = 1 - t;
    return [0, 1].map(i => 3*u*u*(p[1][i]-p[0][i]) + 6*u*t*(p[2][i]-p[1][i]) + 3*t*t*(p[3][i]-p[2][i]));
  };

  // ---------- geometry ----------

  function frameOf(specs) {
    const xs = [], ys = [];
    specs.forEach(s => s.nodes.forEach(n => { xs.push(n.x); ys.push(n.y); }));
    return { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
  }

  function geometry(spec, frame) {
    const unit = spec.unit ?? 90, R = spec.radius ?? 16, pad = spec.pad ?? 30;
    const nodes = {};
    spec.nodes.forEach(n => {
      const shape = n.shape || 'circle', r = n.r ?? R;
      nodes[n.id] = {
        shape, r,
        w: shape === 'rect' ? (n.w ?? 2 * r) : 2 * r,
        h: shape === 'rect' ? (n.h ?? 2 * r) : 2 * r,
        px: (n.x - frame.minX) * unit + pad,
        py: (frame.maxY - n.y) * unit + pad,   // y up
      };
    });
    return {
      nodes,
      W: (frame.maxX - frame.minX) * unit + 2 * pad,
      H: (frame.maxY - frame.minY) * unit + 2 * pad,
    };
  }

  function arcShape(s, t, bend, looseness) {
    const base = Math.atan2(t.py - s.py, t.px - s.px);
    const b = rad(bend);
    const out = base - b, inn = base + Math.PI + b;   // screen y is down: "left" = -angle
    const p0 = boundary(s, out), p3 = boundary(t, inn);
    const dist = Math.hypot(p3[0] - p0[0], p3[1] - p0[1]);
    const k = 0.3915 * dist * looseness;              // TikZ default control distance
    const p = [p0,
      [p0[0] + k * Math.cos(out), p0[1] + k * Math.sin(out)],
      [p3[0] + k * Math.cos(inn), p3[1] + k * Math.sin(inn)], p3];
    const dx = -Math.cos(inn), dy = -Math.sin(inn), hx = -dy, hy = dx;
    // arrow tip scales with the target node (reference: radius 17), never smaller than that
    const size = t.shape === 'rect' ? Math.min(t.w, t.h) / 2 : t.r;
    const k2 = Math.max(size, 17) / 17;
    const L = 10 * k2, Wd = 4 * k2, bx = p3[0] - dx * L, by = p3[1] - dy * L;
    const end = [p3[0] - dx * 6 * k2, p3[1] - dy * 6 * k2];
    return {
      p,
      line: `M${p[0]} C${p[1]} ${p[2]} ${end}`,
      head: `M${p3} L${bx + hx * Wd},${by + hy * Wd} L${bx + dx * 2.5},${by + dy * 2.5} ` +
            `L${bx - hx * Wd},${by - hy * Wd} Z`,
    };
  }

  // ---------- rendering ----------

  function build(container, spec) {
    container.classList.add('netflow');
    container.style.position = 'relative';
    const svg = el('svg', {}, container);
    svg.style.overflow = 'visible';

    const inst = { container, spec, svg, nodes: {}, arcs: [] };

    const seen = {};
    (spec.arcs || []).forEach(a => {
      if (!spec.nodes.some(n => n.id === a.from) || !spec.nodes.some(n => n.id === a.to))
        throw new Error(`netflow: unknown node in arc ${a.from}->${a.to}`);
      let key = a.id ?? `${a.from}-${a.to}`;
      seen[key] = (seen[key] || 0) + 1;
      if (seen[key] > 1) key += '-' + seen[key];

      const g = el('g', { class: 'nf-arc' }, svg);
      setFragment(g, a.fragment, a.class);
      const rec = { a, key, g,
        line: el('path', { class: 'nf-line' }, g),
        head: el('path', { class: 'nf-head' }, g) };

      if (a.label !== undefined) {
        const w = document.createElement('div');
        w.className = 'nf-label nf-arc-label';
        w.style.cssText = 'position:absolute;width:0;height:0;';
        const d = document.createElement('div');
        d.style.cssText = 'position:absolute;white-space:nowrap;';
        renderLabel(d, String(a.label));
        w.appendChild(d);
        setFragment(w, a.fragment, a.class);
        container.appendChild(w);
        rec.labelOuter = w; rec.labelInner = d;
      }
      inst.arcs.push(rec);
    });

    spec.nodes.forEach(n => {
      const d = document.createElement('div');
      d.className = 'nf-node nf-' + (n.shape || 'circle');
      d.style.position = 'absolute';
      if (n.label !== undefined) {
        const l = document.createElement('div');
        l.className = 'nf-label nf-node-label';
        renderLabel(l, String(n.label));
        d.appendChild(l);
      }
      setFragment(d, n.fragment, n.class);
      container.appendChild(d);
      inst.nodes[n.id] = { n, el: d };
    });

    return inst;
  }

  // Position everything for geometry geom; bends: key -> deg (overrides); fade: elements -> opacity
  function place(inst, geom, bends) {
    const { container, svg, spec } = inst;
    container.style.width = geom.W + 'px';
    container.style.height = geom.H + 'px';
    svg.setAttribute('width', geom.W);
    svg.setAttribute('height', geom.H);
    svg.setAttribute('viewBox', `0 0 ${geom.W} ${geom.H}`);

    for (const id in inst.nodes) {
      const g = geom.nodes[id], s = inst.nodes[id].el.style;
      s.left = (g.px - g.w / 2) + 'px'; s.top = (g.py - g.h / 2) + 'px';
      s.width = g.w + 'px'; s.height = g.h + 'px';
    }

    const off = spec.labelOffset ?? 4;
    inst.arcs.forEach(r => {
      const a = r.a;
      const bend = bends && r.key in bends ? bends[r.key] : (a.bend || 0);
      const sh = arcShape(geom.nodes[a.from], geom.nodes[a.to], bend, a.looseness ?? 1);
      r.line.setAttribute('d', sh.line);
      r.head.setAttribute('d', sh.head);
      if (r.labelOuter) {
        const tt = a.pos ?? 0.5, q = bez(sh.p, tt), dv = bezD(sh.p, tt), L = Math.hypot(...dv) || 1;
        let nx = dv[1] / L, ny = -dv[0] / L;      // left of travel direction (TikZ "auto")
        if (a.swap) { nx = -nx; ny = -ny; }
        r.labelOuter.style.left = (q[0] + nx * off) + 'px';
        r.labelOuter.style.top = (q[1] + ny * off) + 'px';
        r.labelInner.style.transform = `translate(${-50 + 50 * nx}%,${-50 + 50 * ny}%)`;
      }
    });
  }

  // ---------- groups & morphing ----------

  const groups = {};                 // name -> [inst]
  const byContainer = new Map();     // container -> inst

  function relayoutGroup(name) {
    const list = groups[name];
    const frame = frameOf(list.map(i => i.spec));
    list.forEach(i => { i.geom = geometry(i.spec, frame); place(i, i.geom); });
  }

  function draw(container, spec) {
    const inst = build(container, spec);
    byContainer.set(container, inst);
    if (spec.group) {
      container.setAttribute('data-nf-group', spec.group);
      // matched (not faded) by reveal's auto-animate; same size across the group => no scaling
      container.setAttribute('data-id', 'nf-group-' + spec.group);
      (groups[spec.group] = groups[spec.group] || []).push(inst);
      relayoutGroup(spec.group);
    } else {
      inst.geom = geometry(spec, frameOf([spec]));
      place(inst, inst.geom);
    }
    return container;
  }

  function cubicBezier(x1, y1, x2, y2) {
    const f = (a, b, t) => 3 * a * (1 - t) * (1 - t) * t + 3 * b * (1 - t) * t * t + t * t * t;
    return x => {
      let lo = 0, hi = 1, t = x;
      for (let i = 0; i < 30; i++) { t = (lo + hi) / 2; (f(x1, x2, t) < x) ? lo = t : hi = t; }
      return f(y1, y2, t);
    };
  }
  function easing(name) {
    const m = /cubic-bezier\(([^)]+)\)/.exec(name || '');
    if (m) return cubicBezier(...m[1].split(',').map(Number));
    return ({
      linear: t => t,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
      'ease-in': cubicBezier(0.42, 0, 1, 1),
      'ease-out': cubicBezier(0, 0, 0.58, 1),
      'ease-in-out': cubicBezier(0.42, 0, 0.58, 1),
    })[name] || cubicBezier(0.25, 0.1, 0.25, 1);
  }

  function morph(from, to, durationMs, ease) {
    const token = {};
    to.morphToken = token;
    const A = from.geom, B = to.geom;
    const bendsA = {}; from.arcs.forEach(r => (bendsA[r.key] = r.a.bend || 0));

    // new, non-fragment elements fade in
    const fresh = [];
    for (const id in to.nodes)
      if (!A.nodes[id] && !to.nodes[id].el.classList.contains('fragment')) fresh.push(to.nodes[id].el);
    to.arcs.forEach(r => {
      if (!(r.key in bendsA) && !r.g.classList.contains('fragment')) {
        fresh.push(r.g); if (r.labelOuter) fresh.push(r.labelOuter);
      }
    });

    const start = performance.now();
    const step = now => {
      if (to.morphToken !== token) return;
      const t = Math.min(1, (now - start) / durationMs), e = ease(t);
      const nodes = {};
      for (const id in B.nodes) {
        const a = A.nodes[id], b = B.nodes[id];
        nodes[id] = a
          ? { shape: b.shape, r: lerp(a.r, b.r, e), w: lerp(a.w, b.w, e), h: lerp(a.h, b.h, e),
              px: lerp(a.px, b.px, e), py: lerp(a.py, b.py, e) }
          : b;
      }
      const bends = {};
      to.arcs.forEach(r => {
        if (r.key in bendsA) bends[r.key] = lerp(bendsA[r.key], r.a.bend || 0, e);
      });
      place(to, { nodes, W: B.W, H: B.H }, bends);
      fresh.forEach(x => (x.style.opacity = t < 1 ? e : ''));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  if (typeof document !== 'undefined') {
    // reveal.js dispatches bubbling events on .reveal, so this works before/after initialize()
    document.addEventListener('slidechanged', ev => {
      const prev = ev.previousSlide, cur = ev.currentSlide;
      if (!prev || !cur || !prev.hasAttribute('data-auto-animate') || !cur.hasAttribute('data-auto-animate')) return;
      const cfg = (global.Reveal && global.Reveal.getConfig && global.Reveal.getConfig()) || {};
      const dur = 1000 * parseFloat(cur.getAttribute('data-auto-animate-duration') ?? cfg.autoAnimateDuration ?? 1);
      const ease = easing(cur.getAttribute('data-auto-animate-easing') ?? cfg.autoAnimateEasing ?? 'ease');
      cur.querySelectorAll('.netflow[data-nf-group]').forEach(c => {
        const g = c.getAttribute('data-nf-group');
        const p = prev.querySelector(`.netflow[data-nf-group="${CSS.escape(g)}"]`);
        const to = byContainer.get(c), from = p && byContainer.get(p);
        if (from && to) morph(from, to, dur, ease);
      });
    });
  }

  // Default styling (override via CSS)
  if (typeof document !== 'undefined' && !document.getElementById('netflow-css')) {
    const st = document.createElement('style');
    st.id = 'netflow-css';
    st.textContent = `
.netflow { display:inline-block; margin:auto; --nf-stroke:currentColor; --nf-fill:transparent; }
.netflow .nf-node { box-sizing:border-box; display:flex; align-items:center; justify-content:center;
  border:1.5px solid var(--nf-stroke); background:var(--nf-fill); }
.netflow .nf-circle { border-radius:50%; }
.netflow .nf-rect { border-radius:3px; }
.netflow .nf-line { fill:none; stroke:var(--nf-stroke); stroke-width:1.5; }
.netflow .nf-head { fill:var(--nf-stroke); stroke:none; }
.netflow .nf-label { line-height:1; pointer-events:none; white-space:nowrap; }
.netflow .nf-node-label { font-size:var(--nf-node-font, 0.55em); }
.netflow .nf-arc-label { font-size:var(--nf-arc-font, 0.4em); }
.netflow .flow .nf-line { stroke:#d62728; stroke-width:3; }
.netflow .flow .nf-head { fill:#d62728; }
.netflow .nf-label.flow { color:#d62728; }
.netflow .nf-node.flow { border-color:#d62728; }
.netflow .dashed .nf-line { stroke-dasharray:6 4; }`;
    document.head.appendChild(st);
  }

  global.NetFlow = { draw };
})(typeof window !== 'undefined' ? window : globalThis);
