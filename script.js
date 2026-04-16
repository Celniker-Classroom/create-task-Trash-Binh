
// boolean values to change functions for branches, 
// set them true and then slowly turn the off for each step
let branch1Run = true;
let branch2Run = true;

// total array count to determine good or bad
let winDetermine = 0;
let loseDetermine = 0;

// button variables
let startGame = document.getElementById("startGame");    // starts the game
startGame.addEventListener("click", gameBegin);

let choiceGood = document.getElementById("good");    // goodchoice
choiceGood.addEventListener("click", goodAdd);
let choiceHmm = document.getElementById("hmm");    // badchoice
choiceHmm.addEventListener("click", bothAdd);

let choiceBad = document.getElementById("bad");    // mysterychoice
choiceBad.addEventListener("click", badAdd);


//buttons that are disabled when started
choiceGood.disabled = true;   
choiceHmm.disabled = true;  
choiceBad.disabled = true;  

//arrays added for game ending
let goodEnd = [];
let badEnd = [];

/// STORY BRANCHES
function gameBegin(){

//renable submit choice buttons
choiceGood.disabled = false;  
choiceHmm.disabled = false;   
choiceBad.disabled = false;
startGame.disabled = true;

//update text
document.getElementById("gameInst").textContent = "Game is running!";
document.getElementById("storytext").textContent = "Hey there! I'm Silly and I need to protect my friends at the seal village from the evil polar bears! Which path should I take to reach their evil lair?";
document.getElementById("good").textContent = "The Snow-Spring Hills, a relatively calm, albeit long way from the polar bears!";
document.getElementById("hmm").textContent = "The Eerie Snow Shortcut Tunnel, known for being a risky shortcut for traveling!";
document.getElementById("bad").textContent = "The Ice-Shard Mountain, a tall sharp mountain that poses many diffculties for getting across!";

}



function storyBranch1(){
//update text
document.getElementById("storytext").textContent = "Now that Silly has traveled through the chosen landscape, she needs to rest now to regain her energy at a nearby town. Where is she sleeping tonight?";
document.getElementById("good").textContent = "The PeinguINN, a local hotel with fair ratings!";
document.getElementById("hmm").textContent = "At a small campsite, known for either cursing or blessing visitors!";
document.getElementById("bad").textContent = "No sleeping for Silly, continue on with the journey!";
// branch 1 stops here
branch1Run = false;
}



function storyBranch2(){
//update text
document.getElementById("storytext").textContent = "Silly has now reached the evil polar bear lair. How will she able to prevent them from attack the village?";
document.getElementById("good").textContent = "Seal-style karate!";
document.getElementById("hmm").textContent = "The power of friendship!";
document.getElementById("bad").textContent = "A flamethrower!";
// branch 2 stops here
branch2Run = false;
}

// story endings

function storyEnd(){
document.getElementById("storytext").textContent = "test"; // filler code to check if statements
// calculate the total score system using a for loop for both arrays
// good score determine
for(let i = 0; i < goodEnd.length; i++){
    winDetermine = winDetermine + 1
}
// bad score determine
for(let i = 0; i < badEnd.length; i++){
    loseDetermine = loseDetermine + 1
}

// win or lose

if(winDetermine>loseDetermine){
document.getElementById("gameInst").textContent = "Good end achieved! Press the start button to play again";
} else {
    document.getElementById("gameInst").textContent = "Bad end achieved! Press the start button to play again";
}
}
//good add
function goodAdd(){
goodEnd.push(1);
//branch story determine
if (branch1Run === true){
storyBranch1();
} else if(branch2Run === true){
    storyBranch2();
} else{ 
    storyEnd();
}
}

//random add
function bothAdd(){
let riskOutcome = Math.floor(Math.random()*2); // integer of 1 or 0 to determine addition of points towards good or bad

if(riskOutcome === 1){
    goodEnd.push(1);
} else{
    badEnd.push(0);
}

//story branch
if (branch1Run === true){
storyBranch1();
} else if(branch2Run === true){
    storyBranch2();
} else{ 
    storyEnd();
}
}

//bad add
function badAdd(){
badEnd.push(1);

if (branch1Run === true){
storyBranch1();
} else if(branch2Run === true){
    storyBranch2();
} else{ 
    storyEnd();
}
}







