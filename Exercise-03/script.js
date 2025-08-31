// Exercise 03 - Tell ,e a joke
//elem.innerHTML is used to populate a div with HTML. Create a website with a div tag containing a random joke given an array of jokes. use math.random and fetch jokes from the internet(use any website to create the array)your website should show a random joke on every reload. min lenght of your jokes array should be 10
let jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!", 
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the math book look sad? Because it had too many problems.",
    "Why can't your nose be 12 inches long? Because then it would be a foot!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!"
];

const showJoke = () => {
    let randomIndex = Math.floor(Math.random()*jokes.length)
    let joke = ""
    for(let i = 0; i< jokes.length; i++){
        if(i === randomIndex){
            joke = jokes[i]
            break;
        }
    }
    document.getElementById('joke').innerHTML = joke;

    // console.log(randomIndex)
}

showJoke();