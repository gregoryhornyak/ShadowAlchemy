export default class Shop {
    constructor(game) {
        this.grid_width = 10;
        this.grid_height = 6;
        this.square_size = 100;
    }
    draw(ctx) {
        let layout = new ShopLayout();
        this.game.tileRender.draw(ctx, layout);
    }
}
