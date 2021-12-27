
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  

  var ball_options = {
    restitution : 0.9,
    frictionAir : 0.01
  }

  balltwo = Bodies.circle(150,20,20,ball_options);
  World.add(world,balltwo);

  ball = Bodies.circle(100,20 , 20 , ball_options);
  World.add(world , ball);


  ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(0,350,400,20,ground_options);
  World.add(world,ground);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x , ball.position.y , 20);
  rect(ground.position.x, ground.position.y,400 , 20);
  ellipse(balltwo.position.x , balltwo.position.y , 20);
}

