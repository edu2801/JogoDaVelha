document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            playerTime == 0
                ? alert("O jogo Acabou - O vencedor foi o Escudeiro!")
                : alert("O jogo Acabou - O vencedor foi o Espadachim!")

        }, 10)

    };
    updateSquares(position);
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function restartGame() {
    let squares = document.querySelectorAll(".square");
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;

    squares.forEach((square) => {
        square.innerHTML = '';
    })

}