const equation = document.getElementById("equation");
const answer = document.getElementById("answer");

const signs = ["+", "-", "*", "/"];

const time = document.getElementById("time");
time.innerHTML = 30;

var correctAnswers = 0;

function timer() {
    document.getElementById("play").style.display = "none";
    document.getElementById("submit").disabled = false;
    document.getElementById("answerfield").disabled = false;
    if(time.innerHTML > 0) {
        setTimeout(timer, 1000);
        time.innerHTML = Number(time.innerHTML) - 1;
    } else {
        alert("Congratulations, You got " + correctAnswers + " equation(s) correct in 30 seconds!")
    }
}

function createEquation() {
    equation.innerHTML = (Math.floor(Math.random() * 14) + 1 + signs[Math.floor(Math.random() * 3) + 1] + Math.floor(Math.random() * 14));
    answer.innerHTML = (eval(equation.innerHTML));
    if(Number(answer.innerHTML) % 1 !== 0) {
        answer.innerHTML = Number(answer.innerHTML).toFixed(2);
    }
}

createEquation();

function checkAnswer() {
    if(answer.innerHTML === document.getElementById("answerfield").value) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "Correct!";
        correctAnswers++;
        createEquation()
    } else {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "The answer was " + answer.innerHTML + ".";
        createEquation()
    }
    document.getElementById("answerfield").value = "";
}