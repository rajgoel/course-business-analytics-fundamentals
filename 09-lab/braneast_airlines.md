# Braneast Airlines

Braneast Airlines must determine how many airplanes should serve the Boston–New York–Washington air corridor and which flights to fly. Braneast may fly any of the daily
flights shown in below table. 

| Origin    | Departure  | Destination   | Arrival | Revenue | Costs |
|-----------|------------|---------------|---------|---------|-------|
| New York    | 09:00 | Washington  | 10:00  |   $900   |  $400 |
| New York    | 14:00 | Washington  | 15:00  |   $600   |  $350 |
| New York    | 10:00 | Boston      | 11:00  |   $800   |  $400 |
| New York    | 16:00 | Boston      | 17:00  |  $1200   |  $450 |
| Washington  | 09:00 | New York    | 10:00  |  $1100   |  $400 |
| Washington  | 15:00 | New York    | 16:00  |   $900   |  $350 |
| Washington  | 10:00 | Boston      | 12:00  |  $1500   |  $700 |
| Washington  | 17:00 | Boston      | 19:00  |  $1800   |  $900 |
| Boston      | 10:00 | New York    | 11:00  |   $900   |  $500 |
| Boston      | 14:00 | New York    | 15:00  |   $800   |  $450 |
| Boston      | 11:00 | Washington  | 13:00  |  $1100   |  $600 |
| Boston      | 15:00 | Washington  | 17:00  |  $1200   |  $650 |

The fixed cost of operating an airplane is $800/day. 

Formulate a min-cost network flow problem that can be used to maximize Braneast’s daily profits.

**Source:** Winston: Operations Research - Applications and Algorithms, 4th Edition, ISBN 0-534-52020-0

