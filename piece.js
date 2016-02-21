"use strict";

class Piece {
	buildPieceWithArguments(name, size, row, col) {
		this.name = name;
		this.size = size;
		this.row = row;
		this.col = col;
	}

	buildPieceFromGrid(position, i, j) {
		let pieceSize;
		let pieceNumber = position[i][j];
		if(position[i][j+2] == pieceNumber) {
			pieceSize = 3;
		} else {
			pieceSize = 2;
		}
		this.buildPieceWithArguments(pieceNumber, pieceSize, i, j);
	}

	constructor(/*name, size, row, col || position, i, j*/) {
		if(arguments.length == 4) {
			this.buildPieceWithArguments(arguments[0], arguments[1], arguments[2], arguments[3]);
		} else {
			this.buildPieceFromGrid(arguments[0], arguments[1], arguments[2]);
		}
	}
}

module.exports = Piece;