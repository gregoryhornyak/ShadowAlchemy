// import all sub files
//import constants from "./constants.js";
import Player from "./player.js";
import Selection from "./selection.js";
import TileRenderer from "./tile_renderer.js";
import InputHandler from "./input_handler.js";
import SceneHandler from "./scene_handler.js";
import EventHandler from "./event_handler.js";
import CollisionHandler from "./collision_handler.js";
import Potion from "./potion.js";
import Ingredient from "./ingredient.js";
import Customer from "./customer.js";
import CustomerHandler from "./customer_handler.js";

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
        this.customer = new Customer(this,"Sára","Vampire","blood-orange");
        this.player = new Player(this, "Lajos");
        this.potion = new Potion(this,"health-regen","red");
        this.ingredient = new Ingredient(this,"blood-orange","fruit");
        this.selection = new Selection(this);
        this.collisionHandler = new CollisionHandler(this);
        this.customerHandler = new CustomerHandler(this);
        this.eventHandler = new EventHandler(this);
        this.inputHandler = new InputHandler(this.player, this);
        //var audio = new Audio("../assets/music/the-beat-of-nature.mp3");
        //audio.play();
    }
    draw(ctx) {
        this.sceneHandler.render_scene(ctx);
        this.player.draw(ctx);
        this.customer.draw(ctx);
        this.customerHandler.draw(ctx);
        this.potion.draw(ctx);
        this.ingredient.draw(ctx);
        this.selection.draw(ctx);

    }
    update() {
        this.collisionHandler.update();
        this.customerHandler.update();
        this.eventHandler.update();
        this.player.update();
        this.customer.update();
    }
}
