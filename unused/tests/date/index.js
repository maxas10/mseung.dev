const date = document.getElementById("date");
const time = new Date();

function update() {
    date.innerHTML = time;
}

update();