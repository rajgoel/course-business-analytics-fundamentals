# AMPL, JuMP, and Google OR-Tools

===

<!-- .slide: data-auto-animate="true" -->

## AMPL (A Mathematical Programming Language)

---

## AMPL (A Mathematical Programming Language)

<!-- .slide: data-auto-animate="true" -->

AMPL is a modelling language that can be used to describe and solve linear programs (and others).

===

### What does AMPL do ?

---

We write linear programs like

maximise $3x + 5y$

subject to
$$x \leq 4$$
$$y \leq 6$$
$$3x + 2y \leq 18$$

---

Most solvers use the standard form to solve linear programs, i.e.,

minimise $c^Tx$

subject to
$$Ax=b$$
$$x \geq 0$$


---

AMPL automatically does the translation for us.

---

### Solvers

AMPL has interfaces to various different solvers, e.g.

- open source solvers: e.g. `lpopt`, `highs`, or `cbc`
- commercial solvers: e.g. `minos`, `cplex`, `gurobi`


The solver is the code that actually does the optimisation.

===

### AMPL book

The [AMPL book](https://ampl.com/resources/the-ampl-book/) provides comprehensive information on how to use AMPL.


===

### AMPL console

<!-- .slide: data-auto-animate="true" -->

---

### AMPL console

<!-- .slide: data-auto-animate="true" -->

The AMPL console provides a command prompt allowing us to formulate and solve optimisation problems.

```ampl
ampl:
```

---

AMPL has two types of commands, i.e., a set of commands

- to formulate an optimisation problem and
- to interact with the solver.

---

### Model files

Throughout this course we assume that the commands to formulate a model are stored in a separate model file with suffix `.mod`.

> [!TIP]
> In your AMPL installation folder, you can find several examples of such model files. These can be opened and modified with any text editor.

---

### Example: Wyndor Glass Co

`wyndor.mod`:

```ampl[]
# Variable declaration
var x1 >= 0;
var x2 >= 0;
# Objective function
maximize profit: 3000 * x1 + 5000 * x2;
subject to
# Constraints
capacity1: x1 <= 4;
capacity2: 2*x2 <= 12;
capacity3: 3*x1 + 2*x2 <= 18;
```

---

### AMPL console basics

```ampl[2|3-5|6-8|1|1-8]
ampl: reset;
ampl: model wyndor.mod;
ampl: solve;
MINOS 5.51: optimal solution found.
2 iterations, objective 36000
ampl: display x1, x2;
x1 = 2
x2 = 6
```

- The model is loaded with the command `model`.
- The problem is solved with the command `solve`.
- The solution can be shown with the command `display`.
- Whenever we change the model, we must tell AMPL to `reset` before we load the model. 

---

AMPL allows to change the solver used without the need to adapt the model.

```ampl [3-5]
ampl: reset;
ampl: model wyndor.mod;
ampl: option solver gurobi;
ampl: solve;
Gurobi 8.1.0: optimal solution; objective 36000
ampl: display x1, x2;
x1 = 2
x2 = 6
```

---

#### Closing semicolons

Note that every command must be followed by a semicolon (`;`).

```ampl [4-5]
ampl: reset;
ampl: model wyndor.mod;
ampl: option solver gurobi;
ampl: solve
ampl? 
```

<span class="fragment">
If you forget to add the semicolon after a command, you can enter it on the next line. 

```ampl [4-7]
ampl: reset;
ampl: model wyndor.mod;
ampl: option solver gurobi;
ampl: solve
ampl? ;
Gurobi 8.1.0: optimal solution; objective 36000
ampl:
```
</span>

---

#### Change the working directory

To change the working directory you can use the commmand `cd`. For example, if you want to load the model `bigprod.mod` which is shipped with AMPL and if this file is located in directory `/opt/ampl.linux64/models` you can use

```ampl
ampl: cd /opt/ampl.linux64/models;
ampl: model bigprod.mod;
ampl: option solver gurobi;
ampl: solve;
```

===

### Model formulation with AMPL

---

#### Comments

To include explanations that are ignored by AMPL you can add
- inline comments after a `#` symbol or 
- multi-line comments between `/*` and `*/`.

```ampl
# This is an inline comment

/* This is a 
   multi-line 
   comment */
```

---


#### Variable declaration

Variables are declared with the keyword `var` and (optional) lower and upper bounds.

```ampl
var x1;
var x2 >= 0;
var x3 >= 0, <= 6;
```


---

#### Objective function

The objective function is provided with the keyword `maximize` or `minimize`, a name followed by a colon (`:`), and the respective expression.

```ampl
maximize profit: 3000 * x1 + 5000 * x2;
```

In this example, the name of the objective function is `profit`.

---

#### Constraints

Constraints are provided with the keyword `subject to`. Each constraint is provided with a name followed by a colon (`:`), and the respective equation or inequality.

```ampl
subject to
capacity1: x1 <= 4;
capacity2: 2*x2 <= 12;
capacity3: 3*x1 + 2*x2 <= 18;
```

In this example, the constraint names are `capacity1`, `capacity2`, and `capacity3`.


---

#### Closing semicolons

Note that every declaration of a variable, objective function, or constraint must end with a semicolon ( `;` ).

```ampl[5-6]
# Variable declaration
var x1 >= 0;
var x2 >= 0;
# Objective function
maximize profit: 3000 * x1 + 5000 * x2 # The semicolon is missing here!!!
subject to
# Constraints
capacity1: x1 <= 4;
capacity2: 2*x2 <= 12;
capacity3: 3*x1 + 2*x2 <= 18;
```

<span class="fragment">

Without the semicolon, you obtain an error upon loading the model.

```ampl[]
ampl: model mymodel.mod;
mymodel.mod, line 6 (offset 144):
	syntax error
context:   >>> subject  <<< to
ampl:
```

Note that the error actually points to the next line, because that is where AMPL realises that something is wrong.
</span>

---

#### Whitespaces and line breaks

Whitespaces and line breaks can be used to format files and will be ignored by AMPL.

```ampl[]
# Variable declaration
var x1 >= 0;
var x2 >= 0;

# Objective function
maximize profit: 
	3000 * x1 + 5000 * x2;

subject to
# Constraints
capacity1:     x1          <=  4;
capacity2:          2 * x2 <= 12;
capacity3: 3 * x1 + 2 * x2 <= 18;
```

---

#### Case sensitivity

Note that AMPL is case-sensitive.

```ampl [6|7-10]
ampl: reset;
ampl: model wyndor.mod;
ampl: option solver gurobi;
ampl: solve;
Gurobi 8.1.0: optimal solution; objective 36000
ampl: display X1, X2;
X1 is not defined
context:  display  >>> X1, <<<  X2;
syntax error
context:  display X1,  >>> X2; <<< 
ampl:
```

===

### Scripting in AMPL

---

#### Executing a script

To avoid repeating the same commands over and over again we can create a script including all relevant commands, e.g. `myscript.run`:

```ampl[]
reset;
model wyndor.mod;
option solver gurobi;
solve;
display x1, x2;
```

The script can be executed in the AMPL console:
```ampl[]
ampl: include myscript.run;
Gurobi 8.1.0: optimal solution; objective 36000
x1 = 2
x2 = 6
ampl:
```

---

#### The `print` command

The `print` command allows to print text and solver results.

```ampl[]
reset;
print "Load problem";
model wyndor.mod;
print "Solve problem";
option solver gurobi;
solve;
print "The profit is", profit;
print "The number of doors and windows are", x1, "and", x2;
```
The output of the script is:
```ampl[]
ampl: include myscript.run;
Load problem
Solve problem
Gurobi 8.1.0: optimal solution; objective 36000
The profit is 36000
The number of doors and windows are 2 and 6
ampl: 
```


---

#### The `printf` command

The `printf` command allows to specify an output format for numbers. 

```ampl[]
reset;
model wyndor.mod;
option solver gurobi;
solve;
# print profit with 2 digits after the decimal point
printf "The profit is %.2f\n", profit; 
# print variable values as integers
printf "The number of doors and windows are %d and %d.\n", x1, x2;
```

The output of the script is:

```ampl[]
ampl: include myscript.run;
Gurobi 8.1.0: optimal solution; objective 36000
The profit is 36000.00.
The number of doors and windows are 2 and 6.
ampl: 
```

===


### Example: <a href="markdown-viewer.html?file=02-lab/metalco.md" data-preview-link>Metalco Company  <i class="fa-solid fa-magnifying-glass"></i></a>

How can we model and solve this decision problem with AMPL?

> [!TIP]
> Create a model file `metalco.mod` and a script file `metalco.run`.

===

<!-- .slide: data-auto-animate="true" -->

## JuMP

---

## JuMP

<!-- .slide: data-auto-animate="true" -->

[JuMP](https://jump.dev/) allows you to model and solve linear programs (and others) from within Julia programs.

---

### Example: Wyndor Glass Co

```julia[1-2|4|6-8|10-11|13-16|18-19|21-25]
using JuMP
using HiGHS  # Solver

model = Model(HiGHS.Optimizer)

# Variables
@variable(model, x1 >= 0)  # Product 1
@variable(model, x2 >= 0)  # Product 2

# Objective: Maximize profit
@objective(model, Max, 3 * x1 + 5 * x2)

# Constraints
@constraint(model, x1 <= 4)                   # Plant 1
@constraint(model, x2 <= 6)                   # Plant 2
@constraint(model, 3 * x1 + 2 * x2 <= 18)     # Plant 3

# Solve
optimize!(model)

# Results
println("Status: ", termination_status(model))
println("x1 = ", value(x1))
println("x2 = ", value(x2))
println("Profit = ", objective_value(model))
```
<!-- .element: style="height:600px;" -->


===

<!-- .slide: data-auto-animate="true" -->

## Google OR-Tools

---

## Google OR-Tools

<!-- .slide: data-auto-animate="true" -->

[MathOpt](https://developers.google.com/optimization/math_opt) from Google OR-Tools allows you to model and solve linear programs (and others) from within Python or C++ programs.

---

<!--
# Create a virtual environment in a folder called venv
python3 -m venv venv

# Activate it
source venv/bin/activate

# Install OR-Tools in the venv
pip install --upgrade pip
pip install ortools

# Run your script inside the venv
python wyndor.py
-->

### Example: Wyndor Glass Co

```python[1|3|5-7|9-10|12-15|17-18|20-24]
from ortools.math_opt.python import mathopt

model = mathopt.Model(name="wyndor")

# Variables
x1 = model.add_variable(lb=0.0, name="x1")
x2 = model.add_variable(lb=0.0, name="x2")

# Objective
model.maximize(3 * x1 + 5 * x2)

# Constraints
model.add_linear_constraint(x1 <= 4.0, name="Plant1")
model.add_linear_constraint(x2 <= 6.0, name="Plant2")
model.add_linear_constraint(3 * x1 + 2 * x2 <= 18.0, name="Plant3")

# Solve
result = mathopt.solve(model, mathopt.SolverType.HIGHS)
    
# Results
print("Status:", result.termination.reason)
print("x1 =", result.variable_values()[x1])
print("x2 =", result.variable_values()[x2])
print("Profit =", result.objective_value())
```
<!-- .element: style="height:600px;" -->


