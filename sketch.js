
var r = 0;
var g = 50;
var b=255;
var mouse;
var canvas;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
canvas=createCanvas(400,400);
canvas.position(500,100);
}


function draw(){
background(255);
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
 translate(0,0);
  // Use the map() function to do so. 
  //r=map(mouseX,255,255,255,255,true);
  g=map(mouseX,0,255,0,255,true);
  if(mouseY<=200){
  b=map(mouseY,130,0,130,0,true);
  }else{
  r=map(mouseY,130,255,130,255,true);
  }
//r=mouseX
//g=mouseY
//b=mousex
  // Pass the values to the background() function you have learnt previously.
background(r,g,b);
  // Create an ellipse that will move around with you mouse about the X axis.
  fill(r,g,b);
  mouse=ellipse(mouseX,mouseY,50,50);
  // Remember to fill the canvas with white paint before creating the ellipse.
}