import ShopLayout from "./shop_layout.js";

export default class Shop {
    constructor(game) {
        this.grid_width = 10;
        this.grid_height = 6;
        this.square_size = 100;
        this.game = game;
    }
    draw(ctx) {
        let layout = new ShopLayout();
<<<<<<< HEAD
        this.game.tileRender.draw(ctx, layout);
=======
        this.game.tileRender.draw(ctx,layout);
>>>>>>> c2613dbbbff16faa3c1a879544a1e37a91a10f0d
    }
}
