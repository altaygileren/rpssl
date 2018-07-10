let userPoints = 0;
let compPoints = 0;
let userScore = document.getElementById('userScore');
let compScore = document.getElementById('compScore');
let scoreBoard = document.querySelector('.scoreBoard');
let rockChoice = document.getElementById('rock');
let paperChoice = document.getElementById('paper');
let scissorChoice = document.getElementById('scissors');
let spockChoice = document.getElementById('spock');
let lizardChoice = document.getElementById('lizard');
const winningScore = 5;

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
	compPoints++;
	compScore.innerHTML = compPoints;
}



function game(userChoice) {
	const computerPick = computerChoice();
	let computerLarge = document.getElementById('computerLarge');
	let userLarge = document.getElementById('userLarge');
	computerLarge.innerHTML = `<i class='far fa-hand-${computerPick.name}'></i>`
	userLarge.innerHTML = `<i class='far fa-hand-${userChoice}'></i>`
	let modalContent = document.querySelector('#simpleModal');
	let compModalContent = document.querySelector('#compSimpleModal')


	if (userPoints !== 5 || compPoints !== 5) {
		if(computerPick.weakness.includes(userChoice)) {
			userLarge.style.color = 'green';
			computerLarge.style.color = 'red';
			setTimeout(userScoreUp(), 1000);
		} else if (computerPick.name === userChoice) {
			console.log("Stalemate");
		} else if (computerPick.strength.includes(userChoice)) {
			userLarge.style.color = 'red';
			computerLarge.style.color = 'green';
			setTimeout(compScoreUp(), 1000);
		}
	}

	if (userPoints === winningScore) {
		modalContent.style.display = 'block';
	} else if (compPoints === winningScore) {
		compModalContent.style.display = 'block';
	}

};


function userClick() {
	rockChoice.addEventListener('click', function() {
		game('rock');
	});
	paperChoice.addEventListener('click', function() {
		game('paper');
	});
	scissorChoice.addEventListener('click', function() {
		game('scissors');
	});
	spockChoice.addEventListener('click', function() {
		game('spock');
	});
	lizardChoice.addEventListener('click', function() {
		game('lizard');
	});
}

userClick();


