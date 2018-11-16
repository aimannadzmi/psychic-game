	var wins = 0;
	var losses = 0;
	var guessesLeft = 12;
	var resetGuess = [];

	var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

	document.onkeyup = function(event) {

		 var userGuess = event.key;

		 var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];


	if(userGuess === computerGuess) {
		guessesLeft = 12;
		wins++;
		resetGuess = [];				
	}
	
	if(userGuess !== computerGuess) {
		guessesLeft --;
		resetGuess.push(userGuess);
	}
	
	if(guessesLeft === 0) {
			losses++;
			guessesLeft = 12;
			resetGuess = [];
	}

	var updateScoreboard =
		"<h3>Scoreboard</h3>" +
		"<ol>Number of guesses left: " + guessesLeft + "</ol>" +
		"<ol>Wins : " + wins + "</ol>" +
		"<ol>Losses : " + losses + "</ol>" +
		"<ol>Your Guesses:" + resetGuess.join("") + "</ol>";

	document.querySelector(".scoreboard").innerHTML = updateScoreboard;

	};