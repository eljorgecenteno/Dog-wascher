class Game {
    constructor(){
       
        this.timer = 30 // timer general game, should go down 30sec
        this.dogWasched = 0 // how many dog you wasched until the moment. VFC
        this.dogCounter = 0  // how many dogs appeared, should not ve vissible for client
        this.timer = 1500 // set the time of the dogs appearing
    }
  


randomDogContainer(){  
    
        document.querySelectorAll('.subcontainers').forEach((element) => {
            element.style.display = 'none';
            element.classList.remove("cat")
            element.querySelector('img').src = './Images/Perro_limpio.png'
        }); //clean the last round if not clicked

    let dogMissed = this.dogCounter - this.dogWasched // Check how many dogs we miss and didnt clean.

    document.getElementById("Dog-missed-counter").innerHTML = `Dogs missed : ${dogMissed}`// push the missing dog in the actual round to html.

   if (dogMissed >= 2) { // set interval to make it the last to happens on the function, so add still the number to hmtl and display:none
        setInterval(()=>{

    document.querySelectorAll('.main-screen').forEach(function(element) { // we need for each since we are searching for class, not id and need to itinerate for every element that has this class
                element.style.display = 'none';
            });
        
    document.querySelectorAll('.last-screen').forEach(function(element) {
                element.style.display = 'block';
            });
    
    document.getElementById("final-points").innerHTML = `Your score: ${this.dogWasched}`
            
        },100); // stops the game and takes you to last screen. 
      }

    let randomNumber = Math.floor(Math.random() * 12) +1 //returns random number between 1 and 12

    let cat = Math.floor(Math.random() * 12) +1

    if (cat === randomNumber || cat*2 === randomNumber){
        document.getElementById(`subcontainer-${randomNumber}`).querySelector('img').src = './Images/Gato_preview_rev_1.png';
        document.getElementById(`subcontainer-${randomNumber}`).classList.add("cat")// Adding class cat to the dogi
        document.getElementById(`subcontainer-${randomNumber}`).style.display = 'block'
    } else {
        document.getElementById(`subcontainer-${randomNumber}`).style.display = 'block'
        this.dogCounter++
    }
    

    if (this.timer > 500){ // rest time for setTimeOut until is equal to 500
        this.timer -= 20 }

    setTimeout(() => { //  Using set time out to call again the function, instead of a interval since we can not gradually decrease the time. 
        this.randomDogContainer();
    }, this.timer);


}

clickOnDoggo(){ //  hide the doggo if its clicked and add 1 to the counter of dogs wasched. 
    let subcontainers = document.querySelectorAll('.subcontainers');

    subcontainers.forEach((element) => {
        element.addEventListener('click', () =>{
            if (element.classList.contains("cat")){
                    document.querySelectorAll('.main-screen').forEach(function(element) { // we need for each since we are searching for class, not id and need to itinerate for every element that has this class
                        element.style.display = 'none';
                    });
                
                    document.querySelectorAll('.last-screen').forEach(function(element) {
                        element.style.display = 'block';
                    });
            document.getElementById("final-points").innerHTML = `Your score: ${this.dogWasched}`
            document.getElementById("cat").innerHTML = `You cleaned a cat! you lost`
            } else{
                element.style.display = 'none';

            this.dogWasched++

            document.getElementById("Dog-wasched-counter").innerHTML = `Dogs wasched : ${this.dogWasched}` //  shows in html the result of this.dogwasched at
            }
        });
    });

}

}




document.getElementById("go-to-main-screen").onclick = function() { // button that takes you to the main screen
    let mainScreenElements = document.querySelectorAll('.main-screen');
    let firstScreenElements = document.querySelectorAll('.first-screen');

    mainScreenElements.forEach(function(element) { // we need for each since we are searching for class, not id and need to itinerate for every element that has this class
        element.style.display = 'block';
    });

    firstScreenElements.forEach(function(element) {
        element.style.display = 'none';
    });
};


document.getElementById("start-button").onclick = function() { // Start the game when clicking on the start button
    const tryGame = new Game
tryGame.randomDogContainer()
tryGame.clickOnDoggo()

};

document.getElementById("go-to-first-screen").onclick = function() { // Start the game when clicking on the start button
    location.reload()
};
