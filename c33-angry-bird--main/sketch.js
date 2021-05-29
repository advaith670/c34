const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

coach1 = new coach(300,250,50,50)

coach2 = new coach(450,250,50,50)

coach3 = new coach(600,250,50,50)

rock1 = new rock(900,300,100,50)
chain = new SlingShot(coach1.body,coach2.body)
chain1 = new SlingShot(coach2.body,coach3.body)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  coach1.show()
  rock1.show()
  coach2.show()
  coach3.show()
  chain.show()
  chain1.show()

if(coach3.isTouching(rock1)){
  Text("crash",600,200)
}

 
  }

  function keyPressed(){
 if(keyDown(RIGHT_ARROW)){
   Matter.Body.applyForce(coach3.body,{x:coach3.body.position.x,y:coach3.body.position.y},{x:0.5,y:0})
 }


  }

  
