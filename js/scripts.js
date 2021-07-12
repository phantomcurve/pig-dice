// Business Logic for Pig Dice 

function Player(name) {
  this.name = name;
  this.gameScore = 0;
  this.turnScore = 0;
} 

function Game() {
  this.players = {};
  this.lastIdUsed = 0;
  this.currentPlayer = 1;
}

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
};

Game.prototype.assignId = function() {
  this.lastIdUsed += 1;
  return this.lastIdUsed;
};

Game.prototype.findCurrentPlayer = function() {
  return this.players[this.currentPlayer];
};

Game.prototype.dieRoll = function() {
  return Math.floor((Math.random() * 6) + 1);
};

//START HERE: TEST THIS CODE
Game.prototype.switchCurrentPlayer = function() {
  if (this.currentPlayer = 1) {
    this.currentPlayer = 2;
  } else {
    this.currentPlayer = 1;
  }
};