export default class Player {
    constructor(game) {
        this.grid_width = 10;
        this.grid_height = 6;
        this.square_size = 100;
    }
    draw(ctx) {
        ctx.fillStyle = "#6e4c31";
        ctx.fillRect(0, 0, 1000, 1000*0.6);
        // draw tiles
        let square_size = this.square_size;
        for (let i = 0; i < this.grid_width; i++) {
            for (let j = 0; j < this.grid_height; j++) {
                ctx.fillStyle = "black";
                ctx.fillRect((i)*square_size, (j)*square_size, square_size-2, square_size-2);
                ctx.fillStyle = "yellow";
                ctx.fillRect((i)*square_size+4, (j)*square_size+4, square_size-8, square_size-8);
            }
        }        
        //wall
        ctx.fillStyle = "orange";
        ctx.fillRect(6*this.square_size,0,this.square_size,6*this.square_size);
        //desk
        ctx.fillStyle = "brown";
        ctx.fillRect(0,3*this.square_size,6*this.square_size,1*this.square_size);
    }
}