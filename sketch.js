var jerryImage 
var jerryImage2
var tom2Image
var tomImage
function preload() {
 jerryImage.loadAnimation=("jerryOne.png","jerryFour.png");
jerryImage2.loadAnimation=("jerryTwo.png","jerryThree.png");
tomImage.loadAnimation=("tomOne.png","tomFour.png");
tom2Image.loadAnimation=("tomOne.png","tomFour.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
var tom=createSprite(300,200,20,30)
tom.addAnimation=("tom",tomImage);
var jerry=createSprite(300,500,20,30)
tom.addAnimation=("jerry",jerryImage);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerryRect.x<tom.width/2+jerry.width/2 && 
        jerry.x-tom.x<tom.width/2+jerry.width/2 
        && tom.y-jerry.y<tom.height/2+jerry.height/2 
        && jerry.y-tom.y<tom.height/2+jerry.height/2)
        {
          tom.changeAnimation=("tomchange",tom2Image);
          jerry.changeAnimation=("jerrychange",jerryImage2);
        }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
