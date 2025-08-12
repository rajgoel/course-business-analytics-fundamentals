# Tanker Scheduling Problem

A steamship company has contracted to deliver perishable goods between several
different origin-destination pairs. Since the cargo is perishable, the customers have
specified precise dates (i.e., delivery dates) when the shipments must reach their
destinations. (The cargoes may not arrive early or late.) The steamship company
wants to determine the minimum number of ships needed to meet the delivery dates
of the shiploads.

To illustrate a modeling approach for this problem, we consider an example
with four shipments; each shipment is a full shipload with the characteristics shown
below. For example, as specified by the first row in this figure, the company must deliver one shipload available at port A and destined for port C on day 3. 

| Shipment | Origin | Destination | Delivery date |
|----------|--------|-------------|---------------|
|     1    | Port A |   Port C    |       3       |
|     2    | Port A |   Port C    |       8       |
|     3    | Port B |   Port D    |       3       |
|     4    | Port B |   Port C    |       6       |


Below tables show the transit times for the shipments (including allowances for
loading and unloading the ships) and the return times (without a cargo) between the
ports.

| Origin\Destination | Port A | Port B | Port C | Port D |
|--------------------|--------|--------|--------|--------|
|             Port A |        |        |      3 |      2 |
|             Port B |        |        |      2 |      3 |
|             Port C |      2 |      1 |        |        |
|             Port C |      1 |      2 |        |        |


Suppose that we can compute the profit associated with each available shipment (depending on the revenues and the operating cost directly attributable to that shipment). Let the profits associated with the shipments 1, 2, 3, and 4 be 10, 10, 3, and 4, respectively. In addition to the operating cost, we incur a fixed charge of 5 units to bring a ship into service. We want to determine the shipments we should make and the number of ships to use to maximize net profits. (Note that it is not necessary to honor all possible shipping commitments.) 

Formulate this problem as a minimum cost flow problem.

**Source:** Ahuja, Magnanti, Orlin: Network Flows - Theory, Algorithms, and Applications, ISBN 978-0136175490

