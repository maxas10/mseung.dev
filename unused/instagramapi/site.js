var video = document.getElementById('video');
var canvas = document.getElementById('motion');
var score = document.getElementById('score');
const audio = document.getElementById("audio")

const times = document.getElementById("times")
const startscreen = document.getElementById('startscreen')
const rangeact = document.getElementById('rangeact');
const rangemax = document.getElementById('rangemax');
// let audioPlaying = false;

let timesPlayed = 0;

let motion = false;

let scoreActivation = 20;
let scoreMaximum = 2000;

function initSuccess() {
	DiffCamEngine.start();
}

function initError() {
	alert('Something went wrong.');
}

function capture(payload) {
	score.textContent = payload.score;
	times.innerText = timesPlayed


	if (payload.score >= scoreActivation && payload.score <= scoreMaximum) {
		if (!motion) {
			timesPlayed++
			audio.play();
			times.innerText = timesPlayed
		}
		motion = true
	}

	if (payload.score < scoreActivation) {
		motion = false
	}

}

function lightMode() {
	document.body.style.color = "black";
	document.body.style.backgroundColor = "white";
	startscreen.style.backgroundColor = 'white';
}

function darkMode() {
	document.body.style.color = "white";
	document.body.style.backgroundColor = "black";
	startscreen.style.backgroundColor = 'white';
}

function start() {
	startscreen.style.display = "none";
}

function setActivation() {
	scoreActivation = rangeact.value;
}
function setMax() {
	scoreMaximum = rangemax.value;
}
// function simulateKeyPress(targetElement, key) {
// 	const event = new KeyboardEvent('keydown', {
// 	  key: key,
// 	  code: key,
// 	  keyCode: key.charCodeAt(0),
// 	  bubbles: true,
// 	  cancelable: true,
// 	});

// 	targetElement.dispatchEvent(event);
//   }

//   const inputElement = document.getElementById('myInput');
//   simulateKeyPress(inputElement, 'a');

DiffCamEngine.init({
	video: video,
	motionCanvas: canvas,
	initSuccessCallback: initSuccess,
	initErrorCallback: initError,
	captureCallback: capture
});