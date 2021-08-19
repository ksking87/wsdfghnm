const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
ground=new Base(0,height-10,width*2,20,true)
oi=new Base(300,height/2+50,600,100,true)
oiboi=new Base(width-300,height/2+50,600,100,true)
bridge=new Bridge(15,{x:width/2-400,y:height/2})
joint=new Base(width-500,height/2+10,40,20,true)
Matter.Composite.add(bridge.body,joint)
link=new Link(bridge,joint)
}

function draw() {
  background(51);
  Engine.update(engine);
 ground.show()
 oiboi.show()
 oi.show()
   bridge.show()
}
