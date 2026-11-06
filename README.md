
# 🎮 Numle – Number Guessing Game

## 1. Project Overview

Numle is a browser-based number guessing game developed using HTML5, CSS3 and JavaScript.

The aim of the game is to guess a randomly generated five-digit number within six attempts.

After each guess, the player receives colour-coded feedback to help them identify the correct number.

The project is designed to provide an enjoyable, simple and interactive gaming experience.

## 2. Aim and Objectives

The main aim of this project is to develop a functional web-based number guessing game.

The objectives are:

- Develop an interactive game using HTML, CSS and JavaScript.
- Generate a random five-digit number.
- Allow users to enter and submit guesses.
- Provide feedback on correct and incorrect digits.
- Limit players to six attempts.
- Include a countdown timer.
- Introduce a scoring system.
- Allow users to restart the game.

## 3. Target Audience

The target audience is students and casual gamers aged 16 and above.

The game is suitable for people who enjoy puzzles, number challenges and problem-solving activities.

The interface is designed to be simple and easy to understand, allowing players to start playing without complicated instructions.

## 4. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Creates the structure of the game. |
| CSS3 | Controls the design, colours and layout. |
| JavaScript | Controls the game logic and functionality. |
| Visual Studio Code | Used to write and edit the source code. |
| Git | Tracks changes and manages versions. |
| GitHub | Stores the project repository. |
| GitHub Pages | Hosts the completed application online. |

## 5. Game Rules

1. The game generates a random five-digit number.
2. The player has six attempts to guess the number.
3. The player must enter exactly five digits.
4. Feedback is displayed after every valid guess.
5. The player wins by guessing the complete number.
6. The player loses if all six attempts are used.
7. The game also ends when the countdown timer reaches zero.

### Colour Feedback

| Colour | Meaning |
|---|---|
| 🟩 Green | Correct digit in the correct position. |
| 🟨 Yellow | Correct digit in the wrong position. |
| ⬜ Grey | Digit is not in the hidden number. |

## 6. Functional Requirements

The application should:

- Generate a random five-digit number.
- Accept five-digit guesses from the player.
- Validate user input.
- Compare guesses with the hidden number.
- Display colour-coded feedback.
- Display the remaining attempts.
- Detect winning and losing conditions.
- Display appropriate messages.
- Allow the player to restart the game.

## 7. Non-Functional Requirements

The application should:

- Have a simple and attractive interface.
- Be easy to navigate.
- Respond quickly to user input.
- Work in modern web browsers.
- Support different screen sizes.
- Display clear and readable text.
- Provide understandable instructions.

## 8. Additional Features

The project includes additional functionality beyond the basic requirements.

### Countdown Timer

Players have 120 seconds to complete the game.

If the timer reaches zero, the game ends.

### Scoring System

Players receive points for winning the game.

The score is calculated using the remaining attempts and remaining time.

The formula is:

Score = (Remaining attempts × 100) + Remaining time

### Restart Button

Players can restart the game after winning or losing.

A new random number is generated when a new game begins.

## 9. Project Structure

The project contains the following files:

```text
numle-game/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── evaluation.md
│
├── documentation/
│   ├── requirements.md
│   ├── design.md
│   ├── pseudocode.md
│   ├── flowchart.md
│   └── test-plan.md
│
└── evidence/
    ├── initial-design.png
    ├── gameplay.png
    ├── win-screen.png
    └── github-commits.png
```

## 10. Development Approach

An iterative development approach was selected.

The project was developed in stages:

1. Planning the game requirements.
2. Creating the HTML structure.
3. Designing the interface using CSS.
4. Implementing random number generation.
5. Developing the guessing functionality.
6. Implementing colour-coded feedback.
7. Adding the attempts system.
8. Implementing the countdown timer.
9. Adding the scoring system.
10. Testing and improving the application.

Each feature was developed and tested before moving on to the next stage.

## 11. Testing

Testing is carried out throughout development to ensure that the application works correctly.

The following areas are tested:

- Valid five-digit input.
- Invalid input.
- Correct digit identification.
- Incorrect digit identification.
- Correct digit positioning.
- Winning condition.
- Losing condition.
- Countdown timer.
- Scoring system.
- Restart functionality.

Detailed test cases and results are recorded in:

`documentation/test-plan.md`

## 12. Deployment

The application is intended to be deployed using GitHub Pages.

To access the completed game, use the following link:

**Live Game:** [Insert your GitHub Pages URL here]

## 13. Future Improvements

Possible improvements include:

- Adding different difficulty levels.
- Creating a leaderboard.
- Saving high scores using local storage.
- Adding sound effects.
- Adding animations.
- Introducing a daily challenge.
- Improving accessibility.

## 14. Learning and Professional Development

During this project, I developed my knowledge of JavaScript and web development.

The main programming concepts applied include:

- Variables and data types.
- Functions.
- If and else statements.
- Loops.
- Arrays.
- Event listeners.
- DOM manipulation.
- Input validation.

JavaScript learning resources, including freeCodeCamp, supported my understanding of these concepts.

## 15. References

freeCodeCamp (n.d.) *JavaScript Algorithms and Data Structures*. Available at: https://www.freecodecamp.org/learn/

MDN Web Docs (n.d.) *JavaScript Guide*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide 

MDN Web Docs (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML 

GitHub (n.d.) *GitHub Pages documentation*. Available at: https://github.com/Kr03rm/WordGuess/blob/main/README.md
