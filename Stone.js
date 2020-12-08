class Stone {
    constructor(x, y,r) {
        var option = {
        isStatic:false,
        resititution:0,
        density:1.2,
        friction:1
        }
        this.x=x
        this.y=y
        this.r=r;
        this.body = Bodies.circle(x, y,r, option);

        this.image=loadImage("stone.png")
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
    
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)                           
    }
}