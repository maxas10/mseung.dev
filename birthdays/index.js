let interval;

const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}


const currentDate = document.getElementById("currentDate");
const lightColors = ["lightcoral", "lightsalmon", "lightyellow", "lightgreen", "lightblue", "pink"]
const darkColors = ["maroon", "#BE5504", "#BA8E23", "darkgreen", "darkblue", "purple"];
const mainContainer = document.getElementById("main-container");
const birthdaysElem = document.getElementById("birthdaysElem");
const birthdayContainer = document.getElementById("birthday-container");
let birthdayList = [];

let date;

let dayOrNight;
function updateDate() {
    date = new Date();

    currentDate.innerHTML = date;
    if (date.getHours() >= 19 || date.getHours() <= 6) {
        dayOrNight = "night";
        document.body.style.backgroundColor = "#070620";
        document.body.style.color = "white";
    } else {
        dayOrNight = "day";
    }
}
let data;
async function waitForFetch() {
    try {
        const req = await fetch("./index.json", { method: "GET" }).then(res => res.json()).then(d => d);
        data = req;
    } finally {
        updateDate();
        sort();
    }
}

waitForFetch();

var dayInterval = setInterval(function () {
    let pastDate = date;
    updateDate();
    if (pastDate.getDate() != date.getDate()) {
        sort();
    }
}, 100);

function sort() {
    mainContainer.innerHTML = "";
    const entries = Object.entries(data);

    entries.sort((a, b) => { return Number(a[1].date) - Number(b[1].date) });
    const currentDay = String(date.getDate()).length <= 1 ? "0" + String(date.getDate()) : String(date.getDate());
    console.log(currentDay)
    const currentDateText = Number(String(date.getMonth() + 1) + currentDay);

    const pastBirthdays = [];
    birthdayList = [];

    for (let i = 0; i < entries.length; i++) {
        if (Number(entries[i][1].date) < currentDateText) {
            console.log(entries[i]);
            pastBirthdays.push(entries[i]);
            entries.shift()
            i--;
        } else if (Number(entries[i][1].date) == currentDateText) {
            birthdayList.push(entries[i]);
            entries.shift();
            i--;
        }
    }
    entries.push(...pastBirthdays)
    entries.map((person) => {
        const card = document.createElement("div");
        card.className = "block";
        if (person[1].date.charAt(0) == "0") {
            card.innerHTML = person[0] + "<br>" + person[1].date.charAt(1) + "/" + person[1].date.charAt(2) + person[1].date.charAt(3);
        } else {
            card.innerHTML = person[0] + "<br>" + person[1].date.charAt(0) + person[1].date.charAt(1) + "/" + person[1].date.charAt(2) + person[1].date.charAt(3);
        }

        if (dayOrNight == "day") {
            card.style.backgroundColor = lightColors[Math.floor(Math.random() * lightColors.length) + 0];
        } else {
            card.style.backgroundColor = darkColors[Math.floor(Math.random() * darkColors.length) + 0];
        }
        mainContainer.appendChild(card);
    })
    handleBirthdays();
}

function handleBirthdays() {
    birthdaysElem.innerHTML = "";
    if (birthdayList.length == 0) {
        birthdayContainer.style.display = "none";
        mainContainer.style.marginTop = "10px";
        return;
    } else {
        birthdaysElem.style.display = "flex";
        birthdayContainer.style.display = "flex";
        mainContainer.style.marginTop = "100vh";

        interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // since particles fall down, start a bit higher than random
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 },
                })
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 },
                })
            );
        }, 250)
    }
    birthdayList.map((person) => {
        const card = document.createElement("div");
        card.className = "block";
        if (person[1].date.charAt(0) == "0") {
            card.innerHTML = person[0] + "<br>" + person[1].date.charAt(1) + "/" + person[1].date.charAt(2) + person[1].date.charAt(3);
        } else {
            card.innerHTML = person[0] + "<br>" + person[1].date.charAt(0) + person[1].date.charAt(1) + "/" + person[1].date.charAt(2) + person[1].date.charAt(3);
        }

        if (dayOrNight == "day") {
            card.style.backgroundColor = lightColors[Math.floor(Math.random() * lightColors.length) + 0];
        } else {
            card.style.backgroundColor = darkColors[Math.floor(Math.random() * darkColors.length) + 0];
        }
        birthdaysElem.appendChild(card)
    })
}