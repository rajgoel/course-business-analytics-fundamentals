# Introduction

===

## Terminology

What is **business analytics**?

---

### Meaning of the prefix "ana-"

> **ana-**
>
> before vowels an-, word-forming element meaning: 1. "upward, up in place or time," 2. "back, backward, against," 3. "again, anew," from Greek ana (prep.) <span style="background-color:yellow;">"up, on, upon; up to, toward; throughout; back, backwards; again, anew,"</span> from an extended form of PIE root *an- (1) "on, upon, above" (see [on](https://www.etymonline.com/word/on), which is the English cognate). In old medical prescriptions, ana by itself meant "an equal quantity of each."
<!-- .element style="text-align: left;font-family: 'Times New Roman', Times, serif;"-->

<small>Source: https://www.etymonline.com/word/ana-</small>

---

### Meaning of the suffix "-lytic"

> **-lytic**
>
> word-forming element used in making adjectives corresponding to nouns in -lysis, from Greek -lytikos, from lytikos "able to loose, loosing," from lytos "loosed," verbal adjective of lyein "to unfasten, loose, loosen, untie" (from PIE root [*leu-](https://www.etymonline.com/word/*leu-) <span style="background-color:yellow;">"to loosen, divide, cut apart"</span>).
<!-- .element style="text-align: left;font-family: 'Times New Roman', Times, serif;"-->

<small>Source: https://www.etymonline.com/word/-lytic</small>

---

### Definition: Business analytics

**Business analytics** is the systematic breakdown of complex business problems into easier subproblems to gain business insight.

---

### Scopes of business analytics

Business analytics is commonly divided into three main categories:

- Descriptive analytics
- Predictive analytics
- Prescriptive analytics

---

### Meaning of the word "describe"

> **describe(v.)**
>
> mid-13c., descriven, <span style="background-color:yellow;">"interpret, explain,"</span> a sense now obsolete; c. 1300, "represent orally or by writing," from Old French descrivre, descrire (13c.) and directly from Latin describere <span style="background-color:yellow;">"to write down, copy; sketch, represent,"</span> from de "down" (see [de-](https://www.etymonline.com/word/de-)) + scribere "to write" (from PIE root [*skribh-](https://www.etymonline.com/word/*skribh-) "to cut").
>
> From late 14c. as "form or trace by motion;" c. 1400 as "delineate or mark the form or figure of, outline." Reconstructed with Latin spelling from c. 1450. Related: Described, describes, describing.
<!-- .element style="text-align: left;font-family: 'Times New Roman', Times, serif;"-->

<small>Source: https://www.etymonline.com/word/describe</small>

---

### Definition: Descriptive analytics

Descriptive analytics is the process of using **current and historical data** to identify patterns and events. 

> [!TIP]
> Descriptive analytics answers the question: *What has happened?*

---

### Meaning of the word "predict"

> **predict(v.)**
>
> 1620s (implied in predicted), <span style="background-color:yellow;">"foretell, prophesy, declare before the event happens,"</span> a back formation from [prediction](https://www.etymonline.com/word/prediction) or else from Latin praedicatus, past participle of praedicere "foretell, advise, give notice," from prae "before" (see [pre-](https://www.etymonline.com/word/pre-)) + dicere "to say" (from PIE root [*deik-](https://www.etymonline.com/word/*deik-) "to show," also "pronounce solemnly"). Related: Predicted; predicting.
<!-- .element style="text-align: left;font-family: 'Times New Roman', Times, serif;"-->

<small>Source: https://www.etymonline.com/word/predict</small>

---

### Definition: Predictive analytics

Predictive analytics is the process of using current and historical data to **forecast future events**.

> [!TIP]
> Predictive analytics answers the question: *What will happen?*

---

### Meaning of the word "prescribe"

> **prescribe(v.)**
>
> mid-15c., prescriben, <span style="background-color:yellow;">"to write down as a direction, law, or rule,"</span> from Latin praescribere "write before, prefix in writing; ordain, determine in advance," from prae "before" (see [pre-](https://www.etymonline.com/word/pre-)) + scribere "to write" (from PIE root [*skribh-](https://www.etymonline.com/word/*skribh-) "to cut"). Related: Prescribed; prescribing. Medical sense of "advise, appoint, or designate as a remedy for a disease" is from 1580s, probably a back formation from prescription.
<!-- .element style="text-align: left;font-family: 'Times New Roman', Times, serif;"-->

<small>Source: https://www.etymonline.com/word/prescribe</small>

---

### Definition: Prescriptive analytics

Prescriptive analytics is the process of determining **which decisions shall be taken** to achieve a business objective.

> [!TIP]
> Prescriptive analytics answers the question: *What should be done?*

---

### Blurry scopes

Sometimes, methodologies can be used for all three scopes.

> [!NOTE]
> Recommender systems may serve all purposes:
>
> | Scope          | Question                                         |
> |----------------|--------------------------------------------------|
> | Descriptive    | *Which products did similar customers buy?*      |
> | Predictive     | *Which products is our customer likely to buy?*  |
> | Prescriptive   | *Which products should we recommend next?*       |

---

### Other terms

Other terms can also be found, but they often overlap or belong to one of the main three scopes.

> [!NOTE] 
> If descriptive analytics (*What has happened?*)  is combined with causal inference, we can also answer the question: *Why did it happen?* This is sometimes referred to as **diagnostic analytics**.

===

## Descriptive and predictive analytics  

---

### Naive techniques

Basic techniques include simple aggregations:

- **Counts:** number of records, frequency of categories
- **Mean and median:** measures of central tendency
- **Standard deviation:** measure of variability
- **Minimum and maximum:** range of values
- **Quantiles (e.g. quartiles):** divide a dataset into intervals with equal numbers of observations

> [!TIP]
> These are often used to get a quick understanding of the dataset before applying more advanced methods:
>
> - Descriptive: *How much did my customers spend on average?*
> - Predictive: *How much will an average customer spend?*

---

### Centroid

The **centroid** is the arithmetic mean of multi-dimensional input 
  $$ x^\text{centroid} = \tfrac{1}{n} \sum_{i=1}^n x_i $$

> [!TIP]
> The centroid can be used to answer questions like: *Where are my customers located?*

---

### Outlier detection

Outliers can be detected by identifying points that deviate significantly from the centroid:

- Suitable distance metrics can be used to measure deviation.
- Points with a deviation from the mean that exceeds a certain threshold may be flagged as outliers.

> [!NOTE]
> For normally distributed data, 99.7% lie within ±3 standard deviations from the mean. Therefore, a threshold of **±3 standard deviations** is often used.

---

### Distance metrics

A widespread distance metric is the **Euclidean distance** 

$$ d(x, y) = \displaystyle\sqrt{ \sum_{i=1}^n (x_i - y_i)^2 } $$
  
> [!WARNING]
> The choice of the distance measure can have a significant impact on the accuracy of outlier detection. For non-homogeneous data, other distance measures, such as the [Mahalanobis distance](https://en.wikipedia.org/wiki/Mahalanobis_distance), may work better. It accounts for correlations and scale, measuring how far a point lies from the centroid relative to the data distribution.

---

### Clustering

A cluster is a group of data points in a dataset that are more similar to each other than to points in other groups.

- **$k$-Means** clustering partitions data into $k$ clusters, where $k$ is a predefined number.
- Each data point is assigned to the cluster with the nearest centroid based on a distance metric, e.g. the Euclidean distance.
- Data points are iteratively reassigned to the closest centroid to maximize homogeneity within clusters.
- After reassignment, centroids are updated and the process repeats until cluster assignments no longer change.


<a href="https://harisnazir.github.io/K-Means-Clustering-Visualisation" data-preview-link>Visualisation of $k$-Means clustering <i class="fa-solid fa-magnifying-glass"></i></a>

> [!TIP]
>  Clustering can be used to answer questions like: *Which customers have similar characteristics as others?*

---

### Clustering with outlier detection
 
- $k$-Means clustering groups data points by assigning them to the nearest centroid based on a distance metric (usually Euclidean distance).
- Points with a distance to their assigned centroid exceeding a predefined threshold can be flagged as outliers.

> [!TIP]
> Combining clustering with outlier detection helps answer questions such as: *Which customers belong to groups with similar characteristics?* or *Which customers are significantly different from all others?*

---

### Distribution fitting

Distribution fitting can be used to model the underlying probability distribution of a dataset. 

- It is conducted by selecting candidate probability distributions and estimating their parameters.
- For each distribution/parameter combination, the fit can be determined, e.g., by [mean squared errors](https://en.wikipedia.org/wiki/Mean_squared_error).

> [!TIP]
> Distribution fitting helps to understand the data’s characteristics, estimate probabilities of future events, and detect anomalies by comparing observed data to expected patterns.

<!--
> [!NOTE]
> Selecting candidate probability distributions should be based on assumptions or knowledge of the underlying process.
-->

---

### Regression

Regression can be used to quantify the relationship between input variables and a continuous outcome. Given $m$ input-output pairs $\big( (x_{1,j}, \dots, x_{n,j}), y_j \big) $, **linear regression** assumes a relationship 
  $$  y_j = \beta_0 + \beta_1 x_{1,j} + \dots + \beta_n x_{n,j} + \varepsilon_j \textrm{ for all } 1 \leq j \leq m$$
   where $\varepsilon_j$ is an error term. The optimal parameters $\beta_0, \dots, \beta_n$ can be estimated by **minimizing**  
  $$ \sum_{j=1}^m \varepsilon_j^2 = \sum_{j=1}^m \big(y_j - (\beta_0 + \beta_1 x_{1,j} + \dots + \beta_n x_{n,j})\big)^2$$

> [!TIP]
> Regression allows answering questions like: *How does a change in sales price influence sales volume?*

---

### Classification

Classification assigns data points to predefined categories. A simple method is **$k$-Nearest Neighbors** which relies on a training set that is already classified:

1. Compute distances (e.g. Euclidean) from the new data point to all points in the training set.
2. Identify the $k$ nearest neighbors, where $k$ is a predefined number.
3. Assign the most common class among those $k$ neighbors to the new data point.

> [!TIP]
> Classification can be used to answer questions like: *Does a particular customer belong to a certain group?*

---

### Example: Classification

<svg width="500" height="400" viewBox="50 100 600 350" xmlns="http://www.w3.org/2000/svg">

  <!-- k=3 neighbors -->
  <g class="fragment">
    <!-- k=3 circle -->
    <circle cx="330" cy="270" r="125" fill="none" stroke="gray" stroke-width="3" stroke-dasharray="6 6"/>
    <text x="400" y="225" font-family="Arial" font-size="18" fill="gray">k=3</text>
    <!-- Lines from query to nearest neighbors -->
    <line x1="330" y1="270" x2="330" y2="180" stroke="lightgray" stroke-width="2.25"/>
    <line x1="330" y1="270" x2="360" y2="325" stroke="lightgray" stroke-width="2.25"/>
    <line x1="330" y1="270" x2="480" y2="240" stroke="lightgray" stroke-width="2.25"/>
  </g> 

  <!-- k=5 neighbors -->
  <g class="fragment">
    <!-- k=5 circle -->
    <circle cx="330" cy="270" r="180" fill="none" stroke="gray" stroke-width="3" stroke-dasharray="6 6"/>
    <text x="480" y="150" font-family="Arial" font-size="18" fill="gray">k=5</text>
    <!-- Lines from query to nearest neighbors -->
    <line x1="330" y1="270" x2="600" y2="225" stroke="lightgray" stroke-width="2.25"/>
    <line x1="330" y1="270" x2="240" y2="390" stroke="lightgray" stroke-width="2.25"/>
  </g> 

  <!-- Red points -->
  <circle cx="160" cy="150" r="10.5" fill="red" stroke="black" stroke-width="1.5"/>
  <circle cx="330" cy="180" r="10.5" fill="red" stroke="black" stroke-width="1.5"/>
  <circle cx="450" cy="90" r="10.5" fill="red" stroke="black" stroke-width="1.5"/>
  <circle cx="360" cy="325" r="10.5" fill="red" stroke="black" stroke-width="1.5"/>
  <circle cx="600" cy="225" r="10.5" fill="red" stroke="black" stroke-width="1.5"/>

  <!-- Blue points -->
  <circle cx="120" cy="330" r="10.5" fill="blue" stroke="black" stroke-width="1.5"/>
  <circle cx="240" cy="390" r="10.5" fill="blue" stroke="black" stroke-width="1.5"/>
  <circle cx="480" cy="240" r="10.5" fill="blue" stroke="black" stroke-width="1.5"/>
  <circle cx="570" cy="330" r="10.5" fill="blue" stroke="black" stroke-width="1.5"/>
  <circle cx="220" cy="270" r="10.5" fill="blue" stroke="black" stroke-width="1.5"/>

  <!-- Query point -->
  <circle cx="330" cy="270" r="10.5" fill="white" stroke="black" stroke-width="1.5"/>
</svg>


<!--
---

### Recommender systems

we do not know, and may be the customer doesn't know yet either.
-->

---

### Process mining

Process mining is concerned with the discovery of process models from event logs. 

- Process mining extracts event data from IT systems (e.g., timestamps, event type, case IDs).
- It automatically detects temporal and causal dependencies between events and activities.
- Process models are automatically generated based on these dependencies.

> [!TIP]
> Process mining helps answer questions like: *How are actual processes executed?* This can be used to identify bottlenecks, anomalies, and optimisation potential.

---

### Simulation

Simulation is the use of computational models to mimic the behavior of real-world systems over time. 

- Simulation requires a model representing the key components and dynamics of a system, e.g., a process model.
- Usually, a data model representing the key probability distributions is required.
- Simulation allows to run experiments by varying inputs and parameters to observe possible outcomes.
- It allows exploration of complex systems where analytical solutions or real-life experimentations are difficult or impossible.

> [!TIP]
> Simulation helps answer questions like: *What will be the outcome of my decision policy?*

---

### Related courses

- **Statistics & Econometrics**
- **Fundamentals of Data Science**
- **Business Process Management & Process Mining**
- **Machine Learning & Deep Learning**

===

## Prescriptive analytics

Prescriptive analytics is the process of determining **which decisions shall be taken** to achieve a business objective.

> [!IMPORTANT]
> Descriptive and predictive analytics can be used to assess the value of observed and proposed decisions, but they cannot be used to propose the decisions to be assessed.

---

### Prescriptive analytics workflow

- Identify the **decision space**.
- Identify **constraints** that impact which decision may be taken.
- Determine how to **evaluate decisions** and what the **objective** is.
- Systematically **search for decisions** that satisfy all constraints and have a good evaluation.

---

### Decision space or domain

The **decision space** or **domain** contains all decisions that can be taken, independently of whether they are good or bad.

It is typically represented by a set $X^\textrm{domain}$. Each element $x \in X^\textrm{domain}$ represents a particular decision.

> [!TIP]
> In many cases, decisions can be represented by a vector, i.e., $x = (x_1, x_2, \ldots, x_n)$.

---

### Constraints

Constraints represent:

- physical limitations, e.g., capacity or time.
- business rules, e.g., budget or policy compliance.
- logical dependencies, e.g., prerequisite conditions.

The set of **feasible decisions** is $X^\textrm{feasible} = \lbrace x \in X^\textrm{domain} \mid x \textrm{ satisfies all constraints} \rbrace$.

> [!NOTE]
> Constraints on single variables, e.g. lower and upper bounds or integrality, are often directly included in the representation of the decision space, e.g., $X^\textrm{domain} = \lbrace 0,1 \rbrace^n$.

---

### Objective

The objective quantifies how good or bad a decision is. It can be represented by an **objective function** $f(x) : X \rightarrow \mathbb{R}^k$ where $k$ is the number of objectives and the goal is to **minimise** or **maximise** $f(x)$.

> [!IMPORTANT]
> For [multi-objective optimisation](https://en.wikipedia.org/wiki/Multi-objective_optimization), i.e., $k>1$, different strategies for comparing $f(x')$ and $f(x'')$ exist, such as **weighted sums**, **lexicographic ordering**, or **Pareto optimality**.

---

### Mathematical program

A **mathematical program** or **mathematical optimisation problem** can be written as

$$ \text{minimize } f(x) $$

subject to

$$ x \in X $$

> [!NOTE]
> The problem to $\text{maximize } g(x)$ is equivalent to the problem to $\text{minimize } f(x) = -g(x)$.


---

### Types of mathematical programs

Mathematical programs can be categorised along different dimensions:

- **Deterministic vs. stochastic**: In deterministic problems, all parameters are known with certainty. In stochastic problems, some parameters are subject to uncertainty.

- **Static vs. dynamic**: Static problems consider a set of decisions to be made at one point in time. Dynamic problems involve a sequence of decisions over time.

- **Single-objective vs. multi-objective**: Some problems have a single objective, while others consider multiple, possibly conflicting objectives.

---

### Structural properties 

- **Continuous vs. non-continuous**: If objective and constraints can be represented by continuous functions, a problem is said to be continuous.

- **Linear vs. non-linear**: If objective and constraints can be represented by linear functions, a problem is said to be linear.

---

### Related courses

- **Management Science & Operations Research**
- **Machine Learning & Deep Learning**
- **Decision Science**
