## Example: <a href="markdown-viewer.html?file=03-lecture/kibbutzim.md" data-preview-link>Southern Confederation of Kibbutzim <i class="fa-solid fa-magnifying-glass"></i></a>

How can we model this decision problem?

> [!TIP]
> The model must contain the following:
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

---

### Summary of problem characteristics

- There are 3 kibbutzim
- Each kibbutz can plant sugar beets, cotton, and sorghum
- The amount of land available for each kibbutz is limited
- The amount of water available for each kibbutz is limited
- For each crop a different net return can be expected 
- The total amount of sugar beet production is limited
- The total amount of cotton production is limited
- The total amount of sorghum production is limited
- Each kibbutz must use the same share of its land
- The confederation wants to maximise total net return

---


### Variables

The number of acres devoted to each of the crops by each of the 3 kibbutzim:<!-- .element: class="fragment" data-fragment-index="1" -->

$$x_i^{\rm sugarbeets}, x_i^{\rm cotton}, x_i^{\rm sorghum}\ {\rm for}\ i \in \lbrace 1,2,3 \rbrace$$ <!-- .element: class="fragment" data-fragment-index="1" -->

> [!TIP]
> Always try to use descriptive variable names with meaningful subscripts or superscripts. Avoid generic names like $x_1, x_2, \ldots, x_9$ which obscure the variables' semantics.
<!-- .element: class="fragment" data-fragment-index="2" -->

---


The expected net return per acre of land used for

- sugar beets is 1000$,
- cotton is 750$,
- sorghum is 250$.

What is the objective function?


---


### Objective function

maximise <!-- .element: class="fragment"  -->
$$1000 (x_1^{\rm sugarbeets} + x_2^{\rm sugarbeets} +x_3^{\rm sugarbeets})$$ <!-- .element: class="fragment"  -->
$$+ 750 (x_1^{\rm cotton} + x_2^{\rm cotton} +x_3^{\rm cotton})$$ <!-- .element: class="fragment"  -->
$$+ 250 (x_1^{\rm sorghum} + x_2^{\rm sorghum} +x_3^{\rm sorghum})$$ <!-- .element: class="fragment"  -->

> [!IMPORTANT]
> Never forget to state whether you want to maximise or minmise.
<!-- .element: class="fragment"-->

---

- Kibbutz 1 has 400 acres of land.
- Kibbutz 2 has 600 acres of land.
- Kibbutz 3 has 300 acres of land.

What are the constraints on the usable land?

---

### Constraints on the usable land

$$x_1^{\rm sugarbeets} + x_1^{\rm cotton}  + x_1^{\rm sorghum} \leq 400$$ <!-- .element: class="fragment"  -->

$$x_2^{\rm sugarbeets} + x_2^{\rm cotton}  + x_2^{\rm sorghum} \leq 600$$ <!-- .element: class="fragment"  -->

$$x_3^{\rm sugarbeets} + x_3^{\rm cotton}  + x_3^{\rm sorghum} \leq 300$$ <!-- .element: class="fragment"  -->

---

The Water Commissioner has allocated

- 600 acre feet of water to kibbutz 1,
- 800 acre feet of water to kibbutz 2,
- 375 acre feet of water to kibbutz 3.

The required amount of water for an acre of land used for

- sugar beets is 3 acre feet per acre,
- cotton is 2 acre feet per acre,
- sorghum is 1 acre feet per acre.

What are the constraints on the available water?

---

### Constraints on the available water

$$3x_1^{\rm sugarbeets} + 2x_1^{\rm cotton}  + x_1^{\rm sorghum} \leq 600$$ <!-- .element: class="fragment"  -->

$$3x_2^{\rm sugarbeets} + 2x_2^{\rm cotton}  + x_2^{\rm sorghum} \leq 800$$ <!-- .element: class="fragment"  -->

$$3x_3^{\rm sugarbeets} + 2x_3^{\rm cotton}  + x_3^{\rm sorghum} \leq 375$$ <!-- .element: class="fragment"  -->

---

The Ministry of Agriculture has set a maximum quota
for the **total** amount of land that can be devoted to each of
these crops

- at most 600 acres should be used for production of sugar beets,
- at most 500 acres should be used for production of cotton,
- at most 325 acres should be used for production of sorghum.

What are the constraints on the total amount of land used per crop?

---

### Constraints on the total amount of land used per crop

$$x_1^{\rm sugarbeets} + x_2^{\rm sugarbeets} +x_3^{\rm sugarbeets} \leq 600$$ <!-- .element: class="fragment"  -->

$$x_1^{\rm cotton} + x_2^{\rm cotton} +x_3^{\rm cotton} \leq 500$$ <!-- .element: class="fragment"  -->

$$x_1^{\rm sorghum} + x_2^{\rm sorghum} +x_3^{\rm sorghum} \leq 325$$ <!-- .element: class="fragment"  -->

---

To ensure equity between the three kibbutzim it is agreed that each kibbutz will use the same share of its land, i.e. if one kibbutz can only use half of its land (due to water constraints or quota) then the others should also use only half of their land.

What are the equity constraints?


---

### Equity constraints

$$\frac{x_1^{\rm sugarbeets} + x_1^{\rm cotton} +x_1^{\rm sorghum}}{400} = \frac{x_2^{\rm sugarbeets} + x_2^{\rm cotton} +x_2^{\rm sorghum}}{600}$$
 <!-- .element: class="fragment"  -->

$$\frac{x_2^{\rm sugarbeets} + x_2^{\rm cotton} +x_2^{\rm sorghum}}{600} =  \frac{x_3^{\rm sugarbeets} + x_3^{\rm cotton} +x_3^{\rm sorghum}}{300}$$
 <!-- .element: class="fragment"  -->


> [!NOTE]
> Two constraints are sufficient to ensure that all three kibbutzim use the same share of the land.
<!-- .element: class="fragment" -->

---


### Non-negativity constraints

$$x_i^{\rm sugarbeets} \geq 0,  x_i^{\rm cotton} \geq 0,  x_i ^{\rm sorghum} \geq 0\ {\rm for}\ i \in \lbrace 1,2,3 \rbrace$$ <!-- .element: class="fragment" data-fragment-index="1"  -->

> [!TIP]
> Non-negativity constraints are needed in most problems.
<!-- .element: class="fragment" data-fragment-index="1" -->

---

<!-- .slide: style="font-size:50%;"  -->

### Linear program
<!-- .element: style="font-size:200%;"  -->

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

===


## Example: <a href="markdown-viewer.html?file=03-lecture/rylon.md" data-preview-link>Rylon Corporation <i class="fa-solid fa-magnifying-glass"></i></a>

How can we model this decision problem?

> [!TIP]
> The model must contain the following:
> - **Parameters:** What are the parameters given?
> - **Variables:** What are the decisions that can be taken?
> - **Objective:** What is the goal?
> - **Constraints:** What are the restrictions on the decisions?

---

### Parameters

- ounces of Brute obtained per pound of raw material: $y^\textrm{brute} = 3$
- ounces of Chanelle obtained per pound of raw material: $y^\textrm{chanelle}$ = 4
- revenue per ounce of Regular Brute: $r^\textrm{regularbrute} = 7$
- revenue per ounce of Regular Chanelle: $r^\textrm{regularchanelle}$ = 6
- revenue per ounce of Luxury Brute: $r^\textrm{luxurybrute} = 18$
- revenue per ounce of Luxury Chanelle: $r^\textrm{luxurychanelle} = 14$
- cost per pound of raw material purchased: $c^\textrm{rawmaterial} = 3$ 
- cost per ounce of Brute refined: $c^\textrm{brute} = 4$
- cost per ounce of Chanelle refined: $c^\textrm{chanelle} = 4$ 
- laboratory time for processing one pound of raw material: $t^\textrm{rawmaterial} = 1$ 
- laboratory time for refining one ounce of Brute: $t^\textrm{brute} = 3$ 
- laboratory time for refining one ounce of Chanelle: $t^\textrm{chanelle} = 2$ 
- pounds of raw material that can be purchased: $Q = 4000$ 
- total laboratory time available: $T = 6000$ 

---

### Variables

- pounds of raw material purchased: $x^\textrm{rawmaterial}$
- ounces of Regular Brute sold: $x^\textrm{regularbrute}$
- ounces of Regular Chanelle sold: $x^\textrm{regularchanelle}$
- ounces of Luxury Brute sold: $x^\textrm{luxurybrute}$
- ounces of Luxury Chanelle sold: $x^\textrm{luxurychanelle}$

---

### Objective

maximise<!-- .element: class="fragment"  -->
 

$$ r^\textrm{regularbrute} x^\textrm{regularbrute} + r^\textrm{regularchanelle} x^\textrm{regularchanelle} $$<!-- .element: class="fragment"  -->


$$ + r^\textrm{luxurybrute} x^\textrm{luxurybrute} + r^\textrm{luxurychanelle} x^\textrm{luxurychanelle} $$<!-- .element: class="fragment"  -->


$$ - c^\textrm{brute} x^\textrm{luxurybrute} - c^\textrm{chanelle} x^\textrm{luxurychanelle} $$<!-- .element: class="fragment"  -->


$$ - c^\textrm{rawmaterial} x^\textrm{rawmaterial}$$<!-- .element: class="fragment"  -->


---

### Constraints on the amount of raw material that can be purchased

$x^\textrm{rawmaterial} \leq Q$
<!-- .element: class="fragment"  -->

---

### Constraints on the laboratory time that can be used

$$t^\textrm{rawmaterial} x^\textrm{rawmaterial}$$ <!-- .element: class="fragment"  -->

$$+ t^\textrm{brute} x^\textrm{luxurybrute} + t^\textrm{chanelle} x^\textrm{luxurychanelle}$$ <!-- .element: class="fragment"  -->

$$\leq T$$<!-- .element: class="fragment"  -->

---

### Constraints on the production quantities

$$x^\textrm{regularbrute} + x^\textrm{luxurybrute} = y^\textrm{brute} x^\textrm{rawmaterial}$$<!-- .element: class="fragment"  -->

$$x^\textrm{regularchanelle} + x^\textrm{luxurychanelle} = y^\textrm{chanelle} x^\textrm{rawmaterial}$$<!-- .element: class="fragment"  -->

---

### Non-negativities

$$x^\textrm{rawmaterial} \geq 0$$
$$x^\textrm{regularbrute} \geq 0$$
$$x^\textrm{regularchanelle} \geq 0$$
$$x^\textrm{luxurybrute} \geq 0$$
$$x^\textrm{luxurychanelle} \geq 0$$

