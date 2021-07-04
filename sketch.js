var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

rabbit.X= mouseX

}
function createApples(){
  apple= createSprite(random(50,350),40,10,10);
  //add image to apple sprite
  //scale the sprite if required
  //give the velocity so that the apples move downwards
  //give lifetime to the apple sprite

  

}

function createLeaves(){
  leave = createSprite(random(75,350),40,10,10);
  //add image to leave sprite
  //scale the sprite if required
  //give the velocity so that the leaves move downwards
  //give lifetime to the leaf sprite


}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function spawnApples() {
var apple= math.round(random(1,2));
if(frameCount% 80===0){
  if (apples===1){
    //call createApples function
  }
  else{
    //call createLeaves function 
  }
}

}

function spawnLeaves() {
}