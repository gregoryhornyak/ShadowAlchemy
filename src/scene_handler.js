import Shop from "./shop.js";
import Garden from "./garden.js";

export default class SceneHandler {
    constructor(game,starting_scene) {
        this.game = game;
        this.garden = new Garden(game);
        this.shop = new Shop(game);
        // change current scene to object, then access ".name"
        this.current_scene = starting_scene // starting scene: shop
    }
    change_scene(target_scene) {
        console.log(`Change scene to ${target_scene}.`);
        this.current_scene = target_scene;
        return 0;
    }
    render_scene(ctx) {
        console.log(`Current scene: ${this.current_scene}`)
        if (this.current_scene == "shop") {
            console.log("rendering shop");
            this.shop.draw(ctx);
            return 0;
        }
        if (this.current_scene == "garden") {
            console.log("rendering garden");
            this.garden.draw(ctx);
            return 0;
        }
    }
}