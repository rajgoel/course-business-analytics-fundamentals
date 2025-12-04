# LP/IP modelling

---

Many decision problems that we have to deal with cannot be immediately modelled as linear or integer programs due to nasty characteristics resulting in a non-linear objective function or non-linear constraints.

---

However, with the right modelling skills we can still succeed in modelling these problems in such a way that we can use existing tools to solve the problem.

===

## Example: <a href="markdown-viewer.html?file=07-lecture/production.md" data-preview-link>Production planning <i class="fa-solid fa-magnifying-glass"></i></a>

Formulate a generic problem formulation.

> [!TIP]
> The model must contain the following:
> - **Sets and parameters:** What are the sets and parameters that define the problem?
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

---

### Sets, parameters, and variables

- Let $I = \lbrace 1,2,\ldots,7\rbrace$ denote the set of products.
- For each $i\in I$ let $p_i$ denote the profit per unit of product $i$. 
- For each $i\in I$ let $a_i$ denote the time required per unit of product $i$. 
- Let $u$ denote the total amount of time available.
- For each $i\in I$ let $x_i$ denote the number of units of product $i$ to be produced. 

---

### Generic model for the production planning problem

maximise

$$\sum_{i \in I} p_i x_i$$

subject to

$$\sum_{i \in I} a_i x_i \leq u$$

$$x_i \geq 0 \textrm{ for all } i\in I$$

---

### 1. Model extension

> If product 7 is chosen for production an additional fixed cost of 2000 is incurred.

Extend the model by the new requirement.

> [!TIP]
> We can use additional parameters and variables for all products. 

---

- Let $f_i$ denote the fixed cost incurred when product $i$ is chosen for production.
- Let $z_i$ denote a binary variable indicating whether product $i$ is chosen for production.

> [!TIP]
> We can set $f_i = 0$ for all $i \in I \setminus \lbrace 7 \rbrace$.

---


maximise

$$\sum_{i \in I} p_i x_i \class{highlight}{- \sum_{i \in I} f_i z_i}$$

subject to

$$\sum_{i \in I} a_i x_i \leq u$$

$$\class{highlight}{x_i \leq Mz_i \textrm{ for all } i \in I}$$

$$x_i \geq 0 \textrm{ for all } i\in I$$

$$\class{highlight}{z_i \in \lbrace 0,1 \rbrace \textrm{ for all } i \in I}$$

<span class="highlight">
where $M$ is a sufficiently large number.
</span>

---

### 2. Model extension

> Each unit of product 2 that is produced over 100 units requires a production time of 3.0 person-hours instead of 2.0 person-hours.

Extend the model by the new requirement.

> [!TIP]
> We can exploit that the production in excess of the given limits is less efficient than up to that limit. 

---

- Let $q_i$ denote the regular production limit for product $i$.
- Let $\hat a_i$ denote the time required for production of product $i$ in excess of $q_i$. <span class="highlight">We assume that $\hat a_i > a_i$ for all $i\in I$. </span>
- Let $y_i$ denote the number of units to be produced of product $i$ in excess of $q_i$ units.

> [!TIP]
> We can set $q_i = \infty$ and $\hat a_i = \infty$ for all $i \in I \setminus \lbrace 2 \rbrace$.

---


$$\sum_{i \in I} p_i x_i \class{highlight}{+ \sum_{i \in I}  p_i y_i} - \sum_{i \in I} f_i z_i$$

subject to

$$\class{highlight}{x_i \leq q_i \textrm{ for all } i \in I}$$
$$\sum_{i \in I} a_i x_i \class{highlight}{+ \sum_{i \in I} \hat a_i y_i} \leq u$$
$$x_i \leq Mz_i \textrm{ for all } i \in I$$

$$x_i \geq 0 , \class{highlight}{y_i \geq 0} \textrm{ for all } i\in I$$
$$z_i \in \lbrace 0,1 \rbrace  \textrm{ for all } i\in I$$

where $M$ is a sufficiently large number.

---

### 3. Model extension

> Each unit of product 3 that is produced over 50 units will contribute to the total profit by 40 instead of 35 (economies of scale).

Extend the model by the new requirement.

> [!TIP]
> We now have to enforce that $y_i=0$ whenever $x_i < q_i$.

---

To ensure that

$$\texttt{if } x_i < q_i \texttt{ then } y_i = 0,$$ 

we need to introduce an auxiliary binary variable.

> [!TIP]
> Auxiliary binary variables can help us creating a chain of conditional implications.

---

- Let $\hat p_i$ denote the profit per unit of product $i$ produced in excess of $q_i$.
- Let $w_i$ denote a binary variable indicating whether $q_i$ items or more are produced of product $i$.

> [!NOTE]
> We no longer need to assume that $\hat a_i > a_i$ for all $i\in I$.

---

<!-- .slide:  style="font-size:80%" -->

$$\sum_{i \in I} p_i x_i + \sum_{i \in I}  \class{highlight}{\hat p_i} y_i - \sum_{i \in I} f_i z_i$$

subject to

$$x_i \leq q_i \textrm{ for all } i \in I$$
$$\class{highlight}{x_i \geq q_i - M(1- w_i)  \textrm{ for all } i \in I}$$ 
$$\sum_{i \in I} a_i x_i + \sum_{i \in I} \hat a_i y_i \leq u$$
$$\class{highlight}{y_i \leq Mw_i  \textrm{ for all } i \in I}$$ 
$$x_i \leq Mz_i \textrm{ for all } i \in I$$

$$x_i \geq 0 , y_i \geq 0 \textrm{ for all } i\in I$$
$$z_i \in \lbrace 0,1 \rbrace \textrm{ for all } i \in I, \class{highlight}{w_i \in \lbrace 0,1 \rbrace} \textrm{ for all } i\in I$$

where $M$ is a sufficiently large number.

---

### 4. Model extension

> If both product 3 and product 4 are produced, 75 person-hours are needed for production line set-up.

Extend the model by the new requirement.

> [!TIP]
> We already have variables $z_i$ indicating whether product $i \in I$ is chosen for production.

---

- For each $i,j \in I$ with $i \neq j$, let $\bar v_{i,j}$ let $s_{i,j}$ denote the additional production line set-up time.
- For each $i,j \in I$ with $i \neq j$, let $\bar v_{i,j}$ denote a binary variable indicating whether products $i$ and $j$ are chosen for production, i.e.

$$v_{i,j} = \left\lbrace \begin{array}{cl}
1 & \textrm{if products $i$ and $j$ are chosen for production}\\\\
0 & \textrm{otherwise}\\\\
\end{array}
\right.$$

---

We can ensure that $v_{i,j} = 1$ if and only if $z_i=1$ and $z_j=1$ by the constraints

$$z_i + z_j \leq v_{i,j} + 1$$

and

$$z_i + z_j \geq 2v_{i,j}.$$

---

<!-- .slide:  style="font-size:80%" -->

$$\sum_{i \in I} p_i x_i + \sum_{i \in I}  \hat p_i y_i - \sum_{i \in I} f_i z_i$$

subject to

$$x_i \leq q_i \textrm{ for all } i \in I$$
$$x_i \geq q_i - M(1- w_i)  \textrm{ for all } i \in I$$ 
$$\sum_{i \in I} a_i x_i + \sum_{i \in I} \hat a_i y_i \leq u$$
$$y_i \leq Mw_i  \textrm{ for all } i \in I$$ 
$$x_i \leq Mz_i \textrm{ for all } i \in I$$

$$\class{highlight}{z_i + z_j \leq v_{i,j} + 1}$$
$$\class{highlight}{z_i + z_j \geq 2v_{i,j}}$$

$$x_i \geq 0 , y_i \geq 0 \textrm{ for all } i\in I$$
$$z_i \in \lbrace 0,1 \rbrace, w_i \in \lbrace 0,1 \rbrace, \class{highlight}{v_{i,j} \in \lbrace 0,1 \rbrace} \textrm{ for all } i\in I$$

where $M$ is a sufficiently large number.

===

## Example: <a href="markdown-viewer.html?file=07-lecture/multi-period_production.md" data-preview-link>Multi-period production planning <i class="fa-solid fa-magnifying-glass"></i></a>

Formulate a generic problem formulation.

> [!TIP]
> The model must contain the following:
> - **Sets and parameters:** What are the sets and parameters that define the problem?
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

---

### Sets and parameters

- Let $I = \lbrace 1,2,3,4 \rbrace$ denote the set of products. 
- Let $T = \lbrace 1,2,\ldots,7 \rbrace$ denote the set of days in a week. 
- For each $i \in I$, let $r_i$ denote the production rate (units per hour) of product $i$.
- For each $i \in I$, let $q_{i,0}$ denote the initial inventory level.
- For each $i \in I$, let $l_i$ denote the lower bound on the final inventory level.
- For each $i \in I$, let $c_i$ denote the costs for holding product $i$ for one day.
- For each $i \in I$, $t \in T$, let $d_{i,t}$ denote the demand for product $i$ on day $t$.
- Let $s = 5$ denote the setup time required when changing from one product to another. 

---

### Variables

- For each $i \in I$, $t \in T \cup \lbrace 0 \rbrace$ let $x_{i,t}$ denote a binary variable indicating whether product $i$ is produced on day $t$, i.e,
  $$x_{i,t} =\left\lbrace \begin{array}{cl}
  1 & \textrm{if product } i \textrm { is produced on day } t\\\\
  0 & \textrm{otherwise}\\\\ 
  \end{array}
  \right.$$
- For each $i \in I$, $t \in T$, let $p_{i,t}$ denote a variable indicating the number of units of product $i$ produced on day $t$.
- For each $i \in I$, $t \in T$, let $q_{i,t}$ denote a variable indicating the amount of stock of product $i$ at the end of day $t$.

> [!NOTE]
> The $p_{i,t}$ and $q_{i,t}$ are no independent decisions, they can be **deduced** once $x_{i,t}$ are decided on.

---

### Constraints

To indicate that product 1 was produced before start of day 1 we add the following constraint
$$x_{1,0} = 1$$

As we must produce one product per day we have the following constraint

$$\sum_{i \in I} x_{i,t} = 1 \textrm{ for all } t \in T \cup \lbrace 0 \rbrace$$

---

If a product is produced, at most 24 hours of production time for the product are available, otherwise the production must be zero.
Thus, we have the following constraint

$$p_{i,t} \leq 24r_i x_{i,t} \textrm{ for all } i \in I, t \in T$$


---

If another product is produced on the previous day, we must not produce for more than 19 hours.

With a sufficently large value of $M$, this can be modelled by the constraints <!-- .element:  class="fragment" data-fragment-index="1" -->

$$p_{i,t} \leq (24 - s) r_i x_{i,t} + M x_{i,t-1}\text{ for all } i \in I, t \in T$$ <!-- .element:  class="fragment" data-fragment-index="1" -->


---

As we produce whenever we are not in a setup, we also have the following constraint

$$p_{i,t} \geq (24 - s) r_i x_{i,t} \textrm{ for all } i \in I, t \in T$$

---

If the same product is produced on the previous day, we produce 24 hours.

This can be modelled by the constraints <!-- .element:  class="fragment" data-fragment-index="1" -->

$$p_{i,t} \geq 24 r_ix_{i,t} - M(1-x_{i,t-1}) \text{ for all }  i \in I, t \in T$$ <!-- .element:  class="fragment" data-fragment-index="1" -->

---

As there must not be any stockouts and there are lower limits on the inventory level on day 7, we have the following constraints

$$q_{i,t} \geq 0 \textrm{ for all } i \in I, t \in T$$

$$q_{i,7} \geq l_i \textrm{ for all } i \in I$$


---

The amount of stock for each product at the end of a day is the amount of the product at the end of the previous day increased by the production and reduced by the demand.

This can be modelled by the constraints <!-- .element:  class="fragment" data-fragment-index="1" -->

$$q_{i,t} = q_{i,t-1} + p_{i,t} - d_{i,t} \textrm{ for all }  i \in I, t \in T$$ <!-- .element:  class="fragment" data-fragment-index="1" -->


---

### Objective

We wish to minimise total cost, i.e. the objective function is

minimise

$$\sum_{t\in T} \sum_{i\in I} c_i q_{i,t}$$

---

<!-- .slide:  style="font-size:60%" -->

### Integer program of the multi-period production planning

minimise $\displaystyle\sum_{t\in T} \sum_{i\in I} c_i q_{i,t}$

subject to 

$$x_{1,0} = 1$$
$$\sum_{i \in I} x_{i,t} = 1 \textrm{ for all } t \in T \cup \lbrace 0 \rbrace$$


$$p_{i,t} \leq 24r_i x_{i,t} \textrm{ for all } i \in I, t \in T$$
$$p_{i,t} \leq (24 - s) r_i x_{i,t} + M x_{i,t-1}\text{ for all } i \in I, t \in T$$
$$p_{i,t} \geq (24 - s) r_i x_{i,t} \textrm{ for all } i \in I, t \in T$$
$$p_{i,t} \geq 24 r_ix_{i,t} - M(1-x_{i,t-1}) \text{ for all }  i \in I, t \in T$$

$$q_{i,t} \geq 0 \textrm{ for all } i \in I, t \in T$$
$$q_{i,7} \geq l_i \textrm{ for all } i \in I$$
$$q_{i,t} = q_{i,t-1} + p_{i,t} - d_{i,t} \textrm{ for all }  i \in I, t \in T$$

$$x_{i,t} \in \lbrace 0,1 \rbrace \textrm{ for all } i \in I,t \in T \cup \lbrace 0 \rbrace$$

where $M$ is a sufficiently large number.



