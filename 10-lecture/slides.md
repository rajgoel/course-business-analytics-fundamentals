## Constrained programming

---

Linear programming, integer programming, and network optimisation assume a narrowly defined structure of the problem:

- variables must be **continuous or integer**,
- constraints must be **linear**, and
- the objective function must be **linear**.

---

**Constrained programming (CP)** is a (vaguely defined) term putting the focus on specifying a problem by stating variables and constraints allowing for a wide variety of constraints that cannot be used in integer programming.

> [!NOTE]
> Often, the goal is to only find a solution satisfying all constraints. The term **constraint optimisation** is used when an objective function is added.


---

By breaking with core assumptions of  linear and integer programming, constrained programs can no longer be solved with the simplex algorithm or branch and bound.

---

Instead, constraint programming relies on:

- **Constraint propagation:** Narrowing down variable domains by applying constraints.
- **Search strategies:** Exploring combinations of variable assignments (e.g., depth-first search).

> [!WARNING]
> Constraint propagation and exhaustive search typically require significantly more time to find an (optimal) solution compared to LP or MIP solvers - especially on large-scale problems.

---

The main benefit of CP is that it simplifies model formulation, by allowing

- `if-then-else` statements
- `alldifferent(x_1, x_2, ..., x_n )` requirements over a set of variables
- `notequal(x,y)` statements over a pair of variables
- non-linear expressions
- ...

Syntax and capabilities of CP solvers vary. 

---

### Solvers for CP models

Well-known solvers for CP models are:

- [Google OR-Tools: CP-SAT)](https://developers.google.com/optimization/cp/cp_solver)
- [CPLEX: CP Optimizer](https://www.ibm.com/products/ilog-cplex-optimization-studio/cplex-cp-optimizer)
- [Hexaly](https://www.hexaly.com/) 

These solvers use a variety of techniques that are not publically documented in detail. Hexaly strongly relies on meta-heuristic search (and not on constraint propagation).

---

CP models are mainly used when the **time required to model the problem** is more critical than the **time required to find an (optimal) solution**.

---

In many real-life cases, **optimality** of a solution **is not a goal**, because most **input parameters are estimates** anyhow.

---

Rather than sacrificing expressiveness in modelling, sacrificing solution quality may be more reasonable. Solvers like Hexaly can produce *good* solutions very quickly compared to MIP solvers.

===

### Example: Sudoku

![Sudoku](10-lecture/sudoku.png)

---

### Rules

- In every row all numbers must be different.
- In every column all numbers must be different.
- In each of the 9 blocks all numbers must be different.
- The given numbers must not be changed.

---

### CP Model: Sudoku

**Sets and variables:**
- The set of numbers $I = \lbrace 1,2,\ldots,9\rbrace$
- For each cell $(i,j)$, define a variable $x_{ij} \in I$

**Constraints:**

- If a number is given in cell $(i,j)  \in I \times I$, then fix $x_{ij}$ to that value.
- For each row $i\in I$, all values $x_{i,1}, x_{i,2}, \ldots, x_{i,9}$​ must be different.
- For each column $j\in I$, all values $x_{1,j}, x_{2,j}, \ldots, x_{9,j}$​ must be different.
- For each block indexed by $(k,h) \in \lbrace 1,2,3 \rbrace \times \lbrace 1,2,3 \rbrace$, the variables
  $$\begin{aligned}
 \big\lbrace x_{i,j} \ \mid\ 
  & i \in \lbrace 1 + 3(h-1), 2 + 3(h-1), 3 + 3(h-1) \rbrace,\\\\
  & j \in \lbrace 1 + 3(k-1), 2 + 3(k-1), 3 + 3(k-1) \rbrace \  \big\rbrace\\\\
\end{aligned}$$
  must be different.

---

### Exercise: MIP equivalent

Try to model Sudoku as a MIP.
