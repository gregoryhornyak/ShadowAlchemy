export default class EventHandler {
    constructor(game) {
        this.game = game;
    }
    check_enter_garden() {
        if (this.game.player.position.x == 800 && this.game.player.position.y == 0) {
            if (this.game.sceneHandler.current_scene != "garden") {
                console.log("enter garden");
                this.game.sceneHandler.change_scene("garden");
                this.game.player.position.x = 100;
                this.game.player.position.y = 500;
                this.game.player.target_tile.x = 100;
                this.game.player.target_tile.y = 500;
            }
        }
        else {return 0}
    }
    check_enter_shop() {
        if (this.game.player.position.x == 100 && this.game.player.position.y == 600) {
            if (this.game.sceneHandler.current_scene != "shop") {
                console.log("enter shop");
                this.game.sceneHandler.change_scene("shop");
                this.game.player.position.x = 800;
                this.game.player.position.y = 100;
                this.game.player.target_tile.x = 800;
                this.game.player.target_tile.y = 100;
            }
        }
        else {return 0}
    }
    check_selection() {
        if (this.game.player.position.x == 100 && this.game.player.position.y == 200) {
            if (this.game.sceneHandler.current_scene == "shop") {
                //console.log("enable selection")
                this.game.selection.enable();
            }
        }
        else {
            if (this.game.sceneHandler.current_scene == "shop") {
                this.game.selection.disable();
            }
        }
    }
    check_player_interaction() {
        if (this.game.player.init_interact == true) {
            if (this.game.potion.is_obtained == false) {
                console.log("Player grabbed potion.")
                this.game.potion.is_obtained = true;
                this.game.player.init_interact = false;
            }
            // check what the player is trying to interact with
            // check if available
            // interaction: 
            // - object becomes child of player,
            // - player inventory changes, plus its texture maybe to show item in hand
        }
    }
    check_player_collision() {
        if (this.game.player.will_collide == true) {
            console.log("Player will collide")
            this.game.player.target_tile.x = this.game.player.source_tile.x;
            this.game.player.target_tile.y = this.game.player.source_tile.y;
            this.game.player.will_collide = false;
        }
    }
    update() {
        this.check_enter_garden();
        this.check_enter_shop();
        this.check_selection();
        this.check_player_interaction();
        this.check_player_collision();
    }
}