const inv = document.getElementById("inv")
inv.innerHTML = 0;

const price = document.getElementById("price")
price.innerHTML = Math.floor(Math.random() * 290) + 10;

const bank = document.getElementById("bank")
bank.innerHTML = 500;

function changePrice(){
    setTimeout(changePrice, Math.floor(Math.random() * 1900) + 100);
    price.innerHTML = Math.floor(Math.random() * 290) + 10;
}

changePrice();

function buyStock() {
    if(Number(bank.innerHTML) >= Number(price.innerHTML)) {
        inv.innerHTML = Number(inv.innerHTML) + 1;
        bank.innerHTML = Number(bank.innerHTML) - Number(price.innerHTML);
    }
}

function sellStock() {
    if(Number(inv.innerHTML) > 0) {
        bank.innerHTML = (price.innerHTML) * Number(inv.innerHTML) + Number(bank.innerHTML);
        inv.innerHTML = 0;
    }
}