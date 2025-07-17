var isOpen = false;
document.getElementById("wall").style.display = "none";

function moveBlock() {
    if(isOpen == false) {
        document.getElementById("wall").style.animationName = "expand";
        document.getElementById("wall").style.display = "";
        document.getElementById("text").style.display = "none";
        isOpen = true;
    } else if(isOpen == true) {
        document.getElementById("wall").style.animationName = "condense";
        setTimeout(() => {document.getElementById("text").style.display = "";}, 700);
        setTimeout(() => {document.getElementById("wall").style.display = "none";}, 900);
        isOpen = false;
    }
}

document.getElementById("block").addEventListener("click", moveBlock);