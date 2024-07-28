export default class ShopLayout 
{
    constructor() 
    {
        /* 
            [W] - Wall, 
            [Fl] - Fence - left,
            [Flt] - Fence - left - top (corner),
            [Ft] - Fence - top
            [Frt] - Fence - right - top (corner),
            [Fr] - Fence - right, 
            [G] - Ground, 
            [D] - Door, DR - Door right
            [P] - Path   
            [T] - table,
            [P] - Path
        */
        this.columns = 10;
        this.rows = 7;
        this.square_size = 100;
        this.layout = [
            "W","W","W","W","W","W","W","W","D","W",
            "W","F","F","F","F","F","F","F","F","W",
            "W","F","F","F","F","W","F","F","F","W",
            "W","F","F","F","F","W","F","F","F","DR",
            "W","T","T","T","T","W","F","F","F","W",
            "W","F","F","F","F","W","F","F","F","W",
            "W","D","W","W","D","W","W","W","W","W"
        ];
    }
    get_tile(x,y) 
    {
        return this.layout[10*y+x]
    }
}