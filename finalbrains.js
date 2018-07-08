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



let picked;
function userPicker() {
	let el = document.querySelectorAll('.clickedPick');
	console.log(el);
	for(var i=0; i < el.length; i++){
		el[i].addEventListener('click', function () {
			// alert('hello ' + this.id);
			picked = this.id;
		}, false);
	}
	return picked;
}


function practice() {
if (userPicker() === "rock") {
	alert("yes");
} else {
	alert('no');
}
}

// function userSelection() {
// 	computerChoice = choices[Math.floor(Math.random() * choices.length)];
// 	if (computerChoice.weakness.includes(userPicker())){
// 		usertracker++;
// 		alert("User wins");
// 	} else if (computerChoice.name === pick) {
// 	} else {
// 		comptracker++;
// 	}
// 	let userPoints = document.querySelector('#userScore').innerHTML = usertracker;
// 	let computerPoints = document.querySelector('#computerScore').innerHTML = comptracker;
// }
