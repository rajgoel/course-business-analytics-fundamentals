# Machine setup problem

A job shop needs to perform eight tasks on a particular day. Below table shows the start and end times of each task. 

| Task | Start time |  End time |
|------|------------|-----------|
|   1  |  1:00 P.M. |  1:30 P.M |
|   2  |  6:00 P.M. |  8:00 P.M |
|   3  | 10:00 P.M. | 11:00 P.M |
|   4  |  4:00 P.M. |  5:00 P.M |
|   5  |  4:00 P.M. |  7:00 P.M |
|   6  | 12:00 noon |  1:00 P.M |
|   7  |  2:00 P.M. |  5:00 P.M |
|   8  | 11:00 P.M. |  1:00 midnight |


The workers must perform these tasks according to this schedule so that exactly one worker performs each task. A worker cannot work on two jobs at the same time. 

Below table shows the setup time (in minutes) required for a worker to go from one task to another. 


|   |  1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |
|---|----|----|----|----|----|----|----|----|
| 1 |  - | 60 | 10 | 25 | 30 | 20 | 15 | 40 |
| 2 | 10 |  - | 40 | 55 | 40 |  5 | 30 | 35 |
| 3 | 65 | 30 |  - |  0 | 45 | 30 | 20 |  5 |
| 4 |  0 | 50 | 35 |  - | 20 | 15 | 10 | 20 |
| 5 | 20 | 24 | 40 | 50 |  - | 15 |  5 | 23 |
| 6 | 10 |  8 |  9 | 35 | 12 |  - | 30 | 30 |
| 7 | 15 | 30 |  6 | 18 | 15 | 30 |  - | 10 |
| 8 | 20 | 35 | 15 | 12 | 75 | 13 | 25 |  - |

We wish to find the minimum number of workers to perform the tasks. Formulate this problem as a minimum flow problem.
 
**Source:** Ahuja, Magnanti, Orlin: Network Flows - Theory, Algorithms, and Applications, ISBN 978-0136175490

