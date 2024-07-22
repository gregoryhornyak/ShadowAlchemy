export default class Customer {
    constructor(game,name,customer_class,need) {
        this.name = name;
        this.customer_class = customer_class;
        this.need = need;
        this.inventory = [];
        this.is_satisfied = false;

        this.size = 10;
        this.texture = new Image();
        this.texture.src = "https://www.svgrepo.com/show/49407/scientist.svg";
        //check if size is smaller than game size
        //this.texture.height
        //this.texture.width
        this.position = {
            x: 0,
            y: 0
        };
    }
    draw(ctx) {
        ctx.drawImage(this.texture,this.position.x,this.position.x,300,300);  
    }
    update(deltaTime) {
        this.position.x += this.speed;
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width;
        }
    }
}