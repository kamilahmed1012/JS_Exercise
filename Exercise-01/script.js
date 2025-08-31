// Exercie 01 - Guess the number

//01- write a javaScript program to generate a random number and store it in a variable
let randomNumber = Math.floor(Math.random()*100)+1;
let userGuess;

// 02- The program then takes an input from the user to tell them whether the guess wass correct, greator or lesser than the orignal number
// 03 - 100(no of guesse) is the score of the user  The program expected to terminate once the number is gussed. Number should be betwween 1 to 100
let score = 100;
while (userGuess !== randomNumber && score > 0){
    userGuess = prompt("Try again! Guess a number between 1 and 100");
    userGuess = Number.parseInt(userGuess);
    score -= 1;
    if(userGuess === randomNumber){
        alert(`Congratulations! You guessed the correct number. Your score is ${score}.`);
    }else if (userGuess > randomNumber){
        alert('Your guess is greater than the original number.');
    }else{
        alert('Your guess is lesser than the original number.');
    }
}
if(score <= 0){
    alert(`Game over! You've used all your guesses. The correct number was ${score}.`);
}
