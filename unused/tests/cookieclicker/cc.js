const cookiesElem = document.getElementById("cookies")
cookiesElem.innerHTML = 0;

const farmsElem = document.getElementById("farms")
farmsElem.innerHTML = 0;

function addCookie() {
    cookiesElem.innerHTML = Number(cookiesElem.innerHTML) + 1;
}

function addFarm() {
    if(Number(cookiesElem.innerHTML) >= 50) {
        farmsElem.innerHTML = Number(farmsElem.innerHTML) + 1;
        cookiesElem.innerHTML = Number(cookiesElem.innerHTML) - 50;
    }
}
function farmCookies() {
    setTimeout(farmCookies, 1000);
    if(Number(farmsElem.innerHTML) > 0) {
        cookiesElem.innerHTML = Number(cookiesElem.innerHTML) + 5;
    }
}
farmCookies();