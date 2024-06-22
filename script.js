
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



function getHumanChoice()
{
  let ans;
  

while(ans != "rock" || ans != "paper" || ans != "scissor")
    {
     ans = prompt("rock, paper, or scissor?");
     ans = ans.toLowerCase();
     console.log(ans);
    if(ans == "rock" || ans == "paper" || ans == "scissor")
        {
            return ans;
        }
    else
    {
        console.log("Invald input please try again ");
    }
}
}





let humanScore = 0;
let computerScore = 0;

function playGame()
{

    function playRound(humanChoice, computerChoice)
{
    if(humanChoice == computerChoice && humanChoice == "rock")
        {
            console.log("You tie since you both chose rock");
        }
    else if(humanChoice == computerChoice && humanChoice == "paper")
        {
            console.log("You tie since you both chose paper");
        }   
    else if(humanChoice == computerChoice && humanChoice == "scissor")
        {
             console.log("You tie since you both chose scissor");
         }   

     else if(humanChoice == "rock" && computerChoice == "scissor")
            {
                 console.log("You Win! Rock beats Scissor");
                 humanScore +=1;
             }   
     else if(humanChoice == "paper" && computerChoice == "rock")
            {
                 console.log("You Win! Paper beats Rock");
                 humanScore +=1;
             } 
     else if(humanChoice == "scissor" && computerChoice == "paper")
                {
                     console.log("You Win! Scissor beats paper");
                     humanScore +=1;
                 }            
                 else if(humanChoice == "rock" && computerChoice == "paper")
                    {
                         console.log("You Lose! Paper beats Rock");
                         computerScore +=1;
                     } 
                else if(humanChoice == "paper" && computerChoice == "scissor")
                        {
                             console.log("You Lose! Scissor beats Paper");
                             computerScore +=1;
                         }       
                         
                else if(humanChoice == "scissor" && computerChoice == "rock")
                            {
                                 console.log("You Lose! Rock beats Scissor");
                                 computerScore +=1;
                             }     
                            }
 
for(i = 0; i < 5; i ++)
    {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
       playRound(humanSelection, computerSelection);
    }

}

playGame();
console.log("You won " + humanScore +" rounds");
console.log("The computer won " + computerScore +" rounds");
