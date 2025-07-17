const introText = document.getElementById("introtext")
passage = [
    '...',
    'Hello.',
    'My name is Max Seung.',
]

var x = 0;
var l = 0;
var letterInterval;

function startup() {
	function addSentence(word) {
        if(x < word.length) {
            introText.innerHTML += word.charAt(x);
            x++;
        } else {
            clearInterval(letterInterval)
            setTimeout(function(){letterInterval = setInterval(function() {removeSentence()}, 100)}, 1000)
        }
	}

	function removeSentence() {
        if(introText.innerHTML.length > 0) {
            introText.innerHTML = introText.innerHTML.slice(0, -1)
            x--;
        } else {
            clearInterval(letterInterval)
            if(l < passage.length-1) {
                l++;
                setTimeout(function(){letterInterval = setInterval(function() {addSentence(passage[l])}, 100)}, 1000)
            }
        }
	}

    letterInterval = setInterval(function() {addSentence(passage[l])}, 100)
}

startup();