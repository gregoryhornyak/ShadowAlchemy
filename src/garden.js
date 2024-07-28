import GardenLayout from "./garden_layout.js"

export default class Garden 
{
    constructor()
    {
        this.garden_layout = new GardenLayout();
    }

    draw(ctx) 
    {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 1000, 700);

        //Gets constans from layout and draws tiles
        for (let column = 0; column < this.garden_layout.columns; column++)
        {
            for (let row = 0; row < this.garden_layout.rows; row++) 
            {
                const tile = this.garden_layout.get_tile(column, row);
                const x = column * this.garden_layout.square_size;
                const y = row * this.garden_layout.square_size;
                const tile_size = this.garden_layout.square_size;

                //draw_tile(tile, tile_size, x, y);
                switch (tile)
                {  
                    case "Fl": 
                        ctx.fillStyle = "#4c2512"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        ctx.fillStyle = "#52a523"
                        ctx.fillRect(x+10,y, tile_size-10, tile_size)
                        break;
                    case "Ftl": 
                        ctx.fillStyle = "#4c2512"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        ctx.fillStyle = "#52a523"
                        ctx.fillRect(x+10,y+10, tile_size-10, tile_size-10)
                        break;
                    case "Ft": 
                        ctx.fillStyle = "#4c2512"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        ctx.fillStyle = "#52a523"
                        ctx.fillRect(x,y+10, tile_size, tile_size-10)
                        break;
                    case "Ftr":
                        ctx.fillStyle = "#4c2512"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        ctx.fillStyle = "#52a523"
                        ctx.fillRect(x,y+10, tile_size-10, tile_size-10)
                        break;
                    case "Fr": 
                        ctx.fillStyle = "#4c2512"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        ctx.fillStyle = "#52a523"
                        ctx.fillRect(x,y, tile_size-10, tile_size)
                        break;
                    case "G": 
                        ctx.fillStyle = "#462d1b"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        break;
                    case "W": 
                        ctx.fillStyle = "#7f7d9c"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        break;
                    case "P": 
                        ctx.fillStyle = "#e4ccbb"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        break;
                    case "D": 
                        ctx.fillStyle = "#fbf8f6"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        break;
                    default: //Missing texture / error
                        ctx.fillStyle = "#000000"
                        ctx.fillRect(x,y, tile_size, tile_size)
                        break;
                }
            }
        }
    }
}
