"use strict";
var Game = require('../game.js')
var Piece = require('../piece.js')

describe("Game creation", function() {
  it("creates a game with one short piece", function() {
    let myGame = new Game(
    	[
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[1,1,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    	]);
    let myPiece = new Piece(1, 2, 2, 0);
    expect(myGame.pieces.length).toBe(1);
    expect(myGame.pieces).toEqual([myPiece]);
  });

  it("creates a game with one long piece", function() {
    let myGame = new Game(
    	[
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[1,1,1,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    	]);
    let myPiece = new Piece(1, 3, 2, 0);
    expect(myGame.pieces.length).toBe(1);
    expect(myGame.pieces).toEqual([myPiece]);
  });
});


describe("Winning position", function() {
  it("is a winning position when the only piece is not blocked", function() {
    let myGame = new Game(
    	[
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[1,1,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    	]);
    expect(myGame.won()).toBe(true);
  });

  xit("is not a winning position when another piece is in the way", function() {
    let myGame = new Game(
    	[
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[1,1,0,0,0,2],
    		[0,0,0,0,0,2],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    	]);
    expect(myGame.won()).toBe(false);
  });
});