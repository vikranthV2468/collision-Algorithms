var movingrect, fixedrect;

function setup() {
  createCanvas(1200,800);

  movingrect=createSprite(400, 200, 80, 30);
  movingrect.shapeColor="green";
  movingrect.debug=true;

  fixedrect=createSprite(600, 400, 50, 80);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
}

function draw() {
  background(0);  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
 
 if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 && 
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 && 
  fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2
  ){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
 else {
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
 } 

  drawSprites();
}