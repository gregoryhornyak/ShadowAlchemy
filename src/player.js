export default class Player {
    constructor(game,name) {
        this.name = name;
        this.inventory = [];

        this.size = 100;
        this.texture = new Image();
        this.texture.src = "https://www.svgrepo.com/show/312832/person.svg";
        //check if size is smaller than game size
        //this.texture.height
        //this.texture.width
        this.position = {
            x: 700,
            y: 200  
        };
        // for smooth moving, using target tiles to help the animation.
        this.target_tile = {
            x: 700,
            y: 200
        };
        this.speed = 10;
        this.unit = 100;
        this.key_locked = false;
    }
    draw(ctx) {
        ctx.drawImage(this.texture,this.position.x,this.position.y,this.size,this.size);  
        //ctx.fillStyle = "red";
        //ctx.beginPath();
        //ctx.arc(this.position.x+50, this.position.y+50, 50-8, 0, 2 * Math.PI);
        //ctx.fill();
    }
    update() {
        console.log(`pos-x: ${this.position.x}, pos-y: ${this.position.y}`)
        if (this.target_tile.x != this.position.x || this.target_tile.y != this.position.y){
            // work out universal math here
            // for x - horizontal movement
            if (this.target_tile.x < this.position.x) {
                this.position.x -= this.speed;
            }
            if (this.target_tile.x > this.position.x) {
                this.position.x += this.speed;
            }
            if (Math.abs(this.position.x - this.target_tile.x) < this.speed) {
                this.position.x = this.target_tile.x;
            }
            // for y - vertical movement
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
        else {
            this.key_locked = false;
        }
    }
    // snap to grid
    snap_to_grid(current_position) {
        let remainder = current_position % this.unit;
        //console.log(current_position + ", " + remainder);
        if (remainder < this.unit/2) {
            return current_position - remainder;
        }
        else {
            return current_position + remainder;
        }
    }
    move_left() {
        if (this.key_locked == true) {return 0}
        this.target_tile.x = this.position.x - this.unit;
        this.target_tile.x = this.snap_to_grid(this.target_tile.x);
        this.key_locked = true;
    }
    move_right() {
        if (this.key_locked == true) {return 0}
        this.target_tile.x = this.position.x + this.unit;
        this.target_tile.x = this.snap_to_grid(this.target_tile.x);
        this.key_locked = true;
    }
    move_up() {
        if (this.key_locked == true) {return 0}
        this.target_tile.y = this.position.y + this.unit;
        this.target_tile.y = this.snap_to_grid(this.target_tile.y);
        this.key_locked = true;
    }
    move_down() {
        if (this.key_locked == true) {return 0}
        this.target_tile.y = this.position.y - this.unit;
        this.target_tile.y = this.snap_to_grid(this.target_tile.y);
        this.key_locked = true;
    }
}