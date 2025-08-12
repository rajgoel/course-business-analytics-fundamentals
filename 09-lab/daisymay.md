# Daisymay Van Line

Daisymay Van Line moves people between New York,
Philadelphia, and Washington, D.C. It takes a van one day to
travel between any two of these cities. The company incurs
costs of $1,000 per day for a van that is fully loaded and
traveling, $800 per day for an empty van that travels, $700
per day for a fully loaded van that stays in a city, and $400
per day for an empty van that remains in a city. Each day of
the week, the loads described in below table must be shipped.

| Trip        | Monday | Tuesday | Wednesday | Thursday | Friday |
|-------------|--------|---------|-----------|----------|--------|
| Phil.–N.Y.  |      2 |         |           |          |        |
| Phil.–Wash. |        |       2 |           |          |      2 |
| N.Y.–Phil.  |      3 |       2 |           |          |        |
| N.Y.–Wash.  |        |         |         2 |        2 |        |
| N.Y.–Phil.  |      1 |         |           |          |        |
| Wash.–N.Y.  |        |         |         1 |          |      1 |

On Monday, for example, two trucks must be sent from
Philadelphia to New York (arriving on Tuesday). Also, two
trucks must be sent from Philadelphia to Washington on
Friday (assume that Friday shipments must arrive on
Monday). 

Formulate a min-cost network flow problem that can be used to
minimize the cost of meeting weekly requirements. 

To simplify the formulation, assume that the requirements
repeat each week. Then it seems plausible to assume that
any of the company’s trucks will begin each week in the
same city in which it began the previous week.

**Source:** Winston: Operations Research - Applications and Algorithms, 4th Edition, ISBN 0-534-52020-0

