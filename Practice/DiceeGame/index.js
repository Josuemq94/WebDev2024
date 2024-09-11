
// calculate random number from 1 to 6 
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let output = randomNumber1
document.getElementById("out").innerHTML=output

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let output1 = randomNumber2
document.getElementById("out1").innerHTML=output1;


// // // // Step 2: Construct first dice
let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// // // // Step 3: Construct second dice
let randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

let randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


// Show who wins or draw 

    if (randomNumber1 === randomNumber2) {
        document.querySelector("H1").innerHTML = "Draw!🟰";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("H1").innerHTML = "Player 1 Wins! 🥳";
    } else {
        document.querySelector("H1").innerHTML = "Player 2 Wins!🤩";
    }





 