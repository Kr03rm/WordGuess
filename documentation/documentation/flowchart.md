
flowchart TD
    A([Start]) --> B[Generate random number]
    B --> C[Set attempts to 6]
    C --> D[Start timer]
    D --> E[Player enters guess]
    E --> F{Is input valid?}
    F -->|No| G[Display error]
    G --> E
    F -->|Yes| H[Compare digits]
    H --> I[Display coloured feedback]
    I --> J[Reduce attempts]
    J --> K{Correct guess?}
    K -->|Yes| L[Calculate score and display win]
    K -->|No| M{Attempts remaining?}
    M -->|Yes| N{Time remaining?}
    N -->|Yes| E
    N -->|No| O[Display time out]
    M -->|No| P[Display game over]
    L --> Q[Offer restart]
    O --> Q
    P --> Q
    Q --> R{Play again?}
    R -->|Yes| B
    R -->|No| S([End])

