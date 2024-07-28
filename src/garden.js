import GardenLayout from "./garden_layout.js"

export default class Garden 
{
    constructor(game)
    {
        this.garden_layout = new GardenLayout();
        this.game = game;
    }

    draw(ctx) 
    {
        let layout = new GardenLayout();
        this.game.tileRenderer.draw(ctx, layout);
    }
}
