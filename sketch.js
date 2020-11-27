var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
}

function draw() {
  background(0);  
  
  car.velocityX = speed;
  wall.shapeColor = rgb(80,80,80);
  
  if (car.x-wall.x < car.width/2+wall.width/2 && wall.x-car.x < wall.width/2+car.width/2){
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
