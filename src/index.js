import Constants from "./constants.js";
import Game from "./game.js";


const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

let constants = new Constants();
let game = new Game(constants.CANVAS_WIDTH, constants.CANVAS_HEIGHT);

function game_loop(timestamp) {
    ctx.clearRect(0, 0, constants.CANVAS_WIDTH, constants.CANVAS_HEIGHT);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(game_loop);
}

requestAnimationFrame(game_loop)