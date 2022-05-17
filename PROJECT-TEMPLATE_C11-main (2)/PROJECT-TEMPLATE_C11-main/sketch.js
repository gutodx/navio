var navio;
var sea;

function preload(){
seaimg = loadImage("sea.png");
shipanimation = loadImage("ship-1.png");
;
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400)
  sea.addImage(seaimg);
  sea.velocityX = 0.2

  navio = createSprite(200,310,50,50);
  navio.addImage(shipanimation);
  navio.scale = 0.15
}

function draw() {
  background("blue");
    drawSprites();

 
}
