## Integer programming

---

### Definition

An integer program (IP) is a linear program in which **some or all of the variables are restricted to be integers**.

> ![NOTE]
> As most integer programs do not only contain integer variables, the terms **mixed integer program (MIP)**, **mixed integer linear program (MILP)** or **integer program (IP)** are often used synonymously. Integer programs in which each integer variable can only take a value of 0 or 1  are called **binary programs**.


---

### Example: Integer program

maximise $-x + 4y$

subject to

$-10x+20y \leq 22$

$5x+10y \leq 49$

$x \leq 5$


$x \geq 0, y \geq 0$

$x$ and $y$ are integers <!-- .element class="highlight" -->

---

### Solution space

<div data-load="05-lecture/integer_program.svg">

===


### Linear relaxation

By removing the integer constraints we obtain a LP which is called the linear relaxation of the IP.

> [!NOTE]
> The optimal solution of the linear relaxation is **at least as good** as the optimal solution of the integer program.

---

We can solve the linear relaxation easily (e.g. using the simplex method).

---

If the solution of the linear relaxation is integer, we also have found a solution of the IP.

---

If the solution of the linear relaxation is not integer, we can try to modify the solution to obtain an integer solution.

---

### Example: Linear relaxation of the IP

maximise $-x + 4y$

subject to

$-10x+20y \leq 22$

$5x+10y \leq 49$

$x \leq 5$


$x \geq 0, y \geq 0$

$\style{text-decoration:line-through}{x}$ and $\style{text-decoration:line-through}{y}$ are integers <!-- .element class="highlight" style="text-decoration: line-through;" -->


---

#### Linear relaxation and integer solutions

<span class="fragment"></span>
<span class="fragment"></span>
<span class="fragment"></span>
<span class="fragment"></span>

<div data-animate data-load="05-lecture/integer_program.svg">
<!--
{
"setup": [
{
"element": "#objective", 
"modifier": "dy",
"parameters": [ 182.5 ]
},
{
"modifier": "circle",
"parameters": [ { "id": "relaxation" ,"cx": 530, "cy": 250, "r": 7.5, "fill": "firebrick"} ]
},
{
"modifier": "text",
"parameters": [ "8.2", { "x": 505, "y": 180, "fill": "firebrick", "font-size": 40, "font-family": "Times New Roman", "font-weight": "bold" } ]
},
{
"modifier": "text",
"parameters": [ "4.0", { "id": "closest", "opacity": 0, "x": 525, "y": 285, "fill": "black", "font-size": 40, "font-family": "Times New Roman", "font-weight": "bold" } ]
},
{
"modifier": "group",
"parameters": [ { "id": "next", "opacity": 0 } ]
},
{
"element": "#next",
"modifier": "text",
"parameters": [ "5.0", { "x": 450, "y": 340, "fill": "black", "font-size": 40, "font-family": "Times New Roman", "font-weight": "bold" } ]
},
{
"element": "#next",
"modifier": "text",
"parameters": [ "3.0", { "x": 595, "y": 340, "fill": "black", "font-size": 40, "font-family": "Times New Roman", "font-weight": "bold" } ]
},
{
"modifier": "text",
"parameters": [ "6.0", { "id": "optimal", "opacity": 0, "x": 350, "y": 340, "fill": "firebrick", "font-size": 40, "font-family": "Times New Roman", "font-weight": "bold" } ]
},
{
"modifier": "circle",
"parameters": [ { "id": "solution", "opacity": 0, "cx": 350, "cy": 350, "r": 7.5, "fill": "firebrick"} ]
},
{
"modifier": "circle",
"parameters": [ { "id": "focus", "opacity": 0.7, "cx": 530, "cy": 250, "r": 510, "fill":"none", "stroke": "black", "stroke-width": 900} ]
}
],
"animation": [
[],
[
{
"element": "#focus",
"modifier": "attr",
"duration": 1000,
"parameters": [ { "r": 560} ]
},
{
"element": "#closest",
"modifier": "opacity",
"parameters": [ 1 ]
}
],
[
{
"element": "#focus",
"modifier": "attr",
"duration": 1000,
"parameters": [ { "r": 635} ]
},
{
"element": "#next",
"modifier": "opacity",
"parameters": [ 1 ]
}
],
[
{
"element": "#focus",
"modifier": "attr",
"duration": 1000,
"parameters": [ { "r": 700} ]
},
{
"element": "#optimal",
"modifier": "opacity",
"parameters": [ 1 ]
}
],
[
{
"element": "#focus",
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

Modifying a fractional solution can lead to **infeasible solutions** for the IP or **solutions of very bad quality**.

---

Modifying a fractional solution may, however, be acceptable if the fractional part of the solution is small compared to the value of the closest integer (and if feasibility can be warranted).

---

The optimal solution of the integer program can be very different from the solution of the linear relaxation.

===

### Enumeration ###

---

One approach for solving integer programs is to enumerate all feasible solutions and to determine the best of these solutions.

---

<div data-animate data-load="05-lecture/integer_program.svg">
<!--
{
"setup": [
{
"element": "#objective", 
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"element": "#feasible", 
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"modifier": "function() {var clone = this.findOne('#points').clone(); clone.attr({'id': 'enumeration'}); clone.addTo(this);}"
},
{
"element": "#enumeration > circle", 
"modifier": "attr",
"parameters": [ { "opacity": 0, "r": 7.5, "fill": "black"} ]
}
],
"animation": [
[{
"element": "#enumeration > circle", 
"modifier": "opacity",
"parameters": [ 1 ]
}]
]
}
-->
</div>


---

Unfortunately, complete enumeration is often not possible because the number of solutions can grow exponentially with the number of integer variables.


---

Let us consider integer programs which only have binary variables (i.e. variables which can only take values 0 or 1).<br><br>

- For 1 binary variable we can have up to 2 solutions. <!-- .element: class="fragment" data-fragment-index="1" -->
- For 2 binary variables we can have up to 4 solutions. <!-- .element: class="fragment" data-fragment-index="2" -->
- ... <!-- .element: class="fragment" data-fragment-index="3" -->
- For 10 binary variables we can have up to 1024 solutions. <!-- .element: class="fragment" data-fragment-index="3" -->
- ... <!-- .element: class="fragment" data-fragment-index="4"  -->
- For 100 binary variables we can have up to 1267650600228229401496703205376 solutions. <!-- .element: class="fragment" data-fragment-index="4" -->


===

### Branch & bound ###

---

Branch & bound is a solution technique in which an integer program is solved by solving a sequence of linear relaxations until the optimal solution is found.

---

Each branch is an IP with additional constraints and is again solved using branch & bound.

---

Branch & bound exploits the fact, that a solution to the IP cannot be better than the solution of its linear relaxation, i.e. the objective function value of the linear relaxation is a *bound* to the objective function value of the IP.

---

#### Step 1: Select a branch ####

- Select an unsolved branch (this may be the original problem).
- If no such branch exists, the algorithm is done.

---

#### Step 2: Solve linear relaxation of branch ####

- Solve the linear relaxation for the branch.
- If the linear relaxation has no feasible solution, discard branch and repeat Step 1.
- If the linear relaxation has an integer solution, store solution and repeat Step 1.

---

### Step 2: Bounding

- If the linear relaxation has a solution that is worse than a previously found integer solution, discard branch and repeat Step 1.

---

### Step 3: Branching

- If the linear relaxation has a solution $x$ for which an integer variable $x_i$ has a fractional value $z$, create two branches:
	- **Branch 1:** $x_i \leq \lfloor z \rfloor$
	- **Branch 2:** $x_i \geq \lceil z \rceil$
- Repeat Step 1.

---

#### Example ####

maximise $-x + 4y$

subject to

$-10x+20y \leq 22$

$5x+10y \leq 49$

$x \leq 5$


$x \geq 0, y \geq 0$

$x$ and $y$ are integers

---

#### Example: Branch and bound ####

<div style="min-height: 1.5em">
    <span class="fragment appear-disappear">Solution: $(x,y) = (3.8,3)$</span>
    <span class="fragment appear-disappear">Branch $x \geq 4$</span>
    <span class="fragment appear-disappear">Branch $x \geq 4$ ⟶ $(x,y) = (4,2.9)$</span>
    <span class="fragment appear-disappear">Branch $x \geq 4$, $y \geq 3$</span>
    <span class="fragment appear-disappear">Branch $x \geq 4$, $y \geq 3$ ⟶ infeasible</span>
    <span class="fragment appear-disappear">Discard branch: $x \geq 4$, $y \geq 3$</span>
    <span class="fragment appear-disappear">Branch $x \geq 4$, $y \leq 2$</span>
    <span class="fragment appear-disappear">Branch $x \geq 4$, $y \leq 2$ ⟶ $(x,y) = (4,2)$</span>
    <span class="fragment appear-disappear">$(x,y) = (4,2)$ is an integer solution</span>
    <span class="fragment appear-disappear">Branch $x \leq 3$</span>
    <span class="fragment appear-disappear">Branch $x \leq 3$ ⟶ $(x,y) = (3,2.6)$</span>
    <span class="fragment appear-disappear">Branch $x \leq 3$, $y \geq 3$</span>
    <span class="fragment appear-disappear">Branch $x \leq 3$, $y \geq 3$ ⟶ infeasible</span>
    <span class="fragment appear-disappear">Discard branch: $x \leq 3$, $y \geq 3$</span>
    <span class="fragment appear-disappear">Branch $x \leq 3$, $y \leq 2$</span>
    <span class="fragment appear-disappear">Branch $x \leq 3$, $y \leq 2$ ⟶ $(x,y) = (1.8,2)$</span>
    <span class="fragment appear-disappear">Branch $x \leq 3$, $y \leq 2$, $x \geq 2$</span>
    <span class="fragment appear-disappear">Branch $x \leq 3$, $y \leq 2$, $x \geq 2$⟶ $(x,y) = (2,2)$</span>
    <span class="fragment appear-disappear">$(x,y) = (2,2)$ is an integer solution</span>
    <span class="fragment appear-disappear">Branch $x \leq 3$, $y \leq 2$, $x \leq 1$</span>
    <span class="fragment appear-disappear">Branch $x \leq 3$, $y \leq 2$, $x \leq 1$ ⟶ $(x,y) = (1,1.6)$</span>
    <span class="fragment appear-disappear">$(x,y) = (1,1.6)$ is worse than best integer solution</span>
    <span class="fragment appear-disappear">All branches solved, $(x,y) = (2,2)$ is optimal</span>
</div>

<div data-animate data-load="05-lecture/branch_and_bound.svg">
<!--
{
"animation": [
[],
[
{ "element": "#solution_root",  "modifier": "opacity", "parameters": [ 1 ] },
{ "element": "#infeasible_x_3_4", "modifier": "opacity", "delay": 2000, "duration": 1000, "parameters": [ 1 ] }
],
[
{ "element": "#branch_x_geq_4", "modifier": "opacity", "parameters": [ 1 ] },
{ "element": "#solution_root",  "modifier": "opacity", "parameters": [ 0 ] }
],
[
{ "element": "#solution_x_geq_4", "modifier": "opacity", "parameters": [ 1 ]},
{ "element": "#infeasible_y_2_3", "delay": 2000, "modifier": "opacity", "duration": 1000, "parameters": [ 1 ] }
],
[
{ "element": "#branch_x_any_y_geq_3", "modifier": "opacity", "parameters": [ 1 ] },
{ "element": "#solution_x_geq_4", "modifier": "opacity", "parameters": [ 0 ] }
],
[],
[
{ "element": "#branch_x_any_y_geq_3",  "modifier": "opacity", "delay": 2000, "duration": 1000, "parameters": [ 0 ] }
],
[
{ "element": "#branch_x_any_y_leq_2", "modifier": "opacity", "parameters": [ 1 ] }
],
[
{ "element": "#solution_x_geq_4_y_leq_2",  "modifier": "opacity", "parameters": [ 1 ] }
],
[
{ "element": "#branch_x_any_y_leq_2", "modifier": "opacity", "parameters": [ 0 ] },
{ "element": "#branch_x_geq_4",  "modifier": "opacity", "parameters": [ 0 ] },
{ "element": "#infeasible_y_2_3",  "modifier": "opacity", "parameters": [ 0 ] },
{ "element": "#solution_x_geq_4_y_leq_2 > line",  "modifier": "opacity", "parameters": [ 0 ] }
],
[
{ "element": "#branch_x_leq_3",  "modifier": "opacity", "parameters": [ 1 ] }
],
[
{ "element": "#solution_x_leq_3",  "modifier": "opacity", "parameters": [ 1 ] },
{ "element": "#infeasible_y_2_3",  "delay": 2000, "modifier": "opacity", "duration": 1000, "parameters": [ 1 ] }
],
[
{ "element": "#branch_x_any_y_geq_3",  "modifier": "opacity", "parameters": [ 1 ] },
{ "element": "#solution_x_leq_3",  "modifier": "opacity", "parameters": [ 0 ] }
],
[],
[
{ "element": "#branch_x_any_y_geq_3",  "modifier": "opacity", "delay": 2000, "duration": 1000, "parameters": [ 0 ] }
],
[
{ "element": "#branch_x_any_y_leq_2",  "modifier": "opacity", "parameters": [ 1 ] }
],
[
{ "element": "#solution_x_leq_3_y_leq_2",  "modifier": "opacity", "parameters": [ 1 ] }, 
{ "element": "#infeasible_x_1_2",  "delay": 2000, "modifier": "opacity", "duration": 1000, "parameters": [ 1 ] }
],
[
{ "element": "#branch_x_leq_3_y_leq_2_x_geq_2",  "modifier": "opacity", "parameters": [ 1 ] },
{ "element": "#solution_x_leq_3_y_leq_2",  "modifier": "opacity", "parameters": [ 0 ] }
], 
[
{ "element": "#solution_x_leq_3_y_leq_2_x_geq_2",  "modifier": "opacity", "parameters": [ 1 ] }
],
[
{ "element": "#branch_x_leq_3_y_leq_2_x_geq_2",  "modifier": "opacity", "parameters": [ 0 ] },
{ "element": "#solution_x_leq_3_y_leq_2_x_geq_2 > line",  "modifier": "opacity", "parameters": [ 0 ] }
],
[
{ "element": "#branch_x_leq_3_y_leq_2_x_leq_1",  "modifier": "opacity", "parameters": [ 1 ] } 
],
[
{ "element": "#solution_x_leq_3_y_leq_2_x_leq_1",  "modifier": "opacity", "parameters": [ 1 ] } 
], 
[
{ "element": "#solution_x_leq_3_y_leq_2_x_leq_1",  "modifier": "opacity", "parameters": [ 0 ] } 
],
[
{ "element": "#branch_x_leq_3_y_leq_2_x_leq_1",  "modifier": "opacity", "parameters": [ 0 ] },
{ "element": "#branch_x_any_y_leq_2",  "modifier": "opacity", "parameters": [ 0 ] },
{ "element": "#branch_x_leq_3",  "modifier": "opacity", "parameters": [ 0 ] }
]
]
}
-->
</div>



---

### Implementations of branch & bound ###

Many tools for solving linear programs have also implemented a branch & bound approach for solving integer programs.

Therefore, our focus is on modelling integer programs and not on knowing the solution algorithms.

---

#### Computational effort ####

The branch & bound approach may have to solve many linear relaxations. Although solving a linear program is generally very fast, solving many of them can require a lot of time.

---

#### Specialised approaches ####

For many integer programs generic branch & bound implementations are not competitive and specialised algorithms for the problem class under consideration may be required to find optimal solutions within an acceptable amount of time.

===


#### Binary decisions ####

---

A binary decision can be represented by a binary variable $x$ with<br>

$x =\left\\{ \begin{array}{cl}
0 & \textrm{if decision } i \textrm{ is no}\\\\
1 & \textrm{if decision } i \textrm{ is yes}\\\\
\end{array}
\right.$

---

#### Example: California Manufacturing Co ####

---

The California Manufacturing Co is considering expansion by building
a new factory in either Los Angeles or San Francisco, or perhaps even in both cities.

---


| Factory location | Net present value | Costs         |
|------------------|-------------------|---------------|
| Los Angeles      | 9 million USD     | 6 million USD |
| San Francisco    | 5 million USD     | 3 million USD |

---

It also is considering building at most one new warehouse, but the choice of location is
restricted to a city where a new factory is being built.

---

| Warehouse location | Net present value | Costs         |
|--------------------|-------------------|---------------|
| Los Angeles        | 6 million USD     | 5 million USD |
| San Francisco      | 4 million USD     | 2 million USD |

---

The total capital available is 10 million USD.

---

The objective is to find the feasible combination of alternatives that maximises the total net present value.

---

In this problem there are four basic decisions to be made:

1. Should the company build a factory in Los Angeles?
2. Should the company build a factory in San Francisco?
3. Should the company build a warehouse in Los Angeles?
4. Should the company build a warehouse in San Francisco?

---

Each decision can be represented by a binary variable $x_i$ with

$$
x_i =\left\\{ \begin{array}{cl}
0 & \textrm{if decision } i \textrm{ is no}\\\\
1 & \textrm{if decision } i \textrm{ is yes}\\\\
\end{array}
\right.
$$

---

The integer program is

maximise $9x_1 + 5x_2 + 6x_3 + 4x_4$

subject to

$6x_1 + 3x_2 + 5x_3 + 2x_4 \leq 10\ $ (financial constraints)

$x_3 + x_4 \leq 1\ $ (at most one warehouse)

$x_3 \leq x_1\ $ (warehouse requires factory)

$x_4 \leq x_2\ $ (warehouse requires factory)

$x_1,x_2,x_3,x_4 \in \\{0,1\\}$

===

### Case study: Capacity Concerns ###

<small>Please read the case *Capacity Concerns* from *Hillier, Lieberman. Introduction to Operations Research, McGraw-Hill*.</small>

---

> Emily first decides to evaluate the number and type of servers to purchase on a month-to-month basis. For each month, formulate an IP model to determine which servers Emily should purchase in that month to minimize costs in that month and support the new users. How many and which types of servers should she purchase in each month? How much is the total cost of the plan?

Solve this problem.

---

> Emily realizes that she could perhaps achieve savings if she bought a larger server in the initial months to support users in the final months. She therefore decides to evaluate the number and type of servers to purchase over the entire planning period. Formulate an IP model to determine which servers Emily should purchase in which months to minimize total cost and support all new users. How many and which types of servers should she purchase in each month? How much is the total cost of the plan?

---

> Why is the answer using the first method different from that using the second method?

---

> Are there other costs that Emily is not accounting for in her problem formulation? If so, what are they?

---

> What further concerns might the various departments of CommuniCorp have regarding the intranet?

===

### Summary ###

- We learned how integer programming differs from linear programming.
- We walked through solving integer programs with branch and bound.
- We learned how to model integer programs.
