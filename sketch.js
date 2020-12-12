var car,wall;
var height,weight;

function setup() {
  createCanvas(1200,500);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColour = colour(255);            
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColour = shapeColour(80,80,80);
}

function draw() {
  background(0);
  if(car.x - wall.x < car.width/2 + wall.width/2 &&
    wall.x - car.x < car.width/2 + wall.width/2 &&
    car.y - wall.y < car.height/2 +wall.height/2 &&
    wall.y - car.y < car.height/2 + wall.height/2){
  }
  if(wall.x-car.x < (car.width + wall.width)/2){
      car.velocityX = 0;
      vardeformation=0.5 * speed * speed/22509;
    if(deformation>180){
        car.shapeColour=colour(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColour=colour(230,230,0);
    }
    if(deformation<100){
      car.shapeColour=colour(0,255,0);
    }
  }
  
  drawSprites();
}
  
  
  
