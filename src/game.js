// import all sub files
//import constants from "./constants.js";
import Player from "./player.js";
import Shop from "./shop.js";
import ShopLayout from "./shop_layout.js";
//import Customer from "/src/customer";
import InputHandler from "./input_handle.js";
import Potion from "./potions.js";

const GAMESTATES = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};

//floor = "https://www.svgrepo.com/show/268102/draws-floor.svg";
//dracula: https://www.svgrepo.com/show/185586/dracula.svg
//assassin: https://www.svgrepo.com/show/299931/ninja.svg
//desk = "https://www.svgrepo.com/show/230630/desk.svg";

export default class Game {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT) {
        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;
        this.shop = new Shop(this);
        this.shop_layout = new ShopLayout();
        this.player = new Player(this,"Lajos");
        this.health_potion = new Potion(this,"Health-Regen","red","https://www.svgrepo.com/show/271526/potion.svg");
        new InputHandler(this.player, this);
        //var audio = new Audio("../assets/music/the-beat-of-nature.mp3");
        //audio.play();
    }
    draw(ctx) {
        this.shop.draw(ctx);
        this.player.draw(ctx);
        this.health_potion.draw(ctx);
    }
    update() {
        this.player.update()
    }
}