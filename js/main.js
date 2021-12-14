'use strict';

// Declaramos las variables
const btn = document.querySelector(".js_button"); 
let stone =document.querySelector(".js-stone").value; 
let scissors =document.querySelector(".js-paper").value; 
let paper = document.querySelector(".js-scissors").value; 
let scoreGamePhrase = document.querySelector("#result"); 
let scorePlayer = document.querySelector(".js-player"); 
let scoreComputer = document.querySelector(".js-computer");
const result = document.querySelector(".js_result");
const numberResult = getRandomNumber (10); 
const randomChoseFinal = randomChose(numberResult);


//Get random number from 1 to 10


// const form = document.querySelector (".js-form"); 

function getRandomNumber(max) {
return Math.ceil(Math.random() * max); 
}





// Asignamos valor de piedra papel tijera al número random
function randomChose(numberResult){

    if (numberResult <= 4){
        numberResult = stone;
    }else if (numberResult > 4 || numberResult <= 6){
         numberResult = paper;
        }else if (numberResult > 7){
            numberResult = scissors;
       
    }
 return numberResult;
}

function writeResult  (message) {
    result.innerHTML = message;
  }

// Function game; 
// 1. Si el numero random coincide con la eleccion del jugador ===> empate
// 2. Si el numero random saca papel y el jugador piedra ===> has ganado
// 3. Si el numero random saca tijera y el jugador papel ===> has ganado
// 4. Si el numero random saca piedra y el jugador tijera ===> has ganado
// 5. Cualquier otra cosa ====> has perdido

console.log(chose.value);
console.log(randomChoseFinal)



function game(){
    if (chose.value ===randomChoseFinal ){
        writeResult("Empate");
    } else if ((chose.value = paper) && (randomChoseFinal = stone)) {
        writeResult("Has ganado!");
    } else if ((chose.value = scissors) && (randomChoseFinal = paper)) {
        writeResult("Has ganado!");
    } else if ((chose.value = stone) && (randomChoseFinal = scissors)) {
        writeResult("Has ganado!");
    } else {
        writeResult("Has perdido!");
    }
    
}

// ********************************************************************

// Function score; según el resultado vamos a un marcador u otro 

// function score(){
//     if (writeResult = ("Has ganado!") {
//         value ++;score.texContent



// // }




//Todos los eventos que tiene que ejecutar btn cuando hacemos "click"
function handleBtnClick (ev){
    ev.preventDefault();
    
    console.log(randomChoseFinal);
    game();
    // score();


}
btn.addEventListener("click", handleBtnClick);