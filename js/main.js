'use strict';

// Declaramos las variables
const btn = document.querySelector(".js_button"); 



//Get random number from 1 to 10

const numberResult = getRandomNumber (10); 
const form = document.querySelector (".js-form"); 

function getRandomNumber(max) {
return Math.ceil(Math.random() * max); 
}
console.log(numberResult);

// Function game 

// ********************************************************************

//Eventos que tienen que realizar el botón al hacer click
// 1. Generar número random



function handleBtnClick (){
    getRandomNumber();

}
btn.addEventListener("click", handleBtnClick);