import Constants from "./constants.js";
import Game from "./game.js";

let canvas;
let ctx;

window.onload = init;

function init(){
    canvas = document.getElementById('game_canvas');
    ctx = canvas.getContext('2d');

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}

let constants = new Constants();
let game = new Game(constants.CANVAS_WIDTH, constants.CANVAS_HEIGHT);

//window.requestAnimationFrame(gameLoop);

function gameLoop() {
    ctx.clearRect(0, 0, constants.CANVAS_WIDTH, constants.CANVAS_HEIGHT);
    game.update(ctx);
    game.draw(ctx);
    window.requestAnimationFrame(gameLoop);
}
