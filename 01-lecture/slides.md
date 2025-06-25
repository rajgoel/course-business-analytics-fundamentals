## Introduction

===

### Terminology

What is **Business analytics**?

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

Prescriptive analytics is the process of determining **which actions shall be performed** to achieve a business objective.

> [!TIP]
> Prescriptive analytics answers the question: *What should be done?*

---

### Blurry scopes

Sometimes, methodologies can be used for all three scopes.

> [!NOTE]
> Recommender systems may serve all purposes:
>
> | Scope          | Recommendation type                         |
> |----------------|---------------------------------------------|
> | Descriptive    | "People who bought this, also bought ..."   |
> | Predictive     | "Based on your search, you might like ..."  |
> | Prescriptive   | "We propose ... to you"                     |

---

### Other terms

Other terms can also be found, but they often overlap or belong to one of the main three scopes.

> [!NOTE] 
> If descriptive analytics (*What has happened?*)  is combined with causal inference, we can also answer the question *Why did it happen?*. This is sometimes referred to as **Diagnostic analytics**.

===

## Descriptive and predictive analytics  

---

### Naive approaches

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

### Centroid and center of gravity

The centroid and center of gravity can be used to answer questions like: *Where are my customers located?*

- **Centroid:** arithmetic mean of multi-dimensional input `$$ x^\text{centroid} =\sum_{i=1}^n x_i / n $$`
- **Center of gravity:** weighted mean of multi-dimensional input  `$$ x^\text{center of gravity} = \sum_{i=1}^n w_i x_i / \sum_{i=1}^n w_i $$`

> [!TIP]
> The centroid is used when each point has equal importance, the center of gravity is used when each point carries a different weight (e.g. order volume, revenue, visit frequency).

---

### Outlier detection

Outliers can be detected by identifying points that deviate significantly from the centroid:

- Suitable distance metrics are required to measure deviation.
- Points with a deviation from the mean that exceeds a certain threshold are flagged as outliers.

> [!NOTE]
> For normally distributed data, 99.7% lie within ±3 standard deviations from the mean. Therefore, a threshold of **±3 standard deviations** is often used.

---

### Distance metrics

A widespread distance metric is the **Euclidean distance** 

$$ d(x, y) = \displaystyle\sqrt{ \sum_{i=1}^n (x_i - y_i)^2 } $$
  
> [!WARNING]
> Outlier detection may be severely influenced by the distance measure. For non-homogeneous data, other distance measures may such as the [Mahalanobis distance](https://en.wikipedia.org/wiki/Mahalanobis_distance) work better. It accounts for correlations and scale, measuring how far a point lies from the centroid relative to the data distribution.

---

### Clustering

A cluster is a group of data points in a dataset that are more similar to each other than to points in other groups. Clustering can be used to answer questions like: *Which customers have similar characteristics as others?*

- **$k$-Means** clustering partitions data into $k$ clusters, where $k$ is a predefined number.
- Each data point is assigned to the cluster with the nearest centroid based on a distance metric, e.g. the Euclidean distance).
- The algorithm iteratively reassigns data points to the closest centroid to maximize homogeneity within clusters.
- After reassignment, centroids are updated and the process repeats until cluster assignments no longer change.

Visualisation: <a href="https://harisnazir.github.io/K-Means-Clustering-Visualisation/" data-preview-link>K-Means Clustering</a>

---

### Clustering with outlier detection
 
- K-Means clustering groups data points by assigning them to the nearest centroid based on a distance metric (usually Euclidean distance).
- Points with a distance to their assigned centroid exceeding a predefined threshold can be flagged as outliers.
- Combining clustering with outlier detection helps answer questions such as: *Which customers belong to groups with similar characteristics?* or *Which customers are significantly different from all others?*

---

### Distribution fitting

Distribution fitting can be used to model the underlying probability distribution of a dataset. This helps to understand the data’s characteristics, estimate probabilities of future events, and detect anomalies by comparing observed data to expected patterns.

- Distribution fitting is conducted by selecting a candidate probability distribution and estimating its parameters so that it closely matches the observed data.
- Selecting a candidate probability distribution should be based on assumptions or knowledge of the underlying process.
- For each distribution/parameter combination, the fit can be determined by e.g. [Mean squared errors](https://en.wikipedia.org/wiki/Mean_squared_error).

---

### Regression

Regression can be used to quantify the relationship between one or more input variables and a continuous outcome. It allows answering questions like: *How does a change in a customer’s attributes affect their spending?* or *What factors influence sales volume?*

- **Linear regression** assumes a linear relationship between variables `$ x_1, \dots, x_n $` and a dependent variable `$y$`, modeled as  
  `$$  y = \beta_0 + \beta_1 x_1 + \dots + \beta_n x_n + \varepsilon$$` 
   where $\varepsilon$ is a random error term.
- The optimal parameters `$$\beta_0, \dots, \beta_n$$` are estimated by minimizing  
  `$$  \sum_{i=1}^m (y_i - \hat{y}_i)^2 $$` where $\hat{y}_i = \beta_0 + \beta_1 x_1 + \dots + \beta_n x_n$.

---

### Classification

Classification assigns data points to predefined categories and can be used to answer questions like: *Does a particular customer belong to a certain group?*

A simple method is **$k$-Nearest Neighbors** which relies on a training set that is already classified:
1. Compute distances (e.g. Euclidean) from the new data point to all points in the training set.
2. Identify the $k$ nearest neighbors.
3. Assign the most common class among those $k$ neighbors to the new data point.

<!--
---

### Recommender systems

we do not know, and may be the customer doesn't know yet either.
-->

---

### Process mining

Process mining is concerned with the analysis of event logs. It helps answer questions like: *How are actual processes executed?*

- Process mining extracts event data from IT systems (e.g., timestamps, activities, case IDs).
- It automatically detects temporal and causal dependencies between activities.
- Process models are automatically generated based on these dependencies.

Process mining helps establishing a causal relationship between events allowing to identify bottlenecks, anomalies, and optimization potential. 

---

### Simulation

Simulation is the use of computational models to mimic the behavior of real-world systems over time. It helps answer questions like: *What will happen under different scenarios?*

- Simulation requires a model representing the key components and dynamics of a system, e.g., a process model.
- Usually, a data model representing the key probability distributions is required.
- Simulation allows to run experiments by varying inputs and parameters to observe possible outcomes.
- It allows exploration of complex systems where analytical solutions are difficult or impossible.

---

### Related courses

- **Statistics & Econometrics**
- **Fundamentals of Data Science**
- **Business Process Management & Process Mining**
- **Machine Learning & Deep Learning**

===

### Prescriptive analytics

Prescriptive analytics is the process of determining **which actions shall be performed** to achieve a business objective.

---

todo

---

### Related courses

- **Management Science & Operations Research**
- **Machine Learning & Deep Learning**
- **Decision Science**
