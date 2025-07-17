function createBank() {
    localStorage.setItem("bank", document.getElementById("startamount").value); 
    localStorage.setItem("bankstarted", "true");

    document.getElementById('bank').innerHTML = document.getElementById("startamount").value;
    document.getElementById("start").style.display = "none";
    document.getElementById("startamount").style.display = "none";
}
function createNewEvent() {
    const event = document.createElement("div");
    event.classList.add("event");
    
    const desc = document.createElement("p");
    desc.innerHTML = document.getElementById("desc").value;

    const amount = document.createElement("p");
    amount.innerHTML = document.getElementById("amount").value;
    if(Number(document.getElementById("amount").value) < 0) {
        amount.style.color = "red";
    } else if (Number(document.getElementById("amount").value) > 0) {
        amount.style.color = "lime";
    }

    const transformation = document.createElement("p");
    transformation.innerHTML = `${Number(document.getElementById('bank').innerHTML)} -> ${Number(document.getElementById('bank').innerHTML) + Number(document.getElementById("amount").value)}`

    const deleteEvent = document.createElement("button");
    deleteEvent.innerHTML = "Delete";
    deleteEvent.addEventListener("click", function() {
        console.log("event" + (Number(localStorage.getItem("eventNumber")))); 
        console.log(localStorage); 
        document.getElementById('bank').innerHTML = Number(document.getElementById('bank').innerHTML) - Number(amount.innerHTML);
        localStorage.setItem("bank", Number(document.getElementById('bank').innerHTML));
        localStorage.removeItem("event" + (Number(localStorage.getItem("eventNumber"))));
        localStorage.setItem("eventNumber", (Number(localStorage.getItem("eventNumber")) - 1));
        event.remove();
    });

    event.appendChild(desc);
    event.appendChild(amount);
    event.appendChild(transformation);
    event.appendChild(deleteEvent);

    localStorage.setItem("eventNumber", Number(localStorage.getItem("eventNumber")) + 1);
    localStorage.setItem("event" + Number(localStorage.getItem("eventNumber")), [desc.innerHTML, Number(amount.innerHTML), Number(document.getElementById('bank').innerHTML), Number(localStorage.getItem("eventNumber"))]);

    document.getElementById('bank').innerHTML = Number(document.getElementById('bank').innerHTML) + Number(document.getElementById("amount").value);
    localStorage.setItem("bank", Number(document.getElementById('bank').innerHTML));
    document.getElementById("events").appendChild(event);

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}

document.getElementById("bank").innerHTML = localStorage.getItem("bank");
if(localStorage.getItem("bankstarted") == "true") {
    document.getElementById("start").style.display = "none";
    document.getElementById("startamount").style.display = "none";
}

function reloadEvents() {
    let eventNumber2 = 0;
    const entries = Object.entries(localStorage);
    for(let item of entries) {
        if(item[0].startsWith("event") && item[0] != "eventNumber") {
            eventNumber2++;
            const eventData = item[1].split(',');
            //desc eventData[0]
            //amount eventData[1]
            //transformation eventData[2]

            const event = document.createElement("div");
            event.classList.add("event");

            const desc = document.createElement("p");
            desc.innerHTML = eventData[0];

            const amount = document.createElement("p");
            amount.innerHTML = eventData[1];
            if(Number(eventData[1]) < 0) {
                amount.style.color = "red";
            } else if (Number(eventData[1]) > 0) {
                amount.style.color = "lime";
            }

            const transformation = document.createElement("p");
            transformation.innerHTML = `${eventData[2]} -> ${Number(eventData[2]) + Number(eventData[1])}`

            const deleteEvent = document.createElement("button");
            deleteEvent.innerHTML = "Delete";
            deleteEvent.addEventListener("click", function() {
                document.getElementById('bank').innerHTML = Number(document.getElementById('bank').innerHTML) - Number(eventData[1]);
                localStorage.setItem("bank", Number(document.getElementById('bank').innerHTML));
                localStorage.removeItem("event" + eventNumber2);
                eventNumber2--;
                localStorage.setItem("eventNumber", (Number(localStorage.getItem("eventNumber")) - 1));
                console.log(localStorage)
                event.remove();
            });

            event.appendChild(desc);
            event.appendChild(amount);
            event.appendChild(transformation);
            event.appendChild(deleteEvent);

            document.getElementById("events").appendChild(event);
        }
    }
}
reloadEvents();
console.log(localStorage);