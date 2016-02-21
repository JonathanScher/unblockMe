"use strict";
var Piece = require('./piece.js');

class Game {
	constructor(position) {
		this.position = position;
		this.pieces = this.scan(position);
	}

	scan(position) {
		let pieces = [];
		for (var i = 0; i < position.length; i++) {
			for (var j = 0; j < position[i].length; j++) {
				let pieceNumber = position[i][j];
				if(pieceNumber > 0) {
					pieces[pieces.length] = new Piece(pieceNumber, i, j);
					j++;
				}
			}
		}
		return pieces;
	}

	won(){
		return true;
	}
}

module.exports = Game;