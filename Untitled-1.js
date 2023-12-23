class Game {
    constructor(){
       
        this.timer = 30 // timer general game, should go down 30sec
        this.dogWasched = 0 // how many dog you wasched until the moment. VFC
        this.dogCounter = 0  // how many dogs appeared, should not ve vissible for client
        this.doggo = [] //should habe inside just the dog at the moment
    }
  


randomDogContainer(){ 
    setInterval(() => { // each 750 msec, run the funciton
        document.querySelectorAll('.subcontainers').forEach((element) => {
            element.style.display = 'none';
        }); //clean the last round if not clicked

    let dogMissed = this.dogCounter - this.dogWasched

    document.getElementById("Dog-missed-counter").innerHTML = `Dogs missed : ${dogMissed}`
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
    let randomNumber = Math.floor(Math.random() * 12) //returns random number between 1 and 12
    

    if (randomNumber === 0){ // shows the actual doggo for the user 
        document.getElementById("subcontainer-1").style.display = 'block'
    } else if (randomNumber === 1){
        document.getElementById("subcontainer-2").style.display = 'block'
    }else if (randomNumber === 2){
        document.getElementById("subcontainer-3").style.display = 'block'
    } else if (randomNumber === 3){
        document.getElementById("subcontainer-4").style.display = 'block'
    } else if (randomNumber === 4){
        document.getElementById("subcontainer-5").style.display = 'block'
    } else if (randomNumber === 5){
        document.getElementById("subcontainer-6").style.display = 'block'
    }else if (randomNumber === 6){
        document.getElementById("subcontainer-7").style.display = 'block'
    }else if (randomNumber === 7){
        document.getElementById("subcontainer-8").style.display = 'block'
    } else if (randomNumber === 8){
        document.getElementById("subcontainer-9").style.display = 'block'
    } else if (randomNumber === 9){
        document.getElementById("subcontainer-10").style.display = 'block'
    } else if (randomNumber === 10){
        document.getElementById("subcontainer-11").style.display = 'block'
    } else if (randomNumber === 11){
        document.getElementById("subcontainer-12").style.display = 'block'
    }
    this.dogCounter++
    console.log(this.dogCounter)

    }, 1500);
}

clickOnDoggo(){ //  hide the doggo if its clicked and add 1 to the counter of dogs wasched. 
    let subcontainers = document.querySelectorAll('.subcontainers');

    subcontainers.forEach((element) => {
        element.addEventListener('click', () =>{

            element.style.display = 'none';

            this.dogWasched++
            console.log(this.dogWasched)

            document.getElementById("Dog-wasched-counter").innerHTML = `Dogs wasched : ${this.dogWasched}` //  shows in html the result of this.dogwasched atm
        });
    });
}

}




// Agregar evento de clic a cada elemento
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
