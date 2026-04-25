// MISCELANOUS VALUES
// boolean values to change functions for branches,
// set them true and then slowly turn the off for each step
let branch1Run = true;
let branch2Run = true;


// total array count to determine good or bad
let winDetermine = 0;
let loseDetermine = 0;


/// special Ending count
let gambleCount = 0;
let pureCount = 0;
let  unpureCount =0;
// button variables
let startGame = document.getElementById("startGame");    // starts the game
startGame.addEventListener("click", gameBegin);

//arrays added for game ending,"place" are place holder values
let theEnd = [];




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
document.getElementById("good").textContent = "Snow-Spring Hills, a relatively calm and reliable travel path!";
document.getElementById("hmm").textContent = "Ice-Shard Shortcut Tunnel, known for being a risky shortcut for traveling!";
document.getElementById("bad").textContent = "Avalanche Mountain, a tall steep mountain that poses many diffculties for getting across!";
}




function storyBranch1(){
    // 1st choices result
    if ((theEnd[0] === "good") && (pureCount === 1)){ // good choice, good result
     document.getElementById("resultChoice").textContent = "Silly scoots along the Snow-Spring Hill peacefully. On her way, she found a lot of rare herbal medicine (extremly rare in the Artic) that she could use!"
     }
     else if ((theEnd[0] === "good") && (gambleCount === 1)){ //hmm choice, good result
       document.getElementById("resultChoice").textContent = "Silly scoots into the tunnel. She ends up relatively unscathed as a result and now is able to rest earlier!" ; 
       }
       else if ((theEnd[0] === "bad") && (gambleCount === 1)){//hmm choice, bad result
         document.getElementById("resultChoice").textContent = "Silly scoots into the tunnel. Howeve, due to the route being unstable due to frequent earthquaks, the ice shards of the cave fel down quickly, blocking many off Silly's path. In the end after several scratches and a few detours she ended up traveling way longer than needed!";
         }else if ((theEnd[0] === "bad") && (unpureCount === 1)){//bad choice, bad result
           document.getElementById("resultChoice").textContent = "Silly slowly makes her way up the moutain. However, just like the name implies, there was a strong avalanche that Silly got stuck in. Ulitmately, this delayed her travel by a really long time";
           }

            //update text
            document.getElementById("storytext").textContent = "Now that Silly has traveled through the chosen landscape, she needs to rest now to regain her energy at a nearby town. Where is she sleeping tonight?";
            document.getElementById("good").textContent = "The PeinguINN, a local hotel with fair ratings!";
            document.getElementById("hmm").textContent = "At a small campsite, known for its spirits that curse or bless visitors!";
            document.getElementById("bad").textContent = "No sleeping for Silly, continue on with the journey!";


            // branch 1 stops here
            branch1Run = false;
            }




function storyBranch2(){

 // 2nd choices result
if ((theEnd[1] === "bad") && (gambleCount === 1||gambleCount === 2)){ //hmm choice, bad result
 document.getElementById("resultChoice").textContent = "Silly accidently woke up a cursed sprit when setting up camp. The sprit ended taking all of her food and money she had, making silly very hungry and cold while sleeping there!";
 }
 
else if ((theEnd[1] === "good") && (gambleCount === 1||gambleCount === 2)){ //hmm choice, good result
  document.getElementById("resultChoice").textContent = "Silly, while collecting artic wood for her camp, stumbled across a treasure chest filled with food and supplies. She ended up having extremly good rest as a result!" ;  
 }

 else if (theEnd[1] === "bad"){//bad choice, bad result
document.getElementById("resultChoice").textContent ="Silly continued on with her journey, however ue to her tiredness, she collasped onto the snow and then a pack of artic foxes stole all of her food supplies. How sad!";
 }
 
 
 
 else if (theEnd[1] === "good") { //good choice, good result
document.getElementById("resultChoice").textContent = "Silly stopped by the PenguINN, a local hotel known for good hospitality. The staff there were very nice and gave Silly an affordable and comfortable room to sleep in! As a rsult, Silly endedd up getting very good sleep!";
 }
                   
 
 
 //update text
document.getElementById("storytext").textContent = "Silly has now reached the evil polar bear lair! How will she able to prevent them from attacking the village?";
document.getElementById("good").textContent = "Seal-style karate!";
document.getElementById("hmm").textContent = "The power of friendship!";
 document.getElementById("bad").textContent = "A flamethrower!";
                  
 // branch 2 stops here
branch2Run = false;
}



function storyEnd(listArray){ 
    
  // 3rd choices result
if ((theEnd[2] === "bad") && (gambleCount === 1||gambleCount === 2||gambleCount === 3)){ //hmm choice, bad result
 document.getElementById("resultChoice").textContent = "The polar bears laughed at you for even offering such a thing and then they all started to head for the Seal VIllage. Hopefully you were able to knock them out if you rested well!";
 }
 
else if ((theEnd[2] === "good") && (gambleCount === 1||gambleCount === 2||gambleCount === 3)){ //hmm choice, good result
  document.getElementById("resultChoice").textContent = "The polar bears accepted your offer for allyship and planned not to harm Silly's village, unless you appeared tired while saying it, they don't like weakness in artic animals." ;  
 }

 else if (theEnd[2] === "bad"){//bad choice, bad result
document.getElementById("resultChoice").textContent ="The flamethrower got out of control and melted a lot of ice everywhere! Hopefully the Seal Village isn't destroyed";
 }
 
 
 
 else if (theEnd[2] === "good") { //good choice, good result
document.getElementById("resultChoice").textContent = "Silly, having trained in the village of seal style karate, hits the polar bears like a pinball machine. Given enough rest or a safe journey, she safely hit all the polar bears, hopefully with enough force with well rested strength!";
 }
                     
    
    for(let i = 0; i < listArray.length; i++){
       if(listArray[i] === "good"){
        winDetermine++; 
     }
     else{
        loseDetermine++; 
    }
    }

   if(winDetermine>loseDetermine){ 
    document.getElementById("gameInst").textContent = "Good end achieved! Press the start button to play again";
    document.getElementById("storytext").textContent = "In the end, Silly managed to meet the polar bears and prevent them from attacking her village due to your smart thinking!";
     } else {
      document.getElementById("gameInst").textContent = "Bad end achieved! Press the start button to play again";
     document.getElementById("storytext").textContent = "In the end, Silly failed to prevent the polar bears from her attacking her village either by taking too many risks or bad decision making!";
    }

specialEnd();


gambleCount= 0;
    pureCount =0;
    unpureCount = 0; 
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
   

 
function specialEnd(){ // checks and update for special endings
 if(gambleCount===3){ //gamble ending, achieved by clicking all hmm options
    document.getElementById("gameInst").textContent = "Rare Special Ending: Super Gamble End! Press the start button to play again";
    document.getElementById("storytext").textContent = "The polar bears were just about to decline Silly's offer for allyship until she pulled out a game of Go Fish. Intrguied the polar bears agreed to play the game, with the conditons being that if Silly wone, her village ends up safe while if the polar bears one, they get to attack. In the end, the game went on indefinatly as both polar bears and seal kept betting on each other until the world finally came to an end. ";
    document.getElementById("gambleEnd").textContent = "Super Gamble Ending: Achieved";   
    }
    else if(pureCount===3){ //super good ending, achieved by click all good options
    document.getElementById("gameInst").textContent = "Rare Special Ending: Super Good End! Press the start button to play again";
    document.getElementById("storytext").textContent = "Not only did you prevent the polar bears from attacking, you were so smart that they even forfeited all of their kingdom's money and gave it to the Seal Village!";
    document.getElementById("pureEnd").textContent = "Super Good Ending: Achieved";
}
    else if(unpureCount===3){ //super bad ending, achieed by click all bad options
    document.getElementById("gameInst").textContent = "Rare Special Ending: Super Bad End! Press the start button to play again";
    document.getElementById("storytext").textContent = "A lot of bad choices were defnitely made here. Not only was Silly tired and exhausted when coming to the Polar Bear lair, she also accidently turned on her flamethrower on the highest heat setting due to her being exhausted! As a result, not only did she melted the polar bear's homes but also the entire artics's as well! Whoopsies!";
    document.getElementById("unpureEnd").textContent = "Super Bad Ending: Achieved";  

}

}





function arrAdd(choice){  
// debugged logic issues using ChatGPT, specifcally for the button values "hmm" input and "bad" input errors by identifying typo of not using "ëlse" in if else
    if(choice === "good"){  //good input
        theEnd.push("good");
   pureCount++;
    }
    else if(choice === "hmm"){ 
        let riskOutcome = Math.floor(Math.random()*2);
            if(riskOutcome === 1){
                theEnd.push("good");
            }
            else{ //bad input
                theEnd.push("bad");
            }
    gambleCount++;
}
    else{ 
    theEnd.push("bad");
       unpureCount++;
}


// determine story path
if (branch1Run === true){
storyBranch1();
} else if(branch2Run === true){
    storyBranch2();
} else{
    storyEnd(theEnd);
}
}
