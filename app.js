let divs = document.querySelectorAll('.parent-div div');

let turn = 0;
let player1moves = [];
let player2moves = [];

let winningmoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

function checkWinner(moves) {
    return winningmoves.some(combination =>
        combination.every(num => moves.includes(num))
    );
}

divs.forEach((d, index) => {
    d.addEventListener('click', () => {

        if (d.innerText !== "") return;

        if (turn == 0) {
            d.innerText = 'X';
            player1moves.push(index + 1);

            if (checkWinner(player1moves)) {
                alert("Player X Wins");
            }

            turn = 1;
        } else {
            d.innerText = 'O';
            player2moves.push(index + 1);

            if (checkWinner(player2moves)) {
                alert("Player O Wins");
            }

            turn = 0;
        }
    });
});
