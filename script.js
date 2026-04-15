
// boolean values to change functions for branches, 
// set them true and then slowly turn the off for each step
let branch1Run = true;
let branch2Run = true;
let branch3Run = true;

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
document.getElementById("storytext").textContent = "Hey there! I'm Silly and I need to protect my friends at the seal village from the evil polar bears! Which path should I take to reach their evil lair?";
document.getElementById("good").textContent = "The Hail-Shower Hills";
document.getElementById("hmm").textContent = "The Snowflower Snowfields";
document.getElementById("bad").textContent = "The Ice-Shard Cavern";

}

function storyBranch1(){
//update text
document.getElementById("storytext").textContent = "Now that Silly has traveled through the chosen landscape, she needs to rest now to regain her energy at a nearby town. Where is she sleeping tonight?";
document.getElementById("good").textContent = "The PeinguINN";
document.getElementById("hmm").textContent = "At a small campsite";
document.getElementById("bad").textContent = "No sleeping for Silly, continue on with the journey!";
// branch 1 stops here
branch1Run = false;
}

function storyBranch2(){
//update text
document.getElementById("storytext").textContent = "Silly has now reached the evil polar bear lair. How will she able to prevent them from attack the village";
document.getElementById("good").textContent = "Seal-style karate!";
document.getElementById("hmm").textContent = "The power of friendship!";
document.getElementById("bad").textContent = "A flamethrower!";
// branch 2 stops here
branch2Run = false;
}

//good add
function goodAdd(){
goodEnd.push(Math.random()*5);
//branch story determine
if (branch1Run === true){
storyBranch1();
} else if(branch2Run === true){
    storyBranch2();
}
}

//random add
function bothAdd(){
badEnd.push(Math.random()*5);
goodEnd.push(Math.random()*5);

if (branch1Run === true){
storyBranch1();
} else if(branch2Run === true){
    storyBranch2();
}
}

//bad add
function badAdd(){
badEnd.push(Math.random()*5);
if (branch1Run === true){
storyBranch1();
} else if(branch2Run === true){
    storyBranch2();
}
}







