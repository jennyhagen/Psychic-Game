var psychLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var Win = 0;
    var Lose = 0;
    var guessNumbers = 10;
    var guessLetters = [];

    document.onkeyup = function (event) {
      var userGuess = event.key;
      guessLetters.push(userGuess); 
      var psychicAnswer = psychLetters[Math.floor(Math.random() * psychLetters.length)];

      var reset = function () {
        guessNumbers = 10;
        guessLetters = [];
      }

      if (userGuess === psychicAnswer) {
        Win++;
        guessNumbers = 9;
      }
      else {
        guessNumbers--;
      }

      if (guessNumbers === 0) {
        Lose++;
        guessNumbers = 9;
        reset();
      }

      var html = "<p>Guess what letter I'm thinking of...</p>" + "<p>Wins: " + Win + "</p>" + "<p>Loses: " + Lose + "<p>Guesses Left: " + guessNumbers + "<p>Your Guesses so far: " + guessLetters.join(', ');
      document.getElementById("psychicInfo").innerHTML = html;
    }