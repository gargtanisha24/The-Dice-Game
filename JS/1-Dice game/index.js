var n1= Math.floor(Math.random()*6)+1;
var randomimage1= "images/dice" + n1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);

var n2= Math.floor(Math.random()*6)+1;
var randomimage2= "images/dice" + n2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if (n1>n2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (n2>n1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
  }


