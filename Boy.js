class Boy {
    constructor(x, y, width, height) {
        var option = {
        isStatic:true,
        density:20,
        friction:100
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.x=x
        this.y=y
        this.width = width;
        this.height = height;
        this.image=loadImage("boy.png")
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
    
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,150,300)                           
    }
}