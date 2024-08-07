function diceFunction(){
// Left Dice
function random1(){
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    return randomNumber1;
}

// Right Dice
function random2(){
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    return randomNumber2;
}

var leftDice = random1();
var rightDice = random2();


if  (leftDice == 1){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (leftDice == 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (leftDice == 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (leftDice == 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (leftDice == 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else{
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}


if  (rightDice == 1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (rightDice == 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (rightDice == 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (rightDice == 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (rightDice == 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else{
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}


// Change Title H1
function winner(){
if (leftDice < rightDice ){
    document.querySelector("h1").innerHTML = "Player 2 Win";
} 
else if ( leftDice > rightDice ){
    document.querySelector("h1").innerHTML = "Player 1 Win";
} 
else{
    document.querySelector("h1").innerHTML = "Tie";
}
}

winner();

}