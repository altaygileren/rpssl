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


function CustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "User wins!";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
let Alert = new CustomAlert();









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


