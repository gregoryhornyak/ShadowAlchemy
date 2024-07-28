export default class TileRender {
    constructor() {}

    fence_left(ctx,x,y,tile_size) {
        ctx.fillStyle = "#4c2512"
        ctx.fillRect(x,y, tile_size, tile_size)
        ctx.fillStyle = "#52a523"
        ctx.fillRect(x+10,y, tile_size-10, tile_size)
    }
    fence_right(ctx,x,y,tile_size) {
        ctx.fillStyle = "#4c2512"
        ctx.fillRect(x,y, tile_size, tile_size)
        ctx.fillStyle = "#52a523"
        ctx.fillRect(x,y, tile_size-10, tile_size)
        }
    fence_top(ctx,x,y,tile_size) {
        ctx.fillStyle = "#4c2512"
        ctx.fillRect(x,y, tile_size, tile_size)
        ctx.fillStyle = "#52a523"
        ctx.fillRect(x,y+10, tile_size, tile_size)
    }
    wall(ctx,x,y,tile_size) {
        ctx.fillStyle = "#34495E"
        ctx.fillRect(x,y, tile_size, tile_size)
    }
    ground(ctx,x,y,tile_size) {
        ctx.fillStyle = "#462d1b"
        ctx.fillRect(x,y, tile_size, tile_size)
    }
    path(ctx,x,y,tile_size) {
        ctx.fillStyle = "#e4ccbb"
        ctx.fillRect(x,y, tile_size, tile_size)
    }
    door(ctx,x,y,tile_size) {
        ctx.fillStyle = "#DC7633"
        ctx.fillRect(x,y+30, tile_size, tile_size-60)
    }
    door_right(ctx,x,y,tile_size) {
        ctx.fillStyle = "#DC7633"
        ctx.fillRect(x+30,y, tile_size-60, tile_size)
    }
    table(ctx,x,y,tile_size) {
        ctx.fillStyle = "#964B00"
        ctx.fillRect(x,y, tile_size, tile_size)
    }
    floor(ctx,x,y,tile_size) {
        ctx.fillStyle = "#E5E7E9"
        ctx.fillRect(x,y, tile_size, tile_size)
    }
    /**
     * canvas, layout 
     */
    draw(ctx,layout)
    {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 1000, 700);

        //Gets constans from layout and draws tiles
        for (let column = 0; column < layout.columns; column++)
        {
            for (let row = 0; row < layout.rows; row++) 
            {
                const tile = layout.get_tile(column, row);
                const x = column * layout.square_size;
                const y = row * layout.square_size;
                const tile_size = layout.square_size;

                //draw_tile(tile, tile_size, x, y);
                switch (tile)
                {  
                    case "Fl": 
                        this.fence_left(ctx,x,y,tile_size);
                        break;
                    case "Ftl": 
                        this.fence_left(ctx,x,y,tile_size);
                        break;
                    case "Ft": 
                        this.fence_top(ctx,x,y,tile_size);
                        break;
                    case "Ftr":
                        this.fence_right(ctx,x,y,tile_size);
                        break;
                    case "Fr": 
                        this.fence_right(ctx,x,y,tile_size);
                        break;
                    case "G": 
                        this.ground(ctx,x,y,tile_size);
                        break;
                    case "W": 
                        this.wall(ctx,x,y,tile_size);
                        break;
                    case "P": 
                        this.path(ctx,x,y,tile_size);
                        break;
                    case "D": 
                        this.door(ctx,x,y,tile_size);
                        break;
                    case "DR": 
                        this.door_right(ctx,x,y,tile_size);
                        break;
                    case "F": 
                        this.floor(ctx,x,y,tile_size);
                        break;
                    case "T": 
                        this.table(ctx,x,y,tile_size);
                        break;
                    default: //Missing texture or error
                        ctx.fillStyle = "#000000"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        break;
                }
            }
        }
    }
}
