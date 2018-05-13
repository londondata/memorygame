console.log("Up and running!");
var cards = [
	{ 
		rank: "queen",
		suit: "hearts",
		image: "images/queen-of-hearts.png"
	},
	{ 
		rank: "queen",
		suit: "diamonds",
		image: "images/queen-of-diamonds.png"
	},
	{ 
		rank: "king",
		suit: "hearts",
		image: "images/king-of-hearts.png"

	},
	{ 
		rank: "king",
		suit: "diamonds",
		image: "images/king-of-diamonds.png"
	},
];
var cardsInPlay = [];

var checkForMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You got dis here match!");
		} else {
			alert("No match 4 u");	
		}
	};

var flipCard = function(){
	var cardId = this.getAttribute('data-id')
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].image)
	if (cardsInPlay.length === 2)
	checkForMatch();
};

var createBoard = function(){
	for (var i=0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
};
createBoard();


// flipCard(0);
// flipCard(1);


	// console.log("first if")
	// console.log(cardsInPlay[0])
	// console.log(cardsInPlay[1])

// var cardOne = cards[0]
// var cardTwo = cards[3]

// cardsInPlay.push('cardOne');
// console.log("User flipped " + cardOne);


// cardsInPlay.push('cardTwo');
// console.log("User flipped " + cardTwo);
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardThree);

// var cards = ['queen', 'queen', 'king', 'king'];
