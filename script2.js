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

// - User Picks choice by clicking image
// - Computer randomly selects choice after user Picks
// - If users choice weakness includes computer choice strengths then computer wins
// otherwise the user wins


let computerChoice;
let rockValue = choices[0].name;
let usertracker = 0;
let comptracker = 0;



function userSelection(pick) {
	computerChoice = choices[Math.floor(Math.random() * choices.length)];
	if (computerChoice.weakness.includes(pick)){
		alert("USER WINS");
		usertracker++;
	} else if (computerChoice.name === pick) {
		alert("STALEMATE. TRY AGAIN.");
	} else {
		alert("COMPUTER WINS");
		comptracker++;
	}
	let userPoints = document.querySelector('#userScore').innerHTML = usertracker;
	let computerPoints = document.querySelector('#computerScore').innerHTML = comptracker;
}




let rockChoice = document.querySelector('#rock');
rockChoice.addEventListener('click', function(){
	userSelection(choices[0].name)
	// usrChoice = document.body.setAttribute('style', 'background-image: url(images/rock.png)');
	let img = document.querySelector('.duelPic');
	usrChoice = img.setAttribute('src', 'images/rock.png');
});

let paperChoice = document.querySelector('#paper');
paperChoice.addEventListener('click', function(){
	userSelection(choices[1].name)
});

let scissorChoice = document.querySelector('#scissor');
scissorChoice.addEventListener('click', function(){
	userSelection(choices[2].name)
});

let lizardChoice = document.querySelector('#liz');
lizardChoice.addEventListener('click', function(){
	userSelection(choices[3].name)
});

let spockChoice = document.querySelector('#spock');
spockChoice.addEventListener('click', function(){
	userSelection(choices[4].name)
});









