var Game = require('../game.js')

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    var myGame = new Game("position");
    expect(myGame.position).toBe("position");
  });
});