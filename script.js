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
    
    function startGame() {
        gameBrd.resetBoard();
        gameOver = false;
        currentPlayer = player1;
        messageDisplay.updateMessage(`${currentPlayer.getName()}'s turn`);
        displayController.render();
    }

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
            messageDisplay.updateMessage("Game is over, please restart.");
            return "Game is over, please restart.";
        }
        if (index < 0 || index > 8) { 
            messageDisplay.updateMessage("Invalid index, choose a number between 0 and 8."); 
            return "Invalid index, choose a number between 0 and 8.";
        }
        const success = gameBrd.setMark(index, currentPlayer.getMarker());
        if (!success) {
            messageDisplay.updateMessage("Cell already taken, choose another.");
            return "Cell already taken, choose another.";
        }

        if (checkWin()) {
            gameOver = true;
            messageDisplay.updateMessage(`${currentPlayer.getName()} wins!`);
            return `${currentPlayer.getName()} wins!`;

        }

        if (checkTie()) {
            gameOver = true;
            messageDisplay.updateMessage("It's a tie!");
            return "It's a tie!";
        }
        switchTurn();
        messageDisplay.updateMessage(`${currentPlayer.getName()}'s turn`);
        return`${currentPlayer.getName()}'s turn`;
    }
    return {
        playMove,
        startGame
    }

})();

const gameControls = (() => {
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', gameController.startGame)
})();

const messageDisplay = (() => {
    const statusDiv = document.getElementById('status');
    function updateMessage(message) {
        statusDiv.textContent = message;
    }
    return {
        updateMessage,
    };
})();

const displayController = (() => {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.dataset.index;
            gameController.playMove(parseInt(index));
            render();
        });
    });
    function render() {
        const board = gameBrd.getBoard();
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell, i) => {
            cell.textContent = board[i];
        });    
    }
    return {
        render
    };
})();

gameController.startGame();


