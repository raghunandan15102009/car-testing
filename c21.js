var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
 car =  createSprite(100, 200, 20, 20);
 wall = createSprite(700,200,10,100)
 speed=Math.round(random(50,90))
 weight=Math.round(random(400,1500))
}

function draw() {
  car.velocityX=speed;
  car.shapeColor=color("white");
  if(wall.x-car.x < car.width/2+wall.width/2){
    car.velocity=0;
    car.x=wall.x;
    var deformation =0.5*weight*speed*speed/22500
    if(deformation<80){
      car.shapeColor=color("green");
    }
    if(deformation>80&&deformation<180){
      car.shapeColor=color("yellow");
    }
    if(deformation>180){
      car.shapeColor=color("red");
    }
  }
  background(0);  
  drawSprites();
}