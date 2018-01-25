
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


// var newCrystalSet = function(i) {
  // for (var i = 0; i < 4; i++) {
      // var randomImage = Math.floor(Math.random() * 4); // selects the image randomly
      // var randomVal = Math.floor(Math.random() * 12) + 1; // creates a random value between 1 and 12 to be used for the image's crystal value
      // numberOptions.push(randomVal); // pushes the crystal image value to the values array
      // imageCrystal = $("<img>");
      // imageCrystal.addClass("crystal-image");
      // imageCrystal.attr("data-crystalvalue", numberOptions[i]); // grabs the random value randomVal and sets it as an attribute of the crystal
      // imageCrystal.attr("src", imageArray[randomImage]);
      // $("#crystalsDiv").append(imageCrystal);
      // imageArray.splice(randomImage, 1);
    // }
// }


// function newCrystalSet() {
  // imageCrystal = [];
  for (var i = 0; i < 4; i++) {
    var randomImage = Math.floor(Math.random() * imageArray.length); // selects the image randomly
    var randomVal = Math.floor(Math.random() * 12) + 1; // creates a random value between 1 and 12 to be used for the image's crystal value
    // var randomSound = Math.floor(Math.random() * soundsArray.length);
    console.log(randomImage);  
    console.log(randomVal);     
    numberOptions.push(randomVal); // pushes the crystal image value to the values array
    imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", imageArray[randomImage]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]); // grabs the random value v and sets it as an attribute of the crystal
    $("#crystalsDiv").append(imageCrystal);
    imageArray.splice(randomImage, 1);
    // soundsArray.splice(randomSound, 1);
  }
  console.log(imageCrystal);
  var randomTarget = Math.floor(Math.random() * 102) + 19;  // generates the random target number between 19 and 120
  targetNumber = randomTarget;
  $("#number-to-guess").text(targetNumber);
  $("#winsDisplay").text(wins);
  $("#lossesDisplay").text(losses);
  $("#cartCounterDisplay").text(cartCounter);
  $("#scoreDisplay").text(counter);
// }



$(document).ready(function(){
    // newCrystalSet();  
  $('#howToPlayModal').modal('show');

  console.log(numberOptions);

});


$(".crystal-image").on("click", function(e) {

  audio2.play();

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  cartCounter += crystalValue;

  $("#cartCounterDisplay").text(cartCounter);

  if (cartCounter === targetNumber) {
    $('#winLoseModalTitle').text('You won the full value of your cart!');
    $('#winLoseModal').modal('show');
    wins++;
    counter += cartCounter;
    cartCounter = 0;
    $("#winsDisplay").text(wins);
    $("#scoreDisplay").text(counter);
    
    var randomTarget = Math.floor(Math.random() * 102) + 19;  // generates the random target number between 19 and 120
    targetNumber = randomTarget;
    $("#number-to-guess").text(targetNumber);
    $("#winsDisplay").text(wins);
    $("#lossesDisplay").text(losses);
    $("#cartCounterDisplay").text(cartCounter);
    $("#scoreDisplay").text(counter);
    newCrystalSet();
    // $("#crystalsDiv").empty();

    // I tried to write a function to execute the for loop hereupon, but ran into what I can only guess is scoping issues... the click event would not trigger anything...
    // imageCrystal = null;
    for (var i = 0; i < 4; i++) {
      var randomImage = Math.floor(Math.random() * imageArray.length); // selects the image randomly
      var randomVal = Math.floor(Math.random() * 12) + 1; // creates a random value between 1 and 12 to be used for the image's crystal value
      numberOptions = [];
      numberOptions.push(randomVal); // pushes the crystal image value to the values array
      imageCrystal = null;
      imageCrystal = $("<img>");
      imageCrystal.addClass("crystal-image");
      imageCrystal.attr("src", imageArray[randomImage]);
      imageCrystal.attr("data-crystalvalue", numberOptions[i]); // grabs the random value randomVal and sets it as an attribute of the crystal
      $("#crystalsDiv").append(imageCrystal);
      imageArray.splice(randomImage, 1);
    }
    console.log(imageCrystal);


  }
  else if (cartCounter >= targetNumber) {
    $('#winLoseModalTitle').text('You overloaded your cart and lost it all!');
    $('#winLoseModal').modal('show');
    losses++;
    cartCounter = 0;
    $("#cartCounterDisplay").text(cartCounter);
    $("#lossesDisplay").text(losses);
    // $("#crystalsDiv").empty();

    // I tried to write a function to execute the code hereupon, but ran into what I can only guess is scoping issues... the click event would not trigger anything...
    for (var i = 0; i < 4; i++) {
      var randomImage = Math.floor(Math.random() * imageArray.length); // selects the image randomly
      var randomVal = Math.floor(Math.random() * 12) + 1; // creates a random value between 1 and 12 to be used for the image's crystal valu
      console.log(randomImage);  
      console.log(randomVal);   
      numberOptions = [];
      numberOptions.push(randomVal); // pushes the crystal image value to the values array
      imageCrystal = null;
      imageCrystal = $("<img>");
      imageCrystal.addClass("crystal-image");
      imageCrystal.attr("src", imageArray[randomImage]);
      imageCrystal.attr("data-crystalvalue", numberOptions[i]); // grabs the random value randomVal and sets it as an attribute of the crystal
      // console.log(imageCrystal);
      $("#crystalsDiv").append(imageCrystal);
      debugger;
      imageArray.splice(randomImage, 1);
    }
    console.log(numberOptions);

    var randomTarget = Math.floor(Math.random() * 102) + 19;  // generates the random target number between 19 and 120
    targetNumber = randomTarget;
    $("#number-to-guess").text(targetNumber);
    $("#winsDisplay").text(wins);
    $("#lossesDisplay").text(losses);
    $("#cartCounterDisplay").text(cartCounter);
    $("#scoreDisplay").text(counter);
  }

});



