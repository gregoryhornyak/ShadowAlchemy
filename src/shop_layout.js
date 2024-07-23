export default class ShopLayout {
    constructor() {
        // [B]locked, [S]helf, [W]all, [A]vailable, [G]ate, [D]esk 
        this.layout = [
            "W","W","W","W","W","W","W","W","W","W",
            "W","W","W","S","S","A","G","A","A","W",
            "W","S","A","A","A","A","W","A","S","W", 
            "W","D","D","D","D","D","W","A","S","W",
            "W","A","A","A","A","A","W","A","S","W",
            "W","A","A","A","A","A","W","W","W","W"
        ];

    }
    get_tile(x,y) {
        return this.layout[10*y+x]
    }
}