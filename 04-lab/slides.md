# Generic Models in AMPL, JuMP, and Google OR-Tools

===

## Generic Models & Data in AMPL

With AMPL we can create a generic model and use a script to load the parameters from a respective data file.

> [!TIP]
> We can use the following files:  
> - `<name>.mod`: the model file
> - `<name>.dat`: the data file
> - `<name>.run`: the script file


---

### Example: `production.mod` ####

```ampl[|2-3|4-6|8|10|13-14]
# Set and parameter declaration
set PRODUCTS;                              # set of products (I)
set RESOURCES;                             # set of resources (R)
param profit { PRODUCTS };                 # profit per unit of product i ( p_i )
param capacity { RESOURCES };              # capacity of resource r ( q_r )
param utilisation { PRODUCTS, RESOURCES }; # utilisation of resource r per unit of product i ( a_ir )
# Variable declaration
var production { PRODUCTS } >= 0;          # production quantity of product i ( x_i )
# Objective function
maximize TotalProfit: sum { i in PRODUCTS } profit[i] * production[i];
subject to
# Constraints
Limit {r in RESOURCES }: 
      sum { i in PRODUCTS } utilisation[i,r] * production[i] <= capacity[r];
```

---

### Example: `production.dat` ####

```ampl[|1-2|3-5|6-9|10-13]
set PRODUCTS:= doors windows;
set RESOURCES:= plant1 plant2 plant3;
param profit:=
 doors   3000
 windows 5000;
param capacity:=
 plant1  4
 plant2 12
 plant3 18;
param utilisation:
         plant1 plant2 plant3 :=
 doors   1      0      3
 windows 0      2      2;
```

---

### Example: `production.run` ####

```ampl[|1|2-3|4-5|6]
reset;                 # make sure that AMPL is reset
model production.mod;  # load the model (change file name if necessary)
data production.dat;   # load the data (change file name if necessary)
option solver gurobi;  # specify the solver (change if necessary)
solve;
display production;    # display variable values (change if necessary)
```

---

### Example: AMPL solution ####

```ampl[1|1-7]
ampl: include production.run;
Gurobi 8.1.0: optimal solution; objective 36000
production [*] :=
  doors  2
windows  6
;
ampl:
```

===

## Sets and parameters 

---

### Sets in AMPL

---

### Set declaration

A set can be declared with the keyword `set` and the name of the set:

```ampl
set MYSET;
```


---

#### Sets of numbers

You can declare and initialize sets of numbers in the model file, e.g., by

```ampl
set SET1 := { 1, 4, 9, 16 };                # Contains numbers 1, 4, 9, 16
set SET2 := setof { i in 1..4 } i^2;        # Contains numbers 1, 4, 9, 16
set SET3 := { 1..24 };                      # Contains numbers 1, 2, ... , 24
set SET4 := { 0..600 by 60 };               # Contains numbers 0, 60, ... , 600
set SET5 := { i in 0..600 : i mod 60 = 0 }; # Contains numbers 0, 60, ... , 600
```

---

#### Sets of names

You can declare and initialize sets of names in the model file, e.g., by

```ampl
# Create set containing: "doors" "windows"
set SET1:= { "doors", "windows" };
# Create set containing: "products1" "products2" "products3" "products4"
set SET2 := setof { i in 1..4 } "products" & i; 
```

Note that names must be inside quotes "..." here.

---

#### Sets of tuples

You can declare and initialize sets of tuples in the model file, e.g., by

```ampl
set SET1:= { ("doors","wood",300), ("windows","aluminum",400) }; 
```

---

#### Set operations


AMPL provides operators to work with sets:

- `union` means $A \cup B$
- `inter` means $A \cap B$
- `diff` means $A \setminus B$
- `symdiff` means the symmetric difference $(A \cup B) \setminus (A \cap B)$
- `cross` means $A \times B$

```ampl
set SUPPLIERS;
set FACTORIES;
set NODES = SUPPLIERS union FACTORIES;
set EXTERNAL_SUPPLIERS = SUPPLIERS diff FACTORIES;
set LINKS = SUPPLIERS cross FACTORIES;
```


---

#### Set declaration and initialisation

If a set is not initialised in the model file

```ampl
set PRODUCTS;
set MATERIALS;
set CONFIGURATIONS = PRODUCTS cross MATERIALS;
set WIDTHS;
set SKU within (CONFIGURATIONS cross WIDTHS); # 'within' declares a subset
```

it must be initialised within the data file

```ampl
set PRODUCTS := doors windows; 
set MATERIALS := wood aluminum;
# the set CONFIGURATIONS is derived from above sets
set WIDTHS := 90 100;
set SKU := (doors,wood,90) (windows,aluminum,100);
```

Note that names do not need to be quoted in the data file! <!-- .element: class="fragment" -->

===

### Parameters in AMPL

---

#### Simple parameters

Simple parameters can be declared and initialized by:
```ampl
param T = 24;
```

---

#### Parameters declared over a set of indices

More complex parameters can be declared over a set of one or more indices, e.g, 

```ampl
set SET1;
set SET2;
set SET3;

# declare a parameter A[i] for each i in SET1
param A { SET1 };
# declare a parameter B[i,j] for each i in SET1, j in SET2
param B { SET1, SET2 };
# declare a parameter C[i,j,k] for each i in SET1, j in SET2, k in SET3
param C { SET1, SET2, SET3 }; 
```

Note that the parameters are not yet initialized! <!-- .element: class="fragment" -->


---

A common pattern is to declare the size of the set in the model file, e.g.,

```ampl
param T;
set PERIODS := { 1..T };
```

and specify the size in the data file, e.g.,

```ampl
param T := 24;
```




---

#### Initialisation of parameters with a single index

Parameters defined in the model file over a set of numbers by
```ampl
param costs { 1..3 };
```
can be initialised in the data file by
```ampl
param costs:=
 1   300
 2   600
 3   400;
```

The same logic can be applied if the parameter is indexed over a set of names.  <!-- .element: class="fragment" -->

---

#### Initialisation of parameters with two indices

Parameters defined in the model file over two sets of numbers by
```ampl
param costs { 1..3, 1..2 };
```
can be initialised in the data file by
```ampl
param costs:=
 1  1  300
 1  2  500
 2  1  600
 2  2  700
 3  1  400
 3  2  400;
```

The same logic can be applied if the parameter is indexed over more than 2 indices.  <!-- .element: class="fragment" -->

---

#### Initialisation of parameters over a set of tuples

Parameters defined in the model file over a set of tuples by
```ampl
set LINKS dimen 2; # declares a set containing 2-dimensional tuples
param costs { LINKS };
```
can be initialised in the data file by
```ampl
set LINKS := (Factory1, Warehouse1) (Factory2, Warehouse2);
param costs :=
 Factory1 Warehouse1 300
 Factory2 Warehouse2 400;
```

---

#### Parameter tables (for 2-index parameters)

Parameters defined in the model file over two sets by
```ampl
set PRODUCTS;
set RESOURCES;
param utilisation { PRODUCTS, RESOURCES };
```
can be initialised in the data file by
```ampl
set PRODUCTS:= doors windows;
set RESOURCES:= plant1 plant2 plant3;
param utilisation:
         plant1 plant2 plant3 :=
 doors   1      0      3
 windows 0      2      2 ;
```


---

#### Default values

Default values can be provided with the keyword `default` followed by the value

```ampl
set PRODUCTS:= doors windows;
set RESOURCES:= plant1 plant2 plant3;
param utilisation default 0:
         plant1 plant2 plant3 :=
 doors   1      .      3
 windows .      2      2 ;
```

The dot (`.`) can be used to indicate that no value is explicitly given and the default is used instead.


---


#### Sets in objective function and constraints

Indexed parameters can be used in the objective function and constraints:

```ampl[10,13-14]
# Set and parameter declaration
set PRODUCTS;                              # set of products (I)
set RESOURCES;                             # set of resources (R)
param profit { PRODUCTS };                 # profit per unit of product i ( p_i )
param capacity { RESOURCES };              # capacity of resource r ( q_r )
param utilisation { PRODUCTS, RESOURCES }; # utilisation of resource r per unit of product i ( a_ir )
# Variable declaration
var production { PRODUCTS } >= 0;          # production quantity of product i ( x_i )
# Objective function
maximize TotalProfit: sum { i in PRODUCTS } profit[i] * production[i];
subject to
# Constraints
Limit {r in RESOURCES }: 
      sum { i in PRODUCTS } utilisation[i,r] * production[i] <= capacity[r];
```

---


#### Tuples in objective function and constraints

Tuples can be used in the objective function and constraints similarly to :

```ampl[4,7]
set LINKS dimen 2; # declares a set containing 2-dimensional tuples
param costs { LINKS };
var   x { LINKS };
minimize TotalCosts: sum { (i,j) in LINKS } costs[i,j] * x[i,j];
subject to
# Constraints
Limit { (i,j) in LINKS }: x[i,j] >= 0;
```


---

#### Infinite values


The keyword `Infinity` can be used to represent $\infty$. For example, if the following parameters are given in the data file
```ampl
param upper_bound:=
 1  300
 2  Infinity
 3  400;
```
the constraint 
```ampl
constraint {i in 1..3 }: production[i] <= upper_bound[i];
```
for `i=2` will not be binding.

---

#### Computed parameters

Parameters can be computed using built-in functions, e.g.

```ampl
set A := { 4, -8, 2, -9 }; 
param a := max{ i in A : i mod 2 = 0} abs(i);
param b := min( a, 5 );
param c := round( a / b);
param d := trunc( sqrt( a ) );
```

---

#### Parameters based on conditions

Parameters can be set depending on conditions, e.g.

```ampl
set LOCATIONS := { "HAMBURG", "PARIS", "LONDON", "MADRID", "ROME" }; 
param origin symbolic := "HAMBURG";    # Keyword 'symbolic' is needed for strings
param destination symbolic := "PARIS"; # Keyword 'symbolic' is needed for strings
param supply { i in LOCATIONS } := 
  if i == origin then
     1
  else if i == destination then
    -1
  else
     0
;
```

===

## Generic Models & Data in JuMP

---

### Example: Production

```julia[1-2|4-15|17-24|26-27|29-33]
using JuMP
using HiGHS  # or another solver

# --- Data ---
products = [:doors, :windows]
resources = [:plant1, :plant2, :plant3]

profit = Dict( :doors => 3000, :windows => 5000 )

capacity = Dict( :plant1 => 4, :plant2 => 12, :plant3 => 18 )

utilisation = Dict(
  (:doors,   :plant1) => 1, (:doors,   :plant2) => 0, (:doors,   :plant3) => 3,
  (:windows, :plant1) => 0, (:windows, :plant2) => 2,  (:windows, :plant3) => 2
)

# --- Model ---
model = Model(HiGHS.Optimizer)

@variable(model, production[p in products] >= 0)
@objective(model, Max, sum(profit[p] * production[p] for p in products))
@constraint(model, [r in resources],
  sum(utilisation[(p, r)] * production[p] for p in products) <= capacity[r]
)

# --- Solve ---
optimize!(model)

# --- Results ---
println("Objective value = ", objective_value(model))
for p in products
  println("Production of ", p, " = ", value(production[p]))
end
```<!-- .element style="height:600px;" -->

===

## Generic Models & Data in Google OR-Tools

---

### Example: Production

<!--
# Create a virtual environment in a folder called venv
python3 -m venv venv

# Activate it
source venv/bin/activate

# Install OR-Tools in the venv
pip install --upgrade pip
pip install ortools

# Run your script inside the venv
python production.py
-->

```python[1|3-14|16-31|33-35|37-40]
from ortools.math_opt.python import mathopt

# --- Data ---
products = ["doors", "windows"]
resources = ["plant1", "plant2", "plant3"]

profit = { "doors": 3000, "windows": 5000 }

capacity = { "plant1": 4, "plant2": 12, "plant3": 18 }

utilisation = {
  ("doors",   "plant1"): 1, ("doors",   "plant2"): 0, ("doors",   "plant3"): 3,
  ("windows", "plant1"): 0, ("windows", "plant2"): 2, ("windows", "plant3"): 2
}

# --- Model ---
model = mathopt.Model(name="production")

# Decision variables
production = {p: model.add_variable( lb = 0.0 ) for p in products}

# Objective function: maximize profit
model.maximize(
  sum(profit[p] * production[p] for p in products)
)

# Constraints: resource capacity
for r in resources:
  model.add_linear_constraint(
    sum(utilisation[(p, r)] * production[p] for p in products) <= capacity[r]
  )

# --- Solve ---
solver = mathopt.SolverType.HIGHS
result = mathopt.solve(model, solver_type=solver)

# --- Results ---
print("Objective value =", result.objective_value())
for p in products:
  print(f"Production of {p} = {result.variable_values(production[p])}")
```<!-- .element style="height:600px;" -->

===

 
### Case study: <a href="markdown-viewer.html?file=04-lab/fabrics_and_fall_fashions.md" data-preview-link>Fabrics and Fall Fashions <i class="fa-solid fa-magnifying-glass"></i></a>

