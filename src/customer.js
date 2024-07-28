export default class Customer {
    constructor(game,name,customer_class,need) {
        this.game = game;
        this.name = name;
        this.customer_class = customer_class;
        this.need = need;
        this.inventory;
        this.is_satisfied = false;
        this.size = 100;
        this.texture = new Image();
        this.texture.src = "https://www.svgrepo.com/show/444845/person-girl.svg";
        this.position = {
            x: 200,
            y: 500
        };
    }
    draw(ctx) {
        ctx.drawImage(this.texture,this.position.x,this.position.y,this.size,this.size);
    }
    update() {
        if (this.need == this.inventory) {
            this.is_satisfied = true;
        }
    }
}