# Hamburger SV

Due to the bad performance in the season, Hamburger SV football club wants to hire up to three new players. There are five players under consideration. If player $i$ is hired he
will cost an amount of $c_i$ . The potential contribution to the total strength of the team in defense, midfield, and offense is quantified by a parameter $d_i$ , $m_i$ , and $o_i$ for each player $i$. Hamburger SV wants to strengthen the team in defense, midfield, and offense by the given total values $D$, $M$ , and $O$.

Players 2 and 3 must not be hired together because they are personal enemies. Players 1 and 2 have already played together and would strengthen the defense by a value of $d_{1,2}$ which is larger than $d_1 + d_2$ if both players are hired. Players 1 and 4 cannot play well together, so the midfield would only be strengthened by a value of $m_{1,4}$ which is smaller than $m_1 + m_4$ if both players are hired. Players 3 and 5 cannot play well together in offense but not in defense, so the offense would be strengthened by a value of $o_{3,5}$ which is larger than $o_3 + o_5$ and the defense by a value of $d_{3,5}$ which is smaller than $d_3 + d_5$ if both players are hired.

Formulate an integer program for minimizing the total costs of strengthening the team in defense, midfield, and offense by the given total values $D$, $M$, and $O$.
