const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let playerScore = 0;
let machineScore = 0;
let playerWins = 0;
let machineWins = 0;

const buttons = document.querySelectorAll('button');
const playerScoreBoard = document.getElementById('player_score')
const roundResultBoard = document.getElementById('round_result')
const machineScoreBoard = document.getElementById('machine_score')
const playerWinsBaord = document.getElementById("player_victories")
const machineWinsBoard = document.getElementById("machine_victories")
const playerHands = document.getElementById("player-hands")
const machineHands = document.getElementById("machine-hands") 


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

	

	/*for (const hand of playerHands.children){
		if (hand.getAttribute("id").includes(playerChoice)){
			setTimeout(() =>{
				hand.style.hidden = false;
			}, 400)
		}
	}

	for (const hand of machineHands.children){
		if (hand.getAttribute("id").includes(computerChoice)){
			setTimeout(() =>{
				hand.style.hidden = false;
			}, 400)
		}
	}*/
	
}

function resetGame(){
	playerScore = 0
	machineScore = 0
	playerScoreBoard.textContent = playerScore;
	machineScoreBoard.textContent = machineScore;
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
	displayGameResult(playerScore, machineScore); 
}



buttons.forEach((button) => {
	button.addEventListener('click', () => {
 		 document.getElementById('player rock').classList.add('shakePlayer');
	});

	// Remove the class as soon as the animation ends
	document.getElementById('player rock').addEventListener('animationend', () => {
  		document.getElementById('player rock').classList.remove('shakePlayer');
	});
})



buttons.forEach((button) => {
	button.addEventListener("click", playGame)
})


