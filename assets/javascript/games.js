var alphaBet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];
var userWins = 0;
var userLosses = 0;
var userGuessLeft = 9;
var userRounds = 0;
var computerChoice = [];

var letterGuess = alphaBet[Math.floor(Math.random() * alphaBet.length)];



  // Determines which key was pressed.

  document.onkeypress = function(event) {
      var userGuess = event.key;

      if(userGuess === letterGuess){
          userWins++;
      } else {
          userGuessLeft--;
          userLosses++;
      }

      if (userGuessLeft == 0){
          alert("Sorry, you're not pyschic!")
          userWins = 0;
          userLosses = 0;
          userGuessLeft = 9;
          userRounds++;
      }

      document.getElementById("wins").innerHTML = userWins;
      document.getElementById("losses").innerHTML = userLosses;
      document.getElementById("guesses").innerHTML = userGuessLeft;
      document.getElementById("rounds").innerHTML = userRounds;
      //document.getElementById("yourGuess").push("<li>" + userGuesses + "</li>");
  };
