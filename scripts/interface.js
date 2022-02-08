let who = document.getElementById("whoPlays")

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
                ? (who.innerHTML = "<h1 style = 'color: green;'>O vencedor foi o Escudeiro!</h1>"/*, alert("O jogo Acabou - O vencedor foi o Escudeiro!")*/)
                : (who.innerHTML = "<h1 style = 'color: green;'>O vencedor foi o Espadachim!</h1>"/*, alert("O jogo Acabou - O vencedor foi o Espadachim!")*/)
        }, 20)
    };
    if (!gameOver) {
        whoPlays()
    }
    updateSquares(position);
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function whoPlays() {
    playerTime == 0
        ? who.innerHTML = "<h1>Vez do Escudeiro</h1>"
        : who.innerHTML = "<h1>Vez do Espadachim</h1>"
}

function restartGame() {
    let squares = document.querySelectorAll(".square");
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
    who.innerHTML = "<h1>Vez do Escudeiro</h1>"

    squares.forEach((square) => {
        square.innerHTML = '';
    })

}