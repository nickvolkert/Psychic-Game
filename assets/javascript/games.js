var alphaBet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];
var userWins = 0;
var userLosses = 0;
var userGuessLeft = 9;
var userRounds = 0;
var computerChoice = [];

var letterGuess = alphaBet[Math.floor(Math.random() * alphaBet.length)];

  document.onkeypress = function(event) {
      var userGuess = event.key;
      var gameInstructions = document.getElementById("tryAgain");
      var resetInstructions = document.createTextNode("Give it another try, press a letter key to guess!");
      var userKeyLog = document.getElementById("yourGuess").innerHTML = userGuess;

      if(userGuess === letterGuess){
          userWins++;
          yourGuess.style.color = "green";
          //userKeyLog = userGuess;
      } else {
          userGuessLeft--;
          userLosses++;
          yourGuess.style.color = "red";
          //userKeyLog = userGuess;
      }

      if (userGuessLeft == 0){
          alert("Sorry, guess you're not pyschic!")
          userWins = 0;
          userLosses = 0;
          userGuessLeft = 9;
          userRounds++;
          yourGuess.style.color = "black";
      }

      document.getElementById("wins").innerHTML = userWins;
      document.getElementById("losses").innerHTML = userLosses;
      document.getElementById("guesses").innerHTML = userGuessLeft;
      document.getElementById("rounds").innerHTML = userRounds;
  };
