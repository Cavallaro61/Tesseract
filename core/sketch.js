let angle = 0;
let space;
let tesseract;
let jupiter;
let mars;
let mercury;
let neptune;
let uranus;
let venus;
let scene = 0;
var song;
var boom;
let j;

function preload(){
  tesseract = loadImage('tesseract.jpg');
  jupiter = loadImage('jupiter.png');
  mars = loadImage('mars.png');
  mercury = loadImage('mercury.png');
  neptune = loadImage('neptune.png');
  uranus = loadImage('uranus.png');
  venus = loadImage('venus.png');
  space = loadImage('space1.jpg');
  song = loadSound('Avengers Suite (Theme).wav');
}

function setup() {
  createCanvas (625, 352, WEBGL);
  angleMode(DEGREES);
  song.play();
  song.loop();
}//end of setup


function draw() {
  directionalLight(255, 255, 200, -200, 0, 0);

  background (0);
   rotateY(frameCount * 0.01);
  

  
  push();
  translate(mouseX - width/2, mouseY - height/2);
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  
  noStroke();
  ambientMaterial(0, 0, 200);
  texture(tesseract);
  box(70);
  
  angle += 0.03;
  pop();
  
   push();
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  noStroke();
  ambientMaterial(0, 0, 200);
  translate (100, 100);
  texture(jupiter);
  j = sphere(20);
  angle += 0.03;
  pop();
  
     push();
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  noStroke();
  ambientMaterial(0, 0, 200);
  translate (10, 100);
  texture(mars);
  sphere(20, 20, 20);
  angle += 0.03;
  pop();
  
     push();
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * -1.2);
  noStroke();
  ambientMaterial(0, 0, 200);
  texture(mercury);
  translate(10, 10);
  sphere(20);
  angle += 0.03;
  pop();
  
     push();
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);
  noStroke();
  ambientMaterial(0, 0, 200);
  translate(200, 10);
  texture(neptune);
  sphere(20);
  angle += 0.03;
  pop();
  
     push();
  rotateX(angle);
  rotateY(angle * 5.3);
  rotateZ(angle * 1.2);
  noStroke();
  ambientMaterial(0, 0, 200);
  translate (50, 30);
  texture(uranus);
  sphere(20);
  angle += 0.03;
  pop();
  
  
     push();
  rotateX(angle);
  rotateY(angle * -0.3);
  rotateZ(angle * -1.2);
  noStroke();
  ambientMaterial(0, 0, 200);
  translate(100, 40);
  texture(venus);
  sphere(20);
  angle += 0.03;
  pop();
  
 push();
 texture(space);
 plane (625, 352 );
 pop();
  

  
}// end of draw




