export default class GardenLayout 
{
    constructor() 
    {
        /* [W] - Wall, 
           [Fl] - Fence - left,
           [Ftl] - Fence - left - top (corner),
           [Ft] - Fence - top
           [Ftr] - Fence - right - top (corner),
           [Fr] - Fence - right, 
           [G] - Ground, 
           [D] - Door, 
           [P] - Path  
        */
        this.columns = 10;
        this.rows = 7;
        this.square_size = 100;
        this.layout = [
            "Ftl","Ft","Ft","Ft","Ft","Ft","Ft","Ft","Ft","Ftr",
            "Fl" ,"P" ,"G" ,"G" ,"G" ,"G" ,"G" ,"G" ,"G" ,"Fr" ,
            "Fl" ,"P" ,"G" ,"G" ,"G" ,"G" ,"G" ,"G" ,"G" ,"Fr" ,
            "Fl" ,"P" ,"G" ,"G" ,"G" ,"G" ,"G" ,"G" ,"G" ,"Fr" ,
            "Fl" ,"P" ,"G" ,"G" ,"G" ,"G" ,"G" ,"G" ,"G" ,"Fr" ,
            "Fl" ,"P" ,"G" ,"G" ,"G" ,"G" ,"G" ,"G" ,"G" ,"Fr" ,
            "W"  ,"D" ,"W" ,"W" ,"W" ,"W" ,"W" ,"W" ,"W" ,"W"
        ];
    }
    get_tile(x,y) 
    {
        return this.layout[10*y+x] //Returns the "letter"
    }
}