

$(document).ready(function () {
//GlobalV
  var wins = 0;
  var losses = 0;
  var playerNum = 0;
  var randomNumber = 0;


  start();
  function start() {
      crystalNumbers();
      generateNumber();
      playerNum = 0;
      $("#number-box3").html(playerNum);
  }
  function generateNumber() {
      var minNumber = 19;
      var maxNumber = 120;
      randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
      $("#number-box1").html(randomNumber);

  }


  function crystalNumbers() {
      for (var i = 1; i <= 4; i++) {
          var crystalNumber = Math.floor(Math.random() * 11 + 1);
          $("#crystal-" + i).val(crystalNumber);
          console.log(crystalNumber);
      }
  }

  $(".crystal").on("click", function () {
      var crystalValue = $(this).val();
   
      playerNum = playerNum + parseInt(crystalValue);
      $("#number-box3").html(playerNum);
  
      if (playerNum > randomNumber) {
          losses++
          $("#losses").html(losses);
          start();
      }
      if (playerNum === randomNumber) {
          wins++
          $("#wins").html(wins);
          start();
      }
      
  });

});