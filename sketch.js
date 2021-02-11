const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(400,250,200,20);
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);

    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);

    block16 = new Box(390,155,30,40);

    circle = new Circle(100,50);
    slingshot = new Slingshot(circle.body,{x:200,y:50});
}
function draw(){
background(0);
noStroke(); 
textSize(35) 
fill("white") 
text("Score " + score, width-300, 50)
ground.display()
ground1.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
circle.display()
slingshot.display()
}
function mouseDragged(){
    Matter.Body.setPosition(circle.body,{x:mouseX,y:mouseY})
    }
function mouseReleased(){
    slingshot.fly()
}
function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(circle.body)
    
    }
}