
## Linear programming

===

### Linear program

A linear program (LP) is a mathematical program 

$ \text{minimize } f(x) $ subject to $ x \in X $

where

- $X$ is only constrained by **linear constraints**, and
- $f(x)$ is a **linear expression**.

> [!IMPORTANT]
> Linear constraints must be of the type $g(x) \leq h(x)$, $g(x) \geq h(x)$, or $g(x) = h(x)$ where $g(x)$ and $h(x)$ are linear [expressions](https://en.wikipedia.org/wiki/Expression_(mathematics)).

---

#### Example ####

maximise $f(x,y) = 3x + 5y$

subject to

$$x \leq 4$$
$$y \leq 6$$
$$3x + 2y \leq 18$$
$$x \geq 0$$
$$y \geq 0$$

===

### Graphical representation ###

Each linear constraint cuts the solution space (set of feasible solutions) into two halves.

- All values on side (including the boundary) are **feasible** w.r.t. the constraint.
- All values on the other side are **infeasible**  w.r.t. the constraint.

> [!IMPORTANT]
> The graphical representation only works in the case of 2 (or 3) decision variables. Higher dimensions are difficult to imagine.

---

<span class="fragment"></span>
<span class="fragment"></span>
<span class="fragment"></span>
<span class="fragment"></span>
<span class="fragment"></span>

<div data-animate data-load="02-lecture/linear_program.svg">
<!--
{
"setup": [
{"element": "#x_geq_0","modifier": "attr", "parameters": [ { "class": "fragment", "data-fragment-index": "0" } ] },
{"element": "#y_geq_0","modifier": "attr","parameters": [ { "class": "fragment", "data-fragment-index": "1" } ] },
{"element": "#x_leq_4","modifier": "attr","parameters": [ { "class": "fragment", "data-fragment-index": "2" } ] },
{"element": "#y_leq_6","modifier": "attr","parameters": [ { "class": "fragment", "data-fragment-index": "3" } ] },
{"element": "#sum_3x_2y_leq_18","modifier": "attr","parameters": [ { "class": "fragment", "data-fragment-index": "4" } ] }
]
}
-->
</div>

---

#### Objective function ####

For any objective function, we can visualise the set of values with the same objective function value.

> [!TIP]
> For any objective function value, e.g., $f(x,y) = 15$, we can solve $f(x,y) = 3x + 5y$, e.g. by setting $(x,y)=(0,3)$ or $(x,y)=(5,0)$. All points on the line between these points have the same objective function value.

---

#### Example ####

<div data-animate data-load="02-lecture/linear_program.svg">
<!--
{
"setup": [
{
"element": "text:not([id])",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"modifier": "path",
"parameters": [ { "id": "objective", "d": "M 0,60 L 800,540",  "stroke": "firebrick", "stroke-width": 5 } ]
},
{
"modifier": "text",
"parameters": [ "3x+5y = 15", { "id": "sum_3x_5y_is_15", "opacity": "1", "x": "20", "y": "575", "font-size": "50", "font-family": "Times New Roman", "font-style": "italic", "fill": "firebrick" } ]
},
{
"modifier": "path",
"parameters": [ { "id": "objective2", "d": "M 0,10 L 800,490",  "stroke": "purple", "stroke-width": 5 } ]
},
{
"modifier": "text",
"parameters": [ "3x+5y = 20", { "id": "sum_3x_5y_is_20", "opacity": "1", "x": "20", "y": "525", "font-size": "50", "font-family": "Times New Roman", "font-style": "italic", "fill": "purple" } ]
},
{"element": "#objective2","modifier": "attr", "parameters": [ { "class": "fragment", "data-fragment-index": "0" } ] },
{"element": "#sum_3x_5y_is_20","modifier": "attr", "parameters": [ { "class": "fragment", "data-fragment-index": "0" } ] }
]
}
-->
</div>

- All points on the red line have an objective value of 15
- All points on the purple line have an objective value of 20 <!-- .element class="fragment" -->


---

#### Graphical solution method ####

We can find the optimal solution of a linear program by shifting the line representing solutions with the same objective function value, until it just touches the solution space.

---

<span class="fragment"></span>
<span class="fragment"></span>
<span class="fragment"></span>
<span class="fragment"></span>

<div data-animate data-load="02-lecture/linear_program.svg">
<!--
{
"setup": [
{
"element": "text:not([id])",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"modifier": "path",
"parameters": [ { "id": "objective", "d": "M 0,60 L 800,540",  "stroke": "firebrick", "stroke-width": 5 } ]
},
{
"modifier": "text",
"parameters": [ "3x+5y = 15", { "id": "sum_3x_5y_is_15", "opacity": "1", "x": "20", "y": "575", "font-size": "50", "font-family": "Times New Roman", "font-style": "italic", "fill": "firebrick" } ]
},
{
"modifier": "text",
"parameters": [ "3x+5y = 0", { "id": "sum_3x_5y_is_0", "opacity": "0", "x": "20", "y": "575", "font-size": "50", "font-family": "Times New Roman", "font-style": "italic", "fill": "firebrick" } ]
},
{
"modifier": "text",
"parameters": [ "3x+5y = 40", { "id": "sum_3x_5y_is_40", "opacity": "0", "x": "20", "y": "575", "font-size": "50", "font-family": "Times New Roman", "font-style": "italic", "fill": "firebrick" } ]
},
{
"modifier": "text",
"parameters": [ "3x+5y = 36", { "id": "sum_3x_5y_is_36", "opacity": "0", "x": "20", "y": "575", "font-size": "50", "font-family": "Times New Roman", "font-style": "italic", "fill": "firebrick" } ]
},
{
"modifier": "circle",
"parameters": [ { "id": "solution", "opacity": "0", "cx": 500, "cy": 150, "r": 10, "fill": "firebrick"} ]
}],
"animation": [
[],
[
{
"element": "#sum_3x_5y_is_15",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"element": "#objective",
"modifier": "attr",
"duration": 1500,
"parameters": [ { "d": "M 0,210 L 800,690" } ]
},
{
"element": "#sum_3x_5y_is_0",
"modifier": "opacity",
"parameters": [ 1 ]
}
],
[{
"element": "#sum_3x_5y_is_0",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"element": "#objective",
"modifier": "attr",
"duration": 4000,
"parameters": [ { "d": "M 0,-190 L 800,290" } ]
},
{
"element": "#sum_3x_5y_is_40",
"modifier": "opacity",
"parameters": [ 1 ]
}
],
[{
"element": "#sum_3x_5y_is_40",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"element": "#objective",
"modifier": "attr",
"duration": 400,
"parameters": [ { "d": "M 0,-150 L 800,330" } ]
},
{
"element": "#sum_3x_5y_is_36",
"modifier": "opacity",
"parameters": [ 1 ]
}
],
[{
"element": "#solution",
"modifier": "opacity",
"parameters": [ 1 ]
}]
]
}
-->
</div>

===

### Corner point solutions ###

The optimal solution of a linear program is always at a **corner point** of the solution space
(if an optimal solution exists).

> [!NOTE]
> This is also the case in higher dimensions.

---

#### Multiple optimal solutions ####

In some cases a linear program has multiple optimal solutions.<br><br>

When? <!-- .element: class="fragment" -->

---

<div data-animate data-load="02-lecture/linear_program.svg">
<!--
{
"setup": [
{
"element": "text:not([id])",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"modifier": "path",
"parameters": [ { "id": "objective", "d": "M 0,-150 L 800,330", "stroke": "firebrick", "stroke-width": 5 } ]
},
{
"modifier": "circle",
"parameters": [ { "id": "solution", "opacity": "1", "cx": 500, "cy": 150, "r": 10, "fill": "firebrick"} ]
},
{
"modifier": "circle",
"parameters": [ { "id": "solution2", "opacity": "0", "cx": 600, "cy": 210, "r": 10, "fill": "firebrick"} ]
}],
"animation": [
[
{
"element": "#solution",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"element": "#sum_3x_2y_leq_18 > #boundary",
"modifier": "attr",
"duration": 2000,
"delay": 400,
"when": "now",
"parameters": [ { "d": "M 200,-30 L 800,330" } ]
},
{
"element": "#sum_3x_2y_leq_18 > #infeasible",
"modifier": "attr",
"duration": 2000,
"delay": 400,
"when": "now",
"parameters": [ { "d": "M 200,-30 L 800,0 L 800,330" } ]
},
{
"element": "#solution",
"modifier": "opacity",
"delay": 2400,
"when": "now",
"parameters": [ 1 ]
},
{
"element": "#solution2",
"modifier": "opacity",
"delay": 2400,
"when": "now",
"parameters": [ 1 ]
}
]
]
}
-->
</div>

---

A LP has multiple optimal solutions if **at least two corner points** have the same objective function value.


===

### Simplex algorithm ###

---

The simplex algorithm is one of the essential methods for solving linear programs.

---

The simplex algorithm exploits the fact that an optimal solution can always be found at a corner point of the solution space.

---

It starts with a feasible corner point and iteratively moves to a neighbouring feasible corner point until no further improvement is possible.


---

    <span class="fragment"></span>
    <span class="fragment"></span>
    <span class="fragment"></span>
    <span class="fragment"></span>
    <span class="fragment"></span>
    <span class="fragment"></span>
    <span class="fragment"></span>
    <span class="fragment"></span>

<div data-animate data-load="02-lecture/linear_program.svg">
<!--
{
"setup": [
{
"element": "text:not([id])",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"modifier": "group",
"parameters": [ { "id": "directions1", "opacity": "0" } ]
},
{
"element": "#directions1",
"modifier": "path",
"parameters": [ { "d": "M 400,450 L 400,350", "stroke": "black", "stroke-width": 5} ]
},
{
"element": "#directions1",
"modifier": "path",
"parameters": [ { "d": "M 400,350 L 410,370 L 390,370 L 400,350", "fill": "black"} ]
},
{
"element": "#directions1",
"modifier": "path",
"parameters": [ { "d": "M 400,450 L 500,450", "stroke": "black", "stroke-width": 5} ]
},
{
"element": "#directions1",
"modifier": "path",
"parameters": [ { "d": "M 500,450 L 480,440 L 480,460 L 500,450", "fill": "black"} ]
},
{
"modifier": "group",
"parameters": [ { "id": "directions2", "opacity": "0" } ]
},
{
"element": "#directions2",
"modifier": "path",
"parameters": [ { "d": "M 400,150 L 400,250", "stroke": "black", "stroke-width": 5} ]
},
{
"element": "#directions2",
"modifier": "path",
"parameters": [ { "d": "M 400,250 L 410,230 L 390,230 L 400,250", "fill": "black"} ]
},
{
"element": "#directions2",
"modifier": "path",
"parameters": [ { "d": "M 400,150 L 500,150", "stroke": "black", "stroke-width": 5} ]
},
{
"element": "#directions2",
"modifier": "path",
"parameters": [ { "d": "M 500,150 L 480,140 L 480,160 L 500,150", "fill": "black"} ]
},
{
"modifier": "group",
"parameters": [ { "id": "directions3", "opacity": "0" } ]
},
{
"element": "#directions3",
"modifier": "path",
"parameters": [ { "d": "M 500,150 L 400,150", "stroke": "black", "stroke-width": 5} ]
},
{
"element": "#directions3",
"modifier": "path",
"parameters": [ { "d": "M 400,150 L 420,160 L 420,140 L 400,150", "fill": "black"} ]
},
{
"element": "#directions3",
"modifier": "path",
"parameters": [ { "d": "M 500,150 L 500,250", "transform": "rotate(326 500 150)", "stroke": "black", "stroke-width": 5} ]
},
{
"element": "#directions3",
"modifier": "path",
"parameters": [ { "d": "M 500,250 L 490,230 L 510,230 L 500,250", "transform": "rotate(326 500 150)", "fill": "black"} ]
},
{
"modifier": "group",
"parameters": [ { "id": "current" } ]
},
{
"element": "#current",
"modifier": "group",
"parameters": [ { "id": "focus" } ]
},
{
"element": "#focus",
"modifier": "circle",
"parameters": [ { "id": "shadow", "opacity": "0.7", "cx": 400, "cy": 450, "r": 500, "fill": "none", "stroke": "black", "stroke-width": 800} ]
},
{
"element": "#focus",
"modifier": "circle",
"parameters": [ { "id": "solution", "opacity": "1", "cx": 400, "cy": 450, "r": 10, "fill": "firebrick"} ]
},
{
"element": "#current",
"modifier": "line",
"parameters": [ { "id": "objective", "x1": 0, "y1": 210, "x2": 800, "y2": 690, "stroke": "firebrick", "stroke-width": 5 } ]
}
],
"animation": [
[],
[
{
"element": "#directions1",
"modifier": "opacity",
"duration": 1000,
"parameters": [ 1 ]
}
],[
{
"element": "#objective",
"modifier": "dy",
"duration": 1000,
"parameters": [ -100 ]
}
],[
{
"element": "#directions1",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"element": "#focus",
"modifier": "dy",
"duration": 1000,
"parameters": [ -100 ]
},
{
"element": "#current",
"modifier": "dy",
"duration": 2000,
"parameters": [ -200 ]
}
],[
{
"element": "#directions2",
"modifier": "opacity",
"duration": 1000,
"parameters": [ 1 ]
}
],[
{
"element": "#objective",
"modifier": "dx",
"duration": 1000,
"parameters": [ 100 ]
}
],[
{
"element": "#directions2",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"element": "#focus",
"modifier": "dx",
"duration": 1000,
"parameters": [ 100 ]
}
],[
{
"element": "#directions3",
"modifier": "opacity",
"duration": 1000,
"parameters": [ 1 ]
}
],[
{
"element": "#directions3",
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"element": "#shadow",
"modifier": "opacity",
"duration": 2000,
"parameters": [ 0 ]
}
]
]
}
-->
</div>


---

### A 3-dimensional example ###

![Exmaple](02-lecture/3d-simplex.svg)

---

The simplex algorithm can quickly solve linear programs with many thousands of variables and constraints.

---

### Implementations of the simplex algorithm ###

Various implementation of the simplex algorithm are readily available.

Therefore, our focus is on modelling linear programs and not on knowing the solution algorithms.

===


### Example: Wyndor Glass Co ###

<div class="twocolumn" style="font-size=16px;">
<div>
The WYNDOR GLASS CO. produces high-quality glass products, including windows and
glass doors. It has three plants. Aluminum frames and hardware are made in Plant 1, wood
frames are made in Plant 2, and Plant 3 produces the glass and assembles the products.
Because of declining earnings, top management has decided to revamp the company’s
product line. Unprofitable products are being discontinued, releasing production capacity
to launch two new products having large sales potential:
Product 1: An 8-foot glass door with aluminum framing
Product 2: A 4  6 foot double-hung wood-framed window
Product 1 requires some of the production capacity in Plants 1 and 3, but none in Plant 2.
Product 2 needs only Plants 2 and 3. The marketing division has concluded that the com-
pany could sell as much of either product as could be produced by these plants. However,
because both products would be competing for the same production capacity in Plant 3, it
is not clear which mix of the two products would be most profitable. Therefore, an OR
team has been formed to study this question.
The OR team began by having discussions with upper management to identify man-
agement’s objectives for the study. These discussions led to developing the following definition of the problem:
</div>
<div>
...
</div>
</div>

---

The Wyndor Glass Co produces high-quality glass products and is about to launch two new products:

- Product 1: 8-foot glass door with aluminum framing
- Product 2: 4 x 6 foot double-hung wood-framed window

---

Wyndor Glass Co wants to determine how much to produce of each product to maximise profits.

---

To answer these questions we need information on

- the expected revenue for each unit produced
- the constraints on production

---

The expected profit is

- 3000 € per batch of product 1
- 5000 € per batch of product 2

---


Wyndor Glass Co has three plants in which different production processes can be performed.

- Aluminum frames are made in plant 1
- Wood frames are made in plant 2
- Glass is produced in plant 3
- Assembly is done in plant 3

---

The production capacity is

- 4 person months at plant 1
- 12 person months at plant 2
- 18 person months at plant 3

---

Each batch of product 1 requires

- 1 person month at plant 1
- 3 person months at plant 3

---

Each batch of product 2 requires

- 2 person months at plant 2
- 2 person months at plant 3

---

How can we model this decision problem?

---

#### Decision variables ####

- The production quantity of product 1 $\Rightarrow x_1$ <!-- .element: class="fragment" data-fragment-index="1" -->
- The production quantity of product 2 $\Rightarrow x_2$ <!-- .element: class="fragment" data-fragment-index="1" -->

---

#### Objective function ####

maximise $3000x_1 + 5000x_2$

---

#### Constraints ####

- $x_1 \leq 4$ (capacity of plant 1) <!-- .element: class="fragment"  -->
- $2x_2 \leq 12$ (capacity of plant 2) <!-- .element: class="fragment"  -->
- $3x_1 + 2x_2 \leq 18$ (capacity of plant 3) <!-- .element: class="fragment"  -->
- $x_1 \geq 0$ and $x_2 \geq 0$ (non-negative production) <!-- .element: class="fragment"  -->

---

#### Optimisation problem ####

maximise $3000x_1 + 5000x_2$

subject to

$$x_1 \leq 4$$
$$2x_2 \leq 12$$
$$3x_1 + 2x_2 \leq 18$$
$$x_1 \geq 0, x_2 \geq 0$$

===

### Summary ###

- This session gave an introduction to linear programming.
- We learned that optimal solutions can be found at a corner point.
- We learned how to solve a linear program graphically and with the Simplex method.
