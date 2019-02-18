
var cards = [
{rank:'queen',
 suit:'hearts',
 cardImage:'images/queen-of-hearts.png'},
 
 {rank:'queen',
 suit:'diamonds',
 cardImage:'images/queen-of-diamonds.png'},
 
 {rank:'king',
 suit:'hearts',
 cardImage:'images/king-of-hearts.png'},
 
 {rank:'king',
 suit:'diamonds',
 cardImage:'images/king-of-diamonds.png'}
 
];
var cardsInPlay = [];

var createBoard = function(){
	for(var i=0;i<cards.length;i++)
	{
		var newListItem = document.createElement('img');
		newListItem.setAttribute('id',i);
		newListItem.setAttribute('src','images/back.png');
		newListItem.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(newListItem);
	}
}
var checkForMatch = function ()
{
	 if(cardsInPlay[0] == cardsInPlay[1])
		 alert("You found a match!");
	 else
		 alert("Sorry, try again.");
	
}
var flipCard = function(){
var cardId = this.getAttribute('id');
console.log(cardId);
this.setAttribute('src','cards[cardId].cardImage');


//console.log("User flipped " + cards[cardId].rank);

//console.log("User flipped " + cards[cardId].cardImage);
 
 checkForMatch();

	
}

createBoard();