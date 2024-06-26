// DOM Elements

const dom = {
    playerScore: document.getElementById('player-score'),
    playerChoice: document.getElementById('player-choice'),
    computerScore: document.getElementById('computer-score'),
    computerChoice: document.getElementById('computer-choice'),
    playerRock: document.getElementById('playerRock'),
    playerPaper: document.getElementById('playerPaper'),
    playerScissors: document.getElementById('playerScissors'),
    playerLizard: document.getElementById('playerLizard'),
    playerSpock: document.getElementById('playerSpock'),
    computerRock: document.getElementById('computerRock'),
    computerPaper: document.getElementById('computerPaper'),
    computerScissors: document.getElementById('computerScissors'),
    computerLizard: document.getElementById('computerLizard'),
    computerSpock: document.getElementById('computerSpock'),
    resultText: document.getElementById('result-text'),
    allGameIcons: document.querySelectorAll('.far')
};

const choices = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] }
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

function resetSelected() {
    dom.allGameIcons.forEach((icon) => {
        icon.classList.remove('selected');
    });
}

function resetAll() {
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    dom.playerScore.textContent = playerScoreNumber;
    dom.computerScore.textContent = computerScoreNumber;
    dom.playerChoice.textContent = '';
    dom.computerChoice.textContent = '';
    dom.resultText.textContent = '';
    resetSelected();
}

function computerRandomChoice() {
    const computerChoiceNumber = Math.random();
    if (computerChoiceNumber < 0.2) {
        computerChoice = 'rock';
    } else if (computerChoiceNumber <= 0.4) {
        computerChoice = 'paper';
    } else if (computerChoiceNumber <= 0.6) {
        computerChoice = 'scissors';
    } else if (computerChoiceNumber <= 0.8) {
        computerChoice = 'lizard';
    } else {
        computerChoice = 'spock';
    }
}

function displayComputerChoice() {
    switch (computerChoice) {
        case 'rock':
            dom.computerRock.classList.add('selected');
            dom.computerChoice.textContent = ' --- Rock';
            break;
        case 'paper':
            dom.computerPaper.classList.add('selected');
            dom.computerChoice.textContent = ' --- Paper';
            break;
        case 'scissors':
            dom.computerScissors.classList.add('selected');
            dom.computerChoice.textContent = ' --- Scissors';
            break;
        case 'lizard':
            dom.computerLizard.classList.add('selected');
            dom.computerChoice.textContent = ' --- Lizard';
            break;
        case 'spock':
            dom.computerSpock.classList.add('selected');
            dom.computerChoice.textContent = ' --- Spock';
            break;
        default: 
            break;
    }
}

function updateScore(playerChoice) {
    if (playerChoice === computerChoice) {
        dom.resultText.textContent = "It's a tie!";
    } else {
        const choice = choices[playerChoice];
        if (choice.defeats.indexOf(computerChoice) > -1) {
            dom.resultText.textContent = "You Won!";
            playerScoreNumber++;
            dom.playerScore.textContent = playerScoreNumber;
        } else {
            dom.resultText.textContent = "You Lost!";
            computerScoreNumber++;
            dom.computerScore.textContent = computerScoreNumber;
        }
    }
}

function checkResult(playerChoice) {
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}

function select(playerChoice) {
    checkResult(playerChoice);
    switch (playerChoice) {
        case 'rock':
            dom.playerRock.classList.add('selected');
            dom.playerChoice.textContent = ' --- Rock';
            break;
        case 'paper':
            dom.playerPaper.classList.add('selected');
            dom.playerChoice.textContent = ' --- Paper';
            break;
        case 'scissors':
            dom.playerScissors.classList.add('selected');
            dom.playerChoice.textContent = ' --- Scissors';
            break;
        case 'lizard':
            dom.playerLizard.classList.add('selected');
            dom.playerChoice.textContent = ' --- Lizard';
            break;
        case 'spock':
            dom.playerSpock.classList.add('selected');
            dom.playerChoice.textContent = ' --- Spock';
            break;
        default: 
            break;
    }
}

resetAll();