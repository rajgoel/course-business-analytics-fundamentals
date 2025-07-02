### Example: Tanker scheduling ###



> A steamship company is specialised in delivering perishable goods between several different origin-destination pairs. For each shipment there is a profit that is obtained if the shipment is served. As the cargo is perishable, the customers have specified precise departure and arrival dates. The company may decide whether to serve a shipment request or not.

---

>Each ship brought into service will incur a charge of 5 T€. The requested shipments and empty trip durations are:
>
>| Shipment | Origin | Destination | Departure day | Arrival day | Profit (in T€)|
>|----------|--------|-------------|---------------|-------------|--------|
>| 1 | Port A | Port C | 0 | 3 | 10 |
>| 2 | Port A | Port C | 5 | 8 | 10 |
>| 3 | Port B | Port D | 0 | 3 | 3 |
>| 4 | Port B | Port C | 4 | 6 | 4 |
>| Empty | Port C | Port A | $t$ | $t+2$ | |
>| Empty | Port C | Port B | $t$ | $t+1$ | |
>| Empty | Port D | Port A | $t$ | $t+1$ | |
>| Empty | Port D | Port B | $t$ | $t+2$ | |
>
> The company wants to  maximise net profits.
<!-- .element style="font-size:70%" -->

Provide a minimum cost network flow model.

===

### Exercise: Airline scheduling ###

> Jetty Airlines is operating flights between New York, Washington, and Boston.
The airline has been offered several time slots for takeoff and landing by the national aviation authority.
The airline can decide whether to operate an aircraft on any of the potential flights. For any aircraft in operation, the airline has fixed costs of USD 800 per day.

---

>Jetty Airlines is offered the following time slots:
>
>| Origin    | Departure  | Destination   | Arrival | Revenue in USD | Costs in USD |
>|-----------|------------|---------------|---------|----------|-------|
>| New York    | 09.00 | Washington  | 10.00  |    900   |   400 |
>| New York    | 14.00 | Washington  | 15.00  |    600   |   350 |
>| New York    | 10.00 | Boston      | 11.00  |    800   |   400 |
>| New York    | 16.00 | Boston      | 17.00  |   1200   |   450 |
>| Washington  | 09.00 | New York    | 10.00  |   1100   |   400 |
>| Washington  | 15.00 | New York    | 16.00  |    900   |   350 |
>| Washington  | 10.00 | Boston      | 12.00  |   1500   |   700 |
>| Washington  | 17.00 | Boston      | 19.00  |   1800   |   900 |
>| Boston      | 10.00 | New York    | 11.00  |    900   |   500 |
>| Boston      | 14.00 | New York    | 15.00  |    800   |   450 |
>| Boston      | 11.00 | Washington  | 13.00  |   1100   |   600 |
>| Boston      | 15.00 | Washington  | 17.00  |   1200   |   650 |
<!-- .element style="font-size:70%" -->

Provide a model of the problem of determining the optimal flight schedule that can be repeated on a daily basis.

