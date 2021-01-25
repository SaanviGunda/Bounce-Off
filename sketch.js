var fixedRect, movingRect;
var gameObject1, gameObject2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(300,400,40,80);
  gameObject1.shapeColor = "yellow";

  gameObject2 = createSprite(400,400, 70,90);
  gameObject2.shapeColor = "yellow";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  gameObject1.x = World.mouseX;
  gameObject1.y = World.mouseY;
  if (isTouching(gameObject1, gameObject2)){
    gameObject1.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  bounceOff(movingRect, fixedRect);
  drawSprites();
}
