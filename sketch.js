const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone,iron,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
     hammer = new Hammer(10,100);
     stone = new Stone(460,300);
     iron = new Iron(570,500);
     rubber = new Rubber(180,340);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
     hammer.display();
    iron.display();
    rubber.display();
     stone.display();

    
 
}