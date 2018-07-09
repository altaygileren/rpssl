// document.getElementById('rock').addEventListener('click', theFunction);

// function theFunction(){
// 	alert('hello');
// }

// document.querySelectorAll('.imageChoices').addEventListener('click', function(event) {
//   func(event.target);
// });

// function func(element) {
//   alert('hello');
// }


function userPicker() {
	var el = document.querySelectorAll('.imageChoices');
	console.log(el);
	for(var i=0; i < el.length; i++){
		el[i].addEventListener('click', function () {
			alert('hello ' + this.id);
		}, false);
	}
}

userPicker()

// let userScore = 0;
// let computerScore = 0;
// let userBoard = document.querySelector('.userScore');
// let compBoard = document.querySelector('.computerScore');
// const rockChoice = document.getElementById('rock');
// const paperChoice = document.getElementById('paper');
// const scissorChoice = document.getElementById('scissor');
// const spockChoice = document.getElementById('spock');
// const lizardChoice = document.getElementById('lizard');

// rockChoice.addEventListener('click', function(){
// 	alert("You clicked Rock");
// })
