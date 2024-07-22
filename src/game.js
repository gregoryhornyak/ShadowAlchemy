// import all sub files
import Player from "/src/player";
import Shop from "/src/shop";
import Customer from "/src/customer";
import InputHandler from "src/input_handle";

const GAMESTATES = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};

//wall = "https://www.svgrepo.com/show/178610/brick-wall-wall.svg";
//dracula: https://www.svgrepo.com/show/185586/dracula.svg
//assassin: https://www.svgrepo.com/show/299931/ninja.svg
//desk = "https://www.svgrepo.com/show/230630/desk.svg";

export default class Game {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT) {
        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;    
        this.player = new Player(this,"Lajos");
        new InputHandler(this.player);
    }
    draw(ctx) {
        this.player.draw(ctx);
    }
    update() {
        console.log("Updated.")
    }
}