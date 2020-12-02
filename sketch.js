var moving_rect, fixed_rect

function setup() {
  createCanvas(1200,800);
  moving_rect = createSprite(400, 200, 80, 30);
  fixed_rect = createSprite(200, 400, 30, 80);

  moving_rect.shapeColor = "green"
  fixed_rect.shapeColor = "green"
}

function draw() {
  background(0);
  
  moving_rect.x = mouseX
  moving_rect.y = mouseY

  isTouching(moving_rect,fixed_rect);
  drawSprites();
}

function isTouching(ob1,ob2){

  if(ob1.x- ob2.x <= ob1.width/2+ob2.width/2&&
    ob2.x- ob1.x <= ob1.width/2+ob2.width/2&&
      ob1.y- ob2.y <= ob1.height/2+ob2.height/2&&
      ob2.y- ob1.y <= ob1.height/2+ob2.height/2){
        
        ob1.shapeColor = "yellow";
        ob2.shapeColor = "yellow";
  
  }
else{
  
  ob1.shapeColor = "green";
  ob2.shapeColor = "green";
}  



}