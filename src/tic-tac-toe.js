class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null], 
            [null, null, null] 
        ]
        this.playerSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.playerSymbol;
        
            for (let i = 0; i < 3; i++) {
                if ((
                        (this.matrix[i][0] === this.playerSymbol) &&
                        (this.matrix[i][1] === this.playerSymbol) &&
                        (this.matrix[i][2] === this.playerSymbol)
                    ) || (
                        (this.matrix[0][i] === this.playerSymbol) &&
                        (this.matrix[1][i] === this.playerSymbol) &&
                        (this.matrix[2][i] === this.playerSymbol)
                    )) this.winner = this.playerSymbol;
            };
            if ((
                    (this.matrix[0][0] === this.playerSymbol) &&
                    (this.matrix[1][1] === this.playerSymbol) &&
                    (this.matrix[2][2] === this.playerSymbol)
                ) || (
                    (this.matrix[0][2] === this.playerSymbol) &&
                    (this.matrix[1][1] === this.playerSymbol) &&
                    (this.matrix[2][0] === this.playerSymbol)
                )) this.winner = this.playerSymbol;
            (this.playerSymbol === 'x') ? this.playerSymbol = 'o' : this.playerSymbol = 'x';
        }
    }

    isFinished() {
        return (this.getWinner() || this.isDraw()) ? true : false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] === null) return false;
            };
        };

        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && !(Boolean(this.getWinner()))) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;