export default class CustomerHandler {
    constructor(game) {
        this.game = game;
    }
    draw(ctx) {
        if (this.game.customer.need) {
            if (this.game.customer.need == "blood-orange") {
                ctx.drawImage(this.game.ingredient.texture,this.game.customer.position.x,this.game.customer.position.y,
                              this.game.ingredient.size,this.game.ingredient.size);
            }
        }
    }
    update() {
    }
}