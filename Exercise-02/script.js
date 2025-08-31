// Exercise 02 - Snate Water Gun 
// use javaScript to create a game of Snake Water and Gun. The game should ask you to enter S, W or G. the computer should be able to randomly generate S, Wor G and declare win or loss using alert use confirm and prompt wherever required
alert("Welcome to Snake, Water & Gun Game!\nRules:\nS = Snake, W = Water, G = Gun\nBest of 5 rounds!");

let userScore = 0;
let computerScore = 0;
const choices = ['snake', 'water', 'gun'];
let rounds = 5;
for (let i = 0; i <= rounds; i++){
    let userChoice = prompt("Enter your choice (S for Snake, W for Water, G for Gun):").toLowerCase();
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === 's'){
        userChoice = 'snake';
        }else if (userChoice === 'w'){
        userChoice = 'water';
        }else if (userChoice === 'g'){
        userChoice = 'gun';
        }
        alert(`Computer chose: ${computerChoice}`);
        if (userChoice === computerChoice){
            alert("It's a tie!");
        }else if (userChoice === 'snake' && computerChoice === 'water'){
            alert('You win! Snake drinks water.');
            userScore += 1
        }else if (userChoice === 'water' && computerChoice === 'gun'){
            alert('You win! Water douses gun.');
            userScore += 1
        }else if (userChoice ==='gun' && computerChoice === 'snake'){
            alert('You win! Gun shoots snake.');
            userScore += 1
        }
        else{
              alert('You lose!');
            computerScore += 1
        }
}

let resultMessage = `Final Scores:\nYou: ${userScore}\nComputer: ${computerScore}\n`;
if (userScore > computerScore){
    resultMessage += "Congratulations! You are the overall winner!";
}else if (userScore < computerScore){
    resultMessage += "Computer wins overall! Better luck next time.";
}else{
    resultMessage += "It's an overall tie!";
}
alert(resultMessage);

let playAgain = confirm("Do you want to play again?");
if (playAgain){
    location.reload();
}else{
    alert("Thanks for playing! Goodbye!");
}


