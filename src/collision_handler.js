export default class CollisionHandler {
    constructor(game) {
        this.game = game;
        this.scene_layout = this.game.sceneHandler.shop.layout;
        // load in scene layout details
        // load in player position and target_tile more importantly
        //   because the target tile is the future location, 
        //   so player wont be kicked back
        // check if player target_tile position is overlapping with a block
        // if yes, set player target_tile to previous target_tile
    }
    handle_collision() {
        let target_tile_x = this.game.player.target_tile.x;
        let target_tile_y = this.game.player.target_tile.y;
        console.log(`target-x: ${target_tile_x}, target-y: ${target_tile_y}`)
        // later on "tile.is_obstacle" attribute will be used
        if (this.scene_layout.get_tile(target_tile_x/100,target_tile_y/100) == "W") {
            //collision detected
            console.log("collision detected");
            this.game.player.will_collide = true;
        }
        else {return 0;}
    }
    change_scene_layout(scene) {
        if (scene == "shop") {
            this.scene_layout = this.game.sceneHandler.shop.layout;
        }
        if (scene == "garden") {
            this.scene_layout = this.game.sceneHandler.garden.layout;
        }
    }
    update() {
        this.handle_collision();
        this.change_scene_layout(this.game.sceneHandler.current_scene);
    }
}