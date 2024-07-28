export default class Potion {
    constructor(game) {//,name,type,texture) {
        this.game = game;
        this.name = "Health-Regen";
        this.type = "red";
        this.texture = new Image();
        this.texture.src = "https://www.svgrepo.com/show/271526/potion.svg"
        this.position = {
            x: 100,
            y: 100
        };
        this.is_obtained = false;
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