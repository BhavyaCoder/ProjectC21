var wall1;
var bullet1, speed, weight;

function setup() 
{
  createCanvas(1600,400);

speed=random(55,90)
weight=random(400,1500)

thickness=random(22,83)

bullet1=createSprite(50,200,50,5);
bullet1.shapeColor=color(225);
bullet1.velocityX=speed;

wall1=createSprite(1200,200,thickness,height/2)
wall1.shapeColor=color(80,80,80)

}

function draw() 
{
  background(255,255,255);  

  if(hasCollided(bullet1,wall1))
  {
   bullet1.velocityX=0;
   var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
   if(damage>10)
   {
    wall1.shapeColor=color(255,0,0); 
   }
   
   if(damage<10)
   {
     wall1.shapeColor=color(0,255,0);
   }
  }
  drawSprites();
}



function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;
}