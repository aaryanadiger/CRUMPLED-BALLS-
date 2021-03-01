
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbinp1, dustbinp2, dustbinp3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,690,30);

	ground = new Ground(400,height,1200,20);

	dustbinp1 = new Dustbin(460,620,20,100);
	dustbinp2 = new Dustbin(640,620,20,100);
	dustbinp3 = new Dustbin(550,680,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();

  ground.display();

  dustbinp1.display();
  dustbinp2.display();
  dustbinp3.display();


  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:37,y:-30});
	   }
   }
   


