
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var Mouse;


function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
	world = engine.world;

	let canvasmouse=Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let options=  {
		mouse: canvasmouse
	};

	mConstraint=MouseConstraint.create(engine,options);
	World.add(world,mConstraint);
     

	bob1= new Pendulum(100,400,"white");
	bob2 = new Pendulum(200,400,"white");
	bob3=new Pendulum(150,400,"white");
	bob4=new Pendulum(250,400),"white";
	bob5=new Pendulum(300,400,"white");
	rope1 = new Sling(bob1.body,{x:40,y:20});
	rope2 = new Sling(bob2.body,{x:90,y:20});
	rope3 = new Sling(bob3.body,{x:150,y:20});
	rope4 = new Sling(bob4.body,{x:210,y:20});
	rope5 = new Sling(bob5.body,{x:260,y:20});
}


function draw() {
  Engine.update(engine)

  rectMode(CENTER);
  background(255);
  
  bob2.display();
  bob1.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display(); 
  rope5.display(); 
  
  drawSprites();
 
}

function mouseDragged()    {
	Matter.Body.setPosition(pendulum.Body,{x:mouseX,y:mouseY})
}



