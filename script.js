
// boolean values to change functions for branches,
// set them true and then slowly turn the off for each step
let branch1Run = true;
let branch2Run = true;


// total array count to determine good or bad
let winDetermine = 0;
let loseDetermine = 0;


/// gamblEnding count
let gambleCount = 0;

// button variables
let startGame = document.getElementById("startGame");    // starts the game
startGame.addEventListener("click", gameBegin);


// AI FIXED CODE using ChatGPT by using function(){arrDelay}
let choiceGood = document.getElementById("good");    // goodchoice
choiceGood.addEventListener("click", function() {arrAdd("good")});
let choiceHmm = document.getElementById("hmm");    // hmm choice
choiceHmm.addEventListener("click", function() {arrAdd("hmm")})


let choiceBad = document.getElementById("bad");    // bad choice
choiceBad.addEventListener("click", function() {arrAdd("bad")})
// AI fixed code ends here


//buttons that are disabled when started
choiceGood.disabled = true;  
choiceHmm.disabled = true;  
choiceBad.disabled = true;  


//arrays added for game ending
let theEnd = [];


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
document.getElementById("good").textContent = "The Snow-Spring Hills, a relatively calm and reliable travel path!";
document.getElementById("hmm").textContent = "The Eerie Snow Shortcut Tunnel, known for being a risky shortcut for traveling!";
document.getElementById("bad").textContent = "The Ice-Shard Mountain, a tall sharp mountain that poses many diffculties for getting across!";
}




function storyBranch1(){
//update text
document.getElementById("storytext").textContent = "Now that Silly has traveled through the chosen landscape, she needs to rest now to regain her energy at a nearby town. Where is she sleeping tonight?";
document.getElementById("good").textContent = "The PeinguINN, a local hotel with fair ratings!";
document.getElementById("hmm").textContent = "At a small campsite, known for its spirits that curse or bless visitors!";
document.getElementById("bad").textContent = "No sleeping for Silly, continue on with the journey!";
// branch 1 stops here
branch1Run = false;
}




function storyBranch2(){
//update text
document.getElementById("storytext").textContent = "Silly has now reached the evil polar bear lair! How will she able to prevent them from attacking the village?";
document.getElementById("good").textContent = "Seal-style karate!";
document.getElementById("hmm").textContent = "The power of friendship!";
document.getElementById("bad").textContent = "A flamethrower!";
// branch 2 stops here
branch2Run = false;
}


function storyEnd(listArray){ // determine base outcome

    for(let i = 0; i < listArray.length; i++){
       if(listArray[i] === "good"){
        winDetermine++; 
     }
     else{
        loseDetermine++; 
    }
    }

   if(winDetermine>loseDetermine){ // determine base good or bad end
    document.getElementById("gameInst").textContent = "Good end achieved! Press the start button to play again";
    document.getElementById("storytext").textContent = "Silly managed to meet the polar bears and prevent them from attacking her village due to your smart thinking!";
     } else {
      document.getElementById("gameInst").textContent = "Bad end achieved! Press the start button to play again";
     document.getElementById("storytext").textContent = "Silly failed to prevent the polar bears from her attacking her village either by taking too many risks or bad decision making!";
    }

specialEnd();

// reset choices
    branch1Run = true;
    branch2Run = true;
    choiceGood.disabled = true;  
    choiceHmm.disabled = true;  
    choiceBad.disabled = true;
    startGame.disabled = false;
    theEnd = [];
    winDetermine = 0;
    loseDetermine = 0; 
}
    

 
function specialEnd(){ // checks and update for special eding
    if(theEnd.join(",") === ("good,good,good")){ //array.join from w3schools: https://www.w3schools.com/jsref/jsref_join.asp
    document.getElementById("gameInst").textContent = "Rare Special Ending: Super Good End! Press the start button to play again";
    document.getElementById("storytext").textContent = "Not only did you prevent the polar bears from attacking, you were so smart that they even forfeited all of their kingdom's money and gave it to the Seal Village!";
    document.getElementById("pureEnd").textContent = "Super Good Ending: Achieved";
}
else if(theEnd.join(",")=== ("bad,bad,bad")){
    document.getElementById("gameInst").textContent = "Rare Special Ending: Super Bad End! Press the start button to play again";
    document.getElementById("storytext").textContent = "A lot of bad choices were defnitely here. Not only was Silly tired and exhausted when coming to the Polar Bear lair, she also accidently turned the flamethrower on the highest heat due to her being exhausted! As a result, not only did she melted the polar bear's homes but also the entire artics's as well! Whoopsies!";
    document.getElementById("unpureEnd").textContent = "Super Bad Ending: Achieved";  
}
    else{
    
    }
}





function arrAdd(choice){  
// debugged logic issues using ChatGPT, specifcally for the button values "hmm" input and "bad" input errors by identifying typo of not using "ëlse" in if else
    if(choice === "good"){  //good input
        theEnd.push("good");
}
    else if(choice === "hmm"){ 
        let riskOutcome = Math.floor(Math.random()*2);
            if(riskOutcome === 1){
                theEnd.push("good");
            }
            else{ //bad input
                theEnd.push("bad");
            }
}
    else{ 
    theEnd.push("bad");
}


// determine story path
if (branch1Run === true){
storyBranch1();
} else if(branch2Run === true){
    storyBranch2();
} else{
    storyEnd(theEnd);
}}
