Test 1: Player constructor
Test 2: Game constructor
Test 3: Assign ID
Test 4: Add Player
Test 5: Find Current Player
Test 6: Die Roll
Test 7: Tally Turn Score
Test 8: Winner Check
Test 9: Switch Player
Test 10: End Turn
Test 11: New Game

Describe: Player()
Test: "It will create Player instances with properties Name, GameScore, TurnScore, and Id"
Expect(let player = new Player("Jimmy")).toEqual(Player { name: "Jimmy", gameScore: 0, turnScore: 0 })

Describe: Gameconstructor
Test: "It will create a game that contains the properties players, lastIdUsed and CurrentPlayer"
Expect(let game1 = new Game()).toEqual(Game { players{}, lastIdUsed: 0, currentPlayer: 1})

Describe: Game.prototype.assignId()
Test: "It will increment the lastIdUsed property and return the lastIdUsed value"
Expect(game1.assignId()).toEqual({ players{}, lastIdUsed: 1, currentPlayer: 1})

Describe: Game.prototype.addPlayer()
Test: "It will take a player instance as an argument, its gonna call the assign ID method, its gonna assign a player Id value to that instance, the it wil add that instance to the games players property.
Expect(game1.addPlayer("Jimmy")).toEqual({ players{1 { name: "Jimmy", gameScore: 0, turnScore: 0 }, lastIdUsed: 1, currentPlayer: 1})

Describe: Game.prototype.findCurrentPlayer()
Test: "It will check the value of the current player property and return the value of the matching ID."
Expect(game1.findCurrentPlayer()).toEqual(Game {1 {name: "Jimmy", gameScore: 0, turnScore: 0}})

Describe: Game.prototype.dieRoll()
Test: "It will generate a random whole number between 1 and 6, inclusive"
Expect(game1.prototype.dieRoll()).toEqual(1 or 2 or 3 or 4 or 5 or 6)