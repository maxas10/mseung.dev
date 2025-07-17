const box = document.getElementById("box");
const field = document.getElementById("field")
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "~`! @#$%^&*()_-+={[}]|;<,>.?/";

function generate() {
    box.innerHTML = `Your randomly generated password of ${field.value} characters is: `;
    for(let i=0; i<Number(field.value); i++) {
        var randChoice;
        var randNum = Math.floor(Math.random() * 3) + 1;
        switch(randNum) {
            case 1:
                randChoice = Math.floor(Math.random() * (letters.length - 1)) + 0;
                box.innerHTML = box.innerHTML + letters.charAt(randChoice);
                break;
            case 2:
                randChoice = Math.floor(Math.random() * (numbers.length - 1)) + 0;
                box.innerHTML = box.innerHTML + numbers.charAt(randChoice);
                break;
            case 3:
                randChoice = Math.floor(Math.random() * (symbols.length - 1)) + 0;
                box.innerHTML = box.innerHTML + symbols.charAt(randChoice);
                break;
        }
    }
}