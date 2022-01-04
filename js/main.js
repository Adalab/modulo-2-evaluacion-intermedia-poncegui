'use strict';

// HTML elements


const btn = document.querySelector(".js_button"); 
let scorePlayer = document.querySelector(".js-player"); 
let scoreComputer = document.querySelector(".js-computer");
let result = document.querySelector(".js_result");
let changeBkg = document.querySelector(".body");
const resetBtn = document.querySelector(".hiddenResetBtn")
const rockIconP = document.querySelector(".iconHiddenRp");
const paperIconP = document.querySelector(".iconHiddenPp");
const scissorsIconP = document.querySelector(".iconHiddenSp");
const rockIconC = document.querySelector(".iconHiddenRc");
const paperIconC = document.querySelector(".iconHiddenPc");
const scissorsIconC = document.querySelector(".iconHiddenSc");

// global elements


let pcChose ="";
let playerPoints = 0;
let pcPoints = 0;
let attemps = 0;


//Get random number from 1 to 10 & Asign value "piedra papel tijera" to random number

function getRandomNumber(max) {
return Math.ceil(Math.random() * max); 
}


function generatePcChose() {
    pcChose = getRandomNumber(10);
    if (pcChose >= 0 && pcChose <= 3) {
        pcChose = "piedra";
    } else if (pcChose > 3 && pcChose <= 6) {
        pcChose = "papel";   
    } else if (pcChose > 6 && pcChose <= 10) {
      pcChose = "tijera";
    }
}



// Function Play rules
// this function is for exchange main message as per game results

function writeResult  (message) {
    result.innerHTML = message;
}

console.log(chose.value);
function playRules(){
    attemps ++;

    if (chose.value === pcChose){
        writeResult("Empate");
  
    } else if ((chose.value === "papel") && (pcChose === "piedra")) {
        writeResult("!Has ganado!");
        playerPoints ++;
   

    } else if ((chose.value === "tijera") && (pcChose === "papel")) {
        writeResult("!Has ganado!");
        playerPoints ++;


    } else if ((chose.value === "piedra") && (pcChose === "tijera")) {
        writeResult("!Has ganado!");
        playerPoints ++;

    } else if (chose.value === "Seleccione su jugada"){
        writeResult("Entrada no valida, intentelo de nuevo");
        pcPoints = 0; playerPoints = 0; attemps = 0;
        pcChose = -1;
        resetGame()


    } else {
        writeResult("!Has perdido!");
        pcPoints ++;
   
    }

    scoreComputer.innerHTML = "Ordenador: " + pcPoints;
    scorePlayer.innerHTML = "Jugador:  " + playerPoints;
}


// Shows icons as per game result (not requered on exercise)

function iconsPlayer(){
    if (chose.value === "tijera"){
        scissorsIconP.classList.remove("iconHiddenSp");
        paperIconP.classList.add("iconHiddenPp");
        rockIconP.classList.add("iconHiddenRp");

    }else if (chose.value === "piedra"){
        rockIconP.classList.remove("iconHiddenRp");
        paperIconP.classList.add("iconHiddenPp");
        scissorsIconP.classList.add("iconHiddenSp");

    } else if (chose.value === "papel"){
        paperIconP.classList.remove("iconHiddenPp");
        rockIconP.classList.add("iconHiddenRp");
        scissorsIconP.classList.add("iconHiddenSp");
      }
  }
  
  function iconsComputer(){
    if (pcChose === "tijera"){
        scissorsIconC.classList.remove("iconHiddenSc");
        paperIconC.classList.add("iconHiddenPc");
        rockIconC.classList.add("iconHiddenRc");

    }else if (pcChose === "piedra"){
        rockIconC.classList.remove("iconHiddenRc");
        paperIconC.classList.add("iconHiddenPc");
        scissorsIconC.classList.add("iconHiddenSc");

    } else if (pcChose === "papel"){
        paperIconC.classList.remove("iconHiddenPc");
        rockIconC.classList.add("iconHiddenRc");
        scissorsIconC.classList.add("iconHiddenSc");
    }
}


function hideIconsReset(){
    if ((attemps === 5) || (chose.value === "Seleccione su jugada")){
        paperIconC.classList.add("iconHiddenPc");
        rockIconC.classList.add("iconHiddenRc");
        scissorsIconC.classList.add("iconHiddenSc");
        paperIconP.classList.add("iconHiddenPp");
        rockIconP.classList.add("iconHiddenRp");
        scissorsIconP.classList.add("iconHiddenSp");

    }
    
}    


// Counter resets when it reaches 10 attemps and select the winner // also handle btns


function counterResets() {
    document.getElementById('chose').options.selectedIndex = 0;
    
    if ((attemps === 5) && (pcPoints < playerPoints)) {
        pcPoints = 0; playerPoints = 0; attemps = 0;
        writeResult("Partida finalizada, ¡Has ganado!");
        btn.classList.add("hiddenResetBtn");
        resetBtn.classList.add("resetBtn");
        changeBkg.classList.add("changeBkgWinner");
        trophy.classList.remove("js-imgHidden");
        trophy.classList.add("img");
      

      }  else if ((attemps === 5) && (pcPoints > playerPoints)){
        pcPoints = 0; playerPoints = 0; attemps = 0;
        writeResult("Partida finalizada, ¡Has perdido!");
        changeBkg.classList.add("changeBkgDark");
        btn.classList.add("hiddenResetBtn");
        resetBtn.classList.add("resetBtn");
        mario.classList.remove("js-marioHidden");
        mario.classList.add("mario");


    }  else if ((attemps === 5) && (pcPoints === playerPoints)){
        pcPoints = 0; playerPoints = 0; attemps = 0;
        writeResult("Partida finalizada, ¡Empate!");
        btn.classList.add("hiddenResetBtn");
        resetBtn.classList.add("resetBtn");
        
    }    else if ((attemps === 5) && (pcPoints === playerPoints)){
        pcPoints = 0; playerPoints = 0; attemps = 0;
        writeResult("Partida finalizada, ¡Empate!");
        btn.classList.add("hiddenResetBtn");
        resetBtn.classList.add("resetBtn");
         
    } 
}


//  Funtion to add and remove btns also change background color as per result


function resetGame() {
    btn.classList.remove("hiddenResetBtn");
    resetBtn.classList.remove("resetBtn");
    playerPoints = 0;
    pcPoints = 0;
    scorePlayer.innerHTML = "Jugador:  " + 0;
    scoreComputer.innerHTML ="Ordenador: " + 0;
    writeResult("¡Vamos a jugar!");
    changeBkg.classList.remove("changeBkgWinner");
    changeBkg.classList.remove("changeBkgDark");
    hideIconsReset();
    mario.classList.add("js-marioHidden");
    trophy.classList.add("js-imgHidden");
    

}

// gif not included on exercise

   const mario = document.querySelector(".js-marioHidden");
   const trophy = document.querySelector(".js-imgHidden");

   

// Events


function handleBtnClick (ev){
    ev.preventDefault();
    generatePcChose();
    playRules();
    counterResets();
    iconsPlayer();
    iconsComputer();
    

 
}

function handleResetBtnClick(ev) {
    ev.preventDefault();
    resetGame();
    hideIconsReset();
    gifHidden();

}


// Listeners
btn.addEventListener("click", handleBtnClick);
resetBtn.addEventListener("click", handleResetBtnClick);
