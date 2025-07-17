var isToggled = false;

function togglemenu() {
    if(isToggled == false) {
        document.getElementById("menuwall").style.visibility = "visible";
        isToggled = true;
    } else {
        document.getElementById("menuwall").style.visibility = "hidden";
        isToggled = false;
    }
}

const companyPrice = document.getElementById("companyPrice");
companyPrice.innerHTML = Math.floor(Math.random() * 900) + 100;

const inv = document.getElementById("inv");
inv.innerHTML = 0;

const bank = document.getElementById("bank");
bank.innerHTML = 500;

var newsblock = document.createElement("div");
newsblock.style.width = Math.floor(Math.random() * 100) + 100;
newsblock.style.backgroundColor = "gray";
newsblock.innerText = "Test";

document.main.appendChild(newsblock);

var changeInterval = setInterval(changePrice, 1000);

function changePrice() {
    if(Math.random() > 0.5) {
        companyPrice.innerHTML = Number(companyPrice.innerHTML) + Math.floor(Math.random() * 9) + 1;
    } else {
        companyPrice.innerHTML = Number(companyPrice.innerHTML) - Math.floor(Math.random() * 9) + 1;
    }
}

function buy(stocks, price, field) {
    if(Number(bank.innerHTML) >= (Number(price.innerHTML) * Number(field.value))) {
        bank.innerHTML -= (Number(price.innerHTML) * Number(field.value));
        stocks.innerHTML = Number(stocks.innerHTML) + Number(field.value);
    }
}

function sell(stocks, price) {
    if(Number(stocks.innerHTML) > 0) {  
        bank.innerHTML = Number(bank.innerHTML) + (Number(price.innerHTML) * Number(stocks.innerHTML));
        stocks.innerHTML = 0;
    }
}