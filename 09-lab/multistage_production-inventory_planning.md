# Multistage production-inventory planning

Consider the following multistage production-inventory planning problem. Products to be
produced have to go through four production stages 1, 2, 3, 4. At each point in time $i$ there is a demand for finished products of $d_i$. This demand must be satisfied (i.e. no stockout, no backlogging). The unit production costs at stage $k$ in period $i$ are $c_{k,i}$. The production capacity at stage $k$ in period $i$ is $p_{k,i}$. The production process requires one period of time for each of the stages. The material which has completed stage $k$ is either forwarded to stage $k + 1$ or remains at the temporary storage area of stage $k$. All material which is forwarded will immediately be given to production. The amount of material forwarded to stage $k + 1$ must therefore not exceed the production capacity of stage $k + 1$. At stage $k$ the inventory carrying costs from period $i$ to period $i + 1$ are $h_{k,i}$.

1. Formulate a minimum cost network flow model for $T = 5$ time periods.
2. Describe what has to be done for arbitrary values of $T$ in a way that the pattern of the general model becomes obvious.
