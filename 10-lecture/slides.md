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

- [Google OR-Tools: CP-SAT](https://developers.google.com/optimization/cp/cp_solver)
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
- In each of the 9 areas all numbers must be different.
- The given numbers must not be changed.

---

### CP Model: Sudoku

```ampl
param given {1..9, 1..9} integer, in 0..9;
        # given[i,j] > 0 is the value given for row i, col j
        # given[i,j] = 0 means no value given

var x {1..9, 1..9} integer, in 1..9;
        # x[i,j] = the number assigned to the cell in row i, col j

subject to 

GivenValues {i in 1..9, j in 1..9: given[i,j] > 0}:
   x[i,j] = given[i,j];
        # assign given values

RowConstraints {i in 1..9}:
   alldiff {j in 1..9} x[i,j];
        # cells in the same row must be assigned distinct numbers

ColumnConstraints {j in 1..9}:
   alldiff {i in 1..9} x[i,j];
        # cells in the same column must be assigned distinct numbers

AreaConstraints {I in 1..9 by 3, J in 1..9 by 3}:
   alldiff {i in I..I+2, j in J..J+2} x[i,j];
        # cells in the same area must be assigned distinct numbers
```

---

### Exercise: MIP equivalent

Try to model Sudoku as a MIP.
