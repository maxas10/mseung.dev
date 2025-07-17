const board = document.getElementById("board");

var tilelist = [];
var x = 0;
/*board is 16 tiles in total */
/*tiles have to have a change in color and revert */

for (let i = 0; i < 64; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.backgroundColor = "lightgray";
    

    tile.addEventListener("click", () => {
        if (tile.style.backgroundColor == "lightgray") {
            tile.style.backgroundColor = "red";
        } else if (tile.style.backgroundColor == "red") {
            tile.style.backgroundColor = "lightgray";
        }
    });

    tilelist.push(tile);
    board.appendChild(tile);
}