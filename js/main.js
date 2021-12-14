'use strict';

// Declaramos las variables
const btn = document.querySelector(".js_button"); 



//Get random number from 1 to 10

const numberResult = getRandomNumber (10); 
// const form = document.querySelector (".js-form"); 
let stone =document.querySelector (".js-stone"); 
let scissors =document.querySelector (".js-paper"); 
let paper = document.querySelector (".js-scissors"); 
let scoreGamePhrase = document.querySelector (".js-result"); 

function getRandomNumber(max) {
return Math.ceil(Math.random() * max); 
}
console.log(numberResult);

// Asignamos valor de piedra papel tijera al número random
function randomChose(){
    const numberResult = face.value;
    if (numberResult <= 4){
        numberResult = stone;
    }else if (numberResult > 4 || numberResult <= 6){
         numberResult = paper;
        }else if (numberResult > 7){
            numberResult = scissors;
       
    }

}
// Function game 

// ********************************************************************

//Eventos que tienen que realizar el botón al hacer click
// 1. Generar número random



function handleBtnClick (){
    getRandomNumber();
    randomChose();
    Game();

}
btn.addEventListener("click", handleBtnClick);