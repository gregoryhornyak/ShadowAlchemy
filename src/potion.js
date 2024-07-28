export default class Potion {
    constructor(game) {//,name,type,texture) {
        this.name = "Health-Regen";
        this.type = "red";
        this.texture = new Image();
        this.texture.src = "https://www.svgrepo.com/show/271526/potion.svg"
        this.position = {
            x: 100,
            y: 100
        };
    }
    draw(ctx) {
        ctx.drawImage(this.texture,this.position.x+20,this.position.y+20,100-40,100-40);
    }
}