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
    }
    draw(ctx) {
        //ctx.drawImage(this.texture,this.position.x,this.position.x,300*this.size,300*this.size);  
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.position.x+50, this.position.y+50, 50, 0, 2 * Math.PI);
        ctx.fill();
    }
    update(deltaTime) {
        this.position.x += this.speed;
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width;
        }
    }
    move_from_current_tile_to(direction) {
        if (direction == "left") {
            
        }
    }
    move_left() {
        target_tile = this.move_from_current_tile_to("left");
    }
    move_right() {
        target_tile = this.move_from_current_tile_to("right");
    }
    move_up() {
        target_tile = this.move_from_current_tile_to("up");
    }
    move_down() {
        target_tile = this.move_from_current_tile_to("down");
    }
}