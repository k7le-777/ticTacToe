const gameBrd = (() => {
    let Board = ["", "", "", "", "", "", "", "", ""];

    function setMark(index, mark) {
        if (Board[index] !== "") 
            return false; // Cell already marked
        
        Board[index] = mark;
        return true; // Mark set successfully
    }
    function getBoard() {
        return Board;
    }
    function resetBoard() {
        Board = ["", "", "", "", "", "", "", "", ""];
    }
    return {
        setMark,
        getBoard,
        resetBoard
    };
})();

const createPlayer = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return { getName, getMarker };
};

const gameController = (() => {
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");
    let currentPlayer = player1;
    let gameOver = false;

    function checkWin() {
        const board = gameBrd.getBoard();
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        return winPatterns.some(pattern => 
            pattern.every(index => board[index] === currentPlayer.getMarker())
        );
    }
    function checkTie() {
        const board = gameBrd.getBoard();
        return board.every(cell => cell !== "") && !checkWin();
    }

    function switchTurn() {
        currentPlayer = (currentPlayer === player1) ? player2 : player1;

    }


    function playMove(index) {
        if (gameOver) {
            return "Game is over, cannot play.";
        }
        if (index < 0 || index > 9) {  
            return "Invalid index, choose a number between 0 and 9.";
        }
        const success = gameBrd.setMark(index, currentPlayer.getMarker());
        if (!success) {
            return "Cell already taken, choose another.";
        }

        if (checkWin()) {
            gameOver = true;
            return `${currentPlayer.getName()} wins!`;

        }

        if (checkTie()) {
            gameOver = true;
            return "It's a tie!";
        }
        switchTurn();
        return`${currentPlayer.getName()}'s turn`;
    }
    return {
        playMove,
    }

})();

