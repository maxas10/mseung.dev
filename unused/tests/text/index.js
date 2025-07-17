const IP = 'wss.mseung.dev' /* This is the only server for now */

const username = document.getElementById("name")
const message = document.getElementById("message");
let socket;
var special = false;
var clients = false;
let recievePings = false;
const specialMessages = document.getElementsByClassName("special-text");

async function connectToIP() {
    if (username.value != '') {
        document.getElementById("start-screen").style.display = "none";
        document.getElementById("loading-screen").style.display = "flex";
        socket = new WebSocket("wss://" + IP);

        socket.addEventListener("open", () => {
            document.getElementById("connected-status").innerHTML = 'Connected';
            document.getElementById("connected-status").style.animation = "fade 1s ease-in-out 1 both";
            document.getElementById("chat-screen").style.display = "flex";
            setTimeout(function() {document.getElementById("loading-screen").style.display = "none";}, 1000)
            socket.send(username.value)
        })

        socket.addEventListener("message", (event) => {
            if(event.data == "special") {
                special = true;
                handleCreateSpecialText()
            } else if (event.data == "normal") {
            } else if (event.data == 'clients') {
                clients=true;
            } else {
                if(clients) {
                    document.getElementById("all-clients").innerHTML = '';
                    for (let name of JSON.parse(event.data)) {
                        const client = document.createElement("p");
                        client.innerHTML = '- ' + name;
                        document.getElementById("all-clients").appendChild(client);
                    }
                    clients = false;
                } else {
                    console.log(event.data)
                    handleCreateMessage(event.data)   
                }
            }

            if(recievePings) {
                pings();
            }
        })

        socket.addEventListener("close", () => {
            disconnect()
            alert("The server has closed.")
        })
    } else {
        alert("Please enter a username")
    }
}

function sendMessage() {
    socket.send(message.value)
}

function disconnect() {
    socket.close()
    document.getElementById("chat-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "flex";
    document.getElementById("connected-status").innerHTML = 'Connecting...';
    document.getElementById("connected-status").style.animation = "none";  
    document.getElementById("message").innerHTML = '';
    document.getElementById("chat").innerHTML = '';
}

function handleCreateMessage(data) {
    const chatMessage = document.createElement("p");
    chatMessage.innerHTML = data;
    if (special && specialMessages.length > 0) {
        specialMessages[specialMessages.length-1].appendChild(chatMessage)
        special = false;
    } else{
        document.getElementById("chat").appendChild(chatMessage);
    }
    document.getElementById("message").value = '';
}

function handleCreateSpecialText() {
    special = true;
    const specialMessage = document.createElement("div");
    specialMessage.classList.add("special-text");
    document.getElementById("chat").appendChild(specialMessage);
}

function pings() {
    var ping = new Audio("ping.mp3");
    ping.volume = 0.2;
    ping.play();
}
window.addEventListener("focus", function() {
    recievePings = false;
})
window.addEventListener("blur", function() {
    recievePings = true;
})