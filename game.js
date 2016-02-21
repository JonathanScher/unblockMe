"use strict";
var Piece = require('./piece.js');

let thereIsAPieceHere = function(pieceNumber) {
	return pieceNumber > 0;
}

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
				if(thereIsAPieceHere(pieceNumber)) {
					let piece = new Piece(position, i, j);
					pieces[pieces.length] = piece;
					j += piece.size - 1;
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