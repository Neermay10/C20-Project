var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  
  car.velocityX = speed;
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background(0);  
  
  
  
  if (car.collide(wall){
    if(0.5*weight*speed*speed/22500 < 100){
      car.shapeColor = "green";
    }
    if(0.5*weight*speed*speed/22500 >= 100 && 0.5*weight*speed*speed/22500 < 180){
      car.shapeColor = "yellow";
    }
    if(0.5*weight*speed*speed/22500 >= 180){
      car.shapeColor = "red";
    }

    car.velocityX = 0;
  }


  drawSprites();
}
