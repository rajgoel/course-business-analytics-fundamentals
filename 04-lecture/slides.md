## Generic models

---

The models we created so far marry logic with data.

---

Although it is easy to change some of the numbers in the model, it is usually not as easy to change the dimensions of the model, e.g. the number of products and factories, etc.

---

Separation of logic and data allows a trained analyst to develop a model, and all other users can work on the data without any risk of destroying the logic.

---

In order to separate logic from data we have to rethink our problem.

---

#### Example: Rethinking Wyndor Glass Co

maximise $3000x_1 + 5000x_2$

subject to

$$x_1 \leq 4$$
$$2x_2 \leq 12$$
$$3x_1 + 2x_2 \leq 18$$
$$x_1 \geq 0, x_2 \geq 0$$

---

In this problem we have

- a given **set of products** with revenues,
- a given **set of resources** with capacities, and
- a given amount of the resources that is consumed by each product.

The goal is to find non-negative production quantities maximising the total revenue.

---

#### Example: Generic production model

maximise $\displaystyle\sum_{i\in I} p_i x_i$

subject to

$$\displaystyle\sum_{i\in I} a_{i,r} x_i \leq q_r \text{ for all } r\in R$$
$$x_i \geq 0 \text{ for all } i\in I$$

where $I$ is the set of products, $R$ is the set of resources, $p_i$ is price of product $i$, $q_r$ is the quantity available of resource $r$, and $a_{i,r}$ indicates how much of resource $r$ is consumed by product $i$. The decision variable $x_i$ is the production quantity of product $i$.

> [!NOTE]
> This model works for any kind and number of products and resources.

===

### Example: <a href="markdown-viewer.html?file=03-lecture/kibbutzim.md" data-preview-link>Southern Confederation of Kibbutzim <i class="fa-solid fa-magnifying-glass"></i></a>

How can we model this decision problem as a generic model?

> [!TIP]
> The model must contain the following:
> - **Sets and parameters:** What are the sets and parameters that define the problem?
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

---

#### Summary of problem characteristics ####

- There is a **set of kibbutzim**
- There is a **set of crops**
- For each kibbutz, the amount of land available is given
- For each kibbutz, the maximum amount of water to be used available is limited
- For each crop, the amount of land that can be dedicated to the crop is limited 
- For each crop, an expected net return per acre dedicated to the crop is given 
- Each kibbutz must use the same share of its land
- The confederation wants to maximise total net return

---

#### Sets and parameters ####

- Let $I$ denote the set of kibbutzim in the confederation <!-- .element: class="fragment" style="font-size:80%" -->
- Let $C$ denote the set of crops <!-- .element: class="fragment" style="font-size:80%" -->
- For $i \in I$ let $l_i$ denote the amount of land available at kibbutz $i$ <!-- .element: class="fragment" style="font-size:80%" -->
- For $i \in I$ let $w_i$ denote the amount of water available at kibbutz $i$ <!-- .element: class="fragment" style="font-size:80%" -->
- For $c \in C$ let $p^c$ denote the profit per hectare for the production of crop $c$  <!-- .element: class="fragment" style="font-size:80%" -->
- For $c \in C$ let $u^c$ denote the upper bound of total production of crop $c$ <!-- .element: class="fragment" style="font-size:80%" -->
- For $c \in C $ let $r^c$ denote the amount of water required for production of crop $c$ <!-- .element: class="fragment" style="font-size:80%" -->

---

#### Generic Model for the Southern Confederation of Kibbutzim ####

maximise $\displaystyle\sum_{c\in C} \sum_{i\in I} p^c x_i^c$`
<!-- .element: class="fragment" style="font-size:80%" -->

subject to
<!-- .element: class="fragment" style="font-size:80%" -->

$$\displaystyle\sum_{c\in C} x_i^c \leq l_i \ {\rm for\ all}\ i \in I$$
<!-- .element: class="fragment" style="font-size:80%" -->

$$\displaystyle\sum_{c\in C} r^c x_i^c \leq w_i \ {\rm for\ all}\ i \in I$$
<!-- .element: class="fragment" style="font-size:80%" -->

$$\displaystyle\sum_{i=1}^{n} x_i^c \leq u^c\ {\rm for\ all}\ c\in C$$
<!-- .element: class="fragment" style="font-size:80%" -->

$$\displaystyle\sum_{c\in C} \frac{1}{l_i}x_i^c = \displaystyle\sum_{c\in C} \frac{1}{l_{j}}x_{j}^c\ {\rm for\ all}\ i,j \in I$$
<!-- .element: class="fragment" style="font-size:80%" -->

$$x_i^c \geq 0\ {\rm for\ all}\ i \inI, c\in C$$
<!-- .element: class="fragment" style="font-size:80%" -->

> [!NOTE]
> The model is much more compact and flexible compared to the explicit model.
<!-- .element: class="fragment" style="font-size:80%" -->

===

### Case study: Fabrics and Fall Fashions ###

<small>Please read the case *Fabrics and Fall Fashions* from *Hillier, Lieberman. Introduction to Operations Research, McGraw-Hill*.</small>

---

> Ted is trying to convince Katherine not to produce any velvet shirts since the demand for this fashion fad is quite low. He argues that this fashion fad alone accounts for USD 500,000 of the fixed design and other costs. The net contribution (price of clothing item - materials cost - labor cost) from selling the fashion fad should cover these fixed costs. Each velvet shirt generates a net contribution of USD 22. He argues that given the net contribution, even satisfying the maximum demand will not yield a profit. What do you think of Ted’s argument?

---

> Formulate and solve a linear programming problem to maximize profit given the production, resource, and demand constraints.

---

> The textile wholesaler informs Katherine that the velvet cannot be sent back because the demand forecasts show that the demand for velvet will decrease in the future. Katherine can therefore get no refund for the velvet. How does this fact change the production plan?

---

> The sewing staff encounters difficulties sewing the arms and lining into the wool blazers since the blazer pattern has an awkward shape and the heavy wool material is difficult to cut and sew. The increased labor time to sew a wool blazer increases the labor and machine cost for each blazer by USD 80. Given this new cost, how many of each clothing item should TrendLines produce to maximize profit?

---

> The textile wholesaler informs Katherine that since another textile customer canceled his order, she can obtain an extra 10,000 yards of acetate. How many of each clothing item should TrendLines now produce to maximize profit?

---

> TrendLines assumes that it can sell every item that was not sold during September and October in a big sale in November at 60 percent of the original price. Therefore, it can sell all items in unlimited quantity during the November sale. (The previously mentioned upper limits on demand concern only the sales during September and October.) What should the new production plan be to maximize profit?

===

### Summary ###

- We learned how to separate logic from data.
