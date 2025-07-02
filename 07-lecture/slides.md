## LP/IP modelling ##

---

Many decision problems that we have to deal with cannot be immediately modelled as linear or integer programs due to nasty characteristics resulting in a non-linear objective function or non-linear constraints.

---

However, with the right modelling skills we can still succeed in modelling these problems in such a way that we can use existing tools to solve the problem.

===

### Example: Production planning ####

---

<!-- .slide style="font-size:70%" -->

> A company has seven products, each requiring a different production time per unit.
The company has 720 person-hours available next week and the production time and the profit per unit are given in the table below. 
>  
> | Product   | Person-hours per unit | Profit per unit |
> |-----------|-----------------------|-----------------|
> | Product 1 | 1.0                   | 10              |
> | Product 2 | 2.0                   | 22              |
> | Product 3 | 3.7                   | 35              |
> | Product 4 | 2.4                   | 19              |
> | Product 5 | 4.5                   | 55              |
> | Product 6 | 0.7                   | 10              |
> | Product 7 | 9.5                   | 115             |
> 
> The company's goal is to decide the mix of products which it should produce next week.

Formulate the problem of optimising the profit for the company.

---

#### Sets, parameters, and variables

- Let $I = \lbrace 1,2,\ldots,7\rbrace$ denote the set of products.
- For each $i\in I$ let $p_i$ denote the profit per unit of product $i$. 
- For each $i\in I$ let $a_i$ denote the time required per unit of product $i$. 
- Let $u$ denote the total amount of time available.
- For each $i\in I$ let $x_i$ denote the number of units of product $i$ to be produced. 

---

#### Linear program for the production planning problem ####

maximise

$$\sum_{i \in I} p_i x_i$$

subject to

$$\sum_{i \in I} a_i x_i \leq u$$

$$x_i \geq 0 \textrm{ for all } i\in I$$

---

> If product 7 is chosen for production an additional fixed cost of 2000 is incurred.

Extend the model by the new constraint.

> [!TIP]
> We can use additional parameters and variables for all products. 

---

- Let $f_i$ denote the fixed cost incurred when product $i$ is chosen for production.
- Let $z_i$ denote a binary variable indicating whether product $i$ is chosen for production.

> [!TIP]
> We can set $f_i = 0$ for all $i \in I \setminus \lbrace 7 \rbrace$.

---

#### Integer program for the extended production planning problem

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

> Each unit of product 2 that is produced over 100 units requires a production time of 3.0 person-hours instead of 2.0 person-hours.

Extend the model by the new constraint.

> [!TIP]
> We can exploit that the production in excess of the given limits is less efficient than up to that limit. 

---

- Let $q_i$ denote the regular production limit for product $i$.
- Let $\hat a_i$ denote the time required for production of product $i$ in excess of $q_i$. <span class="highlight">We assume that $\hat a_i > a_i$ for all $i\in I$. </span>
- Let $y_i$ denote the number of units to be produced of product $i$ in excess of $q_i$ units.

> [!TIP]
> We can set $q_i = \infty$ and $\hat a_i = \infty$ for all $i \in I \setminus \lbrace 2 \rbrace$.

---

#### Integer program for the extended production planning problem

$$\sum_{i \in I} p_i x_i \class{highlight}{+ \sum_{i \in I}  p_i y_i} - \sum_{i \in I} f_i z_i$$

subject to

$$\class{highlight}{x_i \leq q_i \textrm{ for all } i \in I}$$
$$\sum_{i \in I} a_i x_i \class{highlight}{+ \sum_{i \in I} \hat a_i y_i} \leq u$$
$$x_i \leq Mz_i \textrm{ for all } i \in I$$

$$x_i \geq 0 , \class{highlight}{y_i \geq 0} \textrm{ for all } i\in I$$
$$z_i \in \lbrace 0,1 \rbrace  \textrm{ for all } i\in I$$

where $M$ is a sufficiently large number.

---

> Each unit of product 3 that is produced over 50 units will contribute to the total profit by 40 instead of 35 (economies of scale).

Extend the model by the new constraint.

> [!TIP]
> We now have to enforce that $y_i=0$ whenever $x_i < q_i$.

---

To ensure that

$$\texttt{if } x_i < q_i \texttt{ then } y_i = 0,$$ 

we need to introduce an auxiliary binary variable.

> [!TIP]
> Auxiliary binary variables can help us creating a chain of conditional implications.

---

- Let $\hat p_i$ denote the time required for and production of product $i$ in excess in excess of $q_i$.
- Let $w_i$ denote a binary variable indicating whether $q_i$ items or more are produced of product $i$.

> [!NOTE]
> We no longer need to assume that $\hat a_i > a_i$ for all $i\in I$.

---

<!-- .slide:  style="font-size:80%" -->

#### Integer program for the extended production planning problem

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

> If both product 3 and product 4 are produced, 75 person-hours are needed for production line set-up.

Extend the model by the new constraint.

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

#### Integer program for the extended production planning problem

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

### Example: Multi-period production planning ####

---

<!-- .slide:  style="font-size:80%" -->

> A factory works 24 hours a day, 7 days a week producing four products.
Only one product can be produced at a time and throughout each day, the same product is produced (and then the next day either the same product is produced or the factory produces a different product).
> 
> The number of units produced per hour depends on the product: 
>
> | Product   | Production per hour |
> |-----------|---------------------|
> | Product 1 | 100                 |
> | Product 2 | 250                 |
> | Product 3 | 190                 |
> | Product 4 | 150                 |
> 
> When changing from producing one product to another product, the first five working hours of the day are lost due to a setup required.
On the first day no setup is required if and only if product 1 is produced.

---

<!-- .slide:  style="font-size:80%" -->

> For the next seven days the following demand must be fulfilled:
> 
> | Product | Mon. | Tue. | Wed. | Thu. | Fri. | Sat. | Sun. |
> |---------|--------|---------|-----------|----------|--------|----------|--------|
> | 1       | 1500   | 1700    | 1900      | 1000     | 2000   | 500      | 500    |
> | 2       | 4000   | 500     | 1000      | 3000     | 500    | 1000     | 2000   |
> | 3       | 2000   | 2000    | 3000      | 2000     | 2000   | 2000     | 500    |
> | 4       | 3000   | 2000    | 2000      | 1000     | 1000   | 500      | 500    |

---

<!-- .slide:  style="font-size:80%" -->

> The amount of items available at the beginning of the week is:
> 
> | Product   | Current stock  |
> |-----------|----------------|
> | Product 1 | 5000           |
> | Product 2 | 7000           |
> | Product 3 | 9000           |
> | Product 4 | 8000           |
>
> At the end of the week there must be at least 1750 units in stock for each product.
> The cost of holding stock is €1.50 per unit for products 1 and 2 and €2.50 per unit for products 3 and 4 (based on the stock held at the end of each day).

Formulate a generic model that the company can use in any week to minimise holding costs.


---

#### Sets and parameters

- Let $I = \lbrace 1,2,3,4 \rbrace$ denote the set of products. 
- Let $T = \lbrace 1,2,\ldots,7 \rbrace$ denote the set of days in a week. 
- For each $i \in I$, let $r_i$ denote the production rate (units per hour) of product $i$.
- For each $i \in I$, let $q_{i,0}$ denote the initial inventory level.
- For each $i \in I$, let $l_i$ denote the lower bound on the final inventory level.
- For each $i \in I$, let $c_i$ denote the costs for holding product $i$ for one day.
- For each $i \in I$, $t \in T$, let $d_{i,t}$ denote the demand for product $i$ on day $t$.
- Let $s = 5$ denote the setup time required when changing from one product to another. 

---

#### Variables

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

We wish to minimise total cost, i.e. the objective function is

minimise

$$\sum_{t\in T} \sum_{i\in I} c_i q_{i,t}$$

---

<!-- .slide:  style="font-size:60%" -->

#### Integer program of the multi-period production planning ####

minimise $\displaystyle\sum_{t\in T} \sum_{i\in I} c_i q_{i,t}$

subject to 

$$x_{1,0} = 1$$
$$\sum_{i \in I} x_{i,t} = 1 \textrm{ for all } t \in T \cup \brace 0 \rbrace$$


$$p_{i,t} \leq 24r_i x_{i,t} \textrm{ for all } i \in I, t \in T$$
$$p_{i,t} \leq (24 - s) r_i x_{i,t} + M x_{i,t-1}\text{ for all } i \in I, t \in T$$
$$p_{i,t} \geq (24 - s) r_i x_{i,t} \textrm{ for all } i \in I, t \in T$$
$$p_{i,t} \geq 24 r_ix_{i,t} - M(1-x_{i,t-1}) \text{ for all }  i \in I, t \in T$$

$$q_{i,t} \geq 0 \textrm{ for all } i \in I, t \in T$$
$$q_{i,7} \geq l_i \textrm{ for all } i \in I$$
$$q_{i,t} = q_{i,t-1} + p_{i,t} - d_{i,t} \textrm{ for all }  i \in I, t \in T$$

$$x_{i,t} \in \lbrace 0,1 \rbrace \textrm{ for all } i \in I,t \in T \cup \lbrace 0 \rbrace$$

where $M$ is a sufficiently large number.

===

### Example: Minimum tardiness scheduling problem ###

---

> A production company has to produce a number of jobs. Each job has a given production time and each job has a given due date. The company can only work on one job at any point in time and each job has to be conducted without preemption.

Formulate a problem for determining a schedule with minimal tardiness.

---

A job is tardy if the completion time of the job is later than its given due date. Otherwise the job is not tardy.

If $c_j$ denotes the completion time of job $j$ and $d_j$ denotes the due date of the job, the tardiness of the job is  <!-- .element:  class="fragment" data-fragment-index="1" -->

$$\max\{ 0, c_j - d_j \}.$$  <!-- .element:  class="fragment" data-fragment-index="1" -->

---

Thus, the goal is to

minimise
$$\displaystyle \sum_{j\in J} \max\{ 0, c_j - d_j \}$$

where $J$ denotes the set of jobs.

Note, that the maximum function is not a linear function!  <!-- .element:  class="fragment" -->

---

The objective can be reformulated to

minimise
$$\displaystyle \sum_{j\in J} t_j$$

by adding the constraint

$$t_j \geq \max\lbrace 0, c_j - d_j \rbrace \textrm{ for all } j \in J.$$


---

The constraint 

$$t_j \geq \max\lbrace 0, c_j - d_j \rbrace$$

is equivalent to the constraints

$$ t_j \geq  c_j - d_j $$
and
$$ t_j \geq  0. $$

Thus, the constraint with the non-linear maximum function can be replaced by linear constraints!

---

In order to model the minimum tardiness scheduling problem we can use binary variables $x_{i,j}$ indicating whether job $i$ is scheduled immediately before job $j$.

---

For any two jobs $i$ and $j$ we have the constraint

$$c_j \geq c_i + p_j - M(1-x_{i,j})$$

where $p_j$ denotes the production time of job $j$ and $M$ is a sufficiently large number.

---

Each job $j$ has exactly one predecessor and one successor.

We can model this by <!-- .element:  class="fragment" data-fragment-index="1" -->

$$\sum_{i\in J\cup\{0\} } x_{i,j} = 1$$ <!-- .element:  class="fragment" data-fragment-index="1" -->
$$\sum_{i\in J\cup\{0\} } x_{j,i} = 1$$ <!-- .element:  class="fragment" data-fragment-index="1" -->

where $0$ is a dummy job indicating the start or the end of production. <!-- .element:  class="fragment" data-fragment-index="1" -->

