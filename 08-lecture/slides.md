# Network optimisation

---

Many important optimisation problems are characterised by their underlying network representation. 

> [!NOTE]
> **Examples:**  
> - Transportation networks
> - Production networks
> - Communication networks
> - Energy networks
> - Social networks
> - ...

---

Components of typical networks are for example:

|                        | Nodes                | Arcs                 | Flow                 |
|------------------------|----------------------|----------------------|----------------------|
| Transportation network | Intersections        | Roads                | People, goods        |
| Production network     | Facilities           | Transportation links | Parts and components |
| Communication network  | Server               | Wires, channels      | Information          |
| Energy network         | Transformer stations | Power lines          | Energy               |
| Social network         | Individuals          | Relationships        | Information          |

---

In many network optimisation problems we have integer constraints, e.g., because we have to decide whether to use an arc or not.

> [!NOTE]
> Although integer programs can be difficult to solve, network optimisation problems are often easy to solve - even for huge problems. 

---

## Definition: Network

A *network* is defined by

- a set of nodes $N$
- a set of arcs $A \subset N \times N$, i.e., each arc is an ordered pair of nodes $(n,m)$ with $n,m\in N$
- a (optional) set of attributes associated to each node $n\in N$
- a (optional) set of attributes associated to each arc $(n,m)\in A$

---

### Example

<div class="netflow">
<!--
{
"unit": 150,
"radius": 30,
"nodes": [
  {"id": "1", "x": 0, "y": 1.5, "label": "1"},
  {"id": "2", "x": 2, "y": 3, "label": "2"},
  {"id": "3", "x": 2, "y": 0, "label": "3"},
  {"id": "4", "x": 4, "y": 3, "label": "4"},
  {"id": "5", "x": 4, "y": 0, "label": "5"},
  {"id": "6", "x": 6, "y": 1.5, "label": "6"}
],
"arcs": [
  {"from": "1", "to": "2", "label": "$4$"},
  {"from": "1", "to": "3", "label": "$3$", "swap": true},
  {"from": "2", "to": "3", "label": "$3$", "bend": -15, "swap": true},
  {"from": "3", "to": "2", "label": "$2$", "bend": -15, "swap": true},
  {"from": "2", "to": "4", "label": "$2$"},
  {"from": "2", "to": "5", "label": "$1$"},
  {"from": "3", "to": "5", "label": "$3$", "swap": true},
  {"from": "4", "to": "5", "label": "$1$", "bend": -15, "swap": true},
  {"from": "5", "to": "4", "label": "$2$", "bend": -15, "swap": true},
  {"from": "4", "to": "6", "label": "$3$"},
  {"from": "5", "to": "6", "label": "$7$", "swap": true}
]
}
-->
</div>

---

## Definition: Path

A *path* is a sequence of nodes $n_1, n_2, \ldots, n_k \in N$  with $(n_i,n_{i+1}) \in A$ for each $i \in \lbrace 1, \ldots, k-1\rbrace$. 

---

### Example: A path through nodes 1, 2, 5, 4, 6

<div class="netflow">
<!--
{
"unit": 150,
"radius": 30,
"nodes": [
  {"id": "1", "x": 0, "y": 1.5, "label": "1", "class": "accent"},
  {"id": "2", "x": 2, "y": 3, "label": "2", "class": "accent"},
  {"id": "3", "x": 2, "y": 0, "label": "3"},
  {"id": "4", "x": 4, "y": 3, "label": "4", "class": "accent"},
  {"id": "5", "x": 4, "y": 0, "label": "5", "class": "accent"},
  {"id": "6", "x": 6, "y": 1.5, "label": "6", "class": "accent"}
],
"arcs": [
  {"from": "1", "to": "2", "label": "$4$", "class": "accent"},
  {"from": "1", "to": "3", "label": "$3$", "swap": true},
  {"from": "2", "to": "3", "label": "$3$", "bend": -15, "swap": true},
  {"from": "3", "to": "2", "label": "$2$", "bend": -15, "swap": true},
  {"from": "2", "to": "4", "label": "$2$"},
  {"from": "2", "to": "5", "label": "$1$", "class": "accent"},
  {"from": "3", "to": "5", "label": "$3$", "swap": true},
  {"from": "4", "to": "5", "label": "$1$", "bend": -15, "swap": true},
  {"from": "5", "to": "4", "label": "$2$", "bend": -15, "swap": true, "class": "accent"},
  {"from": "4", "to": "6", "label": "$3$", "class": "accent"},
  {"from": "5", "to": "6", "label": "$7$", "swap": true}
]
}
-->
</div>


===

## Shortest path problem

The *shortest path problem* is the problem of finding the shortest (or cheapest) path from an origin $s$ to a destination $t$ through a network $(N,A)$
where each arc is given a **positive length (or cost)** $c_{i,j}$.

---

What is the shortest path from node 1 to node 6 if the indicated numbers represent the length of the arc?

<div class="netflow">
<!--
{
"unit": 150,
"radius": 30,
"nodes": [
  {"id": "1", "x": 0, "y": 1.5, "label": "1"},
  {"id": "2", "x": 2, "y": 3, "label": "2"},
  {"id": "3", "x": 2, "y": 0, "label": "3"},
  {"id": "4", "x": 4, "y": 3, "label": "4"},
  {"id": "5", "x": 4, "y": 0, "label": "5"},
  {"id": "6", "x": 6, "y": 1.5, "label": "6"}
],
"arcs": [
  {"from": "1", "to": "2", "label": "$4$"},
  {"from": "1", "to": "3", "label": "$3$", "swap": true},
  {"from": "2", "to": "3", "label": "$3$", "bend": -15, "swap": true},
  {"from": "3", "to": "2", "label": "$2$", "bend": -15, "swap": true},
  {"from": "2", "to": "4", "label": "$2$"},
  {"from": "2", "to": "5", "label": "$1$"},
  {"from": "3", "to": "5", "label": "$3$", "swap": true},
  {"from": "4", "to": "5", "label": "$1$", "bend": -15, "swap": true},
  {"from": "5", "to": "4", "label": "$2$", "bend": -15, "swap": true},
  {"from": "4", "to": "6", "label": "$3$"},
  {"from": "5", "to": "6", "label": "$7$", "swap": true}
]
}
-->
</div>

> [!NOTE]
> For larger networks it is impossible to easily identify the shortest path.

---

### Exercise: Shortest path problem

> The *shortest path problem* is the problem of finding the shortest (or cheapest) path from an origin $s$ to a destination $t$ through a network $(N,A)$
where each arc is given a positive length (or cost) $c_{i,j}$.

Model the shortest path problem as an integer program assuming that $(i,s) \notin A$ and $(t,i) \notin A$ for any $i\in  N$.

---

The shortest path problem can be modelled using binary variables $x_{i,j}$ indicating whether arc $(i,j)$ is used in the shortest path or not:

$$x_{i,j} =\left\lbrace \begin{array}{cl}
1 & \textrm{if arc } (i,j) \textrm { is used }\\\\
0 & \textrm{otherwise}\\\\
\end{array}
\right.$$


---

The objective is to minimise the total length of all arcs which are used, i.e.

minimise $$\displaystyle\sum_{(i,j)\in A} c_{i,j} x_{i,j}$$

---

We want to use exactly one arc leaving the origin and one arc reaching the destination, i.e.  

$$\sum_{i \in N : (s,i)\in A} x_{s,i} = 1$$

$$\sum_{i \in N : (i,t)\in A} x_{i,t} = 1$$

---

For all nodes (except for $s$ and $t$) the number of incoming and outgoing arcs used must be the same, i.e. 

$$\sum_{j \in N : (j,i)\in A} x_{j,i} = \sum_{j \in N : (i,j)\in A} x_{i,j} \textrm{ for all } i\in N\setminus \lbrace s,t \rbrace.$$


---

### Integer program for the shortest path problem

minimise $\displaystyle\sum_{(i,j)\in A} c_{i,j} x_{i,j}$

subject to

$$\sum_{j \in N :(s,j)\in A} x_{s,j} = 1 \textrm{ and } \sum_{i \in N :(i,t)\in A} x_{i,t} = 1$$

$$\sum_{j \in N :(j,i)\in A} x_{j,i} = \sum_{j \in N :(i,j)\in A} x_{i,j} \textrm{ for all } i\in N\setminus \lbrace s,t \rbrace$$

$$x_{i,j} \in \lbrace 0,1 \rbrace \textrm{ for all } (i,j)\in A$$

> [!WARNING]
With negative arc costs, there could be negative cost cycles. 

---

### Negative cost cycles

If a network contains arcs with negative costs, then there might not be a shortest path, because it could be possible to decrease the cost by infinitively looping through a cycle.

===

## Maximum flow problem

The *maximum flow problem* is the problem of finding the maximum amount of flow through a network $(N,A)$ from an origin $s$ to a destination $t$, where each arc is given an upper bound $u_{i,j}$ on the flow along the arc.

---

### Example: Disaster relief

![Maximum flow problem](08-lecture/Philippines_humanitarian_aid_and_disaster_relief.jpg)

<small>Source: Wiki commons</small>
<!-- http://commons.wikimedia.org/wiki/File:Philippine_residents_and_U.S._Marines_with_Marine_Medium_Helicopter_Squadron_%28HMM%29_265_unload_rice_and_water_from_two_U.S._Marine_Corps_CH-46E_Sea_Knight_helicopters_for_humanitarian_aid_and_disaster_relief_101022-M-ZN194-196.jpg -->

---

What is the maximum flow from node 1 to node 6 if the indicated numbers represent the capacity of the arc?

<div class="netflow">
<!--
{
"unit": 150,
"radius": 30,
"nodes": [
  {"id": "1", "x": 0, "y": 1.5, "label": "1"},
  {"id": "2", "x": 2, "y": 3, "label": "2"},
  {"id": "3", "x": 2, "y": 0, "label": "3"},
  {"id": "4", "x": 4, "y": 3, "label": "4"},
  {"id": "5", "x": 4, "y": 0, "label": "5"},
  {"id": "6", "x": 6, "y": 1.5, "label": "6"}
],
"arcs": [
  {"from": "1", "to": "2", "label": "$4$"},
  {"from": "1", "to": "3", "label": "$3$", "swap": true},
  {"from": "2", "to": "3", "label": "$3$", "bend": -15, "swap": true},
  {"from": "3", "to": "2", "label": "$2$", "bend": -15, "swap": true},
  {"from": "2", "to": "4", "label": "$2$"},
  {"from": "2", "to": "5", "label": "$1$"},
  {"from": "3", "to": "5", "label": "$3$", "swap": true},
  {"from": "4", "to": "5", "label": "$1$", "bend": -15, "swap": true},
  {"from": "5", "to": "4", "label": "$2$", "bend": -15, "swap": true},
  {"from": "4", "to": "6", "label": "$3$"},
  {"from": "5", "to": "6", "label": "$7$", "swap": true}
]
}
-->
</div>

---

> The *maximum flow problem* is the problem of finding the maximum amount of flow through a network $(N,A)$ from an origin $s$ to a destination $t$, where each arc is given an upper bound $u_{i,j}$ on the flow along the arc.

Model the maximum flow problem as a linear program assuming that $(i,s) \notin A$ and $(t,i) \notin A$ for any $i\in  N$.

---

The maximum flow problem can be modelled using linear variables $x_{i,j}$ indicating how much is sent along an arc  $(i,j)$.

---

For all nodes (except for $s$ and $t$) the total incoming flow must be the same as the total outgoing flow, i.e. 

$$\sum_{j \in N : (i,j)\in A} x_{i,j} = \sum_{j \in N : (j,i)\in A} x_{j,i} \textrm{ for all } i\in N \setminus\lbrace s,t \rbrace$$

---

The objective is to maximise the flow from $s$ to $t$, which must be the same as the total flow out of the origin node $s$, i.e.

maximise $$\displaystyle\sum_{j \in N : (s,j)\in A} x_{s,j}$$

---

The flow on each arc $(i,j)$ must be non-negative and must not exceed the capacity, i.e.

$$0\leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$

---

### Linear program for the maximum flow problem

maximise $\displaystyle\sum_{j \in N : (s,j)\in A} x_{s,j}$

subject to

$$\sum_{j \in N : (i,j)\in A} x_{i,j} = \sum_{j \in N : (j,i)\in A} x_{j,i} \textrm{ for all } i\in N \setminus\lbrace s,t \rbrace$$

$$0\leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$


===

## Assignment problem

Given two sets $N'$ and $N''$ with the same number of nodes, the *assignment problem* is the problem of finding an assignment of each node in $N'$ to exactly one node in $N''$ with the goal of minimising the total costs, where each possible assignment of a node $i\in N'$ to node $j\in N''$ incurs a given cost $c_{i,j}$.

---

### Example: Ball

![Assignment problem](08-lecture/MardiGrasBall1930s.jpeg)

<small>Source: Wiki commons</small>
<!-- http://commons.wikimedia.org/wiki/File:MardiGrasBall1930sWPA.jpeg -->

---

What is the cheapest way of assigning nodes 1,2,3 to nodes 4,5,6?

<div class="netflow">
<!--
{
"unit": 150,
"radius": 30,
"nodes": [
  {"id": "1", "x": 0, "y": 3, "label": "1"},
  {"id": "2", "x": 3, "y": 3, "label": "2"},
  {"id": "3", "x": 6, "y": 3, "label": "3"},
  {"id": "4", "x": 0, "y": 0, "label": "4"},
  {"id": "5", "x": 3, "y": 0, "label": "5"},
  {"id": "6", "x": 6, "y": 0, "label": "6"}
],
"arcs": [
  {"from": "1", "to": "4", "label": "$11$", "pos": 0.3, "swap": true},
  {"from": "1", "to": "5", "label": "$13$", "pos": 0.3, "swap": true},
  {"from": "1", "to": "6", "label": "$11$", "pos": 0.25, "swap": true},
  {"from": "2", "to": "4", "label": "$8$", "pos": 0.2, "swap": true},
  {"from": "2", "to": "5", "label": "$10$", "pos": 0.2, "swap": true},
  {"from": "2", "to": "6", "label": "$12$", "pos": 0.2},
  {"from": "3", "to": "4", "label": "$16$", "pos": 0.25},
  {"from": "3", "to": "5", "label": "$3$", "pos": 0.3},
  {"from": "3", "to": "6", "label": "$17$", "pos": 0.3}
]
}
-->
</div>

---

> Given two sets $N'$ and $N''$ with the same number of nodes, the *assignment problem* is the problem of finding an assignment of each node in $N'$ to exactly one node in $N''$ with the goal of minimising the total costs, where each possible assignment of a node $i\in N'$ to node $j\in N''$ incurs a given cost $c_{i,j}$.

Model the assignment problem as an integer program.

---

The assignment problem can be modelled using binary variables $x_{i,j}$ indicating whether node $i$ is assigned to node $j$ or not:

$$x_{i,j} =\left\lbrace \begin{array}{cl}
1 & \textrm{node } i \textrm{ is assigned to node } j\\\\
0 & \textrm{otherwise}\\\\
\end{array}
\right.$$


---

The objective is to minimise the total costs of all assignments, i.e.

minimise $\displaystyle\sum_{(i,j)\in  N' \times N''} c_{i,j} x_{i,j}$

---

Each node in $N'$ must be assigned to exactly one node in $N''$ and vice versa, i.e.  

$$\sum_{j \in N''} x_{i,j} = 1 \textrm{ for all } i \in N'$$

$$\sum_{i \in N'} x_{i,j} = 1 \textrm{ for all } j \in N''$$

---

### Integer program for the assignment problem

minimise $\displaystyle\sum_{(i,j)\in N' \times N''} c_{i,j} x_{i,j}$

subject to

$$\sum_{j \in N''} x_{i,j} = 1 \textrm{ for all } i \in N'$$

$$\sum_{i \in N'} x_{i,j} = 1 \textrm{ for all } j \in N''$$

$$x_{i,j} \in \lbrace 0,1 \rbrace \textrm{ for all } (i,j)\in  N' \times N''$$

===

## Transportation problem

Given two sets $N'$ and $N''$ where each node $i\in N'$ has a given supply $s_i$ and each node $j\in N''$ has a given demand $d_j$, the *transportation problem* is the problem of matching supply and demand with the smallest cost, where any unit can be transported from a node $i\in N'$ to a node $j\in N''$ at a given cost $c_{i,j}$.

---

What is the cheapest way of fulfilling the demand at nodes 4,5,6 from the supply at nodes 1,2,3?

<div class="netflow">
<!--
{
"unit": 130,
"radius": 30,
"nodes": [
  {"id": "1", "x": 0, "y": 3, "label": "1"},
  {"id": "2", "x": 3, "y": 3, "label": "2"},
  {"id": "3", "x": 6, "y": 3, "label": "3"},
  {"id": "4", "x": 0, "y": 0, "label": "4"},
  {"id": "5", "x": 3, "y": 0, "label": "5"},
  {"id": "6", "x": 6, "y": 0, "label": "6"},
  {"id": "1_supply", "x": 0, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$7$", "class": "text"},
  {"id": "2_supply", "x": 3, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$8$", "class": "text"},
  {"id": "3_supply", "x": 6, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$5$", "class": "text"},
  {"id": "4_supply", "x": 0, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$9$", "class": "text"},
  {"id": "5_supply", "x": 3, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$3$", "class": "text"},
  {"id": "6_supply", "x": 6, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$8$", "class": "text"}
],
"arcs": [
  {"from": "1", "to": "4", "label": "$11$", "pos": 0.3, "swap": true},
  {"from": "1", "to": "5", "label": "$13$", "pos": 0.3, "swap": true},
  {"from": "1", "to": "6", "label": "$11$", "pos": 0.25, "swap": true},
  {"from": "2", "to": "4", "label": "$8$", "pos": 0.2, "swap": true},
  {"from": "2", "to": "5", "label": "$10$", "pos": 0.2, "swap": true},
  {"from": "2", "to": "6", "label": "$12$", "pos": 0.2},
  {"from": "3", "to": "4", "label": "$16$", "pos": 0.25},
  {"from": "3", "to": "5", "label": "$3$", "pos": 0.3},
  {"from": "3", "to": "6", "label": "$17$", "pos": 0.3}
]
}
-->
</div>

---

> Given two sets $N'$ and $N''$ where each node $i\in N'$ has a given supply $s_i$ and each node $j\in N''$ has a given demand $d_j$, the *transportation problem* is the problem of matching supply and demand with the smallest cost, where any unit can be transported from a node $i\in N'$ to a node $j\in N''$ at a given cost $c_{i,j}$.

Model the transportation problem as a linear program.

---

The transportation problem can be modelled using linear variables $x_{i,j}$ indicating the amount shipped from node $i\in N'$ to node $j\in N''$.


---

The objective is to minimise the total costs for all units shipped, i.e.

minimise $\displaystyle\sum_{(i,j)\in  N' \times N''} c_{i,j} x_{i,j}$

---

The supply of each node in $N'$ and the demand of each node $j\in N''$ must be matched, i.e.  

$$\sum_{j \in N''} x_{i,j} = s_i \textrm{ for all } i \in N'$$

$$\sum_{i \in N'} x_{i,j} = d_j \textrm{ for all } j \in N''$$


---

### Linear program for the transportation problem

minimise $\displaystyle\sum_{(i,j)\in N' \times N''} c_{i,j} x_{i,j}$

subject to

$$\sum_{j \in N''} x_{i,j} = s_i \textrm{ for all } i \in N'$$

$$\sum_{i \in N'} x_{i,j} = d_j \textrm{ for all } j \in N''$$

$$0\leq x_{i,j} \textrm{ for all } (i,j)\in  N' \times N''$$


===

## Min-cost network flow problem

Given a network $(N,A)$ where each node $i\in N$ has a given supply or demand $b_i$, the *minimum-cost network flow problem* is the problem of matching supply and demand with the smallest cost without violating the given lower and upper bounds $l_{i,j}$ and $u_{i,j}$ on the flow along the arc $(i,j)\in A$, where the cost of shipping one unit along the arc is $c_{i,j}$.

> [!NOTE]
> A node $i\in N$ with $b_i >0$ is a supply node, a node $i\in N$ with $b_i <0$ is a demand node, and a node $i\in N$ with $b_i =0$ is a transshipment node. 

---

> Given a network $(N,A)$ where each node $i\in N$ has a given supply or demand $b_i$, the *minimum-cost network flow problem* is the problem of matching supply and demand with the smallest cost without violating the given lower and upper bounds $l_{i,j}$ and $u_{i,j}$ on the flow along the arc $(i,j)\in A$, where the cost of shipping one unit along the arc is $c_{i,j}$.

Model the minimum-cost network flow problem as a linear program.

---

The minimum-cost network flow problem can be modelled using linear variables $x_{i,j}$ indicating the amount shipped along an arc $(i,j)\in A$.

---

### Flow conservation constraint

For each node $i \in N$ the sum of the supply $b_i$ and the total incoming flow must match the total outgoing flow, i.e. 

$$\underbrace{b_i}\_{\rm supply} +  \underbrace{\sum_{j \in N : (j,i)\in A} x_{j,i}}\_{\textrm{flow into } i}  = \underbrace{\sum_{j \in N : (i,j)\in A} x_{i,j}}\_{\textrm{flow out of } i} \textrm{ for all } i\in N$$

---

The objective is to minimise the total costs, i.e.

minimise $\displaystyle\sum_{(i,j)\in A} c_{i,j} x_{i,j}$

---

The flow on each arc $(i,j)$ must be non-negative and must not exceed the capacity, i.e.

$$l_{i,j} \leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$

---

### Linear program for the minimum-cost network flow problem

minimise $\displaystyle\sum_{(i,j)\in A} c_{i,j} x_{i,j}$

subject to

$$b_i + \sum_{j \in N : (j,i)\in A} x_{j,i} = \sum_{j \in N : (i,j)\in A} x_{i,j} \textrm{ for all } i\in N$$

$$l_{i,j} \leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$


> [!IMPORTANT]
> The minimum cost network flow problem can only be solved if supply and demand are balanced, i.e., if $\displaystyle\sum_{i\in N} b_i = 0$.

---

### Integrality

The minimum-cost network flow problem has the property, that if all parameters are integers, then the optimal solution will also be integer.

> [!NOTE]
> We do not need to explicitly model integer constraints and **we do not need to apply branch & bound** to obtain integer solutions.

---

The minimum-cost network flow problem generalises

- the shortest path problem,
- the maximum flow problem,
- the assignment problem, and
- the transportation problem,

i.e. all of these problems are special cases.

---

Thus, also the solution of the special cases will be integer if all parameters are integers.

> [!NOTE]
> Although, we can solve these problems using the simplex algorithm, there are even more efficient algorithms which exploit the special structure of these problems.

===

## Network flow modelling 

<br>
<div class="twocolumn" style="font-size:75%;gap:50px;top-margin:50px;">
<div>
<div style="height:100%;background-color:#f7f7f8;padding:20px;border-radius:10pt;">
<h3 style="font-size:200%;">Problem</h4>

minimise $\displaystyle\sum_{(i,j)\in A} c_{i,j} x_{i,j}$

subject to

$$b_i + \sum_{j \in N : (j,i)\in A} x_{j,i} = \sum_{j \in N : (i,j)\in A} x_{i,j} \textrm{ for all } i\in N$$

$$l_{i,j} \leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$
</div>
This is considered as fixed from now on.
</div>
<div>
<div style="height:100%;background-color:#f7f7f8;padding:20px;border-radius:10pt;">
<h3 style="font-size:200%;">Data</h4>
<div style="text-align:left">

**Sets**

- $N$: set of nodes
- $A$: set of arcs

**Parameters**

- $b_i$: the supply at node $i\in N$
- $c_{i,j}$: cost per unit of flow along arc $(i,j)\in A$
- $[l_{i,j},u_{i,j}]$: lower and upper bound on the flow along arc $(i,j)\in A$

</div>
</div>
This is what we model.
</div>
</div>

---

## Visualisation of a network flow model

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
  {"id": "1_supply", "x": -0.5, "y": 1.5, "shape": "rect", "w": 1, "h": 1, "label": "$b_1$", "class": "text"},
  {"id": "2_supply", "x": 2.5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$b_2$", "class": "text"},
  {"id": "3_supply", "x": 2.5, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$b_3$", "class": "text"},
  {"id": "4_supply", "x": 5, "y": 3.45, "shape": "rect", "w": 1, "h": 1, "label": "$b_4$", "class": "text"},
  {"id": "5_supply", "x": 5, "y": -0.5, "shape": "rect", "w": 1, "h": 1, "label": "$b_5$", "class": "text"}
],
"arcs": [
  {"from": "1", "to": "2", "label": "$c_{1,2}, [l_{1,2}, u_{1,2}]$"},
  {"from": "1", "to": "3", "label": "$c_{1,3}, [l_{1,3}, u_{1,3}]$", "swap": true},
  {"from": "2", "to": "3", "label": "$c_{2,3}, [l_{2,3}, u_{2,3}]$", "swap": true},
  {"from": "2", "to": "4", "label": "$c_{2,4}, [l_{2,4}, u_{2,4}]$"},
  {"from": "3", "to": "4", "label": "$c_{3,4}, [l_{3,4}, u_{3,4}]$", "pos": 0.7},
  {"from": "3", "to": "5", "label": "$c_{3,5}, [l_{3,5}, u_{3,5}]$", "swap": true},
  {"from": "4", "to": "5", "label": "$c_{4,5}, [l_{4,5}, u_{4,5}]$"}
]
}
-->
</div>

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

### AMPL: networkflow.mod ###

```ampl[]
# Minimum-cost network flow problem
set Nodes;                            # set of nodes
set Arcs within (Nodes cross Nodes);  # set of arcs
param supply { Nodes };               # supply/demand values of nodes
param costs { Arcs };                 # arc costs
param lowerbound { Arcs };            # lower bound on the flow along arc
param upperbound { Arcs };            # upper bound on the flow along arc
var flow { Arcs };                    # flow along arc
# Problem
minimize TotalCosts: sum { (i,j) in Arcs } costs[i,j] * flow[i,j];
subject to
FlowConservation { i in Nodes }:
supply[i] + sum { (j,i) in Arcs } flow[j,i] = sum { (i,j) in Arcs } flow[i,j];
LowerBounds { (i,j) in Arcs }: flow[i,j] >= lowerbound[i,j];
UpperBounds { (i,j) in Arcs }: flow[i,j] <= upperbound[i,j];
```

---

### AMPL: networkflow.dat ###

```ampl[]
set Nodes:= Node1 Node2 Node3 Node4 Node5;
set Arcs:= (Node1,Node2) (Node1,Node3) (Node2,Node3) (Node2,Node4)
           (Node3,Node4) (Node3,Node5) (Node4,Node5);

param         supply :=
 Node1            23
 Node2             5
 Node3            -7
 Node4            -2
 Node5           -19
;

param:         costs lowerbound upperbound :=
 Node1 Node2       7          0         30
 Node1 Node3       6          0         20
 Node2 Node3       5          0         25
 Node2 Node4       4          0         10
 Node3 Node4       2          0         20
 Node3 Node5       2          0         25
 Node4 Node5       1          0         20
;
```
<!-- .element: style="height:600px;" -->

