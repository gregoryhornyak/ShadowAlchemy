export default class Ingredient {
    constructor(game,name,type,texture) {//,name,type,texture) {
        this.game = game;
        this.name = "blood-orange";
        this.type = "fruit";
        this.texture = new Image();
        this.texture.src = "https://www.svgrepo.com/show/425275/orange.svg";
        this.position = {
            x: 200,
            y: 100
        };
        this.is_obtained = false;
        this.size = 50;
    }
    draw(ctx) {
        if (this.is_obtained == false) {
            ctx.drawImage(this.texture,this.position.x+20,this.position.y+20,100-40,100-40);
        }
        else { // if obtained
            ctx.drawImage(this.texture,
                this.game.player.position.x+this.game.player.size-40,
                this.game.player.position.y+this.game.player.size-40,
                40,
                40);
        }
    }
}