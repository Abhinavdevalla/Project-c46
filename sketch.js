var human ,humanImg;;
var backgrounds, backgroundImg;;
var dynosGroup,dynoImg;
var ground;
var score = 0;
var gameState = "play";

function preload(){
  backgroundImg = loadImage("background.jpg");
  humanImg = loadImage("humanes.png");
  dynoImg = loadImage("31-313290_tyrannosaurus-rex-clipart-animated-dinosaur-clipart-png.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  backgrounds = createSprite(0,0,1300,1800);
  backgrounds.addImage(backgroundImg);
  backgrounds.scale = 7;
  backgrounds.x = backgrounds.width/2;
  backgrounds.velocityX = -5;

  human = createSprite(150,900,100,100);
  human.addImage(humanImg);
  human.scale = 0.5;

  ground = createSprite(0,windowHeight-30,1200,20);
  ground.x = ground.width/2
  ground.velocityX = -5;
  ground.visible = false;
  
  dynosGroup = new Group();
}

function draw() {
  background(0,0,0);
  if(score = score+Math.round(frameCount/110)){
  }
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if(backgrounds.x<0){
    backgrounds.x = backgrounds.width/2
  }
  if(keyDown(UP_ARROW)){
    human.y-=10
  }
  if(keyDown(DOWN_ARROW)){
    human.y+=10;
  }
  if(keyDown(LEFT_ARROW)){
    human.x-=10;   
  }
  if(keyDown(RIGHT_ARROW)){
    human.x+=10
  }
   human.collide(ground);


if(score>=5000){
  gameState = "playerhaswon";

}
  spawnDynos();
  drawSprites();
  stroke("white");
  textSize(25);
  fill("white")
  text("Score : " + score,100,100)

}

function spawnDynos(){
 if(frameCount%120 === 0){
   var dyno = createSprite(windowWidth-300,400,10,40);
   dyno.y = Math.round(random(200,windowHeight-100))
   dyno.addImage(dynoImg);
   dyno.scale = 0.57; 
   dyno.lifeTime = 500;
   dyno.velocityX=-10;
   dynosGroup.add(dyno);

 }

}