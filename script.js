// button variables
let startGame = document.getElementById("startGame");    // starts the game
startGame.addEventListener("click", gameBegin);

let choice1 = document.getElementById("1");    // goodchoice
choice1.addEventListener("click", goodAdd);

let choice2 = document.getElementById("2");    // badchoice
choice2.addEventListener("click", randomAdd);

let choice3 = document.getElementById("3");    // mysterychoice
choice3.addEventListener("click", badAdd);


//buttons that are disabled when started
choice1.disabled = true;   
choice2.disabled = true;  
choice3.disabled = true;  

//arrays added for game ending
let goodEnd = [];
let badEnd = [];

///what happens when the game begins
function gameBegin(){

//renable submit choice buttons
choice1.disabled = false;  
choice2.disabled = false;   
choice3.disabled = false;
startGame.disabled= true;

//update text
document.getElementById("storytext").textContent = "Hey there! I'm Silly and I need to protect my friends at the seal village from the evil polar bears! Which path should I take to reach their evil lair?";
document.getElementById("1").textContent = "The Hail-Shower Hills";
document.getElementById("2").textContent = "The Snowflower Snowfields";
document.getElementById("3").textContent = "The Ice-Shard Cavern";
}


// arrays addition

//good add
function goodAdd(){
goodEnd.push(1);

}

//random add
function randomAdd(){

}


//bad add
function badAdd(){

}



