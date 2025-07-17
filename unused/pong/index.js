const score = document.getElementById("score");
score.innerHTML = 0;

const score2 = document.getElementById("score2");
score2.innerHTML = 0;

const player1 = document.getElementById("racket");
const player2 = document.getElementById("racket2");
const ball = document.getElementById("ball");

var racketPos = 0;
var racketPos2 = 0;
var ballXPos = 0;
var ballYPos = 0;
var ballSpeed = 5.75
var angle = Math.random() * 2.5 - 1.5;
var ballPos;
var player1Pos, playerPos2;

var ballInterval;

function moveRacket(e) {
	if (e == "ArrowUp") {
		racketPos = racketPos - 3;
	} else if (e == "ArrowDown") {
		racketPos = racketPos + 3;
	}
	player2.style.marginTop = racketPos + "px";
}

function moveRacket2(e) {
	if (e == "w") {
		racketPos2 = racketPos2 - 3;
	} else if (e == "s") {
		racketPos2 = racketPos2 + 3;
	}
	player1.style.marginTop = racketPos2 + "px";
}

let controller = {}
document.addEventListener("keydown", (e) => {
    controller[e.key] = true
})

document.addEventListener("keyup", (e) => {
    controller[e.key] = false
})

setInterval(() => {
	for (const key in controller) {
		if (controller[key] == true) {
			moveRacket(key);
			moveRacket2(key)
		}
	}
}, 1)
document.addEventListener("keydown", moveRacket, false);
document.addEventListener("keydown", moveRacket2, false);

function waitForReady() {
	setTimeout(moveBall, 3000);
}

waitForReady();

function moveBall() {
	clearTimeout();

	if (Math.random() > 0.5) {
		ballInterval = setInterval(moveLeft, 0.01);
		moveLeft();
	} else {
		ballInterval = setInterval(moveRight, 0.01);
		moveRight();
	}

	function moveLeft() {
		ballXPos = ballXPos - 5.75;
		ballYPos = ballYPos - angle;
		ball.style.marginLeft = ballXPos + "px";
		ball.style.marginTop = ballYPos + "px";
		checkCollision();
	}

	function moveRight() {
		ballXPos = ballXPos + 5.75;
		ballYPos = ballYPos + angle;
		ball.style.marginLeft = ballXPos + "px";
		ball.style.marginTop = ballYPos + "px";
		checkCollision();
	}

	function checkCollision() {
		ballPos = ball.getBoundingClientRect(); /*update value of ball position */
		player1Pos = player1.getBoundingClientRect(); /*update value of player 1's position */
		player2Pos = player2.getBoundingClientRect(); /*update value of player 2's  position */

		if (ball.offsetLeft < 10 && ball.offsetLeft >= 8) {
			if (ballPos.top <= player1Pos.top + player1Pos.height && ballPos.top >= player1Pos.top) {
				/*if ball's position collides with player 1's racket*/
				angle = Math.random() * 2.5 - 1.5; /*change angle of ball*/
				clearInterval(ballInterval); /*stop moving left*/
				ballInterval = setInterval(moveRight, 0.01); /*start moving right*/
				ballSpeed+=0.1;
			} else {
				score2.innerHTML++;
				clearInterval(ballInterval);
				ballXPos = 0;
				ballYPos = 0;
				ball.style.marginLeft = ballXPos + "px";
				ball.style.marginTop = ballYPos + "px";
				ballSpeed = 5.75;

				waitForReady();
			}
		} else if (ball.offsetLeft >= document.body.offsetWidth - 18 && ball.offsetLeft <= document.body.offsetWidth - 16) {
			if (ballPos.top < player2Pos.top + player2Pos.height && ballPos.top > player2Pos.top) {
				/*if ball's position collides with player 2's racket*/
				angle = Math.random() * 2.5 - 1.5; /*change angle of ball*/
				clearInterval(ballInterval); /*stop moving right*/
				ballInterval = setInterval(moveLeft, 0.01); /*start moving left*/
				ballSpeed+=0.1;
			} else {
				score.innerHTML++;
				clearInterval(ballInterval);
				ballXPos = 0; /*reset ball x pst*/
				ballYPos = 0; /*reset ball y pst*/
				ball.style.marginLeft = ballXPos + "px";
				ball.style.marginTop = ballYPos + "px";
				ballSpeed = 5.75;

				waitForReady();
			}
		}

		if (ballPos.top <= 40 && ballPos.top >= 20) {
			/*system to check vertical collision*/
			angle = angle - angle * 2; /*negative angle*/
		} else if (ballPos.top >= document.body.offsetHeight - 8 && ballPos.top <= document.body.offsetHeight - 2) {
			angle = angle - angle * 2; /*positive angle*/
		}
	}
}

let isMobile = navigator.userAgent.match(/iphone|android|blackberry/ig) ? true : false;
if(isMobile) {
    
}