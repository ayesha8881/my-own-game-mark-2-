var girl,girlImg
var diamond,diamondImg
var coin,coinImg
var ob1,ob1Img
var zombie,zombieImg
var bg,bg1
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;
var jumpSound , checkPointSound, dieSound;

function preload() {
  girlImg=loadAnimation("Images/w1.png","Images/w2.png","Images/w3.png","Images/w4.png","Images/w5.png","Images/w6.png","Images/w6.png")
  bg=loadImage("Images/jungle.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg1 = createSprite(displayWidth/2-250,displayHeight/2-40,20,20)
  bg1.addImage(bg)
  bg1.scale = 2.5
//createCanvas(displayWidth,displayHeight-110);
  //bg1=createSprite(displayWidth/2,300,width,300);
  //bg1.scale=2;
  //bg1.addImage(bg)

  
}

function draw() {
  background(0); 
  bg1.velocityX= -2 
  if(bg1.x<200){
    bg1.x=bg1.width/2
  }
  drawSprites()
}