var bullet,wall
var speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 10, 10);
  wall=createSprite(1500,200,thickness,height/2)
  bullet.shapeColor="red"
  speed=random(5,10)
  speed2=random(-5,-10)
  weight=random(400,1500)
  thickness=random(22,83)
}

function draw() {
  background(0);
  
  bullet.velocityX=speed 
   if(wall.x-bullet.x<(bullet.width+wall.width)/2){
     bullet.velocityX=0
     var deformation=0.5*weight*speed*speed/22509
     
     if(deformation<100){
       bullet.shapeColor="yellow"
       
     }
   }
  
   if(hasCollided(bullet,wall)){
     bullet.velocityX=0
     var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
   }
   if(damage>10){
     wall.shapeColor="blue"
   }
   if(damage<10){
     wall.shpeColor="green"
   }

  drawSprites();
}
function hasCollided(bullet,wall);{
bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x
if(bulletRightEdge>wall.LeftEdge){
  return true
}
return false
}
