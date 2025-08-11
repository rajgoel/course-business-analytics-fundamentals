### Integer and binary variables in AMPL, JuMP, and Google OR-Tools

**AMPL:**
```ampl
var x1;              # linear variable
var x2 >= 0 integer; # non-negative integer variable
var x3 binary;       # binary variable
```

**JuMP:**
```julia
@variable(model, x1)                      # linear (continuous) variable
@variable(model, x2 >= 0, Int)            # non-negative integer variable
@variable(model, x3, Bin)                 # binary variable
```

**Google OR-Tools:**
```python
x1 = model.add_variable(name="x1")                  # linear variable
x2 = model.add_integer_variable(lb=0.0, name="x2")  # non-negative integer variable
x3 = model.add_binary_variable(name="x3")           # binary variable
```

> [!IMPORTANT]
> You must use a solver supporting integer programming. 

===

### Example: <a href="markdown-viewer.html?file=05-lab/california_manufacturing.md" data-preview-link>California Manufacturing <i class="fa-solid fa-magnifying-glass"></i></a>

How can we model this decision problem?

> [!TIP]
> The model must contain the following:
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

===

### Example: <a href="markdown-viewer.html?file=05-lab/vincent_cardoza.md" data-preview-link>Vincent Cardoza <i class="fa-solid fa-magnifying-glass"></i></a>

How can we model this decision problem?

> [!TIP]
> The model must contain the following:
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

===

### Example: <a href="markdown-viewer.html?file=05-lab/northeastern_airlines.md" data-preview-link>Northeastern Airlines <i class="fa-solid fa-magnifying-glass"></i></a>

How can we model this decision problem?

> [!TIP]
> The model must contain the following:
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

===

### Case: <a href="markdown-viewer.html?file=05-lab/springfield_school_board.md" data-preview-link>Assigning students to schools <i class="fa-solid fa-magnifying-glass"></i></a>

