console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardThree);

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne = cards[0]
var cardTwo = cards[3]
var cardThree = cards

cardsInPlay.push('cardOne');

console.log("User flipped " + cardOne);


cardsInPlay.push('cardTwo');
console.log("User flipped " + cardTwo);


if (cardsInPlay.length === 2) {
	// console.log("first if")
	// console.log(cardsInPlay[0])
	// console.log(cardsInPlay[1])
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You got dis here match!");
} else {
	alert("No match 4 u");	
}
};



