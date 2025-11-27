# Tanker Scheduling Problem

A steamship company has contracted to deliver perishable goods between several
different origin-destination pairs. Since the cargo is perishable, the customers have
specified precise dates (i.e., delivery dates) when the shipments must reach their
destinations. (The cargoes may not arrive early or late.) The steamship company
wants to determine the minimum number of ships needed to meet the delivery dates
of the shiploads.

We consider an example with four shipments; each shipment is a full shipload with the characteristics shown below. For example, as specified by the first row in this figure, the company must deliver one shipload available at port A and destined for port C on day 3. 

| Shipment | Origin | Destination | Delivery date | Profit contribution |
|----------|--------|-------------|---------------|---------------------|
|     1    | Port A |   Port C    |       3       |                  10 |
|     2    | Port A |   Port C    |       8       |                  10 |
|     3    | Port B |   Port D    |       3       |                   3 |
|     4    | Port B |   Port C    |       6       |                   4 |


Below tables show the transit times for the shipments (including allowances for
loading and unloading the ships) and the return times (without a cargo) between the
ports.

| Origin\Destination | Port A | Port B | Port C | Port D |
|--------------------|--------|--------|--------|--------|
|             Port A |        |        |      3 |      2 |
|             Port B |        |        |      2 |      3 |
|             Port C |      2 |      1 |        |        |
|             Port D |      1 |      2 |        |        |

Every ship brought into service incurs a fixed charge of 5 units.

We want to determine the shipments we should make and the number of ships to use to maximize net profits. Note that it is not necessary to honor all possible shipping commitments.

Formulate this problem as a minimum cost flow problem.

**Source:** Adapted from Ahuja, Magnanti, Orlin: Network Flows - Theory, Algorithms, and Applications, ISBN 978-0136175490

