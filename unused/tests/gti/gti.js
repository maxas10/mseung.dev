const random = Math.floor(Math.random() * 100) - 1;
const guesses = document.getElementById("guesses")
guesses.innerHTML = 0;

function check() {
    const guess = document.getElementById("field").value;
    if(guess < random) {
        guesses.innerHTML = Number(guesses.innerHTML) + 1
        alert("Too low!")
    } else if(guess > random) {
        guesses.innerHTML = Number(guesses.innerHTML) + 1
        alert("Too high!")
    } else if(guess == random) {
        guesses.innerHTML = Number(guesses.innerHTML) + 1
        alert("Correct!")
    } else {
        alert("Invalid!")
    }
}