export default class Player {
    constructor(game,name) {
        this.name = name;
        this.inventory = [];

        this.size = 1;
        this.texture = new Image();
        this.texture.src = "https://www.svgrepo.com/show/49407/scientist.svg";
        //check if size is smaller than game size
        //this.texture.height
        //this.texture.width
        this.position = {
            x: 0,
            y: 0
        };
        // for smooth moving, using target tiles to help the animation.
        this.target_tile = {
            x: 0,
            y: 0
        };
    }
    draw(ctx) {
        //ctx.drawImage(this.texture,this.position.x,this.position.x,300*this.size,300*this.size);  
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.position.x+50, this.position.y+50, 50, 0, 2 * Math.PI);
        ctx.fill();
    }
    update(deltaTime) {
        if (target_tile.x != this.position.x || target_tile.y != this.position.y)
        this.position.x += this.speed;
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width;
        }
    }
    move_left() {
        target_tile.x = this.position.x - unit;
    }
    move_right() {
        target_tile.x = this.position.x + unit;
    }
    move_up() {
        target_tile.y = this.position.y - unit;
    }
    move_down() {
        target_tile.y = this.position.y + unit;
    }
}