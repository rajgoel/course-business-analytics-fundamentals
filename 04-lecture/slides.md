## Generic models

---

The models we created so far marry logic with data.

---

Although it is easy to change some of the numbers in the model, it is usually not as easy to change the dimensions of the model, e.g. the number of products and factories, etc.

---

### Separation of logic and data
 
Separation of logic and data allows a trained analyst to develop a model, and all other users can work on the data without any risk of destroying the logic.

---

In order to separate logic from data we have to rethink our problem.

---

### Example: <a href="markdown-viewer.html?file=02-lecture/wyndor.md" data-preview-link>Wyndor Glass Co. <i class="fa-solid fa-magnifying-glass"></i></a>

How can we model this decision problem as a generic model?

> [!TIP]
> The model must contain the following:
> - **Sets and parameters:** What are the sets and parameters that define the problem?
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

---

In this problem we have

- a given **set of products** with profits per batch,
- a given **set of plants** with limited time available, and
- a given amount of the time that is consumed when producing a batch of a product.

The goal is to find non-negative production quantities maximising the total profits.

---

#### Sets and parameters

The set and parameters of the generic model can be defined as follows:

- a set of products denoted by $I$,
- a set of plants denoted $J$,
- for each $i \in I$, the profit of product $i$ is denoted by $p_i$,
- for each $j \in J$, the amount of time available at plant $j$ is denoted by $q_j$,
- for each $i \in I$ and $j \in J$, the time at plant $j$ per batch of product $i$ is denoted by $a_{i,j}$. 

---

#### Variables

For each $i \in I$, the production quantity of product $i$ is denoted by $x_i$.

---

#### Objective

The object is to

maximise $\displaystyle\sum_{i\in I} p_i x_i$

---

#### Constraints 


$$\displaystyle\sum_{i\in I} a_{i,j} x_i \leq q_j \text{ for all } j\in J$$ 

$$x_i \geq 0 \text{ for all } i\in I$$

---

#### Example: Generic production model

maximise $\displaystyle\sum_{i\in I} p_i x_i$

subject to

$$\displaystyle\sum_{i\in I} a_{i,j} x_i \leq q_j \text{ for all } j\in J$$ 
$$x_i \geq 0 \text{ for all } i\in I$$


> [!NOTE]
> This model works for any kind and number of products and plants as well as for many other production planning problems.

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

#### Sets and parameters

The set and parameters of the generic model can be defined as follows:

- a set of kibbutzim denoted by $K$
- a set of crops denoted by $C$
- For each kibbutz $k\in K$, the amount of land available is $l_k$
- For each kibbutz $k\in K$, the maximum amount of water is $w_k$
- For each crop $c \in C$, the amount of land that can be dedicated to the crop is $u^c$ 
- For each crop $c \in C$, the expected net return per acre dedicated to the crop is $p^c$ 

---

#### Variables

For each kibbutz $k\in K$ and each crop $c \in C$, the number of acres devoted to each of the crops is $x_k^c$.

---

#### Objective

maximise 
$$\displaystyle\sum_{c\in C} \sum_{k\in K} p^c x_k^c$$
<!-- .element: class="fragment" -->

---

#### Constraints for the land available

$\displaystyle\sum_{c\in C} x_k^c \leq l_k \ {\rm for\ all}\ k \in K$ (land available)
<!-- .element: class="fragment" -->

---

#### Constraints for the water available

$$\displaystyle\sum_{c\in C} r^c x_k^c \leq w_i \ {\rm for\ all}\ k \in K$$
<!-- .element: class="fragment" -->

---

#### Constraints for the crop quotas

$$\displaystyle\sum_{k\in K} x_k^c \leq u^c\ {\rm for\ all}\ c\in C$$
<!-- .element: class="fragment" -->

---

#### Equity constraints

$$\displaystyle\sum_{c\in C} \frac{1}{l_k}x_k^c = \displaystyle\sum_{c\in C} \frac{1}{l_{h}}x_{h}^c\ {\rm for\ all}\ k,h \in K$$
<!-- .element: class="fragment" -->

---

#### Non-negativity constraints

$$x_k^c \geq 0\ {\rm for\ all}\ k \in K, c\in C$$
<!-- .element: class="fragment" -->

---

#### Generic Model for the Southern Confederation of Kibbutzim ####

maximise  $\displaystyle\sum_{c\in C} \sum_{k\in K} p^c x_k^c$

subject to

$\displaystyle\sum_{c\in C} x_k^c \leq l_k \ {\rm for\ all}\ k \in K$ (land available)
$$\displaystyle\sum_{c\in C} r^c x_k^c \leq w_i \ {\rm for\ all}\ k \in K$$
$$\displaystyle\sum_{k\in K} x_k^c \leq u^c\ {\rm for\ all}\ c\in C$$
$$\displaystyle\sum_{c\in C} \frac{1}{l_k}x_k^c = \displaystyle\sum_{c\in C} \frac{1}{l_{h}}x_{h}^c\ {\rm for\ all}\ k,h \in K$$
$$x_k^c \geq 0\ {\rm for\ all}\ k \in K, c\in C$$

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

