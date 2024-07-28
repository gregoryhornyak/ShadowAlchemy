export default class EventHandler {
    constructor(game) {
        this.game = game;
    }
    check_enter_garden() {
        if (this.game.player.position.x == 800 && this.game.player.position.y == 0) {
            if (this.game.sceneHandler.current_scene != "garden") {
                console.log("enter garden");
                this.game.sceneHandler.change_scene("garden");
                this.game.player.position.x = 0;
                this.game.player.position.y = 0;
                this.game.player.target_tile.x = 0;
                this.game.player.target_tile.y = 0;
            }
        }
        else {return 0}
    }
    check_enter_shop() {
        if (this.game.player.position.x == 100 && this.game.player.position.y == 600) {
            if (this.game.sceneHandler.current_scene != "shop") {
                console.log("enter shop");
                this.game.sceneHandler.change_scene("shop");
                this.game.player.position.x = 0;
                this.game.player.position.y = 0;
                this.game.player.target_tile.x = 0;
                this.game.player.target_tile.y = 0;
            }
        }
        else {return 0}
    }
    update() {
        this.check_enter_garden();
        this.check_enter_shop();
    }
}