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

#### Sets and parameters

The set and parameters of the generic model can be defined as follows:

- a set of products denoted by $I$,
- a set of plants denoted $J$,
- for each $i \in I$, the profit of product $i$ is denoted by $p_i$,
- for each $j \in J$, the amount of time available at plant $j$ is denoted by $q_j$,
- for each $i \in I$ and $j \in J$, the time required at plant $j$ for the production of a batch of product $i$ is denoted by $a_{i,j}$. 

---

#### Variables

For each $i \in I$, the production quantity of product $i$ is denoted by $x_i$.

---

#### Objective

maximise $\displaystyle\sum_{i\in I} p_i x_i$

---

#### Constraints 


$\displaystyle\sum_{i\in I} a_{i,j} x_i \leq q_j \text{ for all } j\in J$ (time constraints)

$x_i \geq 0 \text{ for all } i\in I$ (non-negativity)

---

#### Generic production model

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

For each kibbutz $k\in K$ and each crop $c \in C$, the number of acres devoted to the crop is $x_k^c$.

---

#### Objective

maximise 
$$\displaystyle\sum_{c\in C} \sum_{k\in K} p^c x_k^c$$
<!-- .element: class="fragment" -->

---

#### Constraints for the land available

$$\displaystyle\sum_{c\in C} x_k^c \leq l_k \ {\rm for\ all}\ k \in K$$
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

#### Generic model for the Southern Confederation of Kibbutzim

maximise  $\displaystyle\sum_{c\in C} \sum_{k\in K} p^c x_k^c$

subject to

$$\displaystyle\sum_{c\in C} x_k^c \leq l_k \ {\rm for\ all}\ k \in K$$
$$\displaystyle\sum_{c\in C} r^c x_k^c \leq w_i \ {\rm for\ all}\ k \in K$$
$$\displaystyle\sum_{k\in K} x_k^c \leq u^c\ {\rm for\ all}\ c\in C$$
$$\displaystyle\sum_{c\in C} \frac{1}{l_k}x_k^c = \displaystyle\sum_{c\in C} \frac{1}{l_{h}}x_{h}^c\ {\rm for\ all}\ k,h \in K$$
$$x_k^c \geq 0\ {\rm for\ all}\ k \in K, c\in C$$


---

### Comparison

<div class="twocolumn" style="font-size:40%;gap:100px;top-margin:50px;">
<div style="height:100%;background-color:#f7f7f8;padding:20px;border-radius:10pt;">
maximise $ 1000 (x_1^{\rm sugarbeets} + x_2^{\rm sugarbeets} +x_3^{\rm sugarbeets}) + 750 (x_1^{\rm cotton} + x_2^{\rm cotton} +x_3^{\rm cotton})+ 250 (x_1^{\rm sorghum} + x_2^{\rm sorghum} +x_3^{\rm sorghum})$ 

subject to
$$x_1^{\rm sugarbeets} + x_1^{\rm cotton}  + x_1^{\rm sorghum} \leq 400$$
$$x_2^{\rm sugarbeets} + x_2^{\rm cotton}  + x_2^{\rm sorghum} \leq 600$$
$$x_3^{\rm sugarbeets} + x_3^{\rm cotton}  + x_3^{\rm sorghum} \leq 300$$
$$3x_1^{\rm sugarbeets} + 2x_1^{\rm cotton}  + x_1^{\rm sorghum} \leq 600$$
$$3x_2^{\rm sugarbeets} + 2x_2^{\rm cotton}  + x_2^{\rm sorghum} \leq 800$$ 
$$3x_3^{\rm sugarbeets} + 2x_3^{\rm cotton}  + x_3^{\rm sorghum} \leq 375$$
$$x_1^{\rm sugarbeets} + x_2^{\rm sugarbeets} +x_3^{\rm sugarbeets} \leq 600$$ 
$$x_1^{\rm cotton} + x_2^{\rm cotton} +x_3^{\rm cotton} \leq 500$$
$$x_1^{\rm sorghum} + x_2^{\rm sorghum} +x_3^{\rm sorghum} \leq 325$$
$$\tfrac{1}{400} x_1^{\rm sugarbeets} + \tfrac{1}{400} x_1^{\rm cotton} + \tfrac{1}{400} x_1^{\rm sorghum} = \tfrac{1}{600} x_2^{\rm sugarbeets} + \tfrac{1}{600} x_2^{\rm cotton} + \tfrac{1}{600} x_2^{\rm sorghum}$$
$$\tfrac{1}{600} x_2^{\rm sugarbeets} + \tfrac{1}{600} x_2^{\rm cotton} + \tfrac{1}{600} x_2^{\rm sorghum}= \tfrac{1}{300} x_3^{\rm sugarbeets} + \tfrac{1}{300} x_3^{\rm cotton} + \tfrac{1}{300} x_3^{\rm sorghum}$$
$$x_i^{\rm sugarbeets} \geq 0,  x_i^{\rm cotton} \geq 0,  x_i ^{\rm sorghum} \geq 0\ {\rm for}\ i \in \lbrace 1,2,3 \rbrace$$
</div>
<div style="height:100%;background-color:#f7f7f8;padding:20px;border-radius:10pt;">
maximise  $\displaystyle\sum_{c\in C} \sum_{k\in K} p^c x_k^c$

subject to

$$\displaystyle\sum_{c\in C} x_k^c \leq l_k \ {\rm for\ all}\ k \in K$$
$$\displaystyle\sum_{c\in C} r^c x_k^c \leq w_i \ {\rm for\ all}\ k \in K$$
$$\displaystyle\sum_{k\in K} x_k^c \leq u^c\ {\rm for\ all}\ c\in C$$
$$\displaystyle\sum_{c\in C} \frac{1}{l_k}x_k^c = \displaystyle\sum_{c\in C} \frac{1}{l_{h}}x_{h}^c\ {\rm for\ all}\ k,h \in K$$
$$x_k^c \geq 0\ {\rm for\ all}\ k \in K, c\in C$$
</div>
</div>

