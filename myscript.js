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


// function to get user input assigned to humanchoice

function GetHumanChoice()
{
    let humanchoice = prompt("Choose wisely rock, paper or scissors!").toLowerCase();


    if (humanchoice === "rock" || humanchoice === "paper" || humanchoice === "scissors"){
        return humanchoice;
    }
    else{
        console.log("Invalid input!");
    }
}





// store the scores in global variables

let humanscore = 0;
let computerscore = 0;





// print the choices function

function print(humanchoice, computerchoice){
    console.log("Your choice: " + humanchoice);
    console.log("Computer choice: " + computerchoice);
}


// play the game!
function playGame(){



    function playround()
    {

        let humanchoice = GetHumanChoice();
        let computerchoice = GetComputerChoice();




        print(humanchoice, computerchoice);

        // check if humanchoice and computerchoice are equal first
        if (humanchoice === computerchoice){
            console.log("It's a Draw!");
        }

        // check all the winning conditions
        if (humanchoice === "rock" && computerchoice === "scissors"){
            console.log("Rock smashes scissors you win!!");
            humanscore +=1;
        }
        else if (humanchoice === "paper" && computerchoice === "rock"){
            console.log("Paper covers rock you win!!");
            humanscore += 1;
        }
        else if (humanchoice === "scissors" && computerchoice === "paper"){
            console.log("Scissors cuts paper you win!!");
            humanscore += 1
        }
        // all other conditions are when the human loses
        else{
            console.log("You lose!");
            computerscore += 1
        }

        console.log(`Your score: ${humanscore}\nComputer score: ${computerscore}`);
    }


    
    playround();
    playround();
    playround();
    playround();
    playround();
}

playGame();