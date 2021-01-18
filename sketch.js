var canvas;
var sound1,sound2,sound3,sound4;
var surface1,surface2,surface3,surface4;
var box;
var edges;

function preload(){
    sound1 = loadSound("Back In Black1.mp3");
    sound2 = loadSound("Highway to Hell1.mp3");
    sound3 = loadSound("Rock You Like A Hurricane1.mp3");
    sound4 = loadSound("Formula1Theme.mp3");
}

function setup(){
    canvas = createCanvas(400,400);
    surface1=createSprite(48,387,90,10);
    surface1.shapeColor="blue";
    surface2=createSprite(150,387,90,10);
    surface2.shapeColor="yellow";
    surface3=createSprite(252,387,90,10);
    surface3.shapeColor="red";
    surface4=createSprite(352,387,90,10);
    surface4.shapeColor="green";
    box=createSprite(random(20,350),30,20,20);
    box.shapeColor="white";
    box.setVelocity(3,2);
    edges=createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    if(box.bounceOff(surface1)){
      box.shapeColor=surface1.shapeColor;
      box.setVelocity(0,0);
      sound1.loop();
    }
    if(box.bounceOff(surface2)){
        box.shapeColor=surface2.shapeColor;
        box.setVelocity(0,0);
        sound2.loop();
      }
    if(box.bounceOff(surface3)){
        box.shapeColor=surface3.shapeColor;
        box.setVelocity(0,0);
        sound3.loop();
      }
    if(box.bounceOff(surface4)){
        box.shapeColor=surface4.shapeColor;
        box.setVelocity(0,0);
        sound4.loop();
      }
    box.bounceOff(edges);
    drawSprites();
}