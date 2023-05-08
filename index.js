// Variables
// // Player Score
let playerScore;
// // Computer Score
let computerScore;
// // Player Decision
let playerDecision;
// // End Game State
let endGameState;

// Functions
// // Start Game (Deal Player Initial Score 3-21 and Deal Computer Initial Card 2-11)
function startGame () {
    playerScore = (Math.floor(Math.random()*19)+3)
    computerScore = (Math.floor(Math.random()*10)+2)
}
// // Hit (New Card between 2 and 11)
function hit () {
    return (Math.floor(Math.random()*10)+2);
}
// // Display Score and return decision
function displayFirstMessage () {
    if (playerScore === 21) {
        endGameState = 5;
        endGameAndRestart();
    } else {
        playerDecision = confirm(`Your score is ${playerScore} and the computer's current score is ${computerScore}. Press OK to hit or Cancel to stay`)
        checkDecision();
    }
}
// // Display score and prompt for decision
function displayMessage () {
    if (playerScore < 22) {
        playerDecision = confirm(`Your score is ${playerScore} and the computer's current score is ${computerScore}. Press OK to hit or Cancel to stay`)
        checkDecision();
    } else {
        endGameState = 3;
        endGameAndRestart();
    }
}
// // Check decision
function checkDecision () {
    if (playerDecision === true) {
        playerScore += hit();
        displayMessage();
    } else {
        computerScore += hit();
        displayComputerMessage();
    }
}
// // Check Player Bust
function checkPlayerBust () {
    if (playerScore > 21) {
        endGameState = 3;
        endGameAndRestart();
    }
}
// // Check Computer Bust
function checkComputerBust () {
    if (computerScore > 21) {
        
    }
}
// // Check Computer Hit/Stay
function checkComputerDecision () {
    if (computerScore < 17) {
        computerScore += hit();
        displayComputerMessage();
    } else if (computerScore > 21) {
        endGameState = 4;
        endGameAndRestart();
    } else {
        if (playerScore === computerScore) {
            endGameState = 6;
        } else if (playerScore > computerScore) {
            endGameState = 1;
        } else {
            endGameState = 2;
        }
        endGameAndRestart();
    }
}
// // Computer's Turn Messages
function displayComputerMessage () {
    alert(`Your score is ${playerScore} and the computer's current score is ${computerScore}.`)
    checkComputerDecision();
}
// // End Game
function endGameAndRestart () {
    if (endGameState === 1) {
        alert(`Your final score is ${playerScore} and the computer's final score is ${computerScore}. You win!`);
    } else if (endGameState === 2) {
        alert(`Your final score is ${playerScore} and the computer's final score is ${computerScore}. You lose!`);
    } else if (endGameState === 3) {
        alert(`You are bust. You lose!`);
    } else if (endGameState === 4) {
        alert(`The computer is bust. You win!`);
    } else if (endGameState === 5) {
        alert(`BLACKJACK! You scored 21, you win!`);
    } else if (endGameState === 6) {
        alert(`Draw! Play again.`)
    }
    startGame();
    displayFirstMessage();
}


// Player Journey
// // Start Game (Deal Player Initial Score and Deal Computer Initial Card)
startGame();
// // Display Scores in Prompt and take Y/N
displayFirstMessage();