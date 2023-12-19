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


    if (this.dogCounter - this.dogWasched > 2) {
            alert("Dogs must be clean!! you lost");
        }
    let randomNumber = Math.floor(Math.random() * 13) //returns random number between 1 and 12
    

    if (randomNumber === 1){ // shows the actual doggo for the user 
        document.getElementById("subcontainer-1").style.display = 'block'
    } else if (randomNumber === 2){
        document.getElementById("subcontainer-2").style.display = 'block'
    }else if (randomNumber === 3){
        document.getElementById("subcontainer-3").style.display = 'block'
    } else if (randomNumber === 4){
        document.getElementById("subcontainer-4").style.display = 'block'
    } else if (randomNumber === 5){
        document.getElementById("subcontainer-5").style.display = 'block'
    } else if (randomNumber === 6){
        document.getElementById("subcontainer-6").style.display = 'block'
    }else if (randomNumber === 7){
        document.getElementById("subcontainer-7").style.display = 'block'
    }else if (randomNumber === 8){
        document.getElementById("subcontainer-8").style.display = 'block'
    } else if (randomNumber === 9){
        document.getElementById("subcontainer-9").style.display = 'block'
    } else if (randomNumber === 10){
        document.getElementById("subcontainer-10").style.display = 'block'
    } else if (randomNumber === 11){
        document.getElementById("subcontainer-11").style.display = 'block'
    } else if (randomNumber === 12){
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
        });
    });
}

}




// Agregar evento de clic a cada elemento







const tryGame = new Game
tryGame.randomDogContainer()
tryGame.clickOnDoggo()
