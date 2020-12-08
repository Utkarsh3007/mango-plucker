class Tree {
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
        this.image=loadImage("tree.png")
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
    
        imageMode(CENTER)
       
        image(this.image,pos.x,pos.y,480,350)                           
    }
}