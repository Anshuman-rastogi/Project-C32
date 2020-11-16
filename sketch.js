const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;

var base1, base2, ground;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;

var block17, block18, block19, block20, block21;
var block22, block23, block24;
var block25;

var ball;

var slingShot;

var score = 0;

var bkgImg;

function preload(){
  getBgImage();
}

function setup() {
  createCanvas(900,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,390,1000,20);
  //level 1
  block1 = new Block(320,275,30,40,color(135,206,234));
  block2 = new Block(350,275,30,40,color(135,206,234));
  block3 = new Block(380,275,30,40,color(135,206,234));
  block4 = new Block(410,275,30,40,color(135,206,234));
  block5 = new Block(440,275,30,40,color(135,206,234));
  block6 = new Block(470,275,30,40,color(135,206,234));
  block7 = new Block(500,275,30,40,color(135,206,234));

  //level 2
  block8 = new Block(350, 235, 30, 40,color(255,192,203));
  block9 = new Block(380, 235, 30, 40,color(255,192,203));
  block10 = new Block(410, 235, 30, 40,color(255,192,203));
  block11 = new Block(440, 235, 30, 40,color(255,192,203));
  block12 = new Block(470, 235, 30, 40,color(255,192,203));

  //level 3
  block13 = new Block(380, 195, 30, 40,color(63,224,208));
  block14 = new Block(410, 195, 30, 40,color(63,224,208));
  block15 = new Block(440, 195, 30, 40,color(63,224,208));

  //level 4
  block16 = new Block(410, 155, 30, 40,color(226, 77, 77));

  base1 = new Ground(410,300,250,10);


  //level1
  block17 = new Block(660,175,30,40,color(61, 211, 176));
  block18 = new Block(690,175,30,40,color(61, 211, 176));
  block19 = new Block(720,175,30,40,color(61, 211, 176));
  block20 = new Block(750,175,30,40,color(61, 211, 176));
  block21 = new Block(780,175,30,40,color(61, 211, 176));

  //level2
  block22 = new Block(690,135,30,40,color(106, 195, 237));
  block23 = new Block(720,135,30,40,color(106, 195, 237));
  block24 = new Block(750,135,30,40,color(106, 195, 237));

  //level3
  block25 = new Block(720,95,30,40,color(255,192,203));

  base2 = new Ground(720,200,190,10);

  ball = new Ball(80,200,40);

  slingShot = new SlingShot(ball.body, {x:80, y:195});

  Engine.run(engine);

}

function draw() {
  //background(56,44,44); 

  if(bkgImg){
      background(bkgImg);
  }
  textSize(20);
  fill(0);
  text("Drag the Ball & Release it, to launch it towards the blocks", 200, 30);
  textSize(15);
  text("Press space to reset the position of the ball", 600,360);
  text("SCORE: "+score,730,40);

  Engine.update(engine);
  
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  ball.display();

  base1.display();
  base2.display();

  slingShot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(ball.body, {x:80, y:195});
		slingShot.attach(ball.body);
	}
}

async function getBgImage(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //var response = await fetch("https://worldtimeapi.org/api/timezone/Europe/London");
  var responseJson = await response.json();
  var dt = responseJson.datetime;
  var hr = dt.slice(11,13);
  
  var bg = null;
  if(hr>=6 && hr<=18){
      bg = "Untitled.png";
  }
  else{
      bg = "2.png";
  }
  bkgImg = loadImage(bg);
}