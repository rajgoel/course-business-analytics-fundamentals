# Network modelling

---

## Minimum cost network flow problem

minimise $\displaystyle\sum_{(i,j)\in A} c_{i,j} x_{i,j}$

subject to

$$b_i + \sum_{j \in N : (j,i)\in A} x_{j,i} = \sum_{j \in N : (i,j)\in A} x_{i,j} \textrm{ for all } i\in N$$

$$l_{i,j} \leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$

> [!IMPORTANT]
> The minimum cost network flow problem can only be solved if supply and demand are balanced, i.e., if $\displaystyle\sum_{i\in N} b_i = 0$.

---

## Example: a network flow model with explicit parameters

<div class="netflow">
<!--
{
"unit": 130,
"radius": 30,
"nodes": [
  {"id": "1", "x": 0, "y": 1.5, "label": "1"},
  {"id": "2", "x": 2.5, "y": 3, "label": "2"},
  {"id": "3", "x": 2.5, "y": 0, "label": "3"},
  {"id": "4", "x": 5, "y": 3, "label": "4"},
  {"id": "5", "x": 5, "y": 0, "label": "5"},
  {"id": "1_supply", "x": -0.5, "y": 1.5, "shape": "rect", "w": 1, "h": 1, "label": "$23$", "class": "text"},
  {"id": "2_supply", "x": 2.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$5$", "class": "text"},
  {"id": "3_supply", "x": 2.5, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-7$", "class": "text"},
  {"id": "4_supply", "x": 5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$-2$", "class": "text"},
  {"id": "5_supply", "x": 5, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-19$", "class": "text"}
],
"arcs": [
  {"from": "1", "to": "2", "label": "$7, [0, 30]$"},
  {"from": "1", "to": "3", "label": "$6, [0, 20]$", "swap": true},
  {"from": "2", "to": "3", "label": "$5, [0, 25]$", "swap": true},
  {"from": "2", "to": "4", "label": "$4, [0, 10]$"},
  {"from": "3", "to": "4", "label": "$2, [0, 20]$", "pos": 0.7},
  {"from": "3", "to": "5", "label": "$2, [0, 25]$", "swap": true},
  {"from": "4", "to": "5", "label": "$1, [0, 20]$"}
]
}
-->
</div>

<small>
Numbers next to the nodes indicate supply/demand values, numbers next to the arcs indicate costs, lower bound, and upper bound.
</small>

---

## Exercise: Transportation to warehouses

> A company has two factories and three warehouses. Factory 1 has a supply of 80 units, factory 2 has a supply of 130 units. The demand at warehouses A, B, and C is 60, 80, and 70. The company can ship an unlimited amount from each factory to each warehouse at the following costs per unit:
>
> | Factory | Warehouse | Costs |
> |---|---|---|
> | 1 | A | 20
> | 1 | B | 20
> | 1 | C | 30
> | 2 | A | 30
> | 2 | B | 20
> | 2 | C | 20
<!-- .element:  style="font-size:70%" -->

Model this problem as a minimum cost network flow problem.

---

### Solution: Transportation to warehouses

<div class="netflow">
<!--
{
"unit": 120,
"radius": 30,
"nodes": [
  {"id": "1", "x": 1.5, "y": 3, "label": "1"},
  {"id": "2", "x": 4.5, "y": 3, "label": "2"},
  {"id": "A", "x": 0, "y": 0, "label": "A"},
  {"id": "B", "x": 3, "y": 0, "label": "B"},
  {"id": "C", "x": 6, "y": 0, "label": "C"},
  {"id": "1_supply", "x": 1.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$80$", "class": "text"},
  {"id": "2_supply", "x": 4.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$130$", "class": "text"},
  {"id": "A_supply", "x": 0, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-60$", "class": "text"},
  {"id": "B_supply", "x": 3, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-80$", "class": "text"},
  {"id": "C_supply", "x": 6, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-70$", "class": "text"}
],
"arcs": [
  {"from": "1", "to": "A"},
  {"from": "1", "to": "B"},
  {"from": "1", "to": "C"},
  {"from": "2", "to": "A"},
  {"from": "2", "to": "B"},
  {"from": "2", "to": "C"}
]
}
-->
</div>

<small>
Numbers next to the nodes indicate supply/demand values. All arcs have a lower bound of zero and an infinite upper bound. The costs of each arc can be found in the table.
</small>

---

### Example: Unbalanced network

<div class="netflow">
<!--
{
"unit": 120,
"radius": 30,
"nodes": [
  {"id": "1", "x": 1.5, "y": 3, "label": "1"},
  {"id": "2", "x": 4.5, "y": 3, "label": "2"},
  {"id": "A", "x": 0, "y": 0, "label": "A"},
  {"id": "B", "x": 3, "y": 0, "label": "B"},
  {"id": "C", "x": 6, "y": 0, "label": "C"},
  {"id": "1_supply", "x": 1.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$80$", "class": "text"},
  {"id": "2_supply", "x": 4.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$100$", "class": "text"},
  {"id": "A_supply", "x": 0, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-60$", "class": "text"},
  {"id": "B_supply", "x": 3, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-80$", "class": "text"},
  {"id": "C_supply", "x": 6, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-70$", "class": "text"}
],
"arcs": [
  {"from": "1", "to": "A"},
  {"from": "1", "to": "B"},
  {"from": "1", "to": "C"},
  {"from": "2", "to": "A"},
  {"from": "2", "to": "B"},
  {"from": "2", "to": "C"}
]
}
-->
</div>

> [!IMPORTANT]
> As $\sum_{i\in N} b_i \neq 0$ there is **no** solution.

Can we reformulate this model so that total supply is balanced?

===

### Example: Balanced network

<div class="netflow">
<!--
{
"unit": 120,
"radius": 30,
"nodes": [
  {"id": "1", "x": 1, "y": 3, "label": "1"},
  {"id": "2", "x": 3, "y": 3, "label": "2"},
  {"id": "3", "x": 5, "y": 3, "label": "D", "class": "fade"},
  {"id": "A", "x": 0, "y": 0, "label": "A"},
  {"id": "B", "x": 3, "y": 0, "label": "B"},
  {"id": "C", "x": 6, "y": 0, "label": "C"},
  {"id": "1_supply", "x": 1, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$80$", "class": "text"},
  {"id": "2_supply", "x": 3, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$100$", "class": "text"},
  {"id": "3_supply", "x": 5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$30$", "class": "text fade"},
  {"id": "A_supply", "x": 0, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-60$", "class": "text"},
  {"id": "B_supply", "x": 3, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-80$", "class": "text"},
  {"id": "C_supply", "x": 6, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-70$", "class": "text"}
],
"arcs": [
  {"from": "1", "to": "A"},
  {"from": "1", "to": "B"},
  {"from": "1", "to": "C"},
  {"from": "2", "to": "A"},
  {"from": "2", "to": "B"},
  {"from": "2", "to": "C"},
  {"from": "3", "to": "A", "class": "fade"},
  {"from": "3", "to": "B", "class": "fade"},
  {"from": "3", "to": "C", "class": "fade"}
]
}
-->
</div>

For this network with $\sum_{i\in N} b_i = 0$ there is a solution.

> [!TIP]
> In general, we can add a **dummy supply or demand node** to **compensate for  excess demand or supply**. This node is typically connected to each demand or supply node.

===

## Node splitting

---

## Exercise: Transportation to warehouses with distribution centre

> A company has two factories and three warehouses. Factory 1 has a supply of 80 units, factory 2 has a supply of 130 units. The demand at warehouses A, B, and C is 60, 80, and 70. The company can ship an unlimited amount from each factory to each warehouse at the following costs per unit:
>
> | Factory | Warehouse | Costs |
> |---|---|---|
> | 1 | A | 20
> | 1 | B | 20
> | 1 | C | 30
> | 2 | A | 30
> | 2 | B | 20
> | 2 | C | 20
>
> Alternatively the company can ship units at a cost of 5 from either factory to a distribution centre from which they will be sent to the warehouses at no extra costs.
<!-- .element:  style="font-size:70%" -->

Model this problem as a minimum cost network flow problem.

---

### Solution: Transportation to warehouses with distribution centre

<div class="netflow">
<!--
{
"unit": 120,
"radius": 30,
"nodes": [
  {"id": "1", "x": 1.5, "y": 3, "label": "1"},
  {"id": "2", "x": 4.5, "y": 3, "label": "2"},
  {"id": "A", "x": 0, "y": 0, "label": "A"},
  {"id": "B", "x": 3, "y": 0, "label": "B"},
  {"id": "C", "x": 6, "y": 0, "label": "C"},
  {"id": "D", "x": 3, "y": 2.5, "label": "D"},
  {"id": "1_supply", "x": 1.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$80$", "class": "text"},
  {"id": "2_supply", "x": 4.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$130$", "class": "text"},
  {"id": "A_supply", "x": 0, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-60$", "class": "text"},
  {"id": "B_supply", "x": 3, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-80$", "class": "text"},
  {"id": "C_supply", "x": 6, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-70$", "class": "text"}
],
"arcs": [
  {"from": "1", "to": "A"},
  {"from": "1", "to": "B"},
  {"from": "1", "to": "C"},
  {"from": "2", "to": "A"},
  {"from": "2", "to": "B"},
  {"from": "2", "to": "C"},
  {"from": "1", "to": "D"},
  {"from": "2", "to": "D"},
  {"from": "D", "to": "A"},
  {"from": "D", "to": "B"},
  {"from": "D", "to": "C"}
]
}
-->
</div>

<small>
Numbers next to the nodes indicate supply/demand values. All arcs have a lower bound of zero and an infinite upper bound. The costs of direct arcs from a factory to a warehouse can be found in the table. The costs of arcs from either factory to the distribution centre are 5. The costs of arcs from the distribution centre to a warehouse are zero.   
</small>

---

### Example: Minimum cost network flow problem with capacity constraints


<div class="netflow">
<!--
{
"unit": 120,
"radius": 30,
"nodes": [
  {"id": "1", "x": 1.5, "y": 3, "label": "1"},
  {"id": "2", "x": 4.5, "y": 3, "label": "2"},
  {"id": "A", "x": 0, "y": 0, "label": "A"},
  {"id": "B", "x": 3, "y": 0, "label": "B"},
  {"id": "C", "x": 6, "y": 0, "label": "C"},
  {"id": "D", "x": 3, "y": 2.5, "label": "D", "class": "accent"},
  {"id": "1_supply", "x": 1.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$80$", "class": "text"},
  {"id": "2_supply", "x": 4.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$130$", "class": "text"},
  {"id": "A_supply", "x": 0, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-60$", "class": "text"},
  {"id": "B_supply", "x": 3, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-80$", "class": "text"},
  {"id": "C_supply", "x": 6, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-70$", "class": "text"}
],
"arcs": [
  {"from": "1", "to": "A"},
  {"from": "1", "to": "B"},
  {"from": "1", "to": "C"},
  {"from": "2", "to": "A"},
  {"from": "2", "to": "B"},
  {"from": "2", "to": "C"},
  {"from": "1", "to": "D"},
  {"from": "2", "to": "D"},
  {"from": "D", "to": "A"},
  {"from": "D", "to": "B"},
  {"from": "D", "to": "C"}
]
}
-->
</div>

Assume the total flow through node D is restricted due to capacity constraints.

---

### Linear program with capacity constraints

minimise $$\displaystyle\sum_{(i,j)\in A} c_{i,j} x_{i,j}$$

subject to

$$b_i + \sum_{j \in N : (j,i)\in A} x_{j,i} = \sum_{j \in N : (i,j)\in A} x_{i,j} \textrm{ for all } i\in N$$

$$\class{highlight}{\displaystyle\sum_{j \in N : (j,i)\in A} x_{j,i} \leq q_i \textrm{ for all } i\in N}$$

$$0 \leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$

> [!CAUTION]
> This problem is not a standard minimum cost network flow problem.

---

We can formulate a standard minimum cost network flow problem by

- introducing a duplicate node $i'$ for every node $i$ with capacity constraints,
- introducing an arc $(i,i')$ with $u_{i,i'} = q_i$, and
- replacing each arc $(i,j)$ by the arc $(i',j)$.

---

### Example: Minimum cost network flow problem after node splitting

<div class="netflow">
<!--
{
"unit": 120,
"radius": 30,
"nodes": [
  {"id": "1", "x": 1.5, "y": 3, "label": "1"},
  {"id": "2", "x": 4.5, "y": 3, "label": "2"},
  {"id": "A", "x": 0, "y": 0, "label": "A"},
  {"id": "B", "x": 3, "y": 0, "label": "B"},
  {"id": "C", "x": 6, "y": 0, "label": "C"},
  {"id": "D", "x": 3, "y": 2.5, "label": "D", "class": "accent"},
  {"id": "E", "x": 3, "y": 1, "label": "E", "class": "accent"},
  {"id": "1_supply", "x": 1.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$100$", "class": "text"},
  {"id": "2_supply", "x": 4.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$100$", "class": "text"},
  {"id": "A_supply", "x": 0, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-70$", "class": "text"},
  {"id": "B_supply", "x": 3, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-120$", "class": "text"},
  {"id": "C_supply", "x": 6, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$-10$", "class": "text"}
],
"arcs": [
  {"from": "1", "to": "A"},
  {"from": "1", "to": "B"},
  {"from": "1", "to": "C"},
  {"from": "2", "to": "A"},
  {"from": "2", "to": "B"},
  {"from": "2", "to": "C"},
  {"from": "1", "to": "D"},
  {"from": "2", "to": "D"},
  {"from": "D", "to": "E", "class": "accent", "label": "$[0,q_{D,E}]$"},
  {"from": "E", "to": "A"},
  {"from": "E", "to": "B"},
  {"from": "E", "to": "C"}
]
}
-->
</div>

Now the capacity constraint is on the arc and not on the node.

===

## Time-expanded networks

---

In transportation networks we usually have to consider the time required to traverse an arc.

---

### Networks with traversal times


<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 100,
"radius": 20,
"nodes": [
  {"id": "n11", "x": 2, "y": 4},
  {"id": "n21", "x": 4, "y": 4},
  {"id": "n31", "x": 6, "y": 4},
  {"id": "n41", "x": 8, "y": 4}
],
"arcs": [
  {"from": "n11", "to": "n21", "label": "1 day"},
  {"from": "n21", "to": "n31", "label": "1 day"},
  {"from": "n31", "to": "n41", "label": "1 day"}
]
}
-->
</div>

To model a network optimisation problem with traversal times as a minimum cost network flow problem, we have to find a way to consider the time required to move from one location to another.


---

### Time expansion

In time expanded networks we create multiple copies of nodes, where each copy refers to a location at a particular point in time.

These copies are then connected by arcs in such a way that the time required to go from one node to another is appropriately considered. <!-- .element class="fragment" -->

---

### Time-space network

<!-- .slide: data-transition="slide-in fade-out" -->

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 110,
"radius": 20,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4, "class": "fade"},
  {"id": "n12", "x": 2, "y": 3, "class": "fade"},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3, "class": "fade"},
  {"id": "n23", "x": 4, "y": 2, "class": "fade"},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2, "class": "fade"},
  {"id": "n34", "x": 6, "y": 1, "class": "fade"},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4, "class": "fade"},
  {"id": "n42", "x": 8, "y": 3, "class": "fade"},
  {"id": "n43", "x": 8, "y": 2, "class": "fade"},
  {"id": "n44", "x": 8, "y": 1, "class": "fade"},
  {"id": "n45", "x": 8, "y": 0, "class": "fade"}
],
"arcs": [
]
}
-->
</div>

---

### Arcs for trips starting on day 1

<!-- .slide: data-transition="fade" -->

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 110,
"radius": 20,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4},
  {"id": "n12", "x": 2, "y": 3, "class": "fade"},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3},
  {"id": "n23", "x": 4, "y": 2, "class": "fade"},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2},
  {"id": "n34", "x": 6, "y": 1, "class": "fade"},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4, "class": "fade"},
  {"id": "n42", "x": 8, "y": 3, "class": "fade"},
  {"id": "n43", "x": 8, "y": 2, "class": "fade"},
  {"id": "n44", "x": 8, "y": 1},
  {"id": "n45", "x": 8, "y": 0, "class": "fade"}
],
"arcs": [
  {"from": "n11", "to": "n22", "label": "1 day"},
  {"from": "n22", "to": "n33", "label": "1 day"},
  {"from": "n33", "to": "n44", "label": "1 day"}
]
}
-->
</div>


---

### Arcs for trips starting on day 1 or 2

<!-- .slide: data-transition="fade" -->

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 110,
"radius": 20,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4},
  {"id": "n12", "x": 2, "y": 3},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3},
  {"id": "n23", "x": 4, "y": 2},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2},
  {"id": "n34", "x": 6, "y": 1},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4, "class": "fade"},
  {"id": "n42", "x": 8, "y": 3, "class": "fade"},
  {"id": "n43", "x": 8, "y": 2, "class": "fade"},
  {"id": "n44", "x": 8, "y": 1},
  {"id": "n45", "x": 8, "y": 0}
],
"arcs": [
  {"from": "n11", "to": "n22", "label": "1 day"},
  {"from": "n22", "to": "n33", "label": "1 day"},
  {"from": "n33", "to": "n44", "label": "1 day"},
  {"from": "n12", "to": "n23", "label": "1 day"},
  {"from": "n23", "to": "n34", "label": "1 day"},
  {"from": "n34", "to": "n45", "label": "1 day"}
]
}
-->
</div>

---

### Arcs for trips starting on any day

<!-- .slide: data-transition="fade" -->

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 110,
"radius": 20,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4},
  {"id": "n12", "x": 2, "y": 3},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3},
  {"id": "n23", "x": 4, "y": 2},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2},
  {"id": "n34", "x": 6, "y": 1},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4, "class": "fade"},
  {"id": "n42", "x": 8, "y": 3, "class": "fade"},
  {"id": "n43", "x": 8, "y": 2, "class": "fade"},
  {"id": "n44", "x": 8, "y": 1},
  {"id": "n45", "x": 8, "y": 0}
],
"arcs": [
  {"from": "n11", "to": "n22"},
  {"from": "n22", "to": "n33"},
  {"from": "n33", "to": "n44"},
  {"from": "n12", "to": "n23"},
  {"from": "n23", "to": "n34"},
  {"from": "n34", "to": "n45"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"}
]
}
-->
</div>


---

### Time travel arcs

<!-- .slide: data-transition="fade" -->

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 110,
"radius": 20,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4},
  {"id": "n12", "x": 2, "y": 3},
  {"id": "n13", "x": 2, "y": 2},
  {"id": "n14", "x": 2, "y": 1},
  {"id": "n15", "x": 2, "y": 0},
  {"id": "n21", "x": 4, "y": 4},
  {"id": "n22", "x": 4, "y": 3},
  {"id": "n23", "x": 4, "y": 2},
  {"id": "n24", "x": 4, "y": 1},
  {"id": "n25", "x": 4, "y": 0},
  {"id": "n31", "x": 6, "y": 4},
  {"id": "n32", "x": 6, "y": 3},
  {"id": "n33", "x": 6, "y": 2},
  {"id": "n34", "x": 6, "y": 1},
  {"id": "n35", "x": 6, "y": 0},
  {"id": "n41", "x": 8, "y": 4},
  {"id": "n42", "x": 8, "y": 3},
  {"id": "n43", "x": 8, "y": 2},
  {"id": "n44", "x": 8, "y": 1},
  {"id": "n45", "x": 8, "y": 0}
],
"arcs": [
  {"from": "n11", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n44", "class": "fade"},
  {"from": "n12", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n45", "class": "fade"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"},
  {"from": "n11", "to": "n12"},
  {"from": "n12", "to": "n13"},
  {"from": "n13", "to": "n14"},
  {"from": "n14", "to": "n15"},
  {"from": "n21", "to": "n22"},
  {"from": "n22", "to": "n23"},
  {"from": "n23", "to": "n24"},
  {"from": "n24", "to": "n25"},
  {"from": "n31", "to": "n32"},
  {"from": "n32", "to": "n33"},
  {"from": "n33", "to": "n34"},
  {"from": "n34", "to": "n35"},
  {"from": "n41", "to": "n42"},
  {"from": "n42", "to": "n43"},
  {"from": "n43", "to": "n44"},
  {"from": "n44", "to": "n45"}
]
}
-->
</div>


---

### Appropriate parameters must be given for all nodes and arcs

<!-- .slide: data-transition="fade-in slide-out" -->

<div class="netflow" style="--nf-arc-font: 0.45em; --nf-node-font: 0.65em;">
<!--
{
"unit": 110,
"radius": 20,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4},
  {"id": "n12", "x": 2, "y": 3},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3},
  {"id": "n23", "x": 4, "y": 2},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2},
  {"id": "n34", "x": 6, "y": 1},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4, "class": "fade"},
  {"id": "n42", "x": 8, "y": 3, "class": "fade"},
  {"id": "n43", "x": 8, "y": 2, "class": "fade"},
  {"id": "n44", "x": 8, "y": 1},
  {"id": "n45", "x": 8, "y": 0},
  {"id": "n11_label", "x": 1.45, "y": 4, "shape": "rect", "w": 1, "h": 1, "label": "$70$", "class": "text"},
  {"id": "n12_label", "x": 1.45, "y": 3, "shape": "rect", "w": 1, "h": 1, "label": "$80$", "class": "text"},
  {"id": "n44_label", "x": 8.55, "y": 1, "shape": "rect", "w": 1, "h": 1, "label": "$-60$", "class": "text"},
  {"id": "n45_label", "x": 8.55, "y": 0, "shape": "rect", "w": 1, "h": 1, "label": "$-90$", "class": "text"}
],
"arcs": [
  {"from": "n11", "to": "n22", "label": "$10,[0,100]$"},
  {"from": "n22", "to": "n33", "label": "$50,[0,100]$"},
  {"from": "n33", "to": "n44", "label": "$10,[0,100]$"},
  {"from": "n12", "to": "n23", "label": "$10,[0,100]$"},
  {"from": "n23", "to": "n34", "label": "$50,[0,100]$"},
  {"from": "n34", "to": "n45", "label": "$10,[0,100]$"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"},
  {"from": "n11", "to": "n12", "label": "$0,[0,\\infty]$", "pos": 0.6, "swap": true},
  {"from": "n12", "to": "n13", "class": "fade"},
  {"from": "n13", "to": "n14", "class": "fade"},
  {"from": "n14", "to": "n15", "class": "fade"},
  {"from": "n21", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n23", "label": "$0,[0,\\infty]$", "pos": 0.6},
  {"from": "n23", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n25", "class": "fade"},
  {"from": "n31", "to": "n32", "class": "fade"},
  {"from": "n32", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n34", "label": "$0,[0,\\infty]$", "pos": 0.6},
  {"from": "n34", "to": "n35", "class": "fade"},
  {"from": "n41", "to": "n42", "class": "fade"},
  {"from": "n42", "to": "n43", "class": "fade"},
  {"from": "n43", "to": "n44", "class": "fade"},
  {"from": "n44", "to": "n45", "label": "$0,[0,\\infty]$", "pos": 0.6}
]
}
-->
</div>
<small>
Numbers next to the nodes indicate supply/demand values. Nodes without number have 0 supply/demand. Numbers next to the arcs indicate costs, lower bound, and upper bound.
</small>

---

### Exercise

Suppose we can use a direct transport mode that can be used to ship an unlimited amount of items from the origin to the destination within 2 days and at a cost of 100 per item.  

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 90,
"radius": 17,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4, "class": "fade"},
  {"id": "n12", "x": 2, "y": 3, "class": "fade"},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3, "class": "fade"},
  {"id": "n23", "x": 4, "y": 2, "class": "fade"},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2, "class": "fade"},
  {"id": "n34", "x": 6, "y": 1, "class": "fade"},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4, "class": "fade"},
  {"id": "n42", "x": 8, "y": 3, "class": "fade"},
  {"id": "n43", "x": 8, "y": 2, "class": "fade"},
  {"id": "n44", "x": 8, "y": 1, "class": "fade"},
  {"id": "n45", "x": 8, "y": 0, "class": "fade"}
],
"arcs": [
  {"from": "n11", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n44", "class": "fade"},
  {"from": "n12", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n45", "class": "fade"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"},
  {"from": "n11", "to": "n12", "class": "fade"},
  {"from": "n12", "to": "n13", "class": "fade"},
  {"from": "n13", "to": "n14", "class": "fade"},
  {"from": "n14", "to": "n15", "class": "fade"},
  {"from": "n21", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n25", "class": "fade"},
  {"from": "n31", "to": "n32", "class": "fade"},
  {"from": "n32", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n35", "class": "fade"},
  {"from": "n41", "to": "n42", "class": "fade"},
  {"from": "n42", "to": "n43", "class": "fade"},
  {"from": "n43", "to": "n44", "class": "fade"},
  {"from": "n44", "to": "n45", "class": "fade"}
]
}
-->
</div>

How do you include this additional transport option?

---

### Solution

Suppose we can use a direct transport mode that can be used to ship an unlimited amount of items from the origin to the destination within 2 days and at a cost of 100 per item.

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 90,
"radius": 17,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4, "class": "fade"},
  {"id": "n12", "x": 2, "y": 3, "class": "fade"},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3, "class": "fade"},
  {"id": "n23", "x": 4, "y": 2, "class": "fade"},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2, "class": "fade"},
  {"id": "n34", "x": 6, "y": 1, "class": "fade"},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4, "class": "fade"},
  {"id": "n42", "x": 8, "y": 3, "class": "fade"},
  {"id": "n43", "x": 8, "y": 2, "class": "fade"},
  {"id": "n44", "x": 8, "y": 1, "class": "fade"},
  {"id": "n45", "x": 8, "y": 0, "class": "fade"}
],
"arcs": [
  {"from": "n11", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n44", "class": "fade"},
  {"from": "n12", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n45", "class": "fade"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"},
  {"from": "n11", "to": "n12", "class": "fade"},
  {"from": "n12", "to": "n13", "class": "fade"},
  {"from": "n13", "to": "n14", "class": "fade"},
  {"from": "n14", "to": "n15", "class": "fade"},
  {"from": "n21", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n25", "class": "fade"},
  {"from": "n31", "to": "n32", "class": "fade"},
  {"from": "n32", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n35", "class": "fade"},
  {"from": "n41", "to": "n42", "class": "fade"},
  {"from": "n42", "to": "n43", "class": "fade"},
  {"from": "n43", "to": "n44", "class": "fade"},
  {"from": "n44", "to": "n45", "class": "fade"},
  {"from": "n11", "to": "n43", "label": "$100,[0,\\infty]$"},
  {"from": "n12", "to": "n44", "label": "$100,[0,\\infty]$"},
  {"from": "n13", "to": "n45", "label": "$100,[0,\\infty]$"}
]
}
-->
</div>


===

## Modelling tricks

---

### Upper bounds on supply and demand

Suppose we have upper bounds on supply and demand as shown below.

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 90,
"radius": 17,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4, "class": "fade"},
  {"id": "n12", "x": 2, "y": 3, "class": "fade"},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3, "class": "fade"},
  {"id": "n23", "x": 4, "y": 2, "class": "fade"},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2, "class": "fade"},
  {"id": "n34", "x": 6, "y": 1, "class": "fade"},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4, "class": "fade"},
  {"id": "n42", "x": 8, "y": 3, "class": "fade"},
  {"id": "n43", "x": 8, "y": 2, "class": "fade"},
  {"id": "n44", "x": 8, "y": 1, "class": "fade"},
  {"id": "n45", "x": 8, "y": 0, "class": "fade"},
  {"id": "n11_label", "x": 1.3, "y": 4, "shape": "rect", "w": 1, "h": 1, "label": "$\\leq 70$", "class": "text accent"},
  {"id": "n12_label", "x": 1.3, "y": 3, "shape": "rect", "w": 1, "h": 1, "label": "$\\leq 80$", "class": "text accent"},
  {"id": "n13_label", "x": 1.3, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "$\\leq 60$", "class": "text accent"},
  {"id": "n14_label", "x": 1.3, "y": 1, "shape": "rect", "w": 1, "h": 1, "label": "$\\leq 90$", "class": "text accent"},
  {"id": "n15_label", "x": 1.3, "y": 0, "shape": "rect", "w": 1, "h": 1, "label": "$\\leq 50$", "class": "text accent"},
  {"id": "n41_label", "x": 8.7, "y": 4, "shape": "rect", "w": 1, "h": 1, "label": "$\\leq 50$", "class": "text accent"},
  {"id": "n42_label", "x": 8.7, "y": 3, "shape": "rect", "w": 1, "h": 1, "label": "$\\leq 60$", "class": "text accent"},
  {"id": "n43_label", "x": 8.7, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "$\\leq 90$", "class": "text accent"},
  {"id": "n44_label", "x": 8.7, "y": 1, "shape": "rect", "w": 1, "h": 1, "label": "$\\leq 70$", "class": "text accent"},
  {"id": "n45_label", "x": 8.7, "y": 0, "shape": "rect", "w": 1, "h": 1, "label": "$\\leq 80$", "class": "text accent"}
],
"arcs": [
  {"from": "n11", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n44", "class": "fade"},
  {"from": "n12", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n45", "class": "fade"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"},
  {"from": "n11", "to": "n12", "class": "fade"},
  {"from": "n12", "to": "n13", "class": "fade"},
  {"from": "n13", "to": "n14", "class": "fade"},
  {"from": "n14", "to": "n15", "class": "fade"},
  {"from": "n21", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n25", "class": "fade"},
  {"from": "n31", "to": "n32", "class": "fade"},
  {"from": "n32", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n35", "class": "fade"},
  {"from": "n41", "to": "n42", "class": "fade"},
  {"from": "n42", "to": "n43", "class": "fade"},
  {"from": "n43", "to": "n44", "class": "fade"},
  {"from": "n44", "to": "n45", "class": "fade"}
]
}
-->
</div>

---

### Minimum-cost network flow problem with upper bounds on supply and demand

We can use dummy nodes and arcs to model the upper bounds.

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 90,
"radius": 17,
"nodes": [
  {"id": "source", "x": 0, "y": 2},
  {"id": "sink", "x": 10, "y": 2},
  {"id": "n11", "x": 2, "y": 4, "class": "fade"},
  {"id": "n12", "x": 2, "y": 3, "class": "fade"},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3, "class": "fade"},
  {"id": "n23", "x": 4, "y": 2, "class": "fade"},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2, "class": "fade"},
  {"id": "n34", "x": 6, "y": 1, "class": "fade"},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4, "class": "fade"},
  {"id": "n42", "x": 8, "y": 3, "class": "fade"},
  {"id": "n43", "x": 8, "y": 2, "class": "fade"},
  {"id": "n44", "x": 8, "y": 1, "class": "fade"},
  {"id": "n45", "x": 8, "y": 0, "class": "fade"}
],
"arcs": [
  {"from": "sink", "to": "source", "bend": 60, "looseness": 1.2, "label": "$0,[0,\\infty]$"},
  {"from": "source", "to": "n11", "label": "$[0,70]$", "pos": 0.7},
  {"from": "source", "to": "n12", "label": "$[0,80]$", "pos": 0.7},
  {"from": "source", "to": "n13", "label": "$[0,60]$", "pos": 0.7},
  {"from": "source", "to": "n14", "label": "$[0,90]$", "pos": 0.7},
  {"from": "source", "to": "n15", "label": "$[0,50]$", "pos": 0.7},
  {"from": "n41", "to": "sink", "label": "$[0,50]$", "pos": 0.3},
  {"from": "n42", "to": "sink", "label": "$[0,60]$", "pos": 0.3},
  {"from": "n43", "to": "sink", "label": "$[0,90]$", "pos": 0.3},
  {"from": "n44", "to": "sink", "label": "$[0,70]$", "pos": 0.3},
  {"from": "n45", "to": "sink", "label": "$[0,80]$", "pos": 0.3},
  {"from": "n11", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n44", "class": "fade"},
  {"from": "n12", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n45", "class": "fade"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"},
  {"from": "n11", "to": "n12", "class": "fade"},
  {"from": "n12", "to": "n13", "class": "fade"},
  {"from": "n13", "to": "n14", "class": "fade"},
  {"from": "n14", "to": "n15", "class": "fade"},
  {"from": "n21", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n25", "class": "fade"},
  {"from": "n31", "to": "n32", "class": "fade"},
  {"from": "n32", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n35", "class": "fade"},
  {"from": "n41", "to": "n42", "class": "fade"},
  {"from": "n42", "to": "n43", "class": "fade"},
  {"from": "n43", "to": "n44", "class": "fade"},
  {"from": "n44", "to": "n45", "class": "fade"}
]
}
-->
</div>

---

### Backlogging of demand

Suppose we can fulfil the demand of any period at a later point in time and have to pay a penalty of $p$ for each day of the delay.

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 90,
"radius": 17,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4, "class": "fade"},
  {"id": "n12", "x": 2, "y": 3, "class": "fade"},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3, "class": "fade"},
  {"id": "n23", "x": 4, "y": 2, "class": "fade"},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2, "class": "fade"},
  {"id": "n34", "x": 6, "y": 1, "class": "fade"},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4},
  {"id": "n42", "x": 8, "y": 3},
  {"id": "n43", "x": 8, "y": 2},
  {"id": "n44", "x": 8, "y": 1},
  {"id": "n45", "x": 8, "y": 0}
],
"arcs": [
  {"from": "n11", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n44", "class": "fade"},
  {"from": "n12", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n45", "class": "fade"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"},
  {"from": "n11", "to": "n12", "class": "fade"},
  {"from": "n12", "to": "n13", "class": "fade"},
  {"from": "n13", "to": "n14", "class": "fade"},
  {"from": "n14", "to": "n15", "class": "fade"},
  {"from": "n21", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n25", "class": "fade"},
  {"from": "n31", "to": "n32", "class": "fade"},
  {"from": "n32", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n35", "class": "fade"},
  {"from": "n41", "to": "n42", "class": "fade"},
  {"from": "n42", "to": "n43", "class": "fade"},
  {"from": "n43", "to": "n44", "class": "fade"},
  {"from": "n44", "to": "n45", "class": "fade"}
]
}
-->
</div>

---

### Minimum cost network flow problem with backlogging

We can use arcs traveling backwards in time to consider backlogging.

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 90,
"radius": 17,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4, "class": "fade"},
  {"id": "n12", "x": 2, "y": 3, "class": "fade"},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3, "class": "fade"},
  {"id": "n23", "x": 4, "y": 2, "class": "fade"},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2, "class": "fade"},
  {"id": "n34", "x": 6, "y": 1, "class": "fade"},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4},
  {"id": "n42", "x": 8, "y": 3},
  {"id": "n43", "x": 8, "y": 2},
  {"id": "n44", "x": 8, "y": 1},
  {"id": "n45", "x": 8, "y": 0}
],
"arcs": [
  {"from": "n11", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n44", "class": "fade"},
  {"from": "n12", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n45", "class": "fade"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"},
  {"from": "n11", "to": "n12", "class": "fade"},
  {"from": "n12", "to": "n13", "class": "fade"},
  {"from": "n13", "to": "n14", "class": "fade"},
  {"from": "n14", "to": "n15", "class": "fade"},
  {"from": "n21", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n25", "class": "fade"},
  {"from": "n31", "to": "n32", "class": "fade"},
  {"from": "n32", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n35", "class": "fade"},
  {"from": "n41", "to": "n42", "class": "fade"},
  {"from": "n42", "to": "n43", "class": "fade"},
  {"from": "n43", "to": "n44", "class": "fade"},
  {"from": "n44", "to": "n45", "class": "fade"},
  {"from": "n42", "to": "n41", "bend": -30, "label": "$p,[0,\\infty]$", "swap": true},
  {"from": "n43", "to": "n42", "bend": -30, "label": "$p,[0,\\infty]$", "swap": true},
  {"from": "n44", "to": "n43", "bend": -30, "label": "$p,[0,\\infty]$", "swap": true},
  {"from": "n45", "to": "n44", "bend": -30, "label": "$p,[0,\\infty]$", "swap": true}
]
}
-->
</div>


---

### Restricted backlogging of demand

Suppose we want to restrict backlogging to at most one day.

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 90,
"radius": 17,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4, "class": "fade"},
  {"id": "n12", "x": 2, "y": 3, "class": "fade"},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3, "class": "fade"},
  {"id": "n23", "x": 4, "y": 2, "class": "fade"},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2, "class": "fade"},
  {"id": "n34", "x": 6, "y": 1, "class": "fade"},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4},
  {"id": "n42", "x": 8, "y": 3},
  {"id": "n43", "x": 8, "y": 2},
  {"id": "n44", "x": 8, "y": 1},
  {"id": "n45", "x": 8, "y": 0}
],
"arcs": [
  {"from": "n11", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n44", "class": "fade"},
  {"from": "n12", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n45", "class": "fade"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"},
  {"from": "n11", "to": "n12", "class": "fade"},
  {"from": "n12", "to": "n13", "class": "fade"},
  {"from": "n13", "to": "n14", "class": "fade"},
  {"from": "n14", "to": "n15", "class": "fade"},
  {"from": "n21", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n25", "class": "fade"},
  {"from": "n31", "to": "n32", "class": "fade"},
  {"from": "n32", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n35", "class": "fade"},
  {"from": "n41", "to": "n42", "class": "fade"},
  {"from": "n42", "to": "n43", "class": "fade"},
  {"from": "n43", "to": "n44", "class": "fade"},
  {"from": "n44", "to": "n45", "class": "fade"},
  {"from": "n42", "to": "n41", "bend": -30, "label": "$p,[0,\\infty]$", "swap": true},
  {"from": "n43", "to": "n42", "bend": -30, "label": "$p,[0,\\infty]$", "swap": true},
  {"from": "n44", "to": "n43", "bend": -30, "label": "$p,[0,\\infty]$", "swap": true},
  {"from": "n45", "to": "n44", "bend": -30, "label": "$p,[0,\\infty]$", "swap": true}
]
}
-->
</div>

---

### Minimum cost network flow problem with restricted backlogging

We can split the demand nodes to consider backlogging of at most one day.

<div class="netflow" style="--nf-arc-font: 0.55em;">
<!--
{
"unit": 90,
"radius": 17,
"nodes": [
  {"id": "space", "x": 5, "y": -1, "shape": "rect", "w": 1, "h": 1, "label": "← space →", "class": "text"},
  {"id": "time", "x": 0.6, "y": 2, "shape": "rect", "w": 1, "h": 1, "label": "← time →", "class": "text-rotated"},
  {"id": "n11", "x": 2, "y": 4, "class": "fade"},
  {"id": "n12", "x": 2, "y": 3, "class": "fade"},
  {"id": "n13", "x": 2, "y": 2, "class": "fade"},
  {"id": "n14", "x": 2, "y": 1, "class": "fade"},
  {"id": "n15", "x": 2, "y": 0, "class": "fade"},
  {"id": "n21", "x": 4, "y": 4, "class": "fade"},
  {"id": "n22", "x": 4, "y": 3, "class": "fade"},
  {"id": "n23", "x": 4, "y": 2, "class": "fade"},
  {"id": "n24", "x": 4, "y": 1, "class": "fade"},
  {"id": "n25", "x": 4, "y": 0, "class": "fade"},
  {"id": "n31", "x": 6, "y": 4, "class": "fade"},
  {"id": "n32", "x": 6, "y": 3, "class": "fade"},
  {"id": "n33", "x": 6, "y": 2, "class": "fade"},
  {"id": "n34", "x": 6, "y": 1, "class": "fade"},
  {"id": "n35", "x": 6, "y": 0, "class": "fade"},
  {"id": "n41", "x": 8, "y": 4},
  {"id": "n42", "x": 8, "y": 3},
  {"id": "n43", "x": 8, "y": 2},
  {"id": "n44", "x": 8, "y": 1},
  {"id": "n45", "x": 8, "y": 0},
  {"id": "n51", "x": 9, "y": 4},
  {"id": "n52", "x": 9, "y": 3},
  {"id": "n53", "x": 9, "y": 2},
  {"id": "n54", "x": 9, "y": 1},
  {"id": "n55", "x": 9, "y": 0}
],
"arcs": [
  {"from": "n11", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n44", "class": "fade"},
  {"from": "n12", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n45", "class": "fade"},
  {"from": "n21", "to": "n32", "class": "fade"},
  {"from": "n31", "to": "n42", "class": "fade"},
  {"from": "n32", "to": "n43", "class": "fade"},
  {"from": "n13", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n35", "class": "fade"},
  {"from": "n14", "to": "n25", "class": "fade"},
  {"from": "n11", "to": "n12", "class": "fade"},
  {"from": "n12", "to": "n13", "class": "fade"},
  {"from": "n13", "to": "n14", "class": "fade"},
  {"from": "n14", "to": "n15", "class": "fade"},
  {"from": "n21", "to": "n22", "class": "fade"},
  {"from": "n22", "to": "n23", "class": "fade"},
  {"from": "n23", "to": "n24", "class": "fade"},
  {"from": "n24", "to": "n25", "class": "fade"},
  {"from": "n31", "to": "n32", "class": "fade"},
  {"from": "n32", "to": "n33", "class": "fade"},
  {"from": "n33", "to": "n34", "class": "fade"},
  {"from": "n34", "to": "n35", "class": "fade"},
  {"from": "n41", "to": "n42", "class": "fade"},
  {"from": "n42", "to": "n43", "class": "fade"},
  {"from": "n43", "to": "n44", "class": "fade"},
  {"from": "n44", "to": "n45", "class": "fade"},
  {"from": "n41", "to": "n51"},
  {"from": "n42", "to": "n52"},
  {"from": "n43", "to": "n53"},
  {"from": "n44", "to": "n54"},
  {"from": "n45", "to": "n55"},
  {"from": "n42", "to": "n51", "label": "$p,[0,\\infty]$", "swap": true},
  {"from": "n43", "to": "n52", "label": "$p,[0,\\infty]$", "swap": true},
  {"from": "n44", "to": "n53", "label": "$p,[0,\\infty]$", "swap": true},
  {"from": "n45", "to": "n54", "label": "$p,[0,\\infty]$", "swap": true}
]
}
-->
</div>


