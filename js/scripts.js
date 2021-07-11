// Business Logic for Pig Dice 

function Player(name) {
  this.name = name;
  this.gameScore = 0;
  this.turnScore = 0;
} 

function Game() {
  this.players = {};
  this.currentId = 0;
  this.currentPlayer = 1;
}

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Game.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
};