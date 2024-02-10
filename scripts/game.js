// Javascript structures
// game { object }
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

// newGame ()
function newGame () {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
}

// addTurns () 1) clear playerMoves, 2)randomly add a buttonID to current game array 3) call shoowTurns
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random)* 4)]);
    //showTurns()
}
// showTurns ()
// lightsOn()
// playerTurns()
// showScore ()
function showScore () {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn };
