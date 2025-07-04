# Network optimisation
---

Many important optimisation problems are characterised by their underlying network representation. 

---

Networks pervade our daily lives. 

- Transportation networks
- Production networks
- Communication networks
- Energy networks
- Social networks
- ...

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

---

Although integer programs can be difficult to solve, network optimisation problems are often easy to solve and powerful algorithms and software are available for these problems so that huge problems can be solved very fast.

---

## Definition: Network

A *network* is defined by

- a set of nodes $N$
- a set of arcs $A \subset N \times N$, i.e., each arc is an ordered pair of nodes $(n,m)$ with $n,m\in N$
- a (optional) set of attributes associated to each node $n\in N$
- a (optional) set of attributes associated to each arc $(n,m)\in A$

---

### Example

<img class="stretch" src="08-lecture/network.svg"></img>

---

## Definition: Path

A *path* is a sequence of nodes $n_1, n_2, \ldots, n_k \in N$  with $(n_i,n_{i+1}) \in A$ for each $i \in \lbrace 1, \ldots, k-1\rbrace$. 

---

### Example: A path through nodes 1, 2, 5, 4, 6

<img class="stretch" src="08-lecture/path.svg"></img>


===

## Shortest path problem

The *shortest path problem* is the problem of finding the shortest (or cheapest) path from an origin $s$ to a destination $t$ through a network $(N,A)$
where each arc is given a **positive length (or cost)** $c_{i,j}$.

---

What is the shortest path from node 1 to node 6 if the indicated numbers represent the length of the arc?

<img class="stretch" src="08-lecture/network.svg"></img>

---

For larger networks it is impossible to easily identify the shortest path.

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

$$\sum_{(s,i)\in A} x_{s,i} = 1$$

$$\sum_{(i,t)\in A} x_{i,t} = 1$$

---

For all nodes (except for $s$ and $t$) the number of incoming and outgoing arcs used must be the same, i.e. 

$$\sum_{(j,i)\in A} x_{j,i} = \sum_{(i,j)\in A} x_{i,j} \textrm{ for all } i\in N\setminus \lbrace s,t \rbrace.$$


---

### Integer program for the shortest path problem

minimise $\displaystyle\sum_{(i,j)\in A} c_{i,j} x_{i,j}$

subject to

$$\sum_{(s,j)\in A} x_{s,j} = 1 \textrm{ and } \sum_{(i,t)\in A} x_{i,t} = 1$$

$$\sum_{(j,i)\in A} x_{j,i} = \sum_{(i,j)\in A} x_{i,j} \textrm{ for all } i\in N\setminus \lbrace s,t \rbrace$$

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

<img class="stretch" src="08-lecture/network.svg"></img>

---

> The *maximum flow problem* is the problem of finding the maximum amount of flow through a network $(N,A)$ from an origin $s$ to a destination $t$, where each arc is given an upper bound $u_{i,j}$ on the flow along the arc.

Model the maximum flow problem as a linear program assuming that $(i,s) \notin A$ and $(t,i) \notin A$ for any $i\in  N$.

---

The maximum flow problem can be modelled using linear variables $x_{i,j}$ indicating how much is sent along an arc  $(i,j)$.

---

For all nodes (except for $s$ and $t$) the total incoming flow must be the same as the total outgoing flow, i.e. 

$$\sum_{(i,j)\in A} x_{i,j} = \sum_{(j,i)\in A} x_{j,i} \textrm{ for all } i\in N \setminus\lbrace s,t \rbrace$$

---

The objective is to maximise the flow from $s$ to $t$, which must be the same as the total flow out of the origin node $s$, i.e.

maximise $$\displaystyle\sum_{(s,j)\in A} x_{s,j}$$

---

The flow on each arc $(i,j)$ must be non-negative and must not exceed the capacity, i.e.

$$0\leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$

---

### Linear program for the maximum flow problem

maximise $\displaystyle\sum_{(s,j)\in A} x_{s,j}$

subject to

$$\sum_{(i,j)\in A} x_{i,j} = \sum_{(j,i)\in A} x_{j,i} \textrm{ for all } i\in N \setminus\lbrace s,t \rbrace$$

$$0\leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$


===

## Assignment problem

Given two sets $N'$ and $N''$ with the same number of nodes, the *assignment problem* is the problem of finding an assignment of each node in $N'$ to exactly one node in $N''$ with the goal of minimising the total costs, where each possible assignmemt of a node $i\in N'$ to node $j\in N''$ incurs a given cost $c_{i,j}$.

---

### Example: Ball

![Assignment problem](08-lecture/MardiGrasBall1930s.jpeg)

<small>Source: Wiki commons</small>
<!-- http://commons.wikimedia.org/wiki/File:MardiGrasBall1930sWPA.jpeg -->

---

What is the cheapest way of assigning nodes 1,2,3 to nodes 4,5,6?

<img class="stretch" src="08-lecture/assignmentproblem.svg"></img>

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

$$\sum_{(i,j)\in N' \times N''} x_{i,j} = 1 \textrm{ for all } i \in N'$$

$$\sum_{(i,j)\in N' \times N''} x_{i,j} = 1 \textrm{ for all } j \in N''$$

---

### Integer program for the assignment problem

minimise $\displaystyle\sum_{(i,j)\in N' \times N''} c_{i,j} x_{i,j}$

subject to

$$\sum_{(i,j)\in N' \times N''} x_{i,j} = 1 \textrm{ for all } i \in N'$$

$$\sum_{(i,j)\in N' \times N''} x_{i,j} = 1 \textrm{ for all } j \in N''$$

$$x_{i,j} \in \lbrace 0,1 \rbrace \textrm{ for all } (i,j)\in  N' \times N''$$

===

## Transportation problem

Given two sets $N'$ and $N''$ where each node $i\in N'$ has a given supply $s_i$ and each node $j\in N''$ has a given demand $d_j$, the *transportation problem* is the problem of matching supply and demand with the smallest cost, where any unit can be transported from a node $i\in N'$ to a node $j\in N''$ at a given cost $c_{i,j}$.

---

What is the cheapest way of fulfilling the demand at nodes 4,5,6 from the supply at nodes 1,2,3?

<img class="stretch" src="08-lecture/transportationproblem.svg"></img>

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

$$\sum_{(i,j)\in N' \times N''} x_{i,j} = s_i \textrm{ for all } i \in N'$$

$$\sum_{(i,j)\in N' \times N''} x_{i,j} = d_j \textrm{ for all } j \in N''$$


---

### Linear program for the transportation problem

minimise $\displaystyle\sum_{(i,j)\in N' \times N''} c_{i,j} x_{i,j}$

subject to

$$\sum_{(i,j)\in N' \times N''} x_{i,j} = s_i \textrm{ for all } i \in N'$$

$$\sum_{(i,j)\in N' \times N''} x_{i,j} = d_j \textrm{ for all } j \in N''$$

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


For each node $i \in N$ the difference between the total outgoing and incoming flow must be equal to the supply $b_i$, i.e. 

$$\underbrace{\sum_{(i,j)\in A} x_{i,j}}\_{\textrm{flow out of } i} - \underbrace{\sum_{(j,i)\in A} x_{j,i}}\_{\textrm{flow into } i} = b_i \textrm{ for all } i\in N$$

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

$$\sum_{(i,j)\in A} x_{i,j} - \sum_{(j,i)\in A} x_{j,i} = b_i \textrm{ for all } i\in N$$

$$l_{i,j} \leq x_{i,j} \leq u_{i,j} \textrm{ for all } (i,j)\in A$$


> [!IMPORTANT]
> The minimum cost network flow problem can only be solved if supply and demand are balanced, i.e., if $$\sum_{i\in N} b_i = 0$$

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

---

Although, we can solve these problems using the simplex algorithm, there are even more efficient algorithms which exploit the special structure of these problems.


