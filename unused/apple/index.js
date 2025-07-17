
const menubuttons = document.getElementsByClassName("menubutton");
const menucontents = document.getElementsByClassName("menucontent");
const menucontent = document.getElementById("menucontent");
const root = document.querySelector(":root");
let textTimeout;
let fadeInterval;
let currentMenuContent; // document.getElementById("menucontent" + contentIndex);
for (let menubutton of menubuttons) {
    menubutton.addEventListener("mouseenter", function () {
        currentMenuContent = menucontents[Number(menubutton.value)];
        currentMenuContent.style.display = "flex";
        root.style.setProperty("--menuHeight", currentMenuContent.offsetHeight * -1 + "px");
        currentMenuContent.style.animation = "slidein 0.75s both"

        clearTimeout(textTimeout);
        const currentMenuContentText = currentMenuContent.children;
        for (let text of currentMenuContentText) {
            text.style.opacity = "0";
            text.style.animation = "none";
        }
        textTimeout = setTimeout(function () {
            let x = 0;
            fadeInterval = setInterval(function () {
                if (x < currentMenuContentText.length) {
                    setFadeIn(currentMenuContentText[x]);
                    x++;
                } else {
                    clearInterval(fadeInterval);
                }
            }, 40)
            function setFadeIn(text) {
                text.style.animation = "fadein 0.75s both";
            }
        }, 350)

        setTimeout(function () {
            for(let menucontent of menucontents) {
                if(menucontent !== currentMenuContent) {
                    menucontent.style.animation = "none"
                    menucontent.style.display = "none";
                }
            }
        },750)
    })
}
for(let menucontent of menucontents) {
    menucontent.style.display="none";
    menucontent.addEventListener("mouseleave", function () {
        menucontent.style.animation = "slideout 0.75s both"
        clearTimeout(textTimeout);
            const menuContentText = menucontent.children;
            for (let text of menuContentText) {
                text.style.opacity = "1";
                text.style.animation = "fadeout 0.75s both";
        }
    })   
}

// const menubar = document.getElementById("menu");
// menubar.addEventListener("mouseover", function () {
//     handleMenuPopUp(0);
// })