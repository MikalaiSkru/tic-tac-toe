class TicTacToe {
  constructor() {
    this.symbol = 'x';
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
  }

  getCurrentPlayerSymbol() {
    return this.symbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] !== null) return;
    this.matrix[rowIndex][columnIndex] = this.symbol;
    changeSymbol(this);
  }

  isFinished() {
    return !!(this.getWinner() || this.isDraw());
  }

  getWinner() {
    const m = this.matrix;
    let winner = null;
    if (m[1][1] === m[0][0] && m[1][1] === m[2][2]
        || m[1][1] === m[2][0] && m[1][1] === m[0][2]
        || m[1][1] === m[0][1] && m[1][1] === m[2][1]
        || m[1][1] === m[1][0] && m[1][1] === m[1][2]) {
      winner = m[1][1];
    }
    if (m[0][0] === m[0][1] && m[0][0] === m[0][2]
        || m[0][0] === m[1][0] && m[0][0] === m[2][0]) {
      winner = m[0][0];
    }
    if (m[0][2] === m[1][2] && m[0][2] === m[2][2]
        || m[2][0] === m[2][1] && m[2][0] === m[2][2]) {
      winner = m[2][2];
    }
    
    return winner;
  }

  noMoreTurns() {
    return !this.matrix.some(row => row.some(col => col === null));
  }

  isDraw() {
    return this.noMoreTurns() && this.getWinner() === null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

function changeSymbol(game) {
  if (game.getCurrentPlayerSymbol() === 'x') {
    game.symbol = 'o';
  } else {
    game.symbol = 'x';
  }
}

module.exports = TicTacToe;
