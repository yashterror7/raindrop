const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,box1,box2;
var boxes = [];
var rain = [];

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(0); 
  Engine.update(engine);
  boxes.push(new Box());
  for (var i=0 ;i<boxes.length;i++){
    boxes[i].display();
  } 

}