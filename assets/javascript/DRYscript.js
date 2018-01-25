
var targetNumber = 0;
var wins = 0;
var losses = 0;
var cartCounter = 0;
var counter = 0;
var imageCrystal = null;
var numberOptions = [];

var imageArray = [
  "../Crystals-Collector/assets/images/gem4.png",
  "../Crystals-Collector/assets/images/gem5.png",
  "../Crystals-Collector/assets/images/gem6.png",
  "../Crystals-Collector/assets/images/gem7.png"
];

// var audio1 = new Audio("../Crystals-Collector/assets/sounds/sound3.mp3");
var audio2 = new Audio("../Crystals-Collector/assets/sounds/sound4.mp3");


function newCrystalSet() {
  for (var i = 0; i < imageArray.length; i++) {
      var randomImage = Math.floor(Math.random() * 4); // selects the image randomly
      var randomVal = Math.floor(Math.random() * 12) + 1; // creates a random value between 1 and 12 to be used for the image's crystal value
      numberOptions = [];
      numberOptions.push(randomVal); // pushes the crystal image value to the values array
      console.log(randomImage);
      console.log(randomVal);
      console.log(numberOptions);
      imageCrystal = $("<img>");
      imageCrystal.addClass("crystal-image");
      imageCrystal.attr("data-crystalvalue", numberOptions[i]); // grabs the random value randomVal and sets it as an attribute of the crystal
      imageCrystal.attr("src", imageArray[randomImage]);
      console.log(imageCrystal);
      $("#crystalsDiv").append(imageCrystal);
      imageArray.splice(randomImage, 1);
  }
  var randomTarget = Math.floor(Math.random() * 102) + 19;  // generates the random target number between 19 and 120
  targetNumber = randomTarget;
  $("#number-to-guess").text(targetNumber);
  $("#winsDisplay").text(wins);
  $("#lossesDisplay").text(losses);
  $("#cartCounterDisplay").text(cartCounter);
  $("#scoreDisplay").text(counter);
}


$(document).ready(function(){
  newCrystalSet();  
  $('#howToPlayModal').modal('show');
  // console.log(numberOptions);

});


$(".crystal-image").on("click", function(e) {

  audio2.play();

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  cartCounter += crystalValue;
  $("#cartCounterDisplay").text(cartCounter);

  if (cartCounter === targetNumber) {
    $('#winLoseModal').modal('show');
    wins++;
    counter += cartCounter;
    cartCounter = 0;
    $("#winsDisplay").text(wins);
    $("#scoreDisplay").text(counter);
    newCrystalSet();
    // $("#crystalsDiv").empty();
  }
  else if (cartCounter >= targetNumber) {
    $('#winLoseModalTitle').text('You overloaded your cart and lost it all!');
    $('#winLoseModal').modal('show');
    losses++;
    cartCounter = 0;
    $("#cartCounterDisplay").text(cartCounter);
    $("#lossesDisplay").text(losses);
    newCrystalSet();
    // $("#crystalsDiv").empty();
  }
});



