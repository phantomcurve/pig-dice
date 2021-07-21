import Game from './../src/pig-dice.js';

describe('Game', () => {
  test("should increment the lastIdUsed property and return the lastIdUsed value", () => {
    let game1 = new Game();
    let player1 = new Player()
    expect(game1.assignId().toEqual(1));
  });
});