var backgroundIMG, background1;
var alienIMG, alien;
var ufoIMG, ufoGroup;
var starIMG;
var earthIMG, earth;
var planetIMG;
var asteroid1IMG, asteroid2IMG, asteroid3IMG;
var gameState = "start"
var invisibleBlockGroup;



function preload(){
backgroundIMG = loadImage("images/background.png");
alienIMG = loadImage("images/alien.png");
ufoIMG = loadImage("images/ufo.png");
starIMG = loadImage("images/star.png");
earthIMG = loadImage("images/earth.png")
planetIMG = loadImage("images/planet.png");
asteroid1IMG = loadImage("images/asteroid1.png")
asteroid2IMG = loadImage("images/asteroid2.png")
asteroid3IMG = loadImage("images/asteroid3.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background1 = createSprite(100,600,2000,600)
  background1.addImage(backgroundIMG)
  background1.scale = 5
  
  earth = createSprite(20,300,20,20)
  earth.addImage(earthIMG)

  alien = createSprite(100,500,10,10)
  alien.addImage(alienIMG)
  alien.scale = 0.1
//alien.debug = true
  
ufoGroup = new Group()
invisibleBlockGroup = new Group()

  edges = createEdgeSprites()


}

function draw() {
  background(255,255,255);

  if(gameState === "start"){
    if(keyDown("s")){
      gameState = "play"
    }

  }
  else if(gameState === "end"){

  }
  else if(gameState === "play"){
    if(alien.isTouching(invisibleBlockGroup)){
      alien.velocityY = 0
      alien.velocityX = -5
    }
    //ufo.debug = true
    background1.velocityX = -3
    if(background1.x < 0){
      background1.x = background1.width/2
    }
    earth.velocityX = -1
    
    if(keyIsDown(RIGHT_ARROW)){
      alien.velocityX = 5
  
    }
  
    if(keyIsDown(UP_ARROW)){
      alien.velocityY = -7
  
    }
    if(keyIsDown(DOWN_ARROW)){
      alien.velocityY = 7
    }
    alien.collide(edges)

    spawnUfo();
    

  }
  
  

  


  
  
  drawSprites();
  if(gameState === "start"){
    fill("white")
    textSize(20)
    text("Press right arrow key to move right", windowWidth/2,50)
    text("Press up arrow key to jump", windowWidth/2, 100)
    text("Press 'S' to start",windowWidth/2,150 )

  }
}
function spawnUfo(){
  if(frameCount%160 === 0){
    ufo = createSprite(windowWidth, random(windowHeight*0.25, windowHeight*0.75,100,100))
    ufo.velocityX = -5
    ufo.addImage(ufoIMG);
    var invisibleBlock = createSprite(ufo.x, ufo.y-ufo.height/2, 100, 10)
    invisibleBlock.velocityX = -5;
    invisibleBlockGroup.add(invisibleBlock);
    ufoGroup.add(ufo);


  }
}