'use strict';

// Declaramos las variables
const btn = document.querySelector(".js_button"); 
let scorePlayer = document.querySelector(".js-player"); 
let scoreComputer = document.querySelector(".js-computer");
let result = document.querySelector(".js_result");

//Get random number from 1 to 10


// const form = document.querySelector (".js-form"); 
let pcChose ="";
function getRandomNumber(max) {
return Math.ceil(Math.random() * max); 
}

// Asignamos valor de piedra papel tijera al número random
pcChose = getRandomNumber(10);
function generatePcChose() {
    // pcChose = getRandomNumber(10);
    if (pcChose >= 0 && pcChose < 3) {
        pcChose = "piedra";
    } else if (pcChose >= 3 && pcChose < 6) {
        pcChose = "papel";
    } else if (pcChose >= 6 && pcChose <= 10) {
      pcChose = "tijera";
    }
    console.log(pcChose);
  }





  // Function game; 
function writeResult  (message) {
    result.innerHTML = message;
  }

console.log(chose.value);
function game(){
    if (chose.value === pcChose){
        writeResult("Empate");
    } else if ((chose.value === "papel") && (pcChose === "piedra")) {
        writeResult("Has ganado!");
        scorePlayer ++;
    } else if ((chose.value === "tijera") && (pcChose === "papel")) {
        writeResult("Has ganado!");
        scorePlayer ++;

    } else if ((chose.value === "piedra") && (pcChose === "tijera")) {
        writeResult("Has ganado!");
        scorePlayer ++;
    } else {
        writeResult("Has perdido!");
        scoreComputer ++;
    }
    scoreComputer.innerHTML = "Ordenador: " + scoreComputer;
    scorePlayer.innerHTML = "Jugador:  " + scorePlayer;
}

// ********************************************************************

// Function score; según el resultado vamos a un marcador u otro 

// function score(){
//     if (writeResult ("Has ganado!");

// }




//Eventos de "btn click"

function handleBtnClick (ev){
    ev.preventDefault();
    generatePcChose();
    game()
 


}

btn.addEventListener("click", handleBtnClick);