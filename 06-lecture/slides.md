## Logical constraints

===

### Alternative conditions

**Binary decision variables** allow us to model alternative constraints of the form

- `<condition_1> or <condition_2> [ or ... ]`

> [!IMPORTANT]
> In a MIP (or LP), a solution must satisfy all constraints, so we cannot directly include above.

---

### Binary decision variables

- If a binary decision variables holds a value of 1 it represents a condition that is `true`.
- If a binary decision variables holds a value of 0 it represents a condition that is `false`.

---

### Exclusive alternatives

If we have a set of binary variables $y_1, \ldots, y_n$, we can ensure that **exactly one** of them can take a value of 1 by

$$\sum_{i=1}^{n} y_i = 1$$

> [!NOTE]
> Analogously, we can ensure that **at most one** or **at least one** of the binary variables must take a value of 1.

---

### $k$ out of $n$

If we have a set of binary variables $y_1, \ldots, y_n$, we can ensure that **exactly** $k$ **out of** $n$ binary variables can take a value of 1 by

$$\sum_{i=1}^{n} y_i = k$$

> [!NOTE]
> Analogously, we can ensure that **at most** $k$ **out of** $n$* or **at least** $k$ **out of** $n$ binary variables must take a value of 1.

---

### Example: <a href="markdown-viewer.html?file=06-lecture/supersuds.md" data-preview-link>Supersuds Corporation <i class="fa-solid fa-magnifying-glass"></i></a>

How can we model this decision problem?

> [!TIP]
> The model must contain the following:
> - **Sets and parameters:** What are the sets and parameters that define the problem?
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

---

### Sets and parameters

- Let $I = \lbrace 1,2,3 \rbrace$ denote the set of products.
- Let $J = \lbrace 1,2,3 \rbrace$ denote the set of allocation options.
- For each $i\in I$, $j\in J$ let $p_{ij}$ denote the profit obtained when allocating $j$ spots to product $i$.
- Let $u = 5$ denote the upper bound on the total number of TV spots allocated.

---

### Variables

We can model this problem using binary variables $x_{ij}$ indicating whether product $i$ will be allocated $j$ spots.

$$x_{ij} =\left\lbrace \begin{array}{cl}
1 & \textrm{if product } i \textrm{ is allocated } j \textrm{ spots}\\\\
0 & \textrm{otherwise}\\\\
\end{array}
\right.$$

---

### Objective

The objective is to 

maximise $\displaystyle\sum_{i\in I}\sum_{j \in J}  p_{ij} x_{ij}$


---

### Constraints

Each product must have at most one allocation of TV spots:

$$\sum_{j \in J}  x_{ij} \leq 1 \textrm{ for all } i \in I$$

The number of allocations must not exceed $u$:

$$\sum_{i \in I}\sum_{j \in J} j \cdot x_{ij} \leq u$$

Binary variables:

$$x_{ij} \in \lbrace 0, 1 \rbrace \textrm{ for all } i \in I, j \in J$$


---

The integer program is to

maximise $\displaystyle\sum_{i\in I}\sum_{j \in J}  p_{ij} x_{ij}$

subject to 

$$\sum_{j \in J}  x_{ij} \leq 1 \textrm{ for all } i \in I$$
$$\sum_{i \in I}\sum_{j \in J} j \cdot  x_{ij} \leq u$$
$$x_{ij} \in \lbrace 0, 1 \rbrace \textrm{ for all } i \in I, j \in J$$


===

### Conditional constraints

Binary variables allow us model **conditional constraints** of the form: 

`if <condition> then <implication>`

where 

- the `<condition>` can either be `true` or `false`. 
- the `<implication>` is represented by a linear constraint.

> [!IMPORTANT]
> In a MIP (or LP), a solution must satisfy all constraints under all conditions, so we cannot directly include above.

---


### Example: Capacity increase

Assume we have a capacity limit $b'$ and we have the option increase the capacity to $b''$. Moreover we have these conditional constraints:

$$\texttt{if } \textit{capacity is increased} \texttt{ then } \sum_{i=1}^n a_i x_i \leq b'$$
$$\texttt{if } \textit{capacity is not increased} \texttt{ then } \sum_{i=1}^n a_i x_i \leq b''$$

---

### Binary decision variables

Binary decision variables can be used to represent the conditions.

$$\texttt{if } y = 0 \text{ then } \sum_{i=1}^n a_i x_i \leq b'$$
$$\texttt{if } y = 1 \text{ then } \sum_{i=1}^n a_i x_i \leq b''$$

> [!IMPORTANT]
> These expressions are **not linear** and cannot be used in a MIP.

---

### Linearisation

Linearisation is the process of converting a non-linear expression into an equivalent  form that can be used in mixed-integer programs (MIP).

---

### Linearisation of conditional right hand side values

The constraints with conditional right hand side values

$$\texttt{if } y = 0 \text{ then } \sum_{i=1}^n a_i x_i \leq b'$$
$$\texttt{if } y = 1 \text{ then } \sum_{i=1}^n a_i x_i \leq b''$$

can be linearised by

$$\displaystyle\sum_{i=1}^{n} a_i x_i  \leq b' \class{highlight}{+ (b''-b')y}$$

> [!IMPORTANT]
> This works the same for conditional constraints using `≥` or `=`.

---

### Example: <a href="markdown-viewer.html?file=06-lecture/good_products.md" data-preview-link>Good Products Company <i class="fa-solid fa-magnifying-glass"></i></a>

How can we model this decision problem?

> [!TIP]
> The model must contain the following:
> - **Sets and parameters:** What are the sets and parameters that define the problem?
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

---

### Sets and parameters

- Let $I = \lbrace 1, 2, 3 \rbrace$ denote the set of products.
- Let $j = \lbrace 1, 2 \rbrace$ denote the set of plants.
- For each $i \in I$ let $p_i$ denote the profit per unit of product $i$.
- For each $i \in I$ let $q_i$ denote the sales potential of product $i$.
- For each $j \in J$ let $u_j$ denote the time available at plant $j$.
- For each $i \in I$, $j \in J$ let $a_{ij}$ denote the production time required per unit of product $i$ at plant $j$.

---

### Variables

- For each $i \in I$ let $x_i$ denote the production quantity of product $i$.
- For each $i \in I$ let $y_i$ denote a binary variable indicating whether product $i$ is chosen to be produced or not.
- For each $j \in J$ let $z_j$ denote a binary variable indicating whether plant $j$ is chosen to be the sole producer.

---

### Objective

The objective is to 

maximise $\displaystyle\sum_{i\in I}  p_i x_i$

---

### Constraints

- At most two products should be chosen to be produced:
  $$\sum_{i\in I} y_i \leq 2$$  

- If the product is not chosen to be produced, the production quantity must not be positive. Otherwise, the production quantity must not exceed the sales potential:
  $$x_i \leq 0 + ( q_i - 0)y_i  = q_i y_i \textrm{ for all } i \in I$$

---

- Just one of the two plants should be chosen to be the sole producer:
  $$\sum_{j\in J} z_j = 1$$  

- The production time required at the chosen plant must not exceed the time available:
  $$\texttt{ if } z_j = 1 \texttt{ then } \sum_{i\in I} a_{ij} x_i \leq u_j \textrm{ for all } j \in J$$  
  > [!WARNING] 
  >  This constraint is not linear, we will fix this later!

---

- Non-negativities and binaries
  $$x_i \geq 0, y_i \in \lbrace 0, 1 \rbrace \textrm{ for all } i \in I$$
  $$z_j \in \lbrace 0, 1 \rbrace \textrm{ for all } j \in J$$

---

<!-- .slide style="font-size:70%;" -->

The problem is to 

maximise $\displaystyle\sum_{i\in I}  p_i x_i$

subject to

$$\sum_{i\in I} y_i \leq 2$$  

$$x_i \leq q_i y_i \textrm{ for all } i \in I$$

$$\sum_{j\in J} z_j = 1$$  

$$\texttt{ if } z_j = 1 \texttt{ then } \sum_{i\in I} a_{ij} x_i \leq u_j \textrm{ for all } j \in J$$  <!-- .element class="highlight" -->

$$x_i \geq 0, y_i \in \lbrace 0, 1 \rbrace \textrm{ for all } i \in I, z_j \in \lbrace 0, 1 \rbrace \textrm{ for all } j \in J$$

===

### Conditional constraints

---

#### Big-M notation


A conditional constraint $\displaystyle\sum_{i=1}^{n} a_{i} x_i  \leq b$ which only applies if a given condition holds, can be modelled as

$$\sum_{i=1}^{n} a_{i} x_i  \leq b \class{highlight}{+ M(1-y)}$$

where $y$ is a binary variable indicating whether or not the condition holds and $M$ is a *sufficiently large number*.

---

### Example: Conditional constraint

maximise $-x + 4y$

subject to

$-10x+20y \leq 22$

$5x+10y \leq 49$

$x \leq 5$

if $z=1$ then $y \leq 1$ <!-- .element class="highlight" -->


$x \geq 0, y \geq 0$

$x$ and $y$ are integers 

$$z\in \lbrace 0,1 \rbrace$$ <!-- .element class="highlight" -->

---

### Example: Integer program with conditional constraint

maximise $-x + 4y$

subject to

$$-10x+20y \leq 22$$

$$5x+10y \leq 49$$

$$x \leq 5$$

$$y \leq 1 + M(1-z)$$ <!-- .element class="highlight" -->

$$x \geq 0, y \geq 0$$

$x$ and $y$ are integers 

$$z\in \lbrace 0,1 \rbrace$$ <!-- .element class="highlight" -->

$M$ is sufficiently large <!-- .element class="highlight" -->

---

<!-- .slide: data-transition="slide-in fade-out" -->

#### Example: Big-M notation

<div style="min-height: 1.5em">$y \leq 1 + M(1-z)$ with $z=1$</div>
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
"modifier": "group",
"parameters": [ { "id": "conditional" } ]
},
{
"element": "g#conditional", 
"modifier": "rect",
"parameters": [ { "x1": 0, "y1": 0, "width": 800, "height": 450, "fill": "BlueViolet", "fill-opacity": 0.4 } ]
},
{
"element": "g#conditional", 
"modifier": "line",
"parameters": [ { "x1": 0, "y1": 450, "x2": 800, "y2": 450, "stroke": "BlueViolet", "stroke-width": 5 } ]
}
]
}
-->

---

<!-- .slide: data-transition="fade-in slide-out" -->

#### Example: Big-M notation

<div style="min-height: 1.5em">$y \leq 1 + M(1-z)$ with $z=0$
<span class="fragment appear-disappear"></span>
<span class="fragment appear-disappear"> and sufficiently large $M$</span>
</div>
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
"modifier": "group",
"parameters": [ { "id": "conditional" } ]
},
{
"element": "g#conditional", 
"modifier": "rect",
"parameters": [ { "x1": 0, "y1": 0, "width": 800, "height": 450, "fill": "BlueViolet", "fill-opacity": 0.4 } ]
},
{
"element": "g#conditional", 
"modifier": "line",
"parameters": [ { "x1": 0, "y1": 450, "x2": 800, "y2": 450, "stroke": "BlueViolet", "stroke-width": 5 } ]
},
{
"modifier": "text",
"parameters": [ "M = 0", { "id": "M0", "x": 480, "y": 450, "font-size": "40", "font-family": "Times New Roman", "font-style": "italic", "fill": "BlueViolet" } ]
},
{
"modifier": "text",
"parameters": [ "M = 2", { "id": "M2", "opacity": 0, "x": 480, "y": 250, "font-size": "40", "font-family": "Times New Roman", "font-style": "italic", "fill": "BlueViolet" } ]
}
],
"animation": [
[],
[
{
"element": "#M0", 
"modifier": "opacity",
"parameters": [ 0 ]
},
{
"element": "#conditional", 
"modifier": "dy",
"duration": 2000,
"parameters": [ -200 ]
},
{
"element": "#M2", 
"modifier": "opacity",
"parameters": [ 1 ]
}
],
[]
]
}
-->
</div>

---

<!-- .slide style="font-size:70%;" -->

### Example: <a href="markdown-viewer.html?file=06-lecture/good_products.md" data-preview-link>Good Products Company <i class="fa-solid fa-magnifying-glass"></i></a>

The problem is to 

maximise $\displaystyle\sum_{i\in I}  p_i x_i$

subject to

$$\sum_{i\in I} y_i \leq 2$$ 
 
$$x_i \leq q_i y_i \textrm{ for all } i \in I$$

$$\sum_{j\in J} z_j = 1$$  

$$\texttt{ if } z_j = 1 \texttt{ then } \sum_{i\in I} a_{ij} x_i \leq u_j \textrm{ for all } j \in J$$  <!-- .element class="highlight" -->

$$x_i \geq 0, y_i \in \lbrace 0, 1 \rbrace \textrm{ for all } i \in I, z_j \in \lbrace 0, 1 \rbrace \textrm{ for all } j \in J$$

---

<!-- .slide style="font-size:70%;" -->

The integer program is to 

maximise $\displaystyle\sum_{i\in I}  p_i x_i$

subject to

$$\sum_{i\in I} y_i \leq 2$$  

$$x_i \leq q_i y_i \textrm{ for all } i \in I$$

$$\sum_{j\in J} z_j = 1$$  

$$\sum_{i\in I} a_{ij} x_i \leq u_j \class{highlight}{+ M(1-z_j)} \textrm{ for all } j \in J$$  

$$x_i \geq 0, y_i \in \lbrace 0, 1 \rbrace \textrm{ for all } i \in I, z_j \in \lbrace 0, 1 \rbrace \textrm{ for all } j \in J$$

<span class="highlight">
where $M$ is a sufficiently large value.
</span

---

> [!TIP] 
> When using a solver we need to specify a value for $M$. We should pick a value that is not too large to avoid numerical errors. A rough estimate that is sufficiently large, but not too large is often easy to find.


===

#### Binary `AND`

Assume we have two binary variables $x_1$ and $x_2$ and we want to have a third binary variable $y$ that is 1 if and only if both $x_1$ and $x_2$ are set to 1.

How can we include such a restriction to our model?

---

What we want to do is to model the following constraints:

- If $y=1$ then $x_1=1$ and $x_2=1$
- If $y=0$ then $x_1=0$ or $x_2=0$

---

In other words:

- If $y=1$ then $x_1+x_2 \geq 2$
- If $y=0$ then $x_1+x_2\leq 1$

---

If $y=1$ then $x_1+x_2 \geq 2$

can be modelled by

$x_1 + x_2 \geq 2 \class{highlight}{- M(1-y)}$

<div class="fragment">
A value of $M=2$ is sufficiently large and we can write
$$x_1 + x_2 \geq 2y$$
</div>

---

If $y=0$ then  $x_1+x_2\leq 1$

can be modelled by

$x_1 + x_2 \leq 1 \class{highlight}{+ My}$

<div class="fragment">
A value of $M=1$ is sufficiently large and we can write
$$x_1 + x_2 \leq 1 + y$$
</div>

---

Thus, $y=1$ if and only if both $x_1=1$ and $x_2=1$ can be written as

$x_1 + x_2 \geq 2y$

$x_1 + x_2 \leq 1 + y$

===

#### Binary `OR`

Assume we have two binary variables $x_1$ and $x_2$ and we want to have a third binary variable $y$ that is 1 if and only if $x_1$ or $x_2$ are set to 1 (or both).

How can we include such a restriction to our model?

---

What we want to do is to model the following constraints:

- If $y=1$ then $x_1=1$ or $x_2=1$
- If $y=0$ then $x_1=0$ and $x_2=0$

---

In other words

- If $y=1$ then $x_1+x_2\geq 1$
- If $y=0$ then $x_1+x_2 \leq 0$

---

If $y=1$ then $x_1+x_2\geq 1$

can be modelled by

$x_1 + x_2 \geq 1 \class{highlight}{- M(1-y)}$

<div class="fragment">
A value of $M=1$ is sufficiently large and we can write
$$x_1 + x_2 \geq y$$
</div>

---

If $y=0$ then $x_1+x_2 \leq 0$

can be modelled by

$x_1 + x_2 \leq 0 \class{highlight}{+ My}$


<div class="fragment">
A value of $M=2$ is sufficiently large and we can write
$$x_1 + x_2 \leq 2y$$
</div>

---

Thus, $y=1$ if and only if $x_1=1$ or $x_2=1$ can be written as

$x_1 + x_2 \geq y$

$x_1 + x_2 \leq 2y$


