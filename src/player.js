export default class Player {
    constructor(game,name) {
        // frontend details
        this.name = name;
        this.inventory = [];
        this.texture = new Image();
        this.texture.src = "https://www.svgrepo.com/show/312832/person.svg";
        this.size = 100;
        // backend details
        this.position = {
            x: 700,
            y: 200  
        };
        // for moving, using target tiles to help the animation.
        // source tile defines the starting point
        this.source_tile = {
            x: 700,
            y: 200
        };
        // target tile defines the ending point
        // of the animation
        this.target_tile = {
            x: 700,
            y: 200
        };
        // by using source and target tiles, animation could be smoothed out 
        // with curves: calculate distance between source and target,
        // and depending on the distance, change the speed of the player
        // simplest curve: bell curve.
        this.speed = 10;
        this.unit = 100;
        this.key_locked = false;
        this.init_interact = false;
        this.will_collide = false;
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
    store_source_tile() {
        this.source_tile.x = this.position.x;
        this.source_tile.y = this.position.y;
    }
    move_left() {
        if (this.key_locked == true) {return 0}
        this.store_source_tile();
        this.target_tile.x = this.position.x - this.unit;
        this.target_tile.x = this.snap_to_grid(this.target_tile.x);
        this.key_locked = true;
    }
    move_right() {
        if (this.key_locked == true) {return 0}
        this.store_source_tile();
        this.target_tile.x = this.position.x + this.unit;
        this.target_tile.x = this.snap_to_grid(this.target_tile.x);
        this.key_locked = true;
    }
    move_up() {
        if (this.key_locked == true) {return 0}
        this.store_source_tile();
        this.target_tile.y = this.position.y + this.unit;
        this.target_tile.y = this.snap_to_grid(this.target_tile.y);
        this.key_locked = true;
    }
    move_down() {
        if (this.key_locked == true) {return 0}
        this.store_source_tile();
        this.target_tile.y = this.position.y - this.unit;
        this.target_tile.y = this.snap_to_grid(this.target_tile.y);
        this.key_locked = true;
    }
    interact() {
        this.init_interact = true;
    }
}