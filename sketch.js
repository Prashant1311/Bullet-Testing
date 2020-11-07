var bullet, speed, weight, thickness;
var wall, iwall;

function setup() {
  createCanvas(800,400);


  //giving speed, weight, thickness
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(20,80);

  //creating car
  bullet = createSprite(50, 200, 30, 30);
  bullet.shapeColor = "white";
 
  //creating wall
  wall = createSprite(700, 200, thickness, 120);
  wall.shapeColor = "blue";

  
}



function draw() {
  background("black");  

  //giving velocity
  if(keyDown("space")){
    bullet.velocityX = speed;
  }

  if(bullet.overlap(wall)){
   
    //stopping car
    bullet.velocityX = 0;

   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
   if(damage > 10){

    wall.shapeColor = "green";
 
   stroke("green")
   textSize(40)
   fill("green")
   text("OK", 300,200)
 
 
  }

   if(damage < 10){

    wall.shapeColor = "red";
  
    stroke("red")
    textSize(40)
    fill("red")
    text("REJECT", 300,200)
   
  
  
  
  }
  }

  drawSprites();
}