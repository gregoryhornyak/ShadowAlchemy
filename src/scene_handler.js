export default class SceneHandler {
    constructor(game,starting_scene) {
        this.game = game;
        this.current_scene = starting_scene // starting scene
    }
    change_scene(target_scene) {
        console.log(`Change scene to ${target_scene}.`);
        this.current_scene = target_scene;
        return 0;
    }
    render_scene(ctx) {
        console.log(`current scene: ${this.current_scene}`)
        if (this.current_scene == "shop") {
            console.log("rendering shop");
            this.game.shop.draw(ctx);
            return 0;
        }
        if (this.current_scene == "garden") {
            console.log("rendering garden");
            this.game.garden.draw(ctx);
            return 0;
        }
    }
}