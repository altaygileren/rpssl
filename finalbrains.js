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


function computerChoice() {
	const choices = [
	{
		name: "rock",
		strength: ["scissor", "lizard"],
		weakness: ["paper", "spock"]
	},
	{
		name: "paper",
		strength: ["rock", "spock"],
		weakness: ["scissor", "lizard"]
	},
	{
		name: "scissor",
		strength: ["paper", "lizard"],
		weakness: ["rock", "spock"]
	},
	{
		name: "lizard",
		strength: ["spock", "paper"],
		weakness: ["scissor", "rock"]
	},
	{
		name: "spock",
		strength: ["rock", "scissor"],
		weakness: ["lizard", "paper"]
	}
	];

	let randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}

function game(userChoice) {
	const computerPick = computerChoice();

	if(computerPick.weakness.includes(userChoice)) {
		alert(computerPick.name + userChoice);
		userPoints++;
		userScore.innerHTML = userPoints;
		alert("User wins!");
	} else if (computerPick.name === userChoice) {
		alert(computerPick.name + userChoice);
		alert("Stalemate");
	} else {
		compPoints++;
		compScore.innerHTML = compPoints;
		alert(computerPick.name + userChoice);
		alert('Computer wins!');
	}
}


function userClick() {
	rockChoice.addEventListener('click', function() {
		game('rock');
	});
	paperChoice.addEventListener('click', function() {
		game('paper');
	});
	scissorChoice.addEventListener('click', function() {
		game('scissor');
	});
	spockChoice.addEventListener('click', function() {
		game('spock');
	});
	lizardChoice.addEventListener('click', function() {
		game('lizard');
	});
}

userClick();


