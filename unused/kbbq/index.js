const total = document.getElementById("total");
const tip = document.getElementById("tip");
const tax = document.getElementById("tax");
const zipbox = document.getElementById("zipbox");
const eatenValue = document.getElementById("eatenvalue");
eatenValue.value = 0;
var term;
var storage = {
    "tax": 0,
    "tip": 0,
    "subtotal": 0,
}
var zipcode;

var tempitem;
var localCurrency = "$"

function change(input, destination, pretext) {
    if(document.getElementById(input).value >= 0 && document.getElementById(input).value != "") {
        document.getElementById(destination).innerHTML = pretext + localCurrency + document.getElementById(input).value;

        storage[(destination)] = Number(document.getElementById(input).value);  
    } else if (document.getElementById(input).value == "") {
        document.getElementById(destination).innerHTML = pretext + localCurrency + 0;  
    }
    updatePrice();
}

async function getSalesTax() {
    zipcode = Number(zipbox.value);
    if(zipbox.value.length > 4) {
        try {
            await fetch("https://api.api-ninjas.com/v1/salestax?zip_code=" + zipcode, {
                method: 'GET',
                headers: { 'X-Api-Key': 'TkyIrYGNBO+wNc7GmAYt2w==OiLpDN4aV4VycmW9'},
                contentType: 'application/json',
            })
            .then(response => response.json().then(d => {
                storage.tax = d[0].total_rate * 100;
                updatePrice();
            }))
        }
        catch (error) {
            console.error()
        }
    } else {
        tax.innerHTML = "Tax in Your City: UNKNOWN ZIP CODE";
    }
}

function updatePrice() {
    total.innerHTML = "Total: " + localCurrency + (Number(storage["subtotal"]) + storage["subtotal"] * (storage["tip"] / 100) + storage["subtotal"] * (storage["tax"] / 100)).toFixed(2);    
    tip.innerHTML = "Tip: " + storage["tip"]+"% | " + localCurrency + (storage["subtotal"] * (storage["tip"] / 100)).toFixed(2);
    tax.innerHTML = "Tax in Your City: " + storage["tax"]+"% | " + localCurrency + (storage["subtotal"] * (storage["tax"] / 100)).toFixed(2);
}
/* all grocery stuff */
const foodbox = document.getElementById("foodbox");
const productcontainer = document.getElementById("productcontainer");
const inventory = document.getElementById("inventory");

var nodes = [];
var prices = [];
var descriptions = [];
var weights = [
    " | Korean Brisket Slice",
    " | Korean Bulgogi Slice",
    " | Galbi Slice",
    " | Very Small Steak",
    " | Small Steak",
    " | Bowl of Soup",
]

var database;
var nodesShown = 5;

async function getGroceryPrices() {
    try {
        await fetch("./db.json", {
            method: "GET",
            contentType: 'application/json',
        })
        .then(data => data.json())
        .then(k => database = k);
    } 
    finally {
        searchResults();
        sortNodes();
        handleSearchResults();
    }
}

function sortNodes() {
    nodes.sort(function(a, b){return a.title.length-b.title.length});
}
function select(button) {
    button.innerHTML = "Unselect";
    inventory.appendChild(button.parentNode);
    inventory.style.border = "0.5vh solid black";
    button.removeEventListener("click", function() {select(this)})
    button.addEventListener("click", function() {unselect(this)})
    searchResults();
    sortNodes();
    handleSearchResults();

    var sizeOptions = document.createElement("input");
    var sizeReference = document.createElement("p");
    var plates = document.createElement("input");
    var priceValue = button.parentNode.getElementsByClassName("price")[0].value;
    var priceValues = inventory.getElementsByClassName("price");

    plates.type = "number";
    plates.min = 0;
    plates.placeholder = "# PLATES or ITEMS"
    sizeOptions.type = "range"
    sizeOptions.max = 30;
    sizeOptions.value = 0;

    sizeReference.innerHTML = "0 Ounces | " + localCurrency + "0.00" ;
    sizeOptions.oninput = function() {
        var weight;
        switch(Number(this.value)) {
            case 1:
                weight = weights[0];
                break;
            case 2:
                weight = weights[1];
                break;
            case 4:
                weight = weights[2];
                break;
            case 6:
                weight = weights[3];
                break;
            case 8:
                weight = weights[4];
                break;
            case 12:
                weight = weights[5];
                break;
        }
        if(weight != undefined) {
            sizeReference.innerHTML = this.value + " Ounces | " + localCurrency + (this.value*priceValue).toFixed(2) + weight;
        } else {
            sizeReference.innerHTML = this.value + " Ounces | " + localCurrency + (this.value*priceValue).toFixed(2);
        }
        recalculate(this);
    }
    plates.oninput = function() {recalculate(this)};
    function recalculate(item) {
        eatenValue.value = 0;
        for(let i=0; i<priceValues.length; i++) {
            plates.value == "" ? 0 : plates.value;
            eatenValue.value += parseFloat((item.value*priceValue)*plates.value)
        }
        eatenValue.innerHTML = "Food Eaten Value: " + localCurrency + eatenValue.value.toFixed(2);
    }

    button.parentNode.appendChild(sizeOptions);
    button.parentNode.appendChild(sizeReference);
    button.parentNode.appendChild(plates);
}

function unselect(button) {
    button.innerHTML = "Select";
    productcontainer.appendChild(button.parentNode);
    if(inventory.childNodes.length == 0) {
        inventory.style.border = "none";
    }
    button.removeEventListener("click", function() {unselect(this)})
    button.addEventListener("click", function() {select(this)})
    searchResults();
    sortNodes();
    handleSearchResults();
}

function searchResults() {
    term = foodbox.value.toLowerCase();
    nodes = [];
    if(term != "") {
        for(let item in database) {
            for(let subitem in database[item]) {
                for(let product in database[item][subitem]) {
                    if(product.includes(term)) {
                        newitem = new Object();
                        newitem.title = product;
                        newitem.price = database[item][subitem][product]["pricePerOunce"];
                        newitem.description = database[item][subitem][product]["description"];
                        nodes.push(newitem);
                    }
                }
            }
        }
    }
}
function handleSearchResults() {

    productcontainer.innerHTML = ""
    productcontainer.style.border = "";

    for(let i=0; i<nodes.length; i++) {
        var productCard = document.createElement("div");
        var submitButton = document.createElement("button");
        var productName = document.createElement("div");
        var productDescription = document.createElement("div");
        var productPrice = document.createElement("div");

        productName.innerHTML = nodes[i].title;
        productName.style.fontWeight = "bold";
        submitButton.innerHTML = "Select";
        submitButton.addEventListener("click", function() {select(this)})

        if(nodes[i].price != undefined) {
            productPrice.innerHTML = localCurrency + nodes[i].price.toFixed(2) + " per ounce";
            productPrice.className = "price";
            productPrice.value = nodes[i].price.toFixed(2)
        }
        if(nodes[i].description != undefined) {
            productDescription.innerHTML = nodes[i].description;
        } else {
            productDescription.innerHTML = "No Description";
        }
        
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(submitButton);
        productCard.appendChild(productDescription);
        productCard.classList.add("flex")
        productCard.classList.add("row")
        productcontainer.appendChild(productCard);
        productcontainer.style.border = "0.5vh solid black";
    }
}

/*----------------- */