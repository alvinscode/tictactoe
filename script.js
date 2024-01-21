/* Store game status */
const statusDisplay = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer= "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage= () => `Player ${currentPlayer} has won!`;
const drawMessage = () =>  `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

/* initial message */
statusDisplay.innerHTML = currentPlayerTurn();

/* game logic */
function handleCellPlayed() {

}

function handlePlayerChange() {

}

function handleCellClick() {

}

function handleRestartGame() {

}

document.querySelectorALL('.cell').forEach(cell =>
cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);