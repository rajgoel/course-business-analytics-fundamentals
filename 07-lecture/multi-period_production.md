# Multi-period production planning

A factory works 24 hours a day, 7 days a week producing four products.
Only one product can be produced at a time and throughout each day, the same product is produced (and then the next day either the same product is produced or the factory produces a different product).

The number of units produced per hour depends on the product: 

| Product   | Production per hour |
|-----------|---------------------|
| Product 1 | 100                 |
| Product 2 | 250                 |
| Product 3 | 190                 |
| Product 4 | 150                 |

When changing from producing one product to another product, the first five working hours of the day are lost due to a setup required.
On the first day no setup is required if and only if product 1 is produced.

For the next seven days the following demand must be fulfilled:

| Product | Mon. | Tue. | Wed. | Thu. | Fri. | Sat. | Sun. |
|---------|--------|---------|-----------|----------|--------|----------|--------|
| 1       | 1500   | 1700    | 1900      | 1000     | 2000   | 500      | 500    |
| 2       | 4000   | 500     | 1000      | 3000     | 500    | 1000     | 2000   |
| 3       | 2000   | 2000    | 3000      | 2000     | 2000   | 2000     | 500    |
| 4       | 3000   | 2000    | 2000      | 1000     | 1000   | 500      | 500    |

The amount of items available at the beginning of the week is:

| Product   | Current stock  |
|-----------|----------------|
| Product 1 | 5000           |
| Product 2 | 7000           |
| Product 3 | 9000           |
| Product 4 | 8000           |

At the end of the week there must be at least 1750 units in stock for each product.
The cost of holding stock is €1.50 per unit for products 1 and 2 and €2.50 per unit for products 3 and 4 (based on the stock held at the end of each day).

Formulate a generic model that the company can use in any week to minimise holding costs.

