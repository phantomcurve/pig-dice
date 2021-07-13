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
Expect(let player1 = new Player("Jimmy")).toEqual(Player { name: "Jimmy", gameScore: 0, turnScore: 0 })
Expect (let player2 = new Player("Jan")).toEqual(Player { name: "Jan", gamescore: 0, turnScore: 0})

Describe: Game()
Test: "It will create a game that contains the properties players, lastIdUsed and CurrentPlayer"
Expect(let game1 = new Game()).toEqual(Game { players{}, lastIdUsed: 0, currentPlayer: 1, isWon: false})

Describe: Game.prototype.assignId()
Test: "It will increment the lastIdUsed property and return the lastIdUsed value"
Expect(game1.assignId()).toEqual(Game { players{}, lastIdUsed: 1, currentPlayer: 1}, isWon: false)

Describe: Game.prototype.addPlayer()
Test: "It will take a player instance as an argument, it's gonna call the assign ID method, it's gonna assign a player Id value to that instance, then it will add that instance to the game players property.
Expect(game1.addPlayer(player1)).toEqual(Game { players{1 { name: "Jimmy", gameScore: 0, turnScore: 0 }}, lastIdUsed: 1, currentPlayer: 1, isWon: false})
Expect(game1.addPlayer(player2)).toEqual(Game { players{1 { name: "Jimmy", gameScore: 0, turnScore: 0 }}, {2 { name: "Jan", gamescore: 0, turnScore: 0}}, lastIdUsed: 2, currentPlayer: 1, isWon: false})

Describe: Game.prototype.findCurrentPlayer()
Test: "It will check the value of the current player property and return the value of the matching ID."
Expect(game1.findCurrentPlayer()).toEqual(Game {1 {name: "Jimmy", gameScore: 0, turnScore: 0}})

Describe: Game.prototype.dieRoll()
Test: "It will generate a random whole number between 1 and 6, inclusive"
Expect(game1.prototype.dieRoll()).toEqual(4)

Describe: Game.prototype.switchCurrentPlayer();
Test: "This will switch between active game players by switching the property of currentPlayer"
Expect(game1.prototype.switchCurrentPlayer)toEqual(Game { players{1 { name: "Jimmy", gameScore: 0, turnScore: 4 }}, {2 { name: "Jan", gamescore: 0, turnScore: 0}}, lastIdUsed: 2, currentPlayer: 2, isWon: false})

Describe: Game.prototype.endTurn();
Test: "It will add a players turnScore to their gameScore, reset the turnScore to zero, and call the .switchCurrentPlayer() method."
Expect(game1.endTurn(player1)).toEqual(Game { players{1 { name: "Jimmy", gameScore: 4, turnScore: 0 }}, {2 { name: "Jan", gamescore: 0, turnScore: 0}}, lastIdUsed: 2, currentPlayer: 2, isWon: false})

Describe: Game.prototype.tallyTurnScore(player, roll)
Test: "If the player rolls any number other than 1, it will take the die roll and add it to the turnScore property. If the player rolls a 1, the turnScore will be reset to 0 and the player's turn will end by calling the endTurn function."
Rolled a 4:
Expect(game1.endTurn(player1)).toEqual(Game { players{1 { name: "Jimmy", gameScore: 0, turnScore: 4 }}, {2 { name: "Jan", gamescore: 0, turnScore: 0}}, lastIdUsed: 2, currentPlayer: 1, isWon: false})
Rolled a 1:
Expect(game1.endTurn(player1)).toEqual(Game { players{1 { name: "Jimmy", gameScore: 0, turnScore: 0 }}, {2 { name: "Jan", gamescore: 0, turnScore: 0}}, lastIdUsed: 2, currentPlayer: 2, isWon: false})

<!-- Describe: Game.prototype.winnerCheck()
Test: "It will assess whether the sum of a player's gameScore value and their turnScore value is greater than or equal to 100" -->
