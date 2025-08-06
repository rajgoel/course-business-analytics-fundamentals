# Prerequisites and requirements

===

## Pre-requisites

An understanding of mathematics on a level typical of an undergraduate degree in business studies. 

> [!TIP]
> Excellent books for self-study are:
> - Sydsaeter K. and P. Hammond (2012): Essential Mathematics for economic analysis, Prentice Hall.
> - Tan, S. T. (2015): Applied Mathematics for the Managerial, Life, and Social Sciences, Cengage

---

## Grading

Grading will be based on:

- 75% Final exam (open book, open notes, 90 min)
- 25% E-Assignments

---

## E-Assignments

On https://e-assignments.net you will find a collection of self-study exercises, helping you to learn how to model optimisation problems.

> [!IMPORTANT]
> You must use your KLU email address to register.


---

## Bonus

A bonus of up to **10% of the final score** can be obtained by meaningful contributions to the course materials. 

---

### Contributing via Issues and Pull Requests (PR)

A typical workflow to contribute on [GitHub](https://github.com/rajgoel/course-business-analytics-fundamentals) is:

- Create an **Issue**
- Comment on existing issues
- **Fork** the repository 
- Create a new **Branch** in your fork for your fix or feature
- Submit a **Pull Request**

> [!NOTE]
> For minor fixes (e.g., typos), a **Pull Request** may be submitted directly without creating an issue.

---

### Contributing via Discussions

The course also benefits from discussions:

- Start a [GitHub Discussion](https://github.com/rajgoel/course-business-analytics-fundamentals/discussions)
- Participate in existing discussions
- Link discussions to issues or pull requests where relevant.

---

### Eligibility for bonus

All **Pull Requests** that are merged are eligible for a bonus. Depending on the quality and impact, the following may also be eligible: 

- **Pull Requests** that are rejected  
  *Example:* A PR that fixes an issue but is not merged because another approach to fix the issue is taken.
- **Issues**  
  *Example:* Reporting an issue that ultimately leads to improvements.
- **Discussions**  
  *Example:* Starting or participating in a discussion helping clarify course content.

===

## Software and tools

---

### AMPL

AMPL is a language for describing optimisation problems in a way that closely mirrors mathematical notation on paper.

> [!NOTE]
> No programming skills are required to use AMPL.

---

### AMPL Community Edition

The AMPL Community Edition is free to use and can be obtained from: https://ampl.com/community-edition/

> [!TIP]
> In Step 1: Download AMPL & Solvers:  
>  - Select: `Other`
>  - Select: Your operating system (Windows/MacOS/Linux)
>  - Download AMPL Installer (Windows/MacOS) or bundle (Linux)
>  - Install AMPL and activate your license

---

### JuMP

JuMP is a modeling language for mathematical optimisation embedded in Julia. It offers a syntax close to mathematical expressions and supports a wide range of solvers.

> [!TIP]
> You can install JuMP from within Julia by
> ```julia
> import Pkg
> Pkg.add("JuMP")
> Pkg.add("HiGHS")
> ```

---

### Google OR-Tools

Google OR-Tools is an open-source software suite for optimisation. It supports linear programming, constraint programming, routing, and more, with APIs in several programming languages.

> [!NOTE]
> [MathOpt](https://developers.google.com/optimization/math_opt/basic_example) simplifies optimisation modelling for Python and C++.
