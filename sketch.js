const Engine =Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground1,box1,box2;
function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world =engine.world;
 
 box1=new Box(100,100,50,40);
 box2=new Box(200,100,60,20);
 ground1=new Ground(400,390,800,20);
 
}

function draw() {
  background(255,1,155); 
  Engine.update(engine);
 
 box1.display();
 box2.display();
 ground1.display();
}


