var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = document
	.querySelector('.img1')
	.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
// console.log(`Random #1 ${randomNumber1}`);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = document
	.querySelector('.img2')
	.setAttribute('src', 'images/dice' + randomNumber2 + '.png');
// console.log(`Random #2 ${randomNumber2}`);

if (randomNumber1 > randomNumber2) {
	document.querySelector('h1').innerHTML = 'Player 1 wins!';
} else if (randomNumber1 < randomNumber2) {
	document.querySelector('h1').innerHTML = 'Player 2 wins! ';
} else {
	document.querySelector('h1').innerHTML = 'Draw !';
}
