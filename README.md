# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.
Branch: Grid 👃
- As a user, I can click on a square to mark it.
    - Complete, user can choose emoji as marker.
- As a user, my partner can click on a square after me and see their mark.
    - Complete, user can choose emoji as marker and see the previous users marker.
- As a user, I can't click on a square that has already been marked.
    - Complete, can not click on already clicked squares.
- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
    - Completed, The game will tell us who won.
- As a user, I can't continue playing the game after the game has been won.
    -  Completed, can only play again if the reset button is clicked.
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
    - Completed, The game will tell us when there is a tie if there is no more squares to choose.
- As a user, I can click on a restart button that will clear the game board.
    - Completed, restart works for everything except the select input image.

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
    - Debateable
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
    - Yes I can do this. The mouse cursor should reflect the emoji of the user in the future.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).
    - When resetting the game the emoji display from the select input doesn't change back to default.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
