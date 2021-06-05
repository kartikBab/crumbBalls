
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin
var ground
var wastePaper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

  dustbin1 = new Dustbin(680,650,15,70);
  dustbin2 = new Dustbin(760,650,15,70);
  dustbin3 = new Dustbin(720,675,70,15);
  wastePaper = new WastePaper(30,280,10,10);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  wastePaper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
} 

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(wastePaper.body,wastePaper.body.position,{x:85,y:-85})
	}
}

