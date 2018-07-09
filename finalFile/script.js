// const choices = [
// {
// 	name: "rock",
// 	strength: ["scissor", "lizard"],
// 	weakness: ["paper", "spock"]
// },
// {
// 	name: "paper",
// 	strength: ["rock", "spock"],
// 	weakness: ["scissor", "lizard"]
// },
// {
// 	name: "scissor",
// 	strength: ["paper", "lizard"],
// 	weakness: ["rock", "spock"]
// },
// {
// 	name: "lizard",
// 	strength: ["spock", "paper"],
// 	weakness: ["scissor", "rock"]
// },
// {
// 	name: "spock",
// 	strength: ["rock", "scissor"],
// 	weakness: ["lizard", "paper"]
// }
// ];



// let picked;
// function userPicker() {
// 	let el = document.querySelectorAll('.clickedPick');
// 	console.log(el);
// 	for(var i=0; i < el.length; i++){
// 		el[i].addEventListener('click', function () {
// 			// alert('hello ' + this.id);
// 			picked = this.id;
// 		}, false);
// 	}
// 	return picked;
// }









let userScore = 0;
let computerScore = 0;

let userBoard = document