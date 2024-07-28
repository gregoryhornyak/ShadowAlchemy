import ShopLayout from "./shop_layout.js";

export default class Shop {
    constructor(game) {
        this.name = "shop";
        this.grid_width = 10;
        this.grid_height = 6;
        this.square_size = 100;
        this.game = game;
        this.layout = new ShopLayout();
    }
    draw(ctx) {
        
        this.game.tileRenderer.draw(ctx, this.layout);
    }
}
