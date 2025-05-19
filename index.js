var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

// console.log(90+'grras')

// for image 1
var randomdiceImage = "dice" + randomnumber1 + ".jpg";
var randomImageSource = "images/" + randomdiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// for image 2
var randomImageSource2 = "images/dice" + randomnumber2 + ".jpg";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// conditions

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}

// console.log(Math.random()*6)
// console.log(Math.floor(4.1))
