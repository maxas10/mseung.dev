const inv = document.getElementById("hotbar");
const cards = ["archers", "giant", "mp", "arrows", "fireball", "minions", "musk", "knight"];
const currentDeck = [];
var selectedCard;
var troopColor;
var troopSize = "25px";

const playerTroops = [];

function setCard() {
    var card = document.createElement("div");
    card.classList.add("card");
    var randomCard = cards[Math.floor(Math.random() * 8) + 0];
    if(randomCard == "archers") {
        card.style.backgroundColor = "hotpink";
        card.setAttribute("id", "archersCard");
    } else if(randomCard == "giant") {
        card.style.backgroundColor = "orange";
        card.setAttribute("id", "giantCard");
    } else if(randomCard == "mp") {
        card.style.backgroundColor = "#061630";
        card.setAttribute("id", "mpCard");
    } else if(randomCard == "arrows") {
        card.style.backgroundColor = "lightgray";
        card.setAttribute("id", "arrowsCard");
    } else if(randomCard == "fireball") {
        card.style.backgroundColor = "red";
        card.setAttribute("id", "fireballCard");
    } else if(randomCard == "minions") {
        card.style.backgroundColor = "blue";
        card.setAttribute("id", "minionsCard");
    } else if(randomCard == "musk") {
        card.style.backgroundColor = "purple";
        card.setAttribute("id", "muskCard");
    } else if(randomCard == "knight") {
        card.style.backgroundColor = "gray";
        card.setAttribute("id", "knightCard");
    }
    currentDeck.push(card);
    card.addEventListener("click", () => {selectCard(currentDeck.indexOf(card))});
    inv.appendChild(card);
}

setCard();
setCard();
setCard();
setCard();

function selectCard(number) {
    currentDeck.forEach(function(element) { /*resets every card*/
        element.style.width = "20%";
        element.style.height = "80%";
    })
    currentDeck[number].style.width = "22.5%"; /*makes the selected card bigger*/
    currentDeck[number].style.height = "85%";

    selectedCard = currentDeck[number];
}

function createTroops() {
    if(selectedCard.id == "archersCard") {
        troopColor = "hotpink";
        troopSize = "25px";
    } else if(selectedCard.id == "giantCard") {
        troopColor = "orange";
        troopSize = "50px";
    } else if(selectedCard.id == "mpCard") {
        troopColor = "#050838";
        troopSize = "25px";
    } else if(selectedCard.id == "arrowsCard") {

    } else if(selectedCard.id == "fireballCard") {

    } else if(selectedCard.id == "minionsCard") {
        troopColor = "blue";
        troopSize = "25px";
    } else if(selectedCard.id == "muskCard") {
        troopColor = "purple";
        troopSize = "25px";
    } else if(selectedCard.id == "knightCard") {
        troopColor = "#a6a6a6";
        troopSize = "25px";
    }

    placeCard();
}

function placeCard() {
    if(selectedCard.id != "") {
        if(selectedCard.id == "archersCard") {
            for(i=0; i<2; i++) {
                var troop = document.createElement("div");
                troop.style.backgroundColor = troopColor;
                troop.style.width = troopSize;
                troop.style.height = troopSize;
                troop.classList.add("troop");
                document.body.appendChild(troop);
            }
        } else if (selectedCard.id == "minionsCard") {
            for(i=0; i<3; i++) {
                var troop = document.createElement("div");
                troop.style.backgroundColor = troopColor;
                troop.style.width = troopSize;
                troop.style.height = troopSize;
                troop.classList.add("troop");
                document.body.appendChild(troop);
            }
        } else if (selectedCard.id == "giantCard") {
            var troop = document.createElement("div");
            troop.style.backgroundColor = troopColor;
            troop.style.width = troopSize;
            troop.style.height = troopSize;
            troop.classList.add("gianttroop");
            document.body.appendChild(troop);
        }
        else if (selectedCard == "") {
            return;
        } else {
            var troop = document.createElement("div");
            troop.style.backgroundColor = troopColor;
            troop.style.width = troopSize;
            troop.style.height = troopSize;
            troop.classList.add("troop");
            document.body.appendChild(troop);
        }
    }

    selectedCard.remove();
    currentDeck.splice(currentDeck.indexOf(selectedCard), 1);
    setCard();
}

document.addEventListener("click", createTroops);