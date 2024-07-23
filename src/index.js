import Game from "./game.js";

const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = CANVAS_WIDTH*0.5625;

let game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);

function game_loop(timestamp) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(game_loop);
}

requestAnimationFrame(game_loop)