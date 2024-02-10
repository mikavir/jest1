/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../game");


// creating a mock dom
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close()
})

// game object
describe("game object contains correct keys",() =>{
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct id's", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
    
});

// newGame() => 1) reset score to 3, 2) clear playerMoves array, 3) clear current game array
describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.currentGame = ["button1", "button2"];
        game.playerMoves = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to 0", () => {
        expect(game.score).toEqual(0);
    });
    test("clear the playerMoves array", () => {
        expect(game.playerMoves.length).toEqual(0);
    });
    test("clear the currentGame array", () => {
        expect(game.currentGame.length).toEqual(0);
    });
    test("should display 0 for the element id of score", () =>{
        expect(document.getElementById("score").innerText).toEqual(0);
    });

});