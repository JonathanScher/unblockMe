"use strict";
let Piece = require("../piece.js");

describe("Piece creation", function() {
  it("creates a piece with coordinates", function() {
    let piece = new Piece(1, 2, 3, 0);
    expect(piece.name).toBe(1);
    expect(piece.size).toBe(2);
    expect(piece.row).toBe(3);
    expect(piece.col).toBe(0);
  });
});