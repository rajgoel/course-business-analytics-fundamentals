# Examples: Packing, Routing, Scheduling

===

## Exercise: Knapsack problem

> Given a set $I$ of items, where each item $i\in I$ has a given weight $w_i$ and value $v_i$,
> the knapsack problem is the problem of finding a selection of items to be selected such that 
> the given capacity $W$ of the knapsack is not exceed and the total value is maximised.

Model the knapsack problem as an integer program.

---

### Decision variables

$$x_i =
\begin{cases}
1 & \text{if item } i \text{ is selected} \\\\
0 & \text{otherwise}
\end{cases}
$$

---

### Objective

maximise $\displaystyle\sum_{i\in I} v_i x_i$

---

### Capacity constraints

$$\sum_{i \in I} w_i x_i \leq W$$

---

### Binaries

$$x_i \in \lbrace 0,1
brace  \quad \textrm{ for all } i \in I$$

---

### Knapsack problem

maximise $\displaystyle\sum_{i\in I} v_i x_i$

subject to

$$\sum_{i \in I} w_i x_i \leq W$$
$$x_i \in \lbrace 0,1
brace  \quad \textrm{ for all } i \in I$$

===

## Exercise: Bin packing problem

> Given a set $I$ of items, where each item $i \in I$ has a size $s_i$, the bin packing problem is the problem of assigning all items to as homogeneous bins 
> such that the total number of bins used is minimised and the total size of all items assigned to any bin does not exceed the bin's given capacity $C$.

Model the bin packing problem as an integer program assuming a large enough set $B$ of bins.

---

### Decision variables

For each $i\in I$, $b\in B$:

$$
x_{i,b} =
\begin{cases}
1 & \text{if item } i \text{ is placed in bin } b \\\\
0 & \text{otherwise}
\end{cases}
$$

For each $b\in B$:
$$
y_b =
\begin{cases}
1 & \text{if bin } b \text{ is used} \\\\
0 & \text{otherwise}
\end{cases}
$$

---

### Objective

minimise $\displaystyle\sum_{b\in B} y_b$

---

### Constraints

---

Each item is assigned to exactly one bin:

$$\sum_{b \in B} x_{i,b} = 1 \quad \textrm{ for all } i \in I$$

---


The total size of all items assigned to any bin does not exceeded the bin's capacity:

$$\sum_{i \in I} s_i x_{i,b} \leq C y_b \quad \textrm{ for all } b \in B$$

---

### Binaries

$$x_{i,j} \in \lbrace 0,1
brace  \quad \textrm{ for all } i \in I, b \in B$$


---

### Bin packing problem

minimise $\displaystyle\sum_{b\in B} y_b$

subject to

$$\sum_{b \in B} x_{i,b} = 1 \quad \textrm{ for all } i \in I$$
$$\sum_{i \in I} s_i x_{i,b} \leq C y_b \quad \textrm{ for all } b \in B$$
$$x_{i,b} \in \lbrace 0,1
brace  \quad \textrm{ for all } i \in I, b \in B$$

> [!NOTE]
> $y_b$ does not need an explicit upper bound. In an optimal solution $y_b$ will not be unnecessarily large.

===

## Example: Travelling Salesperson Problem

> Given a set $I$ of cities and a travel cost $c_{i,j}$ for each ordered pair of cities $(i,j)$,
> the travelling salesperson problem is the problem of finding a tour that visits each city exactly once, returns to the starting city, and has minimum total travel cost.

Model the travelling salesperson problem as an integer program.

---

### Decision variables

$$
x_{i,j} =
\begin{cases}
1 & \text{if the tour goes from city } i \text{ to } j \\\\
0 & \text{otherwise}
\end{cases}
$$

---

### Step 3: Objective Function

minimise $\displaystyle\sum_{i\in I} \sum_{j \in I} c_{i,j} x_{i,j}$

---


### Constraints

---

Arrive and depart once at each city:

$$\sum_{j\in I} x_{i,j} = 1 \quad \textrm{ for all } i \in I$$

$$\sum_{i\in I} x_{i,j} = 1 \quad \textrm{ for all } j \in I$$

---

### Binaries

$$x_{i,j} \in \lbrace 0,1
brace  \quad \textrm{ for all } i \in I, j \in I$$

---

### Incomplete model

minimise $\displaystyle\sum_{i\in I} \sum_{j \in I}^n c_{i,j} x_{i,j}$

subject to

$$\sum_{j\in I} x_{i,j} = 1 \quad \textrm{ for all } i \in I$$
$$\sum_{i\in I} x_{i,j} = 1 \quad \textrm{ for all } j \in I$$
$$x_{i,j} \in \lbrace 0,1
brace  \quad \textrm{ for all } i \in I, j \in I$$

> [!CAUTION]
> This model allows so-called **subtours**, i.e., multiple disconnected cycles.

---

### Subtour elimination

Subtours can be eliminated by adding auxiliary decision variables

$$u_i = \text{position of city } i  \quad \textrm{ for all } i \in I$$

and respective constraints

$$u_j \geq u_i + 1 - M (1 - x_{i,j}) \quad \forall i \in I , j \in I \setminus \lbrace  i^* 
brace $$
$$u_i \in \lbrace 1,2, \ldots, |I|
brace  \quad \textrm{ for all } i \in I$$

where $i^*$ is a dedicated starting city.

---

### Travelling Salesperson Problem

minimise $\displaystyle\sum_{i\in I} \sum_{j \in I}^n c_{i,j} x_{i,j}$

subject to

$$\sum_{j\in I} x_{i,j} = 1 \quad \textrm{ for all } i \in I$$
$$\sum_{i\in I} x_{i,j} = 1 \quad \textrm{ for all } j \in I$$
$$u_j \geq u_i + 1 - M (1 - x_{i,j}) \quad \forall i \in I , j \in I \setminus \lbrace  i^* 
brace $$

$$x_{i,j} \in \lbrace 0,1
brace  \quad \textrm{ for all } i \in I, j \in I$$
$$u_i \in \lbrace 1,2, \ldots, |I|
brace  \quad \textrm{ for all } i \in I$$

===

## Example: Minimum Tardiness Scheduling Problem

> Given a set $J$ of jobs, where each job $j \in J$ has a processing time $p_j$ and a due date $d_j$,
> the minimum total tardiness scheduling problem is the problem of finding a sequence in which to process all jobs on a single machine 
> so that the sum of the tardiness values $t_j = \max(0, c_j - d_j)$ is minimised, where $c_j$ is the completion time of job $j$.

Model the minimum total tardiness scheduling problem as an integer program.

---

### Decision variables

$$
x_{i,j} =
\begin{cases}
1 & \text{if job } i \text{ precedes job } j \\\\
0 & \text{otherwise}
\end{cases}
$$

$c_j$ and $t_j$ are auxiliary variables representing the completion time and tardiness of job $j$.


---

### Objective 

minimise $\displaystyle \sum_{j\in J} t_j$

---

### Constraints

---

Every job has one predecessor and one successor:

$$\sum_{j\in J} x_{i,j} = 1 \quad \textrm{ for all } i \in J$$

$$\sum_{i\in J} x_{i,j} = 1 \quad \textrm{ for all } j \in J$$

> [!NOTE]
> We assume that $j$ includes a dummy job $j^*$ indicating start and end.

---

Completion time:

$$c_j \geq c_i + p_j - M (1 - x_{i,j}) \quad \textrm{ for all } i \in J, j \in J\setminus \lbrace  j^* \rbrace$$

where $M$ is a large constant (e.g., sum of all processing times).

> [!NOTE]
> The completion time of the dummy job $j^*$ is unconstrained.

---


Tardiness:

$$t_j \geq c_j - d_j \quad \textrm{ for all } j \in J$$

$$t_j \geq 0 \quad \textrm{ for all } j \in J$$

> [!NOTE]
> $t_j = \max(0, c_j - d_j)$ is not linear and must not be used.

---

### Binaries

$$x_{i,j} \in \lbrace 0,1
brace  \quad \textrm{ for all } i \in J, j \in J$$

---

## Minimum Tardiness Scheduling Problem

minimise $\displaystyle\sum_{j\in J} t_j$

subject to

$$\sum_{j\in J} x_{i,j} = 1 \quad \textrm{ for all } i \in J$$
$$\sum_{i\in J} x_{i,j} = 1 \quad \textrm{ for all } j \in J$$

$$c_j \geq c_i + p_j - M (1 - x_{i,j}) \quad \textrm{ for all } i \in J, j \in J\setminus \lbrace  j^* \rbrace$$
$$t_j \geq c_j - d_j \quad \textrm{ for all } j \in J$$
$$t_j \geq 0 \quad \textrm{ for all } j \in J$$

$$x_{i,j} \in \lbrace 0,1
brace  \quad \textrm{ for all } i \in J, j \in J$$

where $M$ is a large constant (e.g., sum of all processing times).

> [!NOTE]
> $c_j$ and $t_j$ do not need explicit upper bounds. In an optimal solution they will not be unnecessarily large.

