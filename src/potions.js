export default class Potion {
    constructor(game,name,type,texture) {
        this.name = name;
        this.type = type;
        this.texture = new Image();
        this.texture.src = texture; // https://www.svgrepo.com/show/271526/potion.svg
        this.position = {
            x: 215,
            y: 15
        };
    }
    draw(ctx) {
        ctx.drawImage(this.texture,this.position.x,this.position.y,70,70);
    }
}