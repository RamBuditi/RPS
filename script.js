console.log("hello world");
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

console.log(getComputerChoice());

function getHumanChoice()
{
  let ans;

while(ans != "rock" || ans != "paper" || ans != "scissor")
    {
     ans = prompt("rock, paper, or scissor?");
    if(ans == "rock" || ans == "paper" || ans == "scissor")
        {
            return ans;
        }
    else
    {
        console.log("Invald input please try again case sensitive");
    }
}
}

console.log(getHumanChoice());