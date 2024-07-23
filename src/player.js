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
        this.speed = 10;
        this.unit = 100;
    }
    draw(ctx) {
        //ctx.drawImage(this.texture,this.position.x,this.position.x,300*this.size,300*this.size);  
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.position.x+50, this.position.y+50, 50-8, 0, 2 * Math.PI);
        ctx.fill();
    }
    update() {
        if (this.target_tile.x != this.position.x || this.target_tile.y != this.position.y){
            // work out universal math here
            if (this.target_tile.x < this.position.x) {
                this.position.x -= this.speed;
            }
            if (this.target_tile.x > this.position.x) {
                this.position.x += this.speed;
            }
            if (Math.abs(this.position.x - this.target_tile.x) < this.speed) {
                this.position.x = this.target_tile.x;
            }
            if (this.target_tile.y < this.position.y) {
                this.position.y -= this.speed;
            }
            if (this.target_tile.y > this.position.y) {
                this.position.y += this.speed;
            }
            if (Math.abs(this.position.y - this.target_tile.y) < this.speed) {
                this.position.y = this.target_tile.y;
            }
        }
    }
    // snap to grid
    snap_to_grid(current_position) {
        let remainder = current_position % this.unit;
        if (remainder < this.unit/2) {
            return current_position - remainder;
        }
        else {
            return current_position + remainder;
        }
    }
    move_left() {
        this.target_tile.x = this.position.x - this.unit;
        this.target_tile.x = this.snap_to_grid(this.target_tile.x);
    }
    move_right() {
        this.target_tile.x = this.position.x + this.unit;
        this.target_tile.x = this.snap_to_grid(this.target_tile.x);
    }
    move_up() {
        this.target_tile.y = this.position.y + this.unit;
        this.target_tile.y = this.snap_to_grid(this.target_tile.y);
    }
    move_down() {
        this.target_tile.y = this.position.y - this.unit;
        this.target_tile.y = this.snap_to_grid(this.target_tile.y);
    }
}