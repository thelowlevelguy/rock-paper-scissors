const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerScore = 0;
let machineScore = 0;

const container = document.getElementById("container");
const buttons = document.querySelectorAll('button');
const playerScoreBoard = document.getElementById('player_score')
const roundResultBoard = document.getElementById('round_result')
const machineScoreBoard = document.getElementById('machine_score')


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
		resultBoard.textContent = "Player Win!";
		resetGame();
	}else if (machineScore === 5){
		resultBoard.textContent =  "Machine Win!"
		resetGame();
	}
	container.appendChild(resultBoard)
}

function resetGame(){
	playerScore = 0
	machineScore = 0
	/*playerScoreBoard.textContent = playerScore;
	machineScoreBoard.textContent = machineScore;
	roundResultBoard.textContent = "";*/
}

function playGame(event){
	let playerChoice = "";
	let computerChoice = "";

	playerChoice = event.target.id;
 	computerChoice = getComputerChoice();
	let result = playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase());

	if (result === "win"){
		machineScore += 1;
	}else if (result === "lost"){
		playerScore += 1;
	}

	playerScoreBoard.textContent = playerScore;
	machineScoreBoard.textContent = machineScore;
	roundResultBoard.textContent = result;
	
	displayGameResult(playerScore, machineScore); 
}

buttons.forEach((button) => {
	button.addEventListener("click", playGame)
})


