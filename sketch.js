
var  wall, thickness;
var bullet, speed, weight;


function setup() {
  var canvas= createCanvas(1600,400);

  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor=color(80,80,80);

  speed=random(223,321)
  weight=random(30,52)

  wall=createSprite(1200,200,thickness, height/2);
  thickness=random(22,83)
  wall.shapeColor=color(80,80,80);

  
}

function draw() {
  background("black");  
 


  if(camelCase(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
     
       if(damage>10){
         wall.shapeColor=color(255,0,0);
       }

       if(damage<10){
          car.shapeColor=color(0,255,0);
       }

  }
  drawSprites();
  }

function camelCase(bullet, wall){

  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
