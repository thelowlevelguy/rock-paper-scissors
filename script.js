const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const playerRock = "🤜"
const playerPaper = "🫱"
const playerScissors = "✌️"

const machineRock = '🤛🏾'
const machinePaper = '🫲🏾'
const machineScissors = '✌🏾'

let playerScore = 0;
let machineScore = 0;
let playerWins = 0;
let machineWins = 0;

const buttons = document.querySelectorAll('button');
const playerScoreBoard = document.getElementById('player-score')
const roundResultBoard = document.getElementById('round-result')
const machineScoreBoard = document.getElementById('machine-score')
const playerWinsBaord = document.getElementById("player-victories")
const machineWinsBoard = document.getElementById("machine-victories")
const machineHands = document.getElementById("machine-hands") 
const playerHand = document.getElementById('player-choice')
const machineHand = document.getElementById('machine-choice')

function getComputerChoice(){
	//there are three choices and the rand is always lower than max (4)
	let rand = Math.floor(Math.random() * (4 - 1) + 1); 
	switch(rand){
	case 1: 
		return rock;
	case 2:
		return paper;
	case 3:
		return scissors;
	}
}

function playRound(playerChoice, computerChoice){
	switch (playerChoice){
	case rock:
		return computerChoice == scissors ?  "win" : (computerChoice == rock ? "draw" : "lost");
	case paper:
		return computerChoice == rock ?  "win" : (computerChoice == paper ? "draw" : "lost");
	case scissors:
		return computerChoice == paper ?  "win" : (computerChoice == scissors ? "draw" : "lost");
	default:
		return null;
	}
}

function displayGameResult(playerScore, machineScore){
	const resultBoard = document.createElement('div')
	if (playerScore === 5){
		playerWins += 1;
		playerWinsBaord.textContent = `Player : ${playerWins}`;
		resetGame();
	}else if (machineScore === 5){
		machineWins += 1;
		machineWinsBoard.textContent = `Machine : ${machineWins}`;
		resetGame();
	}
}

function handleGameHands(playerChoice, computerChoice) {
	switch(playerChoice){
	case rock:
		playerHand.textContent = playerRock
		break;
	case paper:
		playerHand.textContent = playerPaper
		break;
	case scissors:
		playerHand.textContent = playerScissors
		break;
	}

	switch(computerChoice){
	case rock:
		machineHand.textContent = machineRock
		break;
	case paper:
		machineHand.textContent = machinePaper
		break;
	case scissors:
		machineHand.textContent = machineScissors
		break;
	}
}

function shaking(){

	 document.getElementById('player-choice').classList.add('shakePlayer');
	 document.getElementById('machine-choice').classList.add('shakeMachine');

	// Remove the class as soon as the animation ends
	document.getElementById('player-choice').addEventListener('animationend', () => {
  		document.getElementById('player-choice').classList.remove('shakePlayer');
	});

	document.getElementById('machine-choice').addEventListener('animationend', () => {
  		document.getElementById('machine-choice').classList.remove('shakeMachine');
	});
}

function resetGame(){
	playerScore = 0
	machineScore = 0
	playerScoreBoard.textContent = playerScore;
	machineScoreBoard.textContent = machineScore;
}

function setDefaultHands(){
	playerHand.textContent = playerRock
	machineHand.textContent = machineRock
}

function playGame(event){

	let playerChoice = event.target.id;
	let computerChoice = getComputerChoice();
	let result = playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase());

	setDefaultHands()
    shaking()

    setTimeout(() =>{
    	if (result === "win"){
			machineScore += 1;
		}else if (result === "lost"){
			playerScore += 1;
		}
		handleGameHands(playerChoice, computerChoice)
		playerScoreBoard.textContent = playerScore;
		machineScoreBoard.textContent = machineScore;
    }, 500)

    setTimeout(() => {
    	setDefaultHands()
    	displayGameResult(playerScore, machineScore);
    },1500)
}


buttons.forEach((button) => {
	button.addEventListener("click", playGame)
})

