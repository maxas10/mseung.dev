const menubutton = document.getElementById('menubutton');
const menu = document.getElementById('menu');
const maincontainer = document.getElementById('maincontainer');
const menustuff = document.getElementById('menustuff');

var isOpened = false;
var canBeOpened = true;
var currentSection = "main";

function slide() {
    if(canBeOpened) {
        if(isOpened) {
            menustuff.style.animationName = "fromleft";
            menustuff.style.animationDirection = "reverse";
            maincontainer.style.animationName = "blur";
            maincontainer.style.animationDirection = "reverse";
            setTimeout(function() {
                menu.style.animationName = "slidein";
                menu.style.animationDirection = "reverse";
                setTimeout(function() {
                    menu.style.display = "none";
                    menustuff.style.display = "none";
                    isOpened = false;
                }, 750)
            }, 500)
        } else {
            menustuff.style.animationName = "fromleft";
            menustuff.style.left = "0%"
            menustuff.style.display = "flex";

            maincontainer.style.animationName = "blur";
            setTimeout(function() {
                menu.style.animationName = "slidein";
                menu.style.display = "flex";
            }, 500)
        }

        canBeOpened = false;
        isOpened = true;

        setTimeout(function() {
            maincontainer.style.animationName = "";
            maincontainer.style.animationDirection = "";
            menustuff.style.animationName = "";
            menustuff.style.animationDirection = "";
            canBeOpened = true;
            menu.style.animationName = "";
            menu.style.animationDirection = "";
        }, 1250)
    }
}

function changeContent(section) {
    document.getElementById(currentSection + "container").style.display = "none";
    document.getElementById(section + "container").style.display = "flex";
    currentSection = section;
    slide();
}
/*-----*/

var x = 0;
var letterInterval;

const text = document.getElementById("name");
const words = "mseung";

function startup() {
	letterInterval = setInterval(addletter, 150);
	function addletter() {
		text.innerHTML = text.innerHTML + words.charAt(x); /*Adds letter to textbox*/
		x++;
		if (x >= words.length) {
			/*if done with the sentence*/
			clearInterval(letterInterval); /*stop making x go up*/
		}
	}
}

startup();