// // Javascript structures
// // game { object }
// let game = {
//     score: 0,
//     currentGame: [],
//     playerMoves: [],
//     choices: ["button1", "button2", "button3", "button4"],
// }

// // newGame ()
// function newGame () {
//     game.score = 0;
//     game.playerMoves = [];
//     game.currentGame = [];
//     showScore();
//     addTurn();
// }

// // addTurns () 1) clear playerMoves, 2)randomly add a buttonID to current game array 3) call shoowTurns
// function addTurn() {
//     game.playerMoves = [];
//     game.currentGame.push(game.choices[(Math.floor(Math.random)* 4)]);
//     //showTurns()
// }
// // showTurns ()
// // lightsOn()
// function lightsOn2(circ) {
//     document.getElementById(circ).classList.add("light");
//     setTimeout(() => {
//         document.getElementById(circ).classList.remove("light");
//     }, 400);
// } 

// function lightsOn(circ) {
//     document.getElementById(circ).classList.add("light");
//     setTimeout(function () {
//         document.getElementById(circ).classList.remove("light");
//     }, 400);
// }

// // playerTurns()
// // showScore ()
// function showScore () {
//     document.getElementById("score").innerText = game.score;
// }

// module.exports = { game, newGame, showScore, addTurn, lightsOn };

let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn, lightsOn };