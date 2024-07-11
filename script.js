
function getComputerChoice()
{
    num = Math.floor(Math.random() * 3);
    if(num == 0)
        {
            return "rock";
        }
    else if(num == 1)
        {
            return "paper";
        }
    else
    {
        return "scissor";
    }
}








let humanScore = 0;
let computerScore = 0;


const choiceRock = document.getElementById("rock").addEventListener("click", choiceRockFunction);

function choiceRockFunction()
{
    humanSelection= "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
}


const choicePaper = document.getElementById("paper").addEventListener("click", choicePaperFunction);

function choicePaperFunction()
{
    humanSelection= "paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
}

const choiceScissor = document.getElementById("scissor").addEventListener("click", choiceScissorFunction);

function choiceScissorFunction()
{
    humanSelection= "scissor";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}


    function playRound(humanChoice, computerChoice)
{
    if(humanChoice == computerChoice && humanChoice == "rock")
        {
            let resultOne = document.createTextNode("You tie since you both chose Rock");
            results.appendChild(resultOne);
            console.log("You tie since you both chose Rock");
           
        }
    else if(humanChoice == computerChoice && humanChoice == "paper")
        {
            let resultTwo = document.createTextNode("You tie since you both chose Paper");
            results.appendChild(resultTwo);
            console.log("You tie since you both chose Paper");
        }   
    else if(humanChoice == computerChoice && humanChoice == "scissor")
        {
            let resultThree = document.createTextNode("You tie since you both chose Scissor");
            results.appendChild(resultThree);
             console.log("You tie since you both chose Scissor");
         }   

     else if(humanChoice == "rock" && computerChoice == "scissor")
            {
                let resultFour = document.createTextNode("You Win! Rock beats Scissor");
                results.appendChild(resultFour);
                 console.log("You Win! Rock beats Scissor");
                 humanScore +=1;
             }   
     else if(humanChoice == "paper" && computerChoice == "rock")
            {
                let resultFive = document.createTextNode("You Win! Paper beats Rock");
                results.appendChild(resultFive);
                 console.log("You Win! Paper beats Rock");
                 humanScore +=1;
             } 
     else if(humanChoice == "scissor" && computerChoice == "paper")
                {
                    let resultSix = document.createTextNode("You Win! Scissor beats Paper");
                    results.appendChild(resultSix);
                     console.log("You Win! Scissor beats Paper");
                     humanScore +=1;
                 }            
                 else if(humanChoice == "rock" && computerChoice == "paper")
                    {
                        let resultSeven = document.createTextNode("You Lose! Paper beats Rock");
                        results.appendChild(resultSeven);
                         console.log("You Lose! Paper beats Rock");
                         computerScore +=1;
                     } 
                else if(humanChoice == "paper" && computerChoice == "scissor")
                        {
                            let resultEight = document.createTextNode("You Lose! Scissor beats Paper");
                            results.appendChild(resultEight);
                             console.log("You Lose! Scissor beats Paper");
                             computerScore +=1;
                         }       
                         
                else if(humanChoice == "scissor" && computerChoice == "rock")
                            {
                                let resultNine = document.createTextNode("You Lose! Rock beats Scissor");
                                results.appendChild(resultNine);
                                 console.log("You Lose! Rock beats Scissor");
                                 computerScore +=1;
                             }  
                             
                             
                            liveHumanScore.textContent = "Human Score:" + humanScore;
                            liveComputerScore.textContent = "Computer Score:"+ computerScore;
                          
                             
                            if(humanScore === 5)
                            {
                                results.style.display = "none";
                                winnerMessage.style.visibility = "visible";
                                winnerMessage.textContent = "You Win!";

                            }
                           
                            else if(computerScore === 5)
                            {
                                results.style.display = "none";
                                winnerMessage.style.visibility = "visible";
                                winnerMessage.textContent = "The Computer Wins!";
                            }
                            
                            }
 

const winnerMessage = document.getElementById("win");
winnerMessage.style.visibility = "hidden";
let results = document.getElementById("results");
results.style.color = "blue";



let liveHumanScore = document.createTextNode("Human Score: " + humanScore +" ");
let liveComputerScore = document.createTextNode("Computer Score: "+ computerScore);
results.appendChild(liveHumanScore);
results.appendChild(liveComputerScore);







