const rock = "rock";
const paper = "paper";
const scissors = "scissors";

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

function getHumanChoice(){
	const userInput = prompt("Rock , Paper , Scissors ?")
	return userInput;
}

function playRound(humanChoice, computerChoice){
	switch (humanChoice){
	case rock:
		return computerChoice == scissors ?  1 : (computerChoice == rock ? null : 0);
	case paper:
		return computerChoice == rock ?  1 : (computerChoice == paper ? null : 0);
	case scissors:
		return computerChoice == paper ?  1 : (computerChoice == scissors ? null : 0);
	default:
		return null;
	}
}

function playGame(){
	let humanScore = 0;
	let machineScore = 0;
	let rounds = 5;

	let humanChoice = "";
	let computerChoice = "";

	for (let i = 0; i < rounds; i++){
		humanChoice = getHumanChoice();
	 	computerChoice = getComputerChoice();
	 	console.log(humanChoice, computerChoice);
		result = playRound(humanChoice.toLowerCase(), computerChoice.toLowerCase());

		if (result == 0){
			machineScore += 1;
		}else if (result === null){
			rounds += 1;
		}else {
			humanScore += 1;
		}

	}
	if (humanScore > machineScore){
		console.log("You Win!")
	}else{
		console.log("You Lost!")
	}
	console.log(humanScore, machineScore);
}

playGame();
