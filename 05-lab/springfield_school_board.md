# Assigning students to schools

The Springfield school board has made the decision to close one of its middle schools (sixth, seventh, and eighth grades) at the end of this school year and reassign all of next year’s middle school students to the three remaining middle schools. The school district provides bussing for all middle school students who must travel more than approximately a mile, so the school board wants a plan for reassigning the students that will minimize the total bussing cost. The annual cost per student of bussing from each of the six residential areas of the city to each of the schools is shown in the following table (along with other basic data for next year), where 0 indicates that bussing is not needed and a dash indicates an infeasible assignment.


| Area | Students | 6th Grade | 7th Grade | 8th Grade | School 1 | School 2 | School 3 |
|---|-----|-----|-----|-----|------|------|------|
| 1 | 450 | 32% | 38% | 30% | $300 |    0 | $700 |
| 2 | 600 | 37% | 28% | 35% |   —  | $400 | $500 |
| 3 | 550 | 30% | 32% | 38% | $600 | $300 | $200 |
| 4 | 350 | 28% | 40% | 32% | $200 | $500 |   —  |
| 5 | 500 | 39% | 34% | 27% |    0 |   —  | $400 |
| 6 | 450 | 34% | 28% | 38% | $500 | $300 |    0 |

|                  | School 1 | School 2 | School 3 |
|------------------|----------|----------|----------|
| School capacity: |     900  |   1,100  |   1,000  |

The school board also has imposed the restriction that each grade must constitute between 30 and 36 percent of each school’s population. The above table shows the percentage of each area’s middle school population for next year that falls into each of the three grades. The school attendance zone boundaries can be drawn so as to split any given area among more than one school, but assume that the percentages shown in the table will continue to hold for any partial assignment of an area to a school.

You have been hired as an operations research consultant to assist the school board in determining how many students in each area should be assigned to each school.

(a) Formulate a linear programming model for this problem.

(b) Solve the model.

(c) What is your resulting recommendation to the school board?

After seeing your recommendation, the school board expresses concern about all the splitting of residential areas among multiple schools. They indicate that they “would like to keep each neighborhood together.”

(d) Adjust your recommendation as well as you can to enable each area to be assigned to just one school. (Adding this restriction may force you to fudge on some other constraints.) How much does this increase the total bussing cost?

The school board is considering eliminating some bussing to reduce costs. Option 1 is to eliminate bussing only for students traveling 1 to 1.5 miles, where the cost per student is given in the table as $200. Option 2 is to also eliminate bussing for students traveling 1.5 to 2 miles, where the estimated cost per student is $300.

(e) Revise the model from part (a) to fit Option 1, and solve. Compare these results with those from part (c), including the reduction in total bussing cost.

(f) Repeat part (e) for Option 2.

The school board now needs to choose among the three alternative bussing plans (the current one or Option 1 or Option 2). One important factor is bussing costs. However, the school board also wants to place equal weight on a second factor: the inconvenience and safety problems caused by forcing students to travel by foot or bicycle a substantial distance (more than a mile, and especially more than 1.5 miles). Therefore, they want to choose a plan that provides the best trade-off between these two factors.

(g) Use your results from parts (c), (e), and ( f ) to summarize the key information related to these two factors that the school board needs to make this decision.

(h) Which decision do you think should be made? Why?

**Source:** Hillier, Liebermann: Introduction to Operations Research, 2004

