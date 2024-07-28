import GardenLayout from "./garden_layout.js"

export default class Garden 
{
    constructor(game)
    {
        this.name = "garden";
        this.layout = new GardenLayout();
        this.game = game;
    }

    draw(ctx) 
    {
        this.game.tileRenderer.draw(ctx, this.layout);
    }
}
