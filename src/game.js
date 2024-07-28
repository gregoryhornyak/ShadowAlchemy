// import all sub files
//import constants from "./constants.js";
import Player from "./player.js";
import Shop from "./shop.js";
import Garden from "./garden.js";
import Selection from "./selection.js";
import TileRenderer from "./tile_renderer.js";
import InputHandler from "./input_handler.js";
import SceneHandler from "./scene_handler.js";
import EventHandler from "./event_handler.js";
import Potion from "./potion.js";

const GAMESTATES = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
};

//floor = "https://www.svgrepo.com/show/268102/draws-floor.svg";
//dracula: https://www.svgrepo.com/show/185586/dracula.svg
//assassin: https://www.svgrepo.com/show/299931/ninja.svg
//desk = "https://www.svgrepo.com/show/230630/desk.svg";

export default class Game {
    constructor(CANVAS_WIDTH, CANVAS_HEIGHT) {
        this.gameWidth = CANVAS_WIDTH;
        this.gameHeight = CANVAS_HEIGHT;
        this.sceneHandler = new SceneHandler(this,"shop");
        this.tileRenderer = new TileRenderer();
        this.shop = new Shop(this);
        this.garden = new Garden(this);
        this.player = new Player(this, "Lajos");
        this.potion = new Potion(this);
        this.selection = new Selection(this);
        this.eventHandler = new EventHandler(this);
        this.inputHandler = new InputHandler(this.player, this);
        //var audio = new Audio("../assets/music/the-beat-of-nature.mp3");
        //audio.play();
    }
    draw(ctx) {
        this.sceneHandler.render_scene(ctx);
        this.player.draw(ctx);
        this.potion.draw(ctx);
        this.selection.draw(ctx);

    }
    update() {
        this.player.update();
        this.eventHandler.update();
    }
}
