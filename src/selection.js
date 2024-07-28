export default class Selection {
    constructor(game) {
        this.texture = new Image();
        this.texture.src = "https://www.svgrepo.com/show/408964/selection.svg";
        this.position = {
            x: 100,
            y: 100
        };
        this.is_enabled = false;
    }
    enable() {
        this.is_enabled = true;
    }
    disable() {
        this.is_enabled = false;
    }
    draw(ctx) {
        if (this.is_enabled == true) {
            ctx.drawImage(this.texture,this.position.x+10,this.position.y+10,100-20,100-20);
        }
    }
}