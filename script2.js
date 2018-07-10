let userPoints = 0;
let computerPoints = 0;
let userScore = document.getElementById('userScore');
let computerScore = document.getElementById('computerScore');
let rockChoice = document.getElementById('rock');
let paperChoice = document.getElementById('paper');
let scissorChoice = document.getElementById('scissors');
let lizardChoice = document.getElementById('lizard');
let spockChoice = document.getElementById('spock');
let winningScore = 5;


function computerChoice() {
	const choices = [
	{
		name: "rock",
		strength: ["scissors", "lizard"],
		weakness: ["paper", "spock"]
	},
	{
		name: "paper",
		strength: ["rock", "spock"],
		weakness: ["scissors", "lizard"]
	},
	{
		name: "scissors",
		strength: ["paper", "lizard"],
		weakness: ["rock", "spock"]
	},
	{
		name: "lizard",
		strength: ["spock", "paper"],
		weakness: ["scissors", "rock"]
	},
	{
		name: "spock",
		strength: ["rock", "scissors"],
		weakness: ["lizard", "paper"]
	}
	];

	let randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}

function userScoreUp() {
	userPoints++;
	userScore.innerHTML = userPoints;
}

function compScoreUp() {
	computerPoints++;
	computerScore.innerHTML = computerPoints;
}



function game(userChoice) {
	let computerPick = computerChoice();
	let computerPicked = document.querySelector('.computerResults');
	computerPicked.innerHTML = `${computerPick.name.toUpperCase()}`;
	let modalContent = document.querySelector('#simpleModal');
	let compModalContent = document.querySelector('#compSimpleModal')


	if (userPoints !== 5 || compPoints !== 5) {
		if(computerPick.weakness.includes(userChoice)) {
			setTimeout(userScoreUp(), 1000);
		} else if (computerPick.name === userChoice) {
			console.log('tie');
		} else if (computerPick.strength.includes(userChoice)) {
			compScoreUp()
		}
	}

	if (userPoints === winningScore) {
		modalContent.style.display = 'block';
	} else if (computerPoints === winningScore) {
		compModalContent.style.display = 'block';
	}

};




function userClick() {
	rockChoice.addEventListener('click', function() {
		let pickedRock = document.querySelector('.userResults');
		pickedRock.innerHTML = "ROCK";
		game('rock');
	});
	paperChoice.addEventListener('click', function() {
		let pickedPaper = document.querySelector('.userResults');
		pickedPaper.innerHTML = "PAPER";
		game('paper');
	});
	scissorChoice.addEventListener('click', function() {
		let pickedScissor = document.querySelector('.userResults');
		pickedScissor.innerHTML = "SCISSORS";
		game('scissors');
	});
	lizardChoice.addEventListener('click', function() {
		let pickedLizard = document.querySelector('.userResults');
		pickedLizard.innerHTML = "LIZARD";
		game('lizard');
	});
	spockChoice.addEventListener('click', function() {
		let pickedLizard = document.querySelector('.userResults');
		pickedLizard.innerHTML = "SPOCK";
		game('spock');
	});
}

userClick();