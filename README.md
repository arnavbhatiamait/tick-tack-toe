# Tic-Tac-Toe (HTML/CSS/JavaScript)

A simple, responsive Tic-Tac-Toe game built with vanilla HTML, CSS, and JavaScript. Play X vs O on a 3x3 grid with turn indicators, win detection, and quick reset.

- Live site: https://arnavbhatiamait.github.io/tick-tack-toe/

## Features
- Classic 3x3 Tic-Tac-Toe gameplay
- Two-player local mode (X vs O)
- Automatic win and draw detection
- Clear turn indicator
- Reset/New Game button
- Mobile-friendly UI with a gradient background

## Tech Stack
- HTML for structure
- CSS for styling and layout
- Vanilla JavaScript for game logic and DOM updates

## Getting Started

1) Clone
- git clone https://github.com/arnavbhatiamait/tick-tack-toe.git
- cd tick-tack-toe

2) Run locally
- Open index.html in your browser

## Usage
- Player X starts the game
- Click on any empty cell to place your mark
- The game announces a winner or a draw when the board is filled or a line is completed
- Click “Reset” or “New Game” to play again

## Project Structure
- index.html — Game markup (grid, status, controls)
- styles.css — Layout, colors, typography, responsive styles
- index.js — Turn handling, win/draw detection, UI updates
- Assets — gradient-bg.jpg, favicon.ico, and an app icon

## How It Works (Overview)
- Tracks the board as an array of 9 cells
- Alternates turns between X and O
- Checks winning combinations after each move
- Ends the game on win or draw and disables further moves until reset

## Improvements Roadmap
- Single-player mode with basic/optimal AI (minimax)
- Scoreboard across rounds
- Animations for wins and invalid moves
- Sound effects and accessibility enhancements (ARIA roles, keyboard play)
- Dark/light theme toggle and customizable X/O styles

## License
- Add or update a LICENSE file as appropriate.

[1] https://github.com/arnavbhatiamait/tick-tack-toe
