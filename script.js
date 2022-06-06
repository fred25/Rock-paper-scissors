const playerText = document.querySelector("#playerText");
const enemyText = document.querySelector("#enemyText");
const gameText = document.querySelector("#gameText");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const sciBtn = document.querySelector("#sciBtn");

rockBtn.addEventListener('click', chooseRock);
paperBtn.addEventListener('click', choosePaper);
sciBtn.addEventListener('click', chooseSci);

const Opt = ['Rock', 'Paper', 'Scissors'];

let playerOption = '';
let enemyOption = '';

const loseMsg = "You have lost >:C"
const winMsg = "You Won! :D"


function chooseEnemy(){
    enemyOption = Opt[Math.floor(Math.random()*3)];
}

function runGame(){
    chooseEnemy();

    playerText.textContent = `Player: ${playerOption}`;
    enemyText.textContent = `Enemy: ${enemyOption}`;

    gameText.textContent = checkWinner();
};

function checkWinner(){
    if(playerOption == enemyOption){
        return "It's a Tie! :/"
    }
    else if(enemyOption == "Rock"){
        return (playerOption == "Paper") ? winMsg : loseMsg;
    }
    else if(enemyOption == "Paper"){
        return (playerOption == 'Scissors') ? winMsg : loseMsg;
    }
    else if(enemyOption == 'Scissors'){
        return (playerOption == "Rock") ? winMsg : loseMsg;
    }
}

function chooseRock(){
    playerOption = 'Rock';
    runGame();
}

function choosePaper(){ 
    playerOption = 'Paper';
    runGame();
}

function chooseSci(){  
    playerOption = 'Scissors';
    runGame();
}