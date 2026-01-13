# Network modelling

---

## Minimum cost network flow problem

minimise $\displaystyle\sum_{(i,j)\in A} c_{i,j} x_{i,j}$

subject to

$$\sum_{j \in N : (i,j)\in A} x_{i,j} - \sum_{j \in N : (j,i)\in A} x_{j,i} = b_i \textrm{ for all } i\in N$$

$$l_{i,j} \leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$

> [!IMPORTANT]
> The minimum cost network flow problem can only be solved if supply and demand are balanced, i.e., if $\displaystyle\sum_{i\in N} b_i = 0$.

---

Problems which can be modelled as a minimum cost network flow problem can be solved very efficiently, even for very large instances.

---

To specify a minimum cost network flow model we only have to provide the data including
- nodes
- arcs
- supply/demand values
- arc costs
- lower and upper bounds

---

If all supply/demand values and lower and upper bounds are integers, the solution will also be integer valued.

---

## Visualisation of a  minimum cost network flow problem

Modelling an optimisation problem as a minimum cost network flow problem has the additional advantage that the problem can be easily visualised.

---


<img class="stretch" src="09-lecture/mincostflowproblem.svg"></img>

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

<img class="stretch" src="09-lecture/mincostflowproblemwithouttransshipment.svg"></img>

<small>
Numbers next to the nodes indicate supply/demand values. All arcs have a lower bound of zero and an infinite upper bound. The costs of each arc can be found in the table.
</small>

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

<img class="stretch" src="09-lecture/mincostflowproblemwithtransshipment.svg"></img>

<small>
Numbers next to the nodes indicate supply/demand values. All arcs have a lower bound of zero and an infinite upper bound. The costs of direct arcs from a factory to a warehouse can be found in the table. The costs of arcs from either factory to the distribution centre are 5. The costs of arcs from the distribution centre to a warehouse are zero.   
</small>

===

### Example: Unbalanced network

> A company has two factories which can produce up to 100 units of a product each. The company wants to determine how to minimise costs for shipping 70 units to a distribution centre in the north and 120 units to a distribution center in the south.

Can we model this problem as a minimum cost network flow problem?

---

### Example: Balanced network with dummy node

<img class="stretch" src="09-lecture/unbalancedtransportationproblem.svg"></img>

<small>
Numbers next to the nodes indicate supply/demand values. Numbers next to the arcs indicate costs. All arcs have a lower bound of zero and an infinite upper bound.
</small>

---

### Dummy nodes and arcs

If the network is unbalanced, i.e., if the total supply does not match the total demand, we can always add a dummy supply or demand node to compensate for the excess demand or supply. This node is typically connected to each demand or supply node and is given a high cost value.

===

## Node splitting

---

### Example: Minimum cost network flow problem with capacity constraints


<img class="stretch" src="09-lecture/mincostflowproblemwithcapacitatednode.svg"></img>

Assume the total flow through node D is restricted due to capacity constraints.

---

### Linear program with capacity constraints

minimise $$\displaystyle\sum_{(i,j)\in A} c_{i,j} x_{i,j}$$

subject to

$$\displaystyle\sum_{j \in N : (i,j)\in A} x_{i,j} - \displaystyle\sum_{j \in N : (j,i)\in A} x_{j,i} = b_i \textrm{ for all } i\in N$$

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

<img class="stretch" src="09-lecture/mincostflowproblemwithsplitnode.svg"></img>

Now the capacity constraint is on the arc and not on the node.

===

## Time-expanded networks

---

In transportation networks we usually have to consider the time required to traverse an arc.

---

### Networks with traversal times


<div class="graph" style="height: 200px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 } }
],
"edges": [    
    { "data": { "id": "n11-n21", "source": "n11", "target": "n21", "label": "1 day" } },
    { "data": { "id": "n21-n31", "source": "n21", "target": "n31", "label": "1 day" } },
    { "data": { "id": "n31-n41", "source": "n31", "target": "n41", "label": "1 day" } }
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

<div class="graph" style="height: 600px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 } },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 } },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 } },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 } },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 } },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 } },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 } },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 } },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 } }
],
"edges": []
}
-->
</div>

---

### Arcs for trips starting on day 1

<!-- .slide: data-transition="fade" -->

<div class="graph" style="height: 600px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 }, "classes": "highlight" },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 } },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 } },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 } },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 } },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 } }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22", "label": "1 day" }, "classes": "highlight" },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33", "label": "1 day" }, "classes": "highlight" },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44", "label": "1 day" }, "classes": "highlight" }
]
}
-->
</div>


---

### Arcs for trips starting on day 1 or 2

<!-- .slide: data-transition="fade" -->

<div class="graph" style="height: 600px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 }, "classes": "highlight" },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 } },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 } },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 } },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 }, "classes": "highlight" }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22", "label": "1 day" }, "classes": "highlight" },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33", "label": "1 day" }, "classes": "highlight" },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44", "label": "1 day" }, "classes": "highlight" },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23", "label": "1 day" }, "classes": "highlight" },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34", "label": "1 day" }, "classes": "highlight" },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45", "label": "1 day" }, "classes": "highlight" }
]
}
-->
</div>

---

### Arcs for trips starting on any day

<!-- .slide: data-transition="fade" -->

<div class="graph" style="height: 600px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 }, "classes": "highlight" },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 } },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 } },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 } },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 }, "classes": "highlight" }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22" }, "classes": "highlight" },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33" }, "classes": "highlight" },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44" }, "classes": "highlight" },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23" }, "classes": "highlight" },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34" }, "classes": "highlight" },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45" }, "classes": "highlight" },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } }
]
}
-->
</div>


---

### Time travel arcs

<!-- .slide: data-transition="fade" -->

<div class="graph" style="height: 600px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 }, "classes": "highlight" },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 } },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 } },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 } },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 }, "classes": "highlight" }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22" } },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33" } },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44" } },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23" } },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34" } },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45" } },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } },
    { "data": { "id": "n11-n12", "source": "n11", "target": "n12" }, "classes": "highlight" },
    { "data": { "id": "n12-n13", "source": "n12", "target": "n13" }, "classes": "highlight" },
    { "data": { "id": "n13-n14", "source": "n13", "target": "n14" }, "classes": "highlight" },
    { "data": { "id": "n14-n15", "source": "n14", "target": "n15" }, "classes": "highlight" },
    { "data": { "id": "n21-n22", "source": "n21", "target": "n22" }, "classes": "highlight" },
    { "data": { "id": "n22-n23", "source": "n22", "target": "n23" }, "classes": "highlight" },
    { "data": { "id": "n23-n24", "source": "n23", "target": "n24" }, "classes": "highlight" },
    { "data": { "id": "n24-n25", "source": "n24", "target": "n25" }, "classes": "highlight" },
    { "data": { "id": "n31-n32", "source": "n31", "target": "n32" }, "classes": "highlight" },
    { "data": { "id": "n32-n33", "source": "n32", "target": "n33" }, "classes": "highlight" },
    { "data": { "id": "n33-n34", "source": "n33", "target": "n34" }, "classes": "highlight" },
    { "data": { "id": "n34-n35", "source": "n34", "target": "n35" }, "classes": "highlight" },
    { "data": { "id": "n41-n42", "source": "n41", "target": "n42" }, "classes": "highlight" },
    { "data": { "id": "n42-n43", "source": "n42", "target": "n43" }, "classes": "highlight" },
    { "data": { "id": "n43-n44", "source": "n43", "target": "n44" }, "classes": "highlight" },
    { "data": { "id": "n44-n45", "source": "n44", "target": "n45" }, "classes": "highlight" }
]
}
-->
</div>


---

### Appropriate parameters must be given for all nodes and arcs

<!-- .slide: data-transition="fade-in slide-out" -->

<div class="graph" style="height: 600px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11", "label": 70 }, "position": { "x": 100, "y": 0 }, "classes": "highlight", "css": { "text-halign": "left", "text-valign": "center", "text-margin-x": -5, "font-size": 10 } },
    { "data": { "id": "n12", "label": 80 }, "position": { "x": 100, "y": 50 }, "classes": "highlight", "css": { "text-halign": "left", "text-valign": "center", "text-margin-x": -5, "font-size": 10 } },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22", "label": 0 }, "position": { "x": 200, "y": 50 }, "classes": "highlight", "css": { "text-halign": "left", "text-valign": "top", "text-margin-x": 5, "font-size": 10 } },
    { "data": { "id": "n23", "label": 0 }, "position": { "x": 200, "y": 100 }, "classes": "highlight", "css": { "text-halign": "left", "text-valign": "top", "text-margin-x": 5, "font-size": 10 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33", "label": 0 }, "position": { "x": 300, "y": 100 }, "classes": "highlight", "css": { "text-halign": "left", "text-valign": "top", "text-margin-x": 5, "font-size": 10 } },
    { "data": { "id": "n34", "label": 0 }, "position": { "x": 300, "y": 150 }, "classes": "highlight", "css": { "text-halign": "left", "text-valign": "top", "text-margin-x": 5, "font-size": 10 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 } },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 } },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 } },
    { "data": { "id": "n44", "label": -60 }, "position": { "x": 400, "y": 150 }, "classes": "highlight", "css": { "text-halign": "right", "text-valign": "center", "text-margin-x": 5, "font-size": 10 } },
    { "data": { "id": "n45", "label": -90 }, "position": { "x": 400, "y": 200 }, "classes": "highlight", "css": { "text-halign": "right", "text-valign": "center", "text-margin-x": 5, "font-size": 10 } }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22", "label": "(10,0,100)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33", "label": "(50,0,100)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44", "label": "(10,0,100)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23", "label": "(10,0,100)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34", "label": "(50,0,100)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45", "label": "(10,0,100)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } },
    { "data": { "id": "n11-n12", "source": "n11", "target": "n12", "label": "(0,0,∞)" }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "left", "text-valign": "center", "text-margin-x": -18, "text-margin-y": 0} },
    { "data": { "id": "n12-n13", "source": "n12", "target": "n13" } },
    { "data": { "id": "n13-n14", "source": "n13", "target": "n14" } },
    { "data": { "id": "n14-n15", "source": "n14", "target": "n15" } },
    { "data": { "id": "n21-n22", "source": "n21", "target": "n22" } },
    { "data": { "id": "n22-n23", "source": "n22", "target": "n23", "label": "(0,0,∞)" }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0} },
    { "data": { "id": "n23-n24", "source": "n23", "target": "n24" } },
    { "data": { "id": "n24-n25", "source": "n24", "target": "n25" } },
    { "data": { "id": "n31-n32", "source": "n31", "target": "n32" } },
    { "data": { "id": "n32-n33", "source": "n32", "target": "n33" } },
    { "data": { "id": "n33-n34", "source": "n33", "target": "n34", "label": "(0,0,∞)" }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0} },
    { "data": { "id": "n34-n35", "source": "n34", "target": "n35" } },
    { "data": { "id": "n41-n42", "source": "n41", "target": "n42" } },
    { "data": { "id": "n42-n43", "source": "n42", "target": "n43" } },
    { "data": { "id": "n43-n44", "source": "n43", "target": "n44" } },
    { "data": { "id": "n44-n45", "source": "n44", "target": "n45", "label": "(0,0,∞)" }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0} }
]
}
-->
</div>
<small>
Numbers next to the nodes indicate supply/demand values. Numbers next to the arcs indicate costs, lower bound, and upper bound.
</small>

---

### Exercise

Suppose we can use a direct transport mode that can be used to ship an unlimited amount of items from the origin to the destination within 2 days and at a cost of 100 per item.  

<div class="graph" style="height: 500px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 } },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 } },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 } },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 } },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 } },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 } },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 } },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 } },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 } }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22" } },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33" } },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44" } },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23" } },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34" } },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45" } },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } },
    { "data": { "id": "n11-n12", "source": "n11", "target": "n12" } },
    { "data": { "id": "n12-n13", "source": "n12", "target": "n13" } },
    { "data": { "id": "n13-n14", "source": "n13", "target": "n14" } },
    { "data": { "id": "n14-n15", "source": "n14", "target": "n15" } },
    { "data": { "id": "n21-n22", "source": "n21", "target": "n22" } },
    { "data": { "id": "n22-n23", "source": "n22", "target": "n23" } },
    { "data": { "id": "n23-n24", "source": "n23", "target": "n24" } },
    { "data": { "id": "n24-n25", "source": "n24", "target": "n25" } },
    { "data": { "id": "n31-n32", "source": "n31", "target": "n32" } },
    { "data": { "id": "n32-n33", "source": "n32", "target": "n33" } },
    { "data": { "id": "n33-n34", "source": "n33", "target": "n34" } },
    { "data": { "id": "n34-n35", "source": "n34", "target": "n35" } },
    { "data": { "id": "n41-n42", "source": "n41", "target": "n42" } },
    { "data": { "id": "n42-n43", "source": "n42", "target": "n43" } },
    { "data": { "id": "n43-n44", "source": "n43", "target": "n44" } },
    { "data": { "id": "n44-n45", "source": "n44", "target": "n45" } }
]
}
-->
</div>

How do you include this additional transport option?

---

### Solution

Suppose we can use a direct transport mode that can be used to ship an unlimited amount of items from the origin to the destination within 2 days and at a cost of 100 per item.

<div class="graph" style="height: 500px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 } },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 } },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 } },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 } },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 } },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 } },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 } },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 } },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 } }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22" } },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33" } },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44" } },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23" } },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34" } },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45" } },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } },
    { "data": { "id": "n11-n12", "source": "n11", "target": "n12" } },
    { "data": { "id": "n12-n13", "source": "n12", "target": "n13" } },
    { "data": { "id": "n13-n14", "source": "n13", "target": "n14" } },
    { "data": { "id": "n14-n15", "source": "n14", "target": "n15" } },
    { "data": { "id": "n21-n22", "source": "n21", "target": "n22" } },
    { "data": { "id": "n22-n23", "source": "n22", "target": "n23" } },
    { "data": { "id": "n23-n24", "source": "n23", "target": "n24" } },
    { "data": { "id": "n24-n25", "source": "n24", "target": "n25" } },
    { "data": { "id": "n31-n32", "source": "n31", "target": "n32" } },
    { "data": { "id": "n32-n33", "source": "n32", "target": "n33" } },
    { "data": { "id": "n33-n34", "source": "n33", "target": "n34" } },
    { "data": { "id": "n34-n35", "source": "n34", "target": "n35" } },
    { "data": { "id": "n41-n42", "source": "n41", "target": "n42" } },
    { "data": { "id": "n42-n43", "source": "n42", "target": "n43" } },
    { "data": { "id": "n43-n44", "source": "n43", "target": "n44" } },
    { "data": { "id": "n44-n45", "source": "n44", "target": "n45" } },
    { "data": { "id": "n11-n43", "source": "n11", "target": "n43", "label": "(100,0,∞)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n12-n44", "source": "n12", "target": "n44", "label": "(100,0,∞)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n13-n45", "source": "n13", "target": "n45", "label": "(100,0,∞)" }, "classes": "highlight", "css": { "font-size": 10 } }
]
}
-->
</div>


===

## Modelling tricks

---

### Upper bounds on supply and demand

Suppose we have upper bounds on supply and demand as shown below.

<div class="graph" style="height: 500px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11", "label": "≤70" }, "position": { "x": 100, "y": 0 }, "css": { "text-halign": "left", "text-valign": "center", "text-margin-x": -5, "font-size": 10, "color": "firebrick" } },
    { "data": { "id": "n12", "label": "≤80" }, "position": { "x": 100, "y": 50 }, "css": { "text-halign": "left", "text-valign": "center", "text-margin-x": -5, "font-size": 10, "color": "firebrick" } },
    { "data": { "id": "n13", "label": "≤60" }, "position": { "x": 100, "y": 100 }, "css": { "text-halign": "left", "text-valign": "center", "text-margin-x": -5, "font-size": 10, "color": "firebrick" } },
    { "data": { "id": "n14", "label": "≤90" }, "position": { "x": 100, "y": 150 }, "css": { "text-halign": "left", "text-valign": "center", "text-margin-x": -5, "font-size": 10, "color": "firebrick" } },
    { "data": { "id": "n15", "label": "≤50" }, "position": { "x": 100, "y": 200 }, "css": { "text-halign": "left", "text-valign": "center", "text-margin-x": -5, "font-size": 10, "color": "firebrick" } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 } },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 } },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41", "label": "≤50" }, "position": { "x": 400, "y": 0 }, "css": { "text-halign": "right", "text-valign": "center", "text-margin-x": 5, "font-size": 10, "color": "firebrick" } },
    { "data": { "id": "n42", "label": "≤60" }, "position": { "x": 400, "y": 50 }, "css": { "text-halign": "right", "text-valign": "center", "text-margin-x": 5, "font-size": 10, "color": "firebrick" } },
    { "data": { "id": "n43", "label": "≤90" }, "position": { "x": 400, "y": 100 }, "css": { "text-halign": "right", "text-valign": "center", "text-margin-x": 5, "font-size": 10, "color": "firebrick" } },
    { "data": { "id": "n44", "label": "≤70" }, "position": { "x": 400, "y": 150 }, "css": { "text-halign": "right", "text-valign": "center", "text-margin-x": 5, "font-size": 10, "color": "firebrick" } },
    { "data": { "id": "n45", "label": "≤80" }, "position": { "x": 400, "y": 200 }, "css": { "text-halign": "right", "text-valign": "center", "text-margin-x": 5, "font-size": 10, "color": "firebrick" } }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22" } },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33" } },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44" } },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23" } },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34" } },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45" } },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } },
    { "data": { "id": "n11-n12", "source": "n11", "target": "n12" } },
    { "data": { "id": "n12-n13", "source": "n12", "target": "n13" } },
    { "data": { "id": "n13-n14", "source": "n13", "target": "n14" } },
    { "data": { "id": "n14-n15", "source": "n14", "target": "n15" } },
    { "data": { "id": "n21-n22", "source": "n21", "target": "n22" } },
    { "data": { "id": "n22-n23", "source": "n22", "target": "n23" } },
    { "data": { "id": "n23-n24", "source": "n23", "target": "n24" } },
    { "data": { "id": "n24-n25", "source": "n24", "target": "n25" } },
    { "data": { "id": "n31-n32", "source": "n31", "target": "n32" } },
    { "data": { "id": "n32-n33", "source": "n32", "target": "n33" } },
    { "data": { "id": "n33-n34", "source": "n33", "target": "n34" } },
    { "data": { "id": "n34-n35", "source": "n34", "target": "n35" } },
    { "data": { "id": "n41-n42", "source": "n41", "target": "n42" } },
    { "data": { "id": "n42-n43", "source": "n42", "target": "n43" } },
    { "data": { "id": "n43-n44", "source": "n43", "target": "n44" } },
    { "data": { "id": "n44-n45", "source": "n44", "target": "n45" } }
]
}
-->
</div>

---

### Time-expanded minimum cost network flow problem with upper bounds on supply and demand

We can use dummy nodes and arcs to model the upper bounds.

<div class="graph" style="height: 500px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "source" }, "position": { "x": 0, "y": 100 }, "classes": "highlight"},
    { "data": { "id": "sink" }, "position": { "x": 500, "y": 100 }, "classes": "highlight"},
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 } },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 } },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 } },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 } },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 } },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 } },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 } },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 } },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 } }
],
"edges": [    
    { "data": { "id": "sink-source", "source": "sink", "target": "source", "label": "(0,0,∞)", "curve": -400 }, "classes": "highlight", "css": { "font-size": 10} },
    { "data": { "id": "source-n11", "source": "source", "target": "n11", "label": "(•,0,70)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "source-n12", "source": "source", "target": "n12", "label": "(•,0,80)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "source-n13", "source": "source", "target": "n13", "label": "(•,0,60)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "source-n14", "source": "source", "target": "n14", "label": "(•,0,90)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "source-n15", "source": "source", "target": "n15", "label": "(•,0,50)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n41-sink", "source": "n41", "target": "sink", "label": "(•,0,50)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n42-sink", "source": "n42", "target": "sink", "label": "(•,0,60)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n43-sink", "source": "n43", "target": "sink", "label": "(•,0,90)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n44-sink", "source": "n44", "target": "sink", "label": "(•,0,70)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n45-sink", "source": "n45", "target": "sink", "label": "(•,0,80)" }, "classes": "highlight", "css": { "font-size": 10 } },
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22" } },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33" } },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44" } },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23" } },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34" } },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45" } },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } },
    { "data": { "id": "n11-n12", "source": "n11", "target": "n12" } },
    { "data": { "id": "n12-n13", "source": "n12", "target": "n13" } },
    { "data": { "id": "n13-n14", "source": "n13", "target": "n14" } },
    { "data": { "id": "n14-n15", "source": "n14", "target": "n15" } },
    { "data": { "id": "n21-n22", "source": "n21", "target": "n22" } },
    { "data": { "id": "n22-n23", "source": "n22", "target": "n23" } },
    { "data": { "id": "n23-n24", "source": "n23", "target": "n24" } },
    { "data": { "id": "n24-n25", "source": "n24", "target": "n25" } },
    { "data": { "id": "n31-n32", "source": "n31", "target": "n32" } },
    { "data": { "id": "n32-n33", "source": "n32", "target": "n33" } },
    { "data": { "id": "n33-n34", "source": "n33", "target": "n34" } },
    { "data": { "id": "n34-n35", "source": "n34", "target": "n35" } },
    { "data": { "id": "n41-n42", "source": "n41", "target": "n42" } },
    { "data": { "id": "n42-n43", "source": "n42", "target": "n43" } },
    { "data": { "id": "n43-n44", "source": "n43", "target": "n44" } },
    { "data": { "id": "n44-n45", "source": "n44", "target": "n45" } }
]
}
-->
</div>

---

### Backlogging of demand

Suppose we can fulfil the demand of any period at a later point in time and have to pay a penalty of $p$ for each day of the delay.

<div class="graph" style="height: 500px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 } },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 } },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 } },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 } },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 }, "classes": "highlight" },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 }, "classes": "highlight" }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22" } },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33" } },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44" } },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23" } },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34" } },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45" } },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } },
    { "data": { "id": "n11-n12", "source": "n11", "target": "n12" } },
    { "data": { "id": "n12-n13", "source": "n12", "target": "n13" } },
    { "data": { "id": "n13-n14", "source": "n13", "target": "n14" } },
    { "data": { "id": "n14-n15", "source": "n14", "target": "n15" } },
    { "data": { "id": "n21-n22", "source": "n21", "target": "n22" } },
    { "data": { "id": "n22-n23", "source": "n22", "target": "n23" } },
    { "data": { "id": "n23-n24", "source": "n23", "target": "n24" } },
    { "data": { "id": "n24-n25", "source": "n24", "target": "n25" } },
    { "data": { "id": "n31-n32", "source": "n31", "target": "n32" } },
    { "data": { "id": "n32-n33", "source": "n32", "target": "n33" } },
    { "data": { "id": "n33-n34", "source": "n33", "target": "n34" } },
    { "data": { "id": "n34-n35", "source": "n34", "target": "n35" } },
    { "data": { "id": "n41-n42", "source": "n41", "target": "n42" } },
    { "data": { "id": "n42-n43", "source": "n42", "target": "n43" } },
    { "data": { "id": "n43-n44", "source": "n43", "target": "n44" } },
    { "data": { "id": "n44-n45", "source": "n44", "target": "n45" } }
]
}
-->
</div>

---

### Time-expanded minimum cost network flow problem with backlogging

We can use arcs traveling backwards in time to consider backlogging.

<div class="graph" style="height: 500px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 } },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 } },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 } },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 } },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 }, "classes": "highlight" },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 }, "classes": "highlight" }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22" } },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33" } },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44" } },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23" } },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34" } },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45" } },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } },
    { "data": { "id": "n11-n12", "source": "n11", "target": "n12" } },
    { "data": { "id": "n12-n13", "source": "n12", "target": "n13" } },
    { "data": { "id": "n13-n14", "source": "n13", "target": "n14" } },
    { "data": { "id": "n14-n15", "source": "n14", "target": "n15" } },
    { "data": { "id": "n21-n22", "source": "n21", "target": "n22" } },
    { "data": { "id": "n22-n23", "source": "n22", "target": "n23" } },
    { "data": { "id": "n23-n24", "source": "n23", "target": "n24" } },
    { "data": { "id": "n24-n25", "source": "n24", "target": "n25" } },
    { "data": { "id": "n31-n32", "source": "n31", "target": "n32" } },
    { "data": { "id": "n32-n33", "source": "n32", "target": "n33" } },
    { "data": { "id": "n33-n34", "source": "n33", "target": "n34" } },
    { "data": { "id": "n34-n35", "source": "n34", "target": "n35" } },
    { "data": { "id": "n41-n42", "source": "n41", "target": "n42", "curve": 0 } },
    { "data": { "id": "n42-n43", "source": "n42", "target": "n43", "curve": 0 } },
    { "data": { "id": "n43-n44", "source": "n43", "target": "n44", "curve": 0 } },
    { "data": { "id": "n44-n45", "source": "n44", "target": "n45", "curve": 0 } },
    { "data": { "id": "n42-n41", "source": "n42", "target": "n41", "label": "(p,0,∞)", "curve": 20 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } },
    { "data": { "id": "n43-n42", "source": "n43", "target": "n42", "label": "(p,0,∞)", "curve": 20 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } },
    { "data": { "id": "n44-n43", "source": "n44", "target": "n43", "label": "(p,0,∞)", "curve": 20 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } },
    { "data": { "id": "n45-n44", "source": "n45", "target": "n44", "label": "(p,0,∞)", "curve": 20 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } }
]
}
-->
</div>


---

### Restricted backlogging of demand

Suppose we want to restrict backlogging to at most one day.

<div class="graph" style="height: 500px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 } },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 } },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 } },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 } },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 }, "classes": "highlight" },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 }, "classes": "highlight" }
],
"edges": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22" } },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33" } },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44" } },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23" } },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34" } },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45" } },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } },
    { "data": { "id": "n11-n12", "source": "n11", "target": "n12" } },
    { "data": { "id": "n12-n13", "source": "n12", "target": "n13" } },
    { "data": { "id": "n13-n14", "source": "n13", "target": "n14" } },
    { "data": { "id": "n14-n15", "source": "n14", "target": "n15" } },
    { "data": { "id": "n21-n22", "source": "n21", "target": "n22" } },
    { "data": { "id": "n22-n23", "source": "n22", "target": "n23" } },
    { "data": { "id": "n23-n24", "source": "n23", "target": "n24" } },
    { "data": { "id": "n24-n25", "source": "n24", "target": "n25" } },
    { "data": { "id": "n31-n32", "source": "n31", "target": "n32" } },
    { "data": { "id": "n32-n33", "source": "n32", "target": "n33" } },
    { "data": { "id": "n33-n34", "source": "n33", "target": "n34" } },
    { "data": { "id": "n34-n35", "source": "n34", "target": "n35" } },
    { "data": { "id": "n41-n42", "source": "n41", "target": "n42", "curve": 0 } },
    { "data": { "id": "n42-n43", "source": "n42", "target": "n43", "curve": 0 } },
    { "data": { "id": "n43-n44", "source": "n43", "target": "n44", "curve": 0 } },
    { "data": { "id": "n44-n45", "source": "n44", "target": "n45", "curve": 0 } },
    { "data": { "id": "n42-n41", "source": "n42", "target": "n41", "label": "(p,0,∞)", "curve": 20 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } },
    { "data": { "id": "n43-n42", "source": "n43", "target": "n42", "label": "(p,0,∞)", "curve": 20 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } },
    { "data": { "id": "n44-n43", "source": "n44", "target": "n43", "label": "(p,0,∞)", "curve": 20 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } },
    { "data": { "id": "n45-n44", "source": "n45", "target": "n44", "label": "(p,0,∞)", "curve": 20 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } }
]
}
-->
</div>

---

### Time-expanded minimum cost network flow problem with restricted backlogging

We can split the demand nodes to consider backlogging of at most one day.

<div class="graph" style="height: 500px; width: 1280px;">
<!--
{
"nodes": [    
    { "data": { "id": "space", "label": "← space →" }, "position": { "x": 250, "y": 250 }, "classes": "text" },
    { "data": { "id": "time", "label": "← time →" }, "position": { "x": 50, "y": 100 }, "classes": "text-rotated" },
    { "data": { "id": "n11" }, "position": { "x": 100, "y": 0 } },
    { "data": { "id": "n12" }, "position": { "x": 100, "y": 50 } },
    { "data": { "id": "n13" }, "position": { "x": 100, "y": 100 } },
    { "data": { "id": "n14" }, "position": { "x": 100, "y": 150 } },
    { "data": { "id": "n15" }, "position": { "x": 100, "y": 200 } },
    { "data": { "id": "n21" }, "position": { "x": 200, "y": 0 } },
    { "data": { "id": "n22" }, "position": { "x": 200, "y": 50 } },
    { "data": { "id": "n23" }, "position": { "x": 200, "y": 100 } },
    { "data": { "id": "n24" }, "position": { "x": 200, "y": 150 } },
    { "data": { "id": "n25" }, "position": { "x": 200, "y": 200 } },
    { "data": { "id": "n31" }, "position": { "x": 300, "y": 0 } },
    { "data": { "id": "n32" }, "position": { "x": 300, "y": 50 } },
    { "data": { "id": "n33" }, "position": { "x": 300, "y": 100 } },
    { "data": { "id": "n34" }, "position": { "x": 300, "y": 150 } },
    { "data": { "id": "n35" }, "position": { "x": 300, "y": 200 } },
    { "data": { "id": "n41" }, "position": { "x": 400, "y": 0 }, "classes": "highlight" },
    { "data": { "id": "n42" }, "position": { "x": 400, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n43" }, "position": { "x": 400, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n44" }, "position": { "x": 400, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n45" }, "position": { "x": 400, "y": 200 }, "classes": "highlight" },
    { "data": { "id": "n51" }, "position": { "x": 450, "y": 0 }, "classes": "highlight" },
    { "data": { "id": "n52" }, "position": { "x": 450, "y": 50 }, "classes": "highlight" },
    { "data": { "id": "n53" }, "position": { "x": 450, "y": 100 }, "classes": "highlight" },
    { "data": { "id": "n54" }, "position": { "x": 450, "y": 150 }, "classes": "highlight" },
    { "data": { "id": "n55" }, "position": { "x": 450, "y": 200 }, "classes": "highlight" }
],
"edges": [    
    { "data": { "id": "n11-n22", "source": "n11", "target": "n22" } },
    { "data": { "id": "n22-n33", "source": "n22", "target": "n33" } },
    { "data": { "id": "n33-n44", "source": "n33", "target": "n44" } },
    { "data": { "id": "n12-n23", "source": "n12", "target": "n23" } },
    { "data": { "id": "n22-n34", "source": "n23", "target": "n34" } },
    { "data": { "id": "n33-n45", "source": "n34", "target": "n45" } },
    { "data": { "id": "n21-n32", "source": "n21", "target": "n32" } },
    { "data": { "id": "n31-n42", "source": "n31", "target": "n42" } },
    { "data": { "id": "n32-n43", "source": "n32", "target": "n43" } },
    { "data": { "id": "n13-n24", "source": "n13", "target": "n24" } },
    { "data": { "id": "n24-n35", "source": "n24", "target": "n35" } },
    { "data": { "id": "n14-n25", "source": "n14", "target": "n25" } },
    { "data": { "id": "n11-n12", "source": "n11", "target": "n12" } },
    { "data": { "id": "n12-n13", "source": "n12", "target": "n13" } },
    { "data": { "id": "n13-n14", "source": "n13", "target": "n14" } },
    { "data": { "id": "n14-n15", "source": "n14", "target": "n15" } },
    { "data": { "id": "n21-n22", "source": "n21", "target": "n22" } },
    { "data": { "id": "n22-n23", "source": "n22", "target": "n23" } },
    { "data": { "id": "n23-n24", "source": "n23", "target": "n24" } },
    { "data": { "id": "n24-n25", "source": "n24", "target": "n25" } },
    { "data": { "id": "n31-n32", "source": "n31", "target": "n32" } },
    { "data": { "id": "n32-n33", "source": "n32", "target": "n33" } },
    { "data": { "id": "n33-n34", "source": "n33", "target": "n34" } },
    { "data": { "id": "n34-n35", "source": "n34", "target": "n35" } },
    { "data": { "id": "n41-n42", "source": "n41", "target": "n42", "curve": 0 } },
    { "data": { "id": "n42-n43", "source": "n42", "target": "n43", "curve": 0 } },
    { "data": { "id": "n43-n44", "source": "n43", "target": "n44", "curve": 0 } },
    { "data": { "id": "n44-n45", "source": "n44", "target": "n45", "curve": 0 } },
    { "data": { "id": "n41-n51", "source": "n41", "target": "n51", "curve": 0 }, "classes": "highlight" },
    { "data": { "id": "n42-n52", "source": "n42", "target": "n52", "curve": 0 }, "classes": "highlight" },
    { "data": { "id": "n43-n53", "source": "n43", "target": "n53", "curve": 0 }, "classes": "highlight", "classes": "highlight" },
    { "data": { "id": "n44-n54", "source": "n44", "target": "n54", "curve": 0 }, "classes": "highlight" },
    { "data": { "id": "n45-n55", "source": "n45", "target": "n55", "curve": 0 }, "classes": "highlight" },
    { "data": { "id": "n42-n51", "source": "n42", "target": "n51", "label": "(p,0,∞)", "curve": 0 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } },
    { "data": { "id": "n43-n52", "source": "n43", "target": "n52", "label": "(p,0,∞)", "curve": 0 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } },
    { "data": { "id": "n44-n53", "source": "n44", "target": "n53", "label": "(p,0,∞)", "curve": 0 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } },
    { "data": { "id": "n45-n54", "source": "n45", "target": "n54", "label": "(p,0,∞)", "curve": 0 }, "classes": "highlight", "css": { "font-size": 10, "text-rotation": "none","text-halign": "right", "text-valign": "center", "text-margin-x": 18, "text-margin-y": 0 } }
]
}
-->
</div>


