/*items and sprites---------------------------------------------- */
var maps = [
    split = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 7, 7, 7, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 7, 7, 7, 0, 0, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 0, 0, 7, 7, 7, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 7, 7, 7, 0, 0, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 0, 0, 7, 7, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 0, 7, 7, 7, 0, 0, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 0, 0, 7, 7, 7, 0, 7, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 7, 7, 7, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 7, 7, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],

    winds = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 6, 0, 0, 0, 1, 1, 6, 0, 0, 4, 0, 0, 0, 0, 1, 1, 6, 0, 0, 0, 1, 1, 6, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 4, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 6, 1, 1, 0, 0, 0, 6, 1, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 0, 0, 0, 6, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 6, 0, 0, 0, 1, 1, 6, 0, 0, 0, 0, 0, 0, 0, 1, 1, 6, 0, 0, 0, 1, 1, 6, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 6, 1, 1, 0, 0, 0, 6, 1, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 0, 0, 0, 6, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 6, 0, 0, 0, 1, 1, 6, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 1, 1, 6, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 6, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 0, 0, 0, 6, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 6, 0, 0, 3, 1, 1, 6, 0, 0, 0, 0, 0, 0, 0, 1, 1, 6, 0, 0, 0, 1, 1, 6, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 6, 1, 1, 0, 0, 0, 6, 1, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 0, 0, 0, 6, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],

    sunset = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 5, 5, 7, 7, 7, 0, 7, 7, 7, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 4, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 4, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
]

var mapList = ["Split", "a public storage", "Sunset's Park"]

var weaponList = [
    Pistol = {
        name: "Pistol",
        mag: 15,
        originalmag: 15,
        maxmag: 150,
        originalmaxmag: 150,
        damage: 50,
        auto: false,
        playerSpeed: 2,
        fireSpeed: 200,
        isagun: true,
        picture: "m9.png",
        width: "7%",
    },

    AK47 = {
        name: "AK47",
        mag: 30,
        originalmag: 30,
        maxmag: 300,
        originalmaxmag: 300,
        damage: 50,
        auto: true,
        playerSpeed: 1,
        fireSpeed: 200,
        isagun: true,
        picture: "ak47.png",
        width: "10%",
    },

    Predator = {
        name: '"The Furry Fighter"',
        mag: 5,
        originalmag: 5,
        maxmag: 10,
        originalmaxmag: 10,
        damage: 80,
        auto: false,
        playerSpeed: 1,
        fireSpeed: 325,
        isagun: true,
        picture: "sniper.png",
        width: "12.5%",
    },

    Galactus = {
        name: "Galactus",
        mag: 0,
        originalmag: 0,
        maxmag: 0,
        originalmaxmag: 0,
        damage: 30,
        auto: false,
        playerSpeed: 1,
        fireSpeed: 30000,
        isagun: false,
        picture: "galactus.png",
        width: "10%",
    },

    Reaper = {
        name: "Reaper Crossbow",
        mag: 20,
        originalmag: 20,
        maxmag: 200,
        originalmaxmag: 200,
        damage: 20,
        auto: false,
        playerSpeed: 1,
        fireSpeed: 1000,
        isagun: true,
        picture: "crossbow.png",
        width: "10%",
    },

    Shotgun = {
        name: "Shotgun",
        mag: 5,
        originalmag: 5,
        maxmag: 50,
        originalmaxmag: 50,
        damage: 22.5,
        auto: false,
        playerSpeed: 1,
        fireSpeed: 300,
        isagun: true,
        picture: "shotgun.png",
        width: "12.5%",
    }
]

var zombieStats = [
    weak = {
        name: "Weak",
        health: 100,
        damage: 10,
        speed: 1,
        color: "green",
    },

    armored = {
        name: "Armored",
        health: 200,
        damage: 5,
        speed: 0.5,
        color: "gray",
    },

    commander = {
        name: "Commander",
    },

    miniboss = {
        name: "Juggernaut",
        health: 500,
        damage: 5,
        speed: 0.5,
        color: "darkblue",
    },

    thief = {
        name: "Thief",
        health: 50,
        damage: 0,
        speed: 2,
        color: "#260919",
    },

]

var zombieTypes = ["Weak"];

/*--------------------------------------------------------------- */
/*render----------------------------------------------------------*/
const block = document.getElementById("block");
const layout = document.getElementById("layout")

var xMargin = 0;
var yMargin = 0;
var scale = 100;
var currentMap;
var divnumber = 1;
var divList = [];

var classes = ["wall", "mystery", "jugger", "magex", "pack", "special", "path"]

document.getElementById("container").appendChild(layout);

function createBlocks() {
    for (let i = 0; i < 400; i++) {
        var object = document.createElement("div");
        object.id = "tile" + divnumber;
        divnumber++;
        layout.appendChild(object);
        divList.push(object);
        object.style.display = "none";
    }
    divnumber = 1;
}
createBlocks();
function render(map) {
    if (tiles != undefined) {
        for (let i = 0; i < tiles.length; i++) {
            isSpecialOpened.shift();
        }
    }
    resetDivs();
    divnumber = 1;
    currentMap = map;
    layout.style.height = (currentMap.length * scale) + "px";
    layout.style.width = (currentMap[0].length * scale) + "px";
    for (let i = 0; i < currentMap.length; i++) {
        xMargin = 0;
        for (let x = 0; x < currentMap[i].length; x++) {
            if (currentMap[i][x] === 0) {
                xMargin = xMargin + scale;
            } else if (currentMap[i][x] === 1) {
                setDiv(0, "black")
                isSpecialOpened.push(undefined)
            } else if (currentMap[i][x] === 2) {
                setDiv(1, "tan")
                isSpecialOpened.push(undefined)
            } else if (currentMap[i][x] === 3) {
                setDiv(2, "maroon")
                isSpecialOpened.push(undefined)
            } else if (currentMap[i][x] === 4) {
                setDiv(3, "saddlebrown")
                isSpecialOpened.push(undefined)
            } else if (currentMap[i][x] === 5) {
                setDiv(4, "cyan")
                isSpecialOpened.push(undefined)
            } else if (currentMap[i][x] === 6) {
                setDiv(5, "#f37b36")
                isSpecialOpened.push(false)
            } else if (currentMap[i][x] === 7) {
                setDiv(6, "lightgray")
                isSpecialOpened.push(undefined)
            }


            function setDiv(number, color) {
                divList[divnumber - 1].style.display = "block";
                divList[divnumber - 1].classList.add(classes[number]);
                console.log(classes[number], divList[divnumber])
                divList[divnumber - 1].style.backgroundColor = color;
                divList[divnumber - 1].style.marginTop = yMargin + "px";
                divList[divnumber - 1].style.marginLeft = xMargin + "px";
                xMargin = xMargin + scale;
                divnumber++;
            }
        }
        yMargin = yMargin + scale;
    }
    if (mapList[maps.indexOf(currentMap)] == "Sunset's Park") {
        layout.style.backgroundColor = "#235437"
    } else {
        layout.style.backgroundColor = "";
    }
}
function resetDivs() {
    for (let i = 0; i < divList.length; i++) {
        divList[divnumber - 1].className = "";
        divList[divnumber - 1].style.display = "none";
        divnumber++;
    }
    divnumber = 1;
}
/*---------------------------------------------------------------*/

/*zombies------------------*/
var zombie;
var zombieMarginLeft = 0;
var zombieMarginTop = 0;
var layoutClient = layout.getBoundingClientRect();
var zombieClient;
var open;
var start;
var zombieList = [];
var zombMLList = [];
var zombMTList = [];
var speedXList = [];
var speedYList = [];
var dir;
var dirList = [];
var wallTopList = [];
var wallLeftList = [];
var wallRightList = [];
var wallBottomList = [];
var navTopList = [];
var navLeftList = [];
var navRightList = [];
var navBottomList = [];
var moveTopList = [];
var moveLeftList = [];
var moveRightList = [];
var moveBottomList = [];
var touchingList = [];
var activateList = [];
var wait2;
var wallTouchingList = [];
var tempClient;
var tempList = [];
var seperatewait;
var seperatewaitList = [];
var seperatewait;
var activate2 = false;
var stageList = [];
var randomNameList = [];
var tempI;
var distanceXList = [];
var distanceYList = [];
var bulletClient;
var waitAgain;
var k = 0;
var mouseXPos;
var mouseYPos;
var bulletCooldown = false;
var bulletTimeout;
var onlyonce = false;
var c = 0;
var speedXContainer = [];
var speedYContainer = [];
var posXContainer = [];
var posYContainer = [];
var wallClient;
var isTouching = false;
var zombieHealthList = [];
var zombieHitList = [];
var zombieSpeedList = [];
var zombieDamageList = [];
var wait2List = []
var zombieTypeList = []

var zombiePicker;
var canCommanderSpawn = true;
var canJuggerSpawn = true;
var juggerAmount = 0;
var juggerAllowed = 1;

function spawnZombies() {
    if(wave != 20) {
        zombiePicker = Math.floor(Math.random() * zombieTypes.length) + 0;
    } else {
        zombiePicker = zombieStats.indexOf(miniboss);
    }
    if (zombieStats[zombiePicker].name == "Commander" && canCommanderSpawn == false) {
        spawnZombies();
    } else if (zombieStats[zombiePicker].name == "Juggernaut" && canJuggerSpawn == false) {
        spawnZombies();
    } else {
        zombie = document.createElement("div");
        zombie.classList.add("zombie");
        layout.appendChild(zombie);
        zombie.style.backgroundColor = zombieStats[zombiePicker].color;
        p = Math.floor(Math.random() * 4) + 1;

        if (zombieStats[zombiePicker].name == "Commander" && canCommanderSpawn == true) {
            commanderAmount++;
            zombie.style.display = "none";
            if (commanderAmount == 3) {
                canCommanderSpawn = false;
            }
        } else if (zombieStats[zombiePicker].name == "Juggernaut" && canJuggerSpawn == true) {
            juggerAmount++;
            if (juggerAmount >= juggerAllowed) {
                canJuggerSpawn = false;
            }
        }

        layoutClient = layout.getBoundingClientRect();

        if (currentMap == split) {
            p = Math.floor(Math.random() * 2) + 1;
            if (p == 1) { // top side
                zombieMarginLeft = Math.floor(Math.random() * ((layoutClient.width) - (layoutClient.width * 0.3))) + (layoutClient.width * 0.3);
                zombieMarginTop = 200;
            } else if (p == 2) { // down side
                zombieMarginLeft = Math.floor(Math.random() * ((layoutClient.width) - (layoutClient.width * 0.3))) + (layoutClient.width * 0.3);
                zombieMarginTop = layoutClient.height - 200;
            }
        } else {
            if (p == 1) { // top side
                zombieMarginLeft = Math.floor(Math.random() * layoutClient.left * -1) + 0;
                zombieMarginTop = 200;
            } else if (p == 2) { // left side
                zombieMarginLeft = 200;
                zombieMarginTop = Math.floor(Math.random() * layoutClient.top * -1) + 0;
            } else if (p == 3) { // right side
                zombieMarginLeft = layoutClient.width - 200;
                zombieMarginTop = Math.floor(Math.random() * layoutClient.height) + 0;
            } else if (p == 4) { // down side
                zombieMarginLeft = Math.floor(Math.random() * layoutClient.width) + 0;
                zombieMarginTop = layoutClient.height - 200;
            }
        }

        zombie.style.marginTop = zombieMarginTop + "px";
        zombie.style.marginLeft = zombieMarginLeft + "px";
        // bulletContainer.push(bullet);
        // k++;

        zombieList.push(zombie);

        zombMLList.push(zombieMarginLeft);
        zombMTList.push(zombieMarginTop);

        speedXList.push(0);
        speedYList.push(0);

        activateList.push(false);

        dirList.push(0);

        wallTopList.push(false);
        wallLeftList.push(false);
        wallRightList.push(false);
        wallBottomList.push(false);

        navTopList.push(false);
        navLeftList.push(false);
        navRightList.push(false);
        navBottomList.push(false);

        moveTopList.push(false);
        moveLeftList.push(false);
        moveRightList.push(false);
        moveBottomList.push(false);

        touchingList.push(false);

        wallTouchingList.push(false);

        seperatewaitList.push(false);

        stageList.push(0)

        distanceXList.push(undefined);
        distanceYList.push(undefined);

        tempList.push(undefined);

        zombieHealthList.push(zombieStats[zombiePicker].health);

        zombieHitList.push(false);

        zombieSpeedList.push(zombieStats[zombiePicker].speed);

        zombieDamageList.push(zombieStats[zombiePicker].damage);

        wait2List.push(undefined);

        zombieTypeList.push(zombieStats[zombiePicker].name);
    }
}

function moveAI(i) {
    zombMTList[i] = zombMTList[i] + speedYList[i];
    zombMLList[i] = zombMLList[i] + speedXList[i];
    zombieList[i].style.marginTop = zombMTList[i] + "px";
    zombieList[i].style.marginLeft = zombMLList[i] + "px";
}

var zombieInterval;
var seperatewait;

function zombieAI() {
    function makePath(i) {
        moveTopList[i] = false;
        moveLeftList[i] = false;
        moveRightList[i] = false;
        moveBottomList[i] = false;

        distanceXList[i] = (layoutClient.left * -1 + containerClient.width / 2) - playerClient.width / 2 - zombMLList[i];
        distanceYList[i] = (layoutClient.top * -1 + containerClient.height / 2) - playerClient.height / 2 - zombMTList[i];

        if (distanceXList[i] <= 0 && distanceYList[i] <= 0) { //top left quadrant
            dirList[i] = 1;
            moveTopList[i] = true;
            moveLeftList[i] = true;
            if (distanceXList[i] * -1 > distanceYList[i] * -1) {
                speedXList[i] = zombieSpeedList[i] * -1;
                speedYList[i] = Math.round((distanceYList[i] / distanceXList[i]) * -1);
            } else {
                speedYList[i] = zombieSpeedList[i] * -1;
                speedXList[i] = Math.round((distanceXList[i] / distanceYList[i]) * -1);
            }
        } else if (distanceXList[i] >= 0 && distanceYList[i] <= 0) { //top right quadrant
            dirList[i] = 2;
            moveTopList[i] = true;
            moveRightList[i] = true;
            if (distanceXList[i] > distanceYList[i] * -1) {
                speedXList[i] = zombieSpeedList[i];
                speedYList[i] = Math.round((distanceYList[i] / distanceXList[i]) * 1);
            } else {
                speedYList[i] = zombieSpeedList[i] * -1;
                speedXList[i] = Math.round((distanceXList[i] / distanceYList[i]) * -1);
            }
        } else if (distanceXList[i] <= 0 && distanceYList[i] >= 0) { //bottom left quadrant
            dirList[i] = 3;
            moveBottomList[i] = true;
            moveLeftList[i] = true;
            if (distanceXList[i] * -1 > distanceYList[i]) {
                speedXList[i] = zombieSpeedList[i] * -1;
                speedYList[i] = Math.round((distanceYList[i] / distanceXList[i]) * -1);
            } else {
                speedYList[i] = zombieSpeedList[i];
                speedXList[i] = Math.round((distanceXList[i] / distanceYList[i]) * 1);
            }
        } else if (distanceXList[i] >= 0 && distanceYList[i] >= 0) { //bottom right quadrant
            dirList[i] = 4;
            moveBottomList[i] = true;
            moveRightList[i] = true;
            if (distanceXList[i] > distanceYList[i]) {
                speedXList[i] = zombieSpeedList[i];
                speedYList[i] = Math.round((distanceYList[i] / distanceXList[i]) * 1);
            } else {
                speedYList[i] = zombieSpeedList[i];
                speedXList[i] = Math.round((distanceXList[i] / distanceYList[i]) * 1);
            }
        }

    }

    playerClient = block.getBoundingClientRect();
    layoutClient = layout.getBoundingClientRect();
    for (let i = 0; i < zombieList.length; i++) {
        if (zombieTypeList[i] != "Commander" && zombieHealthList[i] > 0) {
            zombieClient = zombieList[i].getBoundingClientRect();
            distanceXList[i] = (layoutClient.left * -1 + containerClient.width / 2) - playerClient.width / 2 - zombMLList[i];
            distanceYList[i] = (layoutClient.top * -1 + containerClient.height / 2) - playerClient.height / 2 - zombMTList[i];

            function checkWalls() {
                wallTopList[i] = false;
                wallLeftList[i] = false;
                wallRightList[i] = false;
                wallBottomList[i] = false;
                for (let l = 0; l < tiles.length; l++) {
                    if (tiles[l].className != "path") {
                        wallClient = tiles[l].getBoundingClientRect();
                        playerClient = block.getBoundingClientRect();
                        if (zombieClient.top + zombieClient.height == wallClient.top && zombieClient.left + zombieClient.width > wallClient.left && zombieClient.right - zombieClient.width < wallClient.right && moveBottomList[i] == true) {
                            wallBottomList[i] = true;
                            wallTouchingList[i] = tiles[l];
                        } else if (zombieClient.left + zombieClient.width == wallClient.left && zombieClient.top + zombieClient.height > wallClient.top && zombieClient.bottom - zombieClient.height < wallClient.bottom && moveRightList[i] == true) {
                            wallRightList[i] = true;
                            wallTouchingList[i] = tiles[l];
                        } else if (zombieClient.right - zombieClient.width == wallClient.right && zombieClient.top + zombieClient.height > wallClient.top && zombieClient.bottom - zombieClient.height < wallClient.bottom && moveLeftList[i] == true) {
                            wallLeftList[i] = true;
                            wallTouchingList[i] = tiles[l];
                        } else if (zombieClient.bottom - zombieClient.height == wallClient.bottom && zombieClient.left + zombieClient.width > wallClient.left && zombieClient.right - zombieClient.width < wallClient.right && moveTopList[i] == true) {
                            wallTopList[i] = true;
                            wallTouchingList[i] = tiles[l];
                        }
                    }
                }
            }
            checkWalls();

            if (zombieClient.top + zombieClient.height >= playerClient.top && zombieClient.left + zombieClient.width >= playerClient.left && zombieClient.bottom - zombieClient.height <= playerClient.bottom && zombieClient.right - zombieClient.width <= playerClient.right) {
                if (zombieCooldown == false) {
                    speedXList[i] = 0;
                    speedYList[i] = 0;

                    health.innerHTML = health.innerHTML - zombieDamageList[i];

                    if (zombieTypeList[i] == "Thief") {
                        zombieList[i].style.display = "none";
                        zombieList[i].remove();
                        currentZombies--;
                        bank.innerHTML = Number(bank.innerHTML) - 50;
                        newWeapon.mag = 0;
                        ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;

                        setTimeout(function () {
                            stunned = false;
                        }, 1000)
                    }
                    zombieCooldown = true;
                    setTimeout(function () {
                        zombieCooldown = false;
                    }, 500)
                    checkHealth();
                }
            } else {
                if (activateList[i] == false) {
                    if (wallTopList[i] == true && moveTopList[i] == true) {
                        if (moveLeftList[i] == true) {
                            speedXList[i] = zombieSpeedList[i] * -1;
                        } else if (moveRightList[i] == true) {
                            speedXList[i] = zombieSpeedList[i];
                        }
                        speedYList[i] = 0;

                        navTopList[i] = true;
                        seperatewaitList[i] = true;
                        zombMTList[i] = parseInt(wallTouchingList[i].style.marginTop) + zombieClient.height;
                        navigate();

                    } else if (wallLeftList[i] == true && moveLeftList[i] == true) {
                        if (moveBottomList[i] == true) {
                            speedYList[i] = zombieSpeedList[i];
                        } else if (moveTopList[i] == true) {
                            speedYList[i] = zombieSpeedList[i] * -1;
                        }
                        speedXList[i] = 0;

                        navLeftList[i] = true;
                        seperatewaitList[i] = true;
                        zombMLList[i] = parseInt(wallTouchingList[i].style.marginLeft) + zombieClient.width;
                        navigate();

                    } else if (wallRightList[i] == true && moveRightList[i] == true) {
                        if (moveBottomList[i] == true) {
                            speedYList[i] = zombieSpeedList[i];
                        } else if (moveTopList[i] == true) {
                            speedYList[i] = zombieSpeedList[i] * -1;
                        }
                        speedXList[i] = 0;

                        navRightList[i] = true;
                        seperatewaitList[i] = true;
                        zombMLList[i] = parseInt(wallTouchingList[i].style.marginLeft) - zombieClient.width;
                        navigate();

                    } else if (wallBottomList[i] == true && moveBottomList[i] == true) {
                        if (moveLeftList[i] == true) {
                            speedXList[i] = zombieSpeedList[i] * -1;
                        } else if (moveRightList[i] == true) {
                            speedXList[i] = zombieSpeedList[i];
                        }
                        speedYList[i] = 0;

                        navBottomList[i] = true;
                        seperatewaitList[i] = true;
                        zombMTList[i] = parseInt(wallTouchingList[i].style.marginTop) - zombieClient.height;
                        navigate();
                    } else {
                        makePath(i);
                    }
                }
            }
            moveAI(i);
            function navigate() {
                if (activate2 == false) {
                    activate2 = true;
                    seperatewait = setInterval(function () {
                        checkWalls();
                        navTopList[i] = false;
                        navLeftList[i] = false;
                        navRightList[i] = false;
                        navBottomList[i] = false;
                        if (seperatewaitList[i] == true) {
                            stageList[i] = 1;
                            if (navTopList[i] == true) {
                                navTop2(i);
                            } else if (navLeftList[i] == true) {
                                navLeft2(i);
                            } else if (navRightList[i] == true) {
                                navRight2(i);
                            } else if (navBottomList[i] == true) {
                                navBottom2(i);
                            }
                        }
                    }, 1);
                }

                function navTop2(i) {
                    activateList[i] = true;
                    if (wallTopList[i] == false && stageList[i] == 1) {
                        navTopList[i] = false;
                        speedXList[i] = 0;
                        speedYList[i] = zombieSpeedList[i] * -1;
                        stageList[i] = 2;
                    } else if (wallLeftList[i] == false || wallRightList[i] == false && stageList[i] == 2) {
                        activateList[i] = false;
                        seperatewaitList[i] = false;
                        clearInterval(seperatewait);
                    }
                }
                function navLeft2(i) {
                    activateList[i] = true;
                    if (wallLeftList[i] == false && stageList[i] == 1) {
                        navLeftList[i] = false;
                        speedXList[i] = zombieSpeedList[i];
                        speedYList[i] = 0;
                        stageList[i] = 2;
                    } else if (wallTopList[i] == false || wallBottomList[i] == false && stageList[i] == 2) {
                        activateList[i] = false;
                        seperatewaitList[i] = false;
                        clearInterval(seperatewait);
                    }
                }
                function navRight2(i) {
                    activateList[i] = true;
                    if (wallRightList[i] == false && stageList[i] == 1) {
                        navRightList[i] = false;
                        speedXList[i] = zombieSpeedList[i] * -1;
                        speedYList[i] = 0;
                        stageList[i] = 2;
                    } else if (wallTopList[i] == false || wallBottomList[i] == false && stageList[i] == 2) {
                        activateList[i] = false;
                        seperatewaitList[i] = false;
                        clearInterval(seperatewait);
                    }
                }
                function navBottom2(i) {
                    activateList[i] = true;
                    if (wallBottomList[i] == false && stageList[i] == 1) {
                        navBottomList[i] = false;
                        speedXList[i] = 0;
                        speedYList[i] = zombieSpeedList[i];
                        stageList[i] = 2;
                    } else if (wallLeftList[i] == false && stageList[i] == 2 || wallRightList[i] == false && stageList[i] == 2) {
                        activateList[i] = false;
                        seperatewaitList[i] = false;
                        clearInterval(seperatewait);
                    }
                }
            }
        }
    }
}
/*-------------------------*/

/*moving-----------------------------------------------------------*/
var wait;
var wait3;
var keydown;
var layoutXPos = 0;
var layoutYPos = 0;
var stunned = false;
var canMove = false;
var playerIsTouching;

function move(e) {
    checkObstacle();
    if (e == "w" && down != true || e == "ArrowUp" && down != true) {
        layoutYPos += newWeapon.playerSpeed;
    }
    if (e == "s" && up != true || e == "ArrowDown" && up != true) {
        layoutYPos -= newWeapon.playerSpeed;
    }
    if (e == "a" && right != true || e == "ArrowLeft" && right != true) {
        layoutXPos += newWeapon.playerSpeed;
    }
    if (e == "d" && left != true || e == "ArrowRight" && left != true) {
        layoutXPos -= newWeapon.playerSpeed;
    }
    if (e == "f" && tiles[anothernumber].className != "wall") {
        getItem(anothernumber);
    }

    layout.style.marginLeft = layoutXPos + "px";
    layout.style.marginTop = layoutYPos + "px";

    if (stunned == false) {
        up = left = right = down = false;
    }
    playerClient = block.getBoundingClientRect();
    layoutClient = layout.getBoundingClientRect();
}

let controller = {}
document.addEventListener("keydown", (e) => {
    controller[e.key] = true
    if (e.key == "r" && newWeapon.mag < newWeapon.originalmag && newWeapon.maxmag > 0 && reloadCooldown == false) {
        gunsound(1);
        reloadCooldown = true;
        document.getElementById("prompttext").innerHTML = ""
        prompt.style.visibility = "visible";
        document.getElementById("progression").style.animationName = "progress";
        document.getElementById("progression").style.visibility = "visible";
        setTimeout(function () {
            prompt.style.visibility = "hidden";
            document.getElementById("progression").style.visibility = "hidden";
            document.getElementById("progression").style.animationName = "";
            reloadCooldown = false;
            newWeapon.maxmag = newWeapon.maxmag - newWeapon.originalmag;
            newWeapon.mag = newWeapon.originalmag;
            ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;
        }, 4000)
    }
})

document.addEventListener("keyup", (e) => {
    controller[e.key] = false
})

setInterval(() => {
    if (canMove == true) {
        for (const key in controller) {
            if (controller[key] == true) {
                if(newWeapon.name == "Pistol") {
                    move(key)
                } else {
                    move(key)
                    move(key)
                }
            }
        }
    }
}, 1)


/*------------------------------------------------------------------*/

/*collision-------------------------------------------------------- */
const prompt = document.getElementById("prompt");

let obstacleClient;
let playerClient = block.getBoundingClientRect();
var up, left, right, down;
var tiles;
var isUsing;
var numberUsing = 0;
var anothernumber;
var zombieCooldown = false;

function checkObstacle() {
    if (waveStarted == true) {
        for (let i = 0; i < tiles.length; i++) {
            obstacleClient = tiles[i].getBoundingClientRect();
            playerClient = block.getBoundingClientRect();
            if (tiles[i].className !== "path") {
                if (playerClient.top + parseInt(block.offsetHeight) == obstacleClient.top && playerClient.left + parseInt(block.offsetWidth) > obstacleClient.left && playerClient.right - parseInt(block.offsetWidth) < obstacleClient.right) {
                    up = true;
                    checkType(i);
                }
                if (playerClient.left + parseInt(block.offsetWidth) == obstacleClient.left && playerClient.top + parseInt(block.offsetHeight) > obstacleClient.top && playerClient.bottom - parseInt(block.offsetHeight) < obstacleClient.bottom) {
                    left = true;
                    checkType(i);
                }
                if (playerClient.right - parseInt(block.offsetWidth) == obstacleClient.right && playerClient.top + parseInt(block.offsetHeight) > obstacleClient.top && playerClient.bottom - parseInt(block.offsetHeight) < obstacleClient.bottom) {
                    right = true;
                    checkType(i);
                }
                if (playerClient.bottom - parseInt(block.offsetHeight) == obstacleClient.bottom && playerClient.left + parseInt(block.offsetWidth) > obstacleClient.left && playerClient.right - parseInt(block.offsetWidth) < obstacleClient.right) {
                    down = true;
                    checkType(i);
                }
            }
        }


        if (numberUsing == 0 && reloadCooldown == false) {
            prompt.style.visibility = "hidden";
        } else {
            prompt.style.visibility = "visible";
        }
        numberUsing = 0;
    }
}

function checkType(i) {
    if (tiles[i].className == "mystery") {
        document.getElementById("prompttext").innerHTML = "Roll a Random Weapon! - 400 - F";
        numberUsing++;
    } else if (tiles[i].className == "jugger") {
        document.getElementById("prompttext").innerHTML = "Gain +100% Max HP - 4000 - F";
        numberUsing++;
    } else if (tiles[i].className == "magex") {
        document.getElementById("prompttext").innerHTML = "Buy Extra Magazines - 5000 - F";
        numberUsing++;
    } else if (tiles[i].className == "pack") {
        document.getElementById("prompttext").innerHTML = "Make Your Weapon Stronger - 7000 - F";
        numberUsing++;
    } else if (tiles[i].className == "special") {
        document.getElementById("prompttext").innerHTML = "Storage Door - FREE - F";
        numberUsing++;
    }
    anothernumber = i;
}
/*----------------------------------------------------------------- */

/*numerical system------------------------------------------------- */
const bank = document.getElementById("money");
bank.innerHTML = 2000;

const health = document.getElementById("health");
var maxhealth = 100;
health.innerHTML = maxhealth;

const ammo = document.getElementById("ammo");
ammo.innerHTML = Pistol.mag + "/" + Pistol.maxmag;

function checkHealth() {
    if (health.innerHTML <= 0) {
        clearInterval(checkRoundsDone);
        clearInterval(zombieInterval)
        clearInterval(launchInterval);
        if (wave > 1) {
            document.getElementById("waveresult").innerHTML = "Only survived " + wave + " rounds? Your boss will hear about this.";
        } else {
            document.getElementById("waveresult").innerHTML = "Only survived " + wave + " round? Your boss will hear about this.";
        }
        document.getElementById("gameover").style.visibility = "visible";
        clearInterval(missileInterval)
    }
}
/*----------------------------------------------------------------- */

/*weapon mechanics------------------------------------------------- */
const result = document.getElementById("result");
const weapon = document.getElementById("weapon");
const mainpart = document.getElementById("mainpart");
const barrel = document.getElementById("barrel");
const extrabarrel = document.getElementById("extrabarrel");

result.innerHTML = Pistol.name;
var newWeapon = Pistol;
weapon.src = newWeapon.picture;
weapon.style.width = newWeapon.width;
weapon.style.marginLeft = newWeapon.width;
var isUsed = false;
var newMaxAmmo;
var newAmmo;
var containerClient = document.getElementById("container").getBoundingClientRect();
var isBought;
var autofire;
var reloadCooldown = false;
var currentZombies = 0;
var isGolem = false;
var galactusCooldown = false;
var specialCount = document.getElementsByClassName("special");
var isSpecialOpened = [];

var cooldown;

var bulletContainer = [];

function getItem(i) {
    if (isUsed == false) {
        if (tiles[i].className == "mystery") {
            if (bank.innerHTML >= 400) {
                bank.innerHTML = bank.innerHTML - 400;
                newWeapon = weaponList[Math.floor(Math.random() * weaponList.length) + 0];
                ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;
                result.innerHTML = newWeapon.name;
                weapon.src = newWeapon.picture;
                weapon.style.width = newWeapon.width;
                weapon.style.marginLeft = newWeapon.width;
                layout.style.marginLeft = (Math.ceil(parseInt(layout.style.marginLeft) / 10) * 10) + "px";
                layout.style.marginTop = (Math.ceil(parseInt(layout.style.marginTop) / 10) * 10) + "px";
                isBought = true;
                createSubtitle("Mystery Machine! You got " + newWeapon.name + "!");
            }
        } else if (tiles[i].className == "jugger") {
            if (bank.innerHTML >= 4000) {
                maxhealth = maxhealth + 100;

                bank.innerHTML = bank.innerHTML - 4000;
                isBought = true;
                createSubtitle("Bought a Juggernog! Your maximum HP is now " + maxhealth)
            }
        } else if (tiles[i].className == "magex") {
            if (bank.innerHTML >= 5000) {
                newWeapon.maxmag = newWeapon.maxmag + newWeapon.originalmaxmag;
                ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;

                bank.innerHTML = bank.innerHTML - 5000;
                isBought = true;
                createSubtitle("Bought " + newWeapon.originalmaxmag / newWeapon.originalmag + " magazines! " + newWeapon.name + "'s reserve ammo is now " + newWeapon.maxmag);
            }
        } else if (tiles[i].className == "pack") {
            if (bank.innerHTML >= 7000) {
                newWeapon.damage = newWeapon.damage * 2;
                bank.innerHTML = bank.innerHTML - 7000;
                isBought = true;
                createSubtitle(newWeapon.name + "'s damage is increased from "+ newWeapon.damage / 2 + " to " + newWeapon.damage + "!");
            }
        } else if (tiles[i].className == "special") {
            if (isSpecialOpened[i] != undefined && isSpecialOpened[i] == false) {
                tiles[i].style.backgroundColor = "red";
                isSpecialOpened[i] = true;
                var specialChoices = Math.floor(Math.random() * 11) + 0;
                if (specialChoices >= 0 && specialChoices <= 4) {
                    createSubtitle("There is nothing here.")
                }
                if (specialChoices > 4 && specialChoices <= 5) {
                    if (health.innerHTML + 30 <= maxhealth) {
                        health.innerHTML = Number(health.innerHTML) + 30;
                    } else {
                        health.innerHTML = maxhealth;
                    }
                    createSubtitle("Bandages! +30 Health.")
                } else if (specialChoices > 5 && specialChoices <= 7) { //7 and 8
                    newWeapon.maxmag = newWeapon.maxmag + newWeapon.originalmag;
                    ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;
                    createSubtitle("An extra magazine! +" + newWeapon.originalmag + " reserve ammo.")
                } else if (specialChoices > 8 && specialChoices <= 10) {//9 and 10
                    if (newWeapon.maxmag - newWeapon.originalmag >= 0) {
                        newWeapon.maxmag = newWeapon.maxmag + newWeapon.originalmag;
                        ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;
                    } else {
                        newWeapon.maxmag = 0;
                        ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;
                    }
                    createSubtitle("Something just took a magazine from me! -"+newWeapon.originalmag+" reserve ammo.");
                }
            }
            isBought = true;
        }
        if (isBought == true) {
            isUsed = true;
            document.getElementById("flash").style.backgroundColor = "lightgreen";
            isBought = false;
        } else {
            document.getElementById("flash").style.backgroundColor = "lightcoral";
        }
        setTimeout(function () { isUsed = false; document.getElementById("flash").style.backgroundColor = "transparent" }, 2000)
    }
}

function followMouse(event) {
    weapon.style.transform = "rotate(" + Math.atan2(event.clientY - containerClient.height / 2, event.clientX - containerClient.width / 2) * 180 / Math.PI + "deg)";
    weapon.style.transformOrigin = "0% 50%"
}

var randomOffset;
function shoot() {
    if (newWeapon.isagun && canMove) {
        if (bulletCooldown != true && newWeapon.mag > 0 && reloadCooldown == false && waveStarted == true) {
            gunsound(0);
            switch (newWeapon.name) {
                case "Shotgun":
                    newWeapon.mag = newWeapon.mag - 1;
                    ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;
                    for (let i = 0; i < 4; i++) {
                        var bullet = document.createElement("div");
                        bullet.classList.add("bullet")
                        document.getElementById("container").appendChild(bullet);
                        bulletContainer.push(bullet);
                        bullet.id = "bullet" + k;
                        k++;
                        randomOffset = Math.floor(Math.random() * 60) - 30;
                        bulletClient = bullet.getBoundingClientRect();

                        distanceX = mouseXPos - containerClient.width / 2;
                        distanceY = mouseYPos - containerClient.height / 2;
                        if (distanceX <= 0 && distanceY <= 0) { //top left quadrant
                            if (distanceX * -1 > distanceY * -1) {
                                speedX = -85;
                                speedY = ((distanceY / distanceX) * -85) + randomOffset;
                            } else {
                                speedY = -85;
                                speedX = ((distanceX / distanceY) * -85) + randomOffset;
                            }
                        } else if (distanceX >= 0 && distanceY <= 0) { //top right quadrant
                            if (distanceX > distanceY * -1) {
                                speedX = 85;
                                speedY = ((distanceY / distanceX) * 85) + randomOffset;
                            } else {
                                speedY = -85;
                                speedX = ((distanceX / distanceY) * -85) + randomOffset;
                            }
                        } else if (distanceX <= 0 && distanceY >= 0) { //bottom left quadrant
                            if (distanceX * -1 > distanceY) {
                                speedX = -85;
                                speedY = ((distanceY / distanceX) * -85) + randomOffset;
                            } else {
                                speedY = 85;
                                speedX = ((distanceX / distanceY) * 85) + randomOffset;
                            }
                        } else if (distanceX >= 0 && distanceY >= 0) { //bottom right quadrant
                            if (distanceX > distanceY) {
                                speedX = 85;
                                speedY = ((distanceY / distanceX) * 85) + randomOffset;
                            } else {
                                speedY = 85;
                                speedX = ((distanceX / distanceY) * 85) + randomOffset;
                            }
                        }

                        speedXContainer.push(speedX);
                        speedYContainer.push(speedY);
                        posXContainer.push(0);
                        posYContainer.push(0);
                    }
                    break;
                default:
                    gunsound(0);
                    newWeapon.mag = newWeapon.mag - 1;
                    ammo.innerHTML = newWeapon.mag + "/" + newWeapon.maxmag;
                    var bullet = document.createElement("div");
                    bullet.classList.add("bullet")
                    document.getElementById("container").appendChild(bullet);
                    bulletContainer.push(bullet);
                    bullet.id = "bullet" + k;
                    k++;

                    bulletClient = bullet.getBoundingClientRect();

                    distanceX = mouseXPos - containerClient.width / 2;
                    distanceY = mouseYPos - containerClient.height / 2;

                    if (distanceX <= 0 && distanceY <= 0) { //top left quadrant
                        if (distanceX * -1 > distanceY * -1) {
                            speedX = -85;
                            speedY = (distanceY / distanceX) * -85
                        } else {
                            speedY = -85;
                            speedX = (distanceX / distanceY) * -85
                        }
                    } else if (distanceX >= 0 && distanceY <= 0) { //top right quadrant
                        if (distanceX > distanceY * -1) {
                            speedX = 85;
                            speedY = (distanceY / distanceX) * 85;
                        } else {
                            speedY = -85;
                            speedX = (distanceX / distanceY) * -85;
                        }
                    } else if (distanceX <= 0 && distanceY >= 0) { //bottom left quadrant
                        if (distanceX * -1 > distanceY) {
                            speedX = -85;
                            speedY = (distanceY / distanceX) * -85;
                        } else {
                            speedY = 85;
                            speedX = (distanceX / distanceY) * 85;
                        }
                    } else if (distanceX >= 0 && distanceY >= 0) { //bottom right quadrant
                        if (distanceX > distanceY) {
                            speedX = 85;
                            speedY = (distanceY / distanceX) * 85;
                        } else {
                            speedY = 85;
                            speedX = (distanceX / distanceY) * 85;
                        }
                    }

                    speedXContainer.push(speedX);
                    speedYContainer.push(speedY);
                    posXContainer.push(0);
                    posYContainer.push(0);

                    break;
            }

            speedX = 0;
            speedY = 0;

            if (onlyonce == false) {
                onlyonce = true;
                waitAgain = setInterval(moveBullet, 10);
            }

            bulletCooldown = true;
            bulletTimeout = setTimeout(function () { bulletCooldown = false }, newWeapon.fireSpeed)
        }

        if(newWeapon.mag == 0) {
            createSubtitle("Out of Ammo! Reload using R.");
            gunsound(2);
        }
    } else if (newWeapon.isagun == false) {
        switch (newWeapon.name) {
            case "Galactus":
                if (galactusCooldown == false) {
                    galactusCooldown = true;
                    for (let i = 0; i < zombieList.length; i++) {
                        zombieSpeedList[i] = zombieSpeedList[i] / 2;
                    }
                    createSubtitle("Used Galactus! All zombies are slowed.")
                    setTimeout(function () {
                        for (let i = 0; i < zombieList.length; i++) {
                            zombieSpeedList[i] = zombieSpeedList[i] * 2;
                        }
                        createSubtitle("Zombie speed is back to normal!")
                    }, 30000)
                    setTimeout(function () {
                        galactusCooldown = false;
                        createSubtitle("Galactus can be used again.")
                    }, 60000)
                }
                break;
        }
    }
}

function removeBullet(i) {
    speedXContainer.splice(i, 1);
    speedYContainer.splice(i, 1);
    posXContainer.splice(i, 1);
    posYContainer.splice(i, 1);
    if (bulletContainer.length > 0) {
        bulletContainer[i].remove()
    }
    bulletContainer.splice(i, 1)
}

function moveBullet() {
    if (waveStarted == true) {
        for (let l = 0; l < bulletContainer.length; l++) {
            bulletClient = bulletContainer[l].getBoundingClientRect();

            for (let i = 0; i < tiles.length; i++) {
                wallClient = tiles[i].getBoundingClientRect();

                if (bulletClient.top >= wallClient.top && bulletClient.left >= wallClient.left && bulletClient.right <= wallClient.right && bulletClient.bottom <= wallClient.bottom) {
                    if (tiles[i].className != "path") {
                        isTouching = true;
                    }
                }
            }

            for (let i = 0; i < zombieList.length; i++) {
                zombieClient = zombieList[i].getBoundingClientRect();
                if (bulletClient.top >= zombieClient.top && bulletClient.left >= zombieClient.left && bulletClient.right <= zombieClient.right && bulletClient.bottom <= zombieClient.bottom) {
                    isTouching = true;

                    zombieHealthList[i] = zombieHealthList[i] - newWeapon.damage;

                    if (zombieHealthList[i] <= 0) {
                        zombieList[i].style.display = "none";
                        zombieList[i].remove();
                        currentZombies--;
                        bank.innerHTML = Number(bank.innerHTML) + 50;

                        if (newWeapon.name == "Reaper Crossbow") {
                            newWeapon.fireSpeed = newWeapon.fireSpeed - 10;
                            newWeapon.damage = newWeapon.damage + 1;
                        }
                    }
                }
            }

            if (isTouching == true || bulletClient.top < containerClient.top || bulletClient.top > containerClient.bottom || bulletClient.left < containerClient.left || bulletClient.left > containerClient.right) {
                removeBullet(l);
            } else {
                posXContainer[l] = posXContainer[l] + speedXContainer[l];
                bulletContainer[l].style.marginLeft = posXContainer[l] + "px";

                posYContainer[l] = posYContainer[l] + speedYContainer[l];
                bulletContainer[l].style.marginTop = posYContainer[l] + "px"
            }
            isTouching = false;
        }
    }
}

document.addEventListener("click", shoot);

document.addEventListener("mousedown", function (event) {
    if (waitText) return;
    if (!canMove) return;
    if (document.getElementById("gameover").style.visibility == "visible") return;

    if (newWeapon.auto == true) {
        autofire = setInterval(function () {
            shoot();
        }, newWeapon.fireSpeed);
    }
})

document.addEventListener("mousemove", function (event) {
    mouseXPos = event.clientX;
    mouseYPos = event.clientY;
})

document.addEventListener("mouseup", function () {
    clearInterval(autofire);
})

document.addEventListener("mousemove", followMouse);

/*----------------------------------------------------------------- */

/*start round------------------------------------------------- */
var wave = 0;
var round = 1;
var expectedRounds = 1;
var zombieAmount = 5;
var nextZombieType = 1;
var waveStarted = false;
var activate3 = false;
var activate4 = false;
var checkRoundsDone;
var allZombies = layout.getElementsByClassName("zombie")
var templength;


function startDialogue() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("flash").style.animationName = "switchmap";
    setTimeout(function () {
        if (waveStarted == true) {
            templength = allZombies.length;
            for (let i = 0; i < templength; i++) {
                allZombies[0].remove();
            }
            for (let i = 0; i < zombieAmount; i++) {
                zombieList.shift();
                zombMLList.shift();
                zombMTList.shift();
                activateList.shift();
                dirList.shift();
                wallTopList.shift();
                wallLeftList.shift();
                wallRightList.shift();
                wallBottomList.shift();
                navTopList.shift();
                navLeftList.shift();
                navRightList.shift();
                navBottomList.shift();
                moveTopList.shift();
                moveLeftList.shift();
                moveRightList.shift();
                moveBottomList.shift();
                touchingList.shift();
                wallTouchingList.shift();
                seperatewaitList.shift();
                stageList.shift();
                distanceXList.shift();
                distanceYList.shift();
                tempList.shift();
                zombieHealthList.shift();
                zombieHitList.shift();
                zombieSpeedList.shift();
                zombieDamageList.shift();
                zombieTypeList.shift();
            }

            commanderAmount = 0;
            divnumber = 1;
            xMargin = 0;
            yMargin = 0;
        }
        render(maps[Math.floor(Math.random() * maps.length) + 0]);
        storynumber++;
        linenumber = 0;
        oneletter();
        clearInterval(checkRoundsDone);
        if (onlyonce2 == false) {
            timeSong();
            onlyonce2 = true;
        }
    }, 1500)
    setTimeout(function () {
        start()
    }, 14000)
    setTimeout(function () {
        checkRoundsDone = setInterval(function () {
            if (waveStarted == true && currentZombies == commanderAmount && activate3 == false && round >= expectedRounds && activate4 == false) {
                if(wave != 20) {
                    activate3 = true;
                    if (Number(health.innerHTML) + 30 <= maxhealth) {
                        health.innerHTML = Number(health.innerHTML) + 30;
                    } else {
                        health.innerHTML = maxhealth;
                    }
                    clearInterval(zombieInterval);
                    canMove = false;
                    startDialogue();
                } else {
                    document.getElementById("gameover").style.visibility = "visible";
                    clearInterval(zombieInterval);
                    canMove = false;
                    clearInterval(checkRoundsDone);
                    clearInterval(launchInterval);
                    document.getElementById("waveresult").innerHTML = "Victory! You survived " + wave + " rounds.";
                }
            } else if (waveStarted == true && currentZombies == commanderAmount && activate4 == false && round < expectedRounds && expectedRounds > 1) {
                activate4 = true;
                round++;
                currentZombies = 0;
                setTimeout(function () {
                    allZombies = layout.getElementsByClassName("zombie");
                    commanderAmount = 0;
                    for (let i = 0; i < allZombies.length; i++) {
                        allZombies[i].remove();
                    }
                    for (let i = 0; i < zombieAmount; i++) {
                        zombieList.shift();
                        zombMLList.shift();
                        zombMTList.shift();
                        activateList.shift();
                        dirList.shift();
                        wallTopList.shift();
                        wallLeftList.shift();
                        wallRightList.shift();
                        wallBottomList.shift();
                        navTopList.shift();
                        navLeftList.shift();
                        navRightList.shift();
                        navBottomList.shift();
                        moveTopList.shift();
                        moveLeftList.shift();
                        moveRightList.shift();
                        moveBottomList.shift();
                        touchingList.shift();
                        wallTouchingList.shift();
                        seperatewaitList.shift();
                        stageList.shift();
                        distanceXList.shift();
                        distanceYList.shift();
                        tempList.shift();
                        zombieHealthList.shift();
                        zombieHitList.shift();
                        zombieTypeList.shift();
                        zombieSpeedList.shift();
                        zombieDamageList.shift();
                    }

                    zombieAmount = 5;
                    for (let i = 0; i < zombieAmount; i++) {
                        spawnZombies();
                        currentZombies++;
                    }
                    activate4 = false;
                }, 2000)
            }
        }, 100)
        document.getElementById("flash").style.animationName = "";
        document.getElementById("flash").innerHTML = "";
        clearInterval(textInterval);
        launchInterval = setInterval(function () {
            if (commanderAmount > 0) {
                setMissile();
            } else {
                time = 3;
            }
        }, 5000)
    }, 15000)
}

function start() {
    canCommanderSpawn = true;
    canJuggerSpawn = true;
    currentZombies = 0;
    zombieInterval = setInterval(zombieAI, 5)
    weaponList[weaponList.indexOf(Reaper)].damage = 20
    weaponList[weaponList.indexOf(Reaper)].fireSpeed = 1000
    clearInterval(launchInterval);
    clearInterval(missileInterval)
    clearInterval(wait)
    clearInterval(autofire)
    canMove = true;
    /*dont want to remove bullet */

    layoutXPos = 0;
    layoutYPos = 0;
    layout.style.marginLeft = layoutXPos + "px";
    layout.style.marginTop = layoutYPos + "px";

    if(document.getElementById("subtitles").getElementsByTagName("*").length >= 10) {
        var subtitleCount = document.getElementById("subtitles").getElementsByTagName("*").length;
        for(let i=0; i<subtitleCount; i++) {
            document.getElementById("subtitles").getElementsByTagName("*")[0].remove();
        }
    }

    createSubtitle("Map started. Use WASD or the arrow keys to move.")
    createSubtitle("Reset Reaper Crossbow's stats.")

    wave++;
    round = 1;
    // if(wave % 5 == 0) {
    if (nextZombieType < zombieStats.length) {
        zombieTypes.push(zombieStats[nextZombieType].name);
        nextZombieType++;
    }
    // }
    if (wave % 2 == 0) {
        expectedRounds += 1;
        createSubtitle("Waves per map increased to " + expectedRounds)
    }
    if(wave == 20) {
        expectedRounds = 1;
        juggerAllowed = 5;
        createSubtitle("Wait, why are there multiple juggernauts?!")
    }
    for (let i = 0; i < zombieAmount; i++) {
        spawnZombies();
        currentZombies++;
    }

    waveStarted = true;
    activate3 = false;
    /*make sure this is at the bottom of everything */
    tiles = layout.querySelectorAll(".wall,.mystery,.magex,.jugger,.pack,.special,.path");
}

function stop() {
    canMove = false;
    waitText = true;
    clearInterval(launchInterval);
    clearInterval(missileInterval)
    clearInterval(wait)
    clearInterval(zombieInterval);
    zombieInterval = undefined;
    clearInterval(autofire)
    document.getElementById("menu").style.display = "grid";
    document.getElementById("play").innerHTML = "BACK";
    document.getElementById('play').onclick = function() {
        waitText = false
        document.getElementById("menu").style.display = "none";
        canMove = true;
        if(waveStarted && zombieInterval == undefined) {
            launchInterval = setInterval(function () {
                if (commanderAmount > 0) {
                    setMissile();
                } else {
                    time = 3;
                }
            }, 5000)
            missileInterval = setInterval(countdown, 1000);
            zombieInterval = setInterval(zombieAI, 5)
        }
    }
    
}

document.getElementById('menubutton').addEventListener("mouseover", function() {
    canMove = false;
})

document.getElementById('menubutton').addEventListener("mouseout", function() {
    canMove = true;
})
/*dialogue------------------------------- */
var textInterval;
var textnumber = 0;
var linenumber = 0;
var storynumber = -1;
var linelength = 0;
var templine;
var text = "";
var waitText = false;

var storylines = [ /*------* is location, # is new type of zombie, % is weapon-------*/
    scene1 = [
        '"News Flash: A helicopter just passed over *. Get ready for an explosion in the skyline!"',
        "What even happened in the first place? I feel like trying to kill all these people is unnecessary.",
        "They aren't people. They are zombies. Monsters. Although the zombies have no brain, they have strategies, just for us.",
    ],

    scene2 = [
        "(I remember back when there was no war. Max and I were always friends.)",
        "(It was tragic when I realized I would never talk to him again.)",
        "(I don't know what ever happened to him, but I should focus on what is happening now.)",
    ],
    scene20 = [
        "My legs, they aren't feeling good, boss.",
        "Well, I think Max should be done with his tomfoolery. So it's ok.",
        "(My boss's face is evil as he leaves.)",
    ],
]
var randomtextLines = [
    "My body is on thin ice.",
    "You are lucky I am even picking you up. I heal you every time.",
    "Sometimes, at *, it makes me feel nostalgic, like I have been there before.",
    "The ammo that I have is just as important to me as the sky.",
    "At school, people would make fun of me for being myself. Sadly, I can't help them now.",
    "Remember to get more ammo packs by the brown machine.",
]
var newZombieLines = [
    "The spy has more information. # zombies just joined their arsenal of slaves.",
    "Great. Different zombies. # this time."
]

function setText() {
    text = ""
    textnumber = 0;
    if (wave == 0 || wave == 1 || wave == 19) {
        for (let i = 0; i < storylines[storynumber][linenumber].length; i++) {
            if (storylines[storynumber][linenumber].charAt(textnumber) == "*") {
                text = text + mapList[maps.indexOf(currentMap)];
            } else {
                text = text + storylines[storynumber][linenumber].charAt(textnumber);
            }
            textnumber++;
        }

    } else if ((wave + 1) % 5 == 0 && nextZombieType < zombieStats.length - 1) {
        templine = newZombieLines[Math.floor(Math.random() * newZombieLines.length) + 0];
        for (let i = 0; i < templine.length; i++) {
            if (templine.charAt(textnumber) == "#") {
                text = text + zombieStats[nextZombieType].name;
            } else {
                text = text + templine.charAt(textnumber);
            }
            textnumber++;
        }
    } else {
        templine = randomtextLines[Math.floor(Math.random() * randomtextLines.length) + 0];
        for (let i = 0; i < templine.length; i++) {
            if (templine.charAt(textnumber) == "*") {
                text = text + mapList[maps.indexOf(currentMap)];
            } else if (templine.charAt(textnumber) == "%") {
                text = text + newWeapon.name;
            } else {
                text = text + templine.charAt(textnumber);
            }
            textnumber++;
        }
    }
    textnumber = 0;
}

function oneletter() {
    setText();
    textInterval = setInterval(addletter, 30); /*waits 30 milliseconds*/
    textnumber = 0;
    function addletter() {
        if (waitText == false) {
            document.getElementById("flash").innerHTML = document.getElementById("flash").innerHTML + text.charAt(textnumber);
            textnumber++;
        }

        if (wave == 0 || wave == 1 || wave == 19) {
            if (textnumber >= text.length && waitText == false && linenumber < storylines[storynumber].length - 1) {
                waitText = true;
                textnumber = 0;
                setTimeout(function () {
                    linenumber++;
                    document.getElementById("flash").innerHTML = "";
                    setText();
                    waitText = false;
                }, 1000)
            }
        } else {
            if (textnumber >= text.length) {
                textnumber == 0;
            }
        }
    }
}

/*missiles */
const missile = document.getElementById("missile");
var missileInterval;
var missileClient = missile.getBoundingClientRect();
var commanderAmount = 0;
var time = 3;
var launchInterval;
missile.style.display = "none";
var creplacementLeft;
var creplacementTop;

function setMissile() {
    time = 3;
    missile.style.marginLeft = ((layoutClient.left * -1 + containerClient.width / 2) - playerClient.width / 2) - playerClient.width + "px";
    missile.style.marginTop = ((layoutClient.top * -1 + containerClient.height / 2) - playerClient.height / 2) - playerClient.height + "px";
    missile.style.display = "flex";
    missileInterval = setInterval(countdown, 1000);
    missile.innerHTML = time;
    document.getElementById("launch").volume = document.getElementById("missilevolume").value / 100;
    document.getElementById("launch").play();
}

function countdown() {
    time--;
    missile.innerHTML = time;
    if (time < 1) {
        creplacementLeft = (layoutClient.left * -1 + containerClient.width / 2) - playerClient.width;
        creplacementTop = (layoutClient.top * -1 + containerClient.height / 2) - playerClient.height;
        if (creplacementTop + playerClient.height >= (parseInt(missile.style.marginTop) - playerClient.height / 2) && creplacementTop <= (parseInt(missile.style.marginTop) + missileClient.height) - playerClient.height / 2) {
            if (creplacementLeft + playerClient.width >= (parseInt(missile.style.marginLeft) - playerClient.width / 2) && creplacementLeft <= (parseInt(missile.style.marginLeft) + missileClient.width) - playerClient.width / 2) {
                health.innerHTML = health.innerHTML - (10 * commanderAmount);
                checkHealth();
            }
        }
        missile.style.display = "none";
        clearInterval(missileInterval)
        document.getElementById("launch").pause();
        document.getElementById("launch").currentTime = 0;
        document.getElementById("explosion").currentTime = 1.25;
        document.getElementById("explosion").volume = document.getElementById("missilevolume").value / 100;
        document.getElementById("explosion").play();
    }
}

/*sounds */
var allSounds = document.body.querySelectorAll("audio");
function createSound(source) {
    var newSound = new Audio(source);
    var soundsrc = document.createElement("source");
    soundsrc.type = "audio/mpeg";
    soundsrc.src = source;
    newSound.volume = document.getElementById("weaponvolume").value / 100;
    newSound.appendChild(soundsrc);
    newSound.play();
}

function gunsound(action) {

    if (action == 0) {
        switch (newWeapon.name) {
            case "Shotgun":
                createSound("shotgunshoot.mp3")
                break;
            default:
                createSound("regularshoot.mp3")
                break;
        }
    } else if(action == 1) {
        switch (newWeapon.name) {
            case "Shotgun":
                createSound("shotgunreload.mp3")
                break;
            default:
                createSound("regularreload.mp3")
                break;
        }
    } else if(action == 2) {
        createSound("empty.mp3");
    }
}

var musicOrder = 0;
var date = new Date();
var onlyonce2 = false;
var daysongs = ["daysong1.mp3", "daysong2.mp3", "daysong3.mp3", "daysong4.mp3", "daysong5.mp3"]
var nightsongs = ["nightsong1SCARY.mp3", "nightsong2.mp3", "nightsong3.mp3", "nightsong4.mp3", "nightsong5.mp3"];
function backgroundMusic(musiclist) {
    document.getElementById("backgroundmusic").src = musiclist[musicOrder];
    document.getElementById("backgroundmusic").pause();
    document.getElementById("backgroundmusic").volume = document.getElementById("backgroundvolume").value / 100;
    document.getElementById("backgroundmusic").currentTime = 0;
    document.getElementById("backgroundmusic").play();
    musicOrder++;
}

function timeSong() {
    if (date.getHours() >= 19 || date.getHours() <= 6) {
        if (musicOrder > nightsongs.length - 1) {
            musicOrder = 0;
        }
        backgroundMusic(nightsongs)
    } else {
        if (musicOrder > daysongs.length - 1) {
            musicOrder = 0;
        }
        backgroundMusic(daysongs)
    }
}

document.getElementById("backgroundmusic").addEventListener("ended", function () {
    timeSong();
})
/*------- */

/*subtitles------*/
function createSubtitle(text) {
    var p = document.createElement("p");
    p.innerHTML = text;
    document.getElementById("subtitles").appendChild(p);
}
/*-----*/

/*mobile alert */
let isMobile = navigator.userAgent.match(/iphone|android|blackberry/ig) ? true : false;
if(isMobile) {
    alert("Device is not supported.")
}

alert("WARNING: Please do not change the screen size while on this website. Refresh the page if you have done so. Thank you!")