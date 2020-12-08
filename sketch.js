
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 390, 1200, 20)

	boy = new Boy(300, 300, 0, 0);

	stone = new Stone(170, 235, 10);

	slingShot = new Slingshot(stone.body, { x: 260, y: 230 });

	tree = new Tree(width - 250, height - 180, 0, 0)

	mango1 = new Mango(900, 160, 10)
	mango2 = new Mango(980, 140, 10)
	mango3 = new Mango(1100, 170, 10)
	mango4 = new Mango(1140, 130, 10)
	mango5 = new Mango(1040, 100, 10)
	mango6 = new Mango(1040, 180, 10)
	mango7 = new Mango(820, 200, 10)

	Engine.run(engine);

}


function draw() {
	background("gray");
	Engine.update(engine);

	tree.display();

	ground.display();

	slingShot.display();

	boy.display();

	stone.display();

	mango1.display();
    mango2.display();
    mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	 detectCollision(mango1, stone);
	 detectCollision(mango2, stone);
     detectCollision(mango3, stone);
	  detectCollision(mango4, stone);
	  detectCollision(mango5, stone);
	  detectCollision(mango6, stone);
	  detectCollision(mango7, stone);

	


	drawSprites();

}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })
}
function mouseReleased() {
	slingShot.fly();
}
  function detectCollision(Lmango, Lstone) {
  	mangoBodyPosition = Lmango.body.position
  	stoneBodyPosition = Lstone.body.position
	  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
  	if (distance<=50) {
			  console.log("working")
			  Matter.Body.setStatic(Lmango.body,false)
	  	}
	  }
	
	