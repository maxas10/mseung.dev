const text = "this post was fact checked by real american patriots. this post was fact checked by real american patriots. this post was fact checked by real american patriots. this post was fact checked by real american patriots. this post was fact checked by real american patriots. this post was fact checked by real american patriots.";
var x = 0;
var letterInterval;

function oneletter() {
    letterInterval = setInterval(addletter, 30); /*waits 30 milliseconds*/
    function addletter() {
        document.getElementById("textbox").innerHTML = document.getElementById("textbox").innerHTML + text.charAt(x); /*Adds letter to textbox*/
        x++;
        if(x >= text.length) { /*if done with the sentence*/
            clearInterval(letterInterval); /*stop making x go up*/
        }
    }
}

oneletter();