//function preload() {

var imageList = [];

function preload() {
  imageList[0] = loadImage('Assets/1.png');
  imageList[1] = loadImage('Assets/2.png');
  imageList[2] = loadImage('Assets/3.png');
  imageList[3] = loadImage('Assets/4.png');
  imageList[4] = loadImage('Assets/5.png');
 
}


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255);
  
if (mouseX < 160) {
image(imageList[0],width/7,100)
square(0,50,20)
text("Looking",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 160 && mouseX < 320) {
image(imageList[1],width/7,100)
square(100,50,50)
text("at",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 320 && mouseX < 480) {
image(imageList[2],width/7,100)
square(200,50,80)
text("things",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 480 && mouseX < 640) {
image(imageList[3],width/7,100)
square(300,50,100)
text("differently",0,0,0,100)
  textSize(32)
}

if (mouseX > 640 && mouseX < 800) {
  image(imageList[4],width/7,100)
square(400,50,150)
text("today",0,0,0,100)
  textSize(32)
}
}