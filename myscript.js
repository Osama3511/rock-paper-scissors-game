// function to randomly generate a random value assigned to computerchoice

function GetComputerChoice()
{
    let choice = Math.random() * 3;

    if (choice <= 1){
        return "rock";
    }
    else if (choice <= 2){
        return "paper";
    }
    else{
        return "scissors";
    }


}


const buttonsDiv = document.querySelector("#buttons");

buttonsDiv.addEventListener("click", (event) => {
    let target = event.target;
    playround(target.id)
})




// store the scores in global variables

let humanscore = 0;
let computerscore = 0;





// print the choices function

function print(humanchoice, computerchoice){
    const choicesDiv = document.querySelector("#choices");

    choicesDiv.textContent = `You chose ${humanchoice} Computer chose ${computerchoice}`;
}


function computerContent(computerchoice){
    const contentDiv = document.querySelector("#content");
    if (computerchoice === "rock"){
        contentDiv.textContent = "rock smashes scissors you lose!";
    }
    else if (computerchoice === "paper"){
        contentDiv.textContent = "paper wraps around rock you lose!";
    }
    else{
        contentDiv.textContent = "scissors cuts paper you lose!";
    }
}

// play the game!



function playround(humanchoice)
{

    let computerchoice = GetComputerChoice();

    const scoreDiv = document.querySelector("#score")
    print(humanchoice, computerchoice);

    const contentDiv = document.querySelector("#content");
    // check if humanchoice and computerchoice are equal first
    if (humanchoice === computerchoice){
        contentDiv.textContent = "it's a draw no one gets a point!";
    }
    // check all the winning conditions
    else if (humanchoice === "rock" && computerchoice === "scissors"){
        contentDiv.textContent = "rock smashes scissors you win!!";
        humanscore +=1;
    }
    else if (humanchoice === "paper" && computerchoice === "rock"){
        contentDiv.textContent = "paper covers rock you win!!";
        humanscore += 1;
    }
    else if (humanchoice === "scissors" && computerchoice === "paper"){
        contentDiv.textContent = "scissors cuts paper you win!!";
        humanscore += 1
    }
    // all other conditions are when the human loses
    else{
        computerContent(computerchoice);
        computerscore += 1
    }

    scoreDiv.textContent = `Your score: ${humanscore} Computer score: ${computerscore}`;


    }


    

