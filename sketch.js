var astronaut, ground, groundImage
var sleepImage, bathImage, drinkImage, eatImage, gymImage, moveImage, brushImage

 
function preload(){
sleep = loadImage("sleep.png");
bathImage = loadAnimation("bath1.png", "bath2.png");
drinkImage = loadAnimation("drink1.png", "drink2.png");
eatImage = loadAnimation("eat1.png", "eat2.png");
gymImage = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
moveImage = loadAnimation("move.png", "move.png","move1.png", "move1.png");
brushImage = loadImage("brush.png");

//ground Image
groundImage = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(400, 200, 50, 50);
  ground.addImage("ground", groundImage);
  ground.scale = 0.2;

  //creating sprite for astronaut
astronaut = createSprite(300, 230);
astronaut.scale = 0.1;
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
var Edge= createEdgeSprites();
 //when up arrow is pressed then astro will brush  
 if(keyDown("UP_ARROW")){
astronaut.addImage("brush", brushImage);
astronaut.changeAnimation("brush");
astronaut.y = 300;
astronaut.velocityX = 0;
astronaut.velocityY = 0;

 }
//when down arrow is pressed then astro will take bath
if(keyDown("DOWN_ARROW")){
astronaut.addAnimation("bath", bathImage);
astronaut.changeAnimation("bath");
astronaut.y = 300;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
//when right arrow is pressed then astro will do exercise
if(keyDown("RIGHT_ARROW")){
astronaut.addAnimation("gym", gymImage);
astronaut.changeAnimation("gym");
astronaut.y = 300;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
//when left arrow is pressed then astro will start eating 
if(keyDown("LEFT_ARROW")){
astronaut.addAnimation("eating", eatImage);
astronaut.changeAnimation("eating");
astronaut.y = 300;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}

//when space is pressed then astro will drink water
if(keyDown("SPACE")){
  astronaut.addAnimation("drinking water", drinkImage);
  astronaut.changeAnimation("drinking water");
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
//when m is pressed then astro will start moving 
if(keyDown("M")){
astronaut.addAnimation("moving", moveImage);
astronaut.changeAnimation("moving");
astronaut.y = 300;
astronaut.velocityX = 2;
astronaut.velocityY = 2;
astronaut.bounceOff(Edge[0]);
astronaut.bounceOff(Edge[1]);
astronaut.bounceOff(Edge[2]);
astronaut.bounceOff(Edge[3]);
}
//when s is pressed then astro will take sleep
if(keyDown("S")){
astronaut.addImage("sleep", sleep);
astronaut.changeAnimation("sleep");
astronaut.y = 300;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}

//displaying the text 
strokeWeight(250);
fill("white");
textSize(25);
text("Instructions:", 30, 50);

strokeWeight(200);
fill("white");
textSize(20);
text("Up Arrow: Brushing" ,
 30, 80 
 )
text("Down Arrow: Bathing", 30, 110);
text("Left Arrow: Eating", 30, 140);
text("Right Arrow: Gymming", 30, 170);
text("Space Key: Drinking", 30, 200);
text("M Key: Moving", 30, 230);
text("S Key: Sleeping", 30, 260);

}

