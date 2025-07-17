const ball = document.getElementById("ball");

var ballXPos = 0;
var ballYPos = 0;
var angle = Math.random() * 5 - 1;
var ballPos;
var ballInterval;

function moveBall() {
    if(Math.random() > 0.5) {
        ballInterval = setInterval(moveLeft, 0.01);
        moveLeft();
    } else {
        ballInterval = setInterval(moveRight, 0.01);
        moveRight();
    }

    function moveLeft() {
        ballXPos = ballXPos - 10;
        ballYPos = ballYPos - angle;
        ball.style.marginLeft = (ballXPos + "px");
        ball.style.marginTop = (ballYPos + "px");
        checkCollision();
    }

    function moveRight() {
        ballXPos = ballXPos + 10;
        ballYPos = ballYPos + angle;
        ball.style.marginLeft = (ballXPos + "px");
        ball.style.marginTop = (ballYPos + "px");
        checkCollision();
    }

    function checkCollision() {
        ballPos = ball.getBoundingClientRect();
        
        if(ball.offsetLeft < 10 && ball.offsetLeft >= 0) {
            angle = Math.random() * 5 - 1; /*change angle of ball*/
            clearInterval(ballInterval); /*stop moving left*/
            ballInterval = setInterval(moveRight, 0.01); /*start moving right*/
        } else if(ball.offsetLeft >= (document.body.offsetWidth - 10) && ball.offsetLeft <= (document.body.offsetWidth - 8)) {
            angle = Math.random() * 5 - 1; /*change angle of ball*/
            clearInterval(ballInterval); /*stop moving right*/
            ballInterval = setInterval(moveLeft, 0.01); /*start moving left*/
        }

        if(ballPos.top <= 10 && ballPos.top >= 0) { /*system to check vertical collision*/
            angle = angle - (angle * 2); /*negative angle*/
        } else if(ballPos.top >= (document.body.offsetHeight - 8) && ballPos.top <= (document.body.offsetHeight - 2)) {
            angle = angle - (angle * 2); /*positive angle*/
        }
    }
}

moveBall();