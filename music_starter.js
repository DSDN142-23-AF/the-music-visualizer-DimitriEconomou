let firstRun = true
let armImg;
let rightpenImg;
let leftpenImg;
//vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) { 
  
if(firstRun){
  rectMode(CENTER);
  armImg = loadImage("arm.png")
  rightpenImg = loadImage("pen.png")
  leftpenImg = loadImage("leftpen.png")

  firstRun = false
  }
  
background(0)

let armMovement =map(counter,0,4,-800,-60)

if(counter>0&&counter<4){
image(armImg,135,armMovement)
}
  
else{
image(armImg,135,-60)
}
////////////////////////////////////////////////////////////////////stroke of heart lighter green
////////////////////////////////////////////////////////////////left line heart
let leftheartlinex =map(counter,4,47.5,440,310)
let leftheartliney =map(counter,4,47.5,400,240)
if(counter>4&&counter<47.5){
  stroke(64,145,116)
  strokeWeight(14)
  line(440,400,leftheartlinex,leftheartliney)
}
else if(counter>0&&counter<4){}

else{
  stroke(64,145,116)
  strokeWeight(14)
  line(440,400,310,240)
}
////////////////////////////////////////////////////////////left arc heart
let lefthpoint1x =map(counter,47.5,59.375,310,320)
let lefthpoint1y =map(counter,47.5,59.375,240,150)
let lefthpoint2x =map(counter,59.375,71.25,320,372.5)
let lefthpoint2y =map(counter,59.375,71.25,150,130)
let lefthpoint3x =map(counter,71.25,83.125,372.5,420)
let lefthpoint3y =map(counter,71.25,83.125,130,150)
let lefthpoint4x =map(counter,83.125,95,420,440)
let lefthpoint4y =map(counter,83.125,95,150,200)

if(counter>0&&counter<47.5){}

  else if (counter>47.5){
    stroke(64,145,116)
    strokeWeight(14)
    noFill()
    beginShape();
    if (counter>47.5) curveVertex(310, 240); 
    if (counter>47.5) curveVertex(310, 240); 
    if (counter>47.5&&counter<=59.375) curveVertex(lefthpoint1x,lefthpoint1y);
    if (counter>47.5&&counter<=59.375) curveVertex(lefthpoint1x,lefthpoint1y)
    if (counter>59.375) curveVertex(320,150);
    if (counter>=59.375&&counter<=71.25) curveVertex(lefthpoint2x,lefthpoint2y);
    if (counter>=59.375&&counter<=71.25) curveVertex(lefthpoint2x,lefthpoint2y)
    if (counter>71.25) curveVertex(372.5,130);
    if (counter>=71.25&&counter<=83.125) curveVertex(lefthpoint3x,lefthpoint3y);
    if (counter>=71.25&&counter<=83.125) curveVertex(lefthpoint3x,lefthpoint3y);
    if (counter>83.125) curveVertex(420,150)
    if (counter>83.125&&counter<=95) curveVertex(lefthpoint4x,lefthpoint4y);
    if (counter>=83.125&&counter<=95) curveVertex(lefthpoint4x,lefthpoint4y);
    if (counter>95) curveVertex(440, 200);
    if (counter>95) curveVertex(440, 200) 
    endShape()
  }
/////////////////////////////////////////////////////////////////right arc heart  
  let righthpoint1x =map(counter,95,106.875,440,460)
  let righthpoint1y =map(counter,95,106.875,200,150)
  let righthpoint2x =map(counter,106.875,118.75,460,507.5)
  let righthpoint2y =map(counter,106.875,118.75,150,130)
  let righthpoint3x =map(counter,118.75,130.625,507.5,560)
  let righthpoint3y =map(counter,118.75,130.625,130,150)
  let righthpoint4x =map(counter,130.625,142.5,560,570)
  let righthpoint4y =map(counter,130.625,142.5,150,240)
  
  if(counter>0&&counter<95){}
  
  else if(counter>95){
    stroke(64,145,116)
    strokeWeight(14)
    noFill()
    beginShape();
    if (counter>95) curveVertex(440, 200);
    if (counter>95) curveVertex(440, 200);
    if (counter>95&&counter<=106.875) curveVertex(righthpoint1x,righthpoint1y);
    if (counter>47.5&&counter<=106.875) curveVertex(righthpoint1x,righthpoint1y)
    if (counter>106.875) curveVertex(460,150);
    if (counter>=106.875&&counter<=118.75) curveVertex(righthpoint2x,righthpoint2y);
    if (counter>=106.875&&counter<=118.75) curveVertex(righthpoint2x,righthpoint2y)
    if (counter>118.75) curveVertex(507.5,130);
    if (counter>=118.75&&counter<=130.625) curveVertex(righthpoint3x,righthpoint3y);
    if (counter>=118.75&&counter<=130.625) curveVertex(righthpoint3x,righthpoint3y);
    if (counter>130.625) curveVertex(560,150)
    if (counter>=130.625&&counter<142.5) curveVertex(righthpoint4x,righthpoint4y);
    if (counter>=130.625&&counter<142.5) curveVertex(righthpoint4x,righthpoint4y);
    if (counter>=142.5) curveVertex(570, 240);
    if (counter>=142.5) curveVertex(570, 240) 
    endShape() 
  }
//////////////////////////////////////////////////////////////right line heart
let rightheartlinex =map(counter,142.5,190,570,440)
let rightheartliney =map(counter,142.5,190,240,400)
if(counter>=142.5&&counter<190){
  stroke(64,145,116)
  strokeWeight(14)
  line(570,240,rightheartlinex,rightheartliney)
}

else if(counter>0&&counter<142.5){}
  
else{
  stroke(64,145,116)
  strokeWeight(14)
  line(570,240,440,400)
}
////////////////////////////////////////////////////////////////////fill of heart darker green
////////////////////////////////////////////////////////////////left line heart
if(counter>4&&counter<47.5){
  stroke(37, 87, 69)
  strokeWeight(10)
  line(440,400,leftheartlinex,leftheartliney)
  }
else if(counter>0&&counter<4){}

else{
  stroke(37, 87, 69)
  strokeWeight(10)
  line(440,400,310,240)
  }
////////////////////////////////////////////////////////////left arc heart
  if(counter>0&&counter<47.5){}

    else if (counter>47.5){
      stroke(37, 87, 69)
      strokeWeight(10)
      noFill()
      beginShape();
      if (counter>47.5) curveVertex(310, 240); 
      if (counter>47.5) curveVertex(310, 240); 
      if (counter>47.5&&counter<=59.375) curveVertex(lefthpoint1x,lefthpoint1y);
      if (counter>47.5&&counter<=59.375) curveVertex(lefthpoint1x,lefthpoint1y)
      if (counter>59.375) curveVertex(320,150);
      if (counter>=59.375&&counter<=71.25) curveVertex(lefthpoint2x,lefthpoint2y);
      if (counter>=59.375&&counter<=71.25) curveVertex(lefthpoint2x,lefthpoint2y)
      if (counter>71.25) curveVertex(372.5,130);
      if (counter>=71.25&&counter<=83.125) curveVertex(lefthpoint3x,lefthpoint3y);
      if (counter>=71.25&&counter<=83.125) curveVertex(lefthpoint3x,lefthpoint3y);
      if (counter>83.125) curveVertex(420,150)
      if (counter>83.125&&counter<=95) curveVertex(lefthpoint4x,lefthpoint4y);
      if (counter>=83.125&&counter<=95) curveVertex(lefthpoint4x,lefthpoint4y);
      if (counter>95) curveVertex(440, 200);
      if (counter>95) curveVertex(440, 200) 
      endShape()
    }
/////////////////////////////////////////////////////////////////right arc heart
if(counter>0&&counter<95){}

else if(counter>95){
  stroke(37, 87, 69)
  strokeWeight(10)
  noFill()
  beginShape();
  if (counter>95) curveVertex(440, 200);
  if (counter>95) curveVertex(440, 200);
  if (counter>95&&counter<=106.875) curveVertex(righthpoint1x,righthpoint1y);
  if (counter>47.5&&counter<=106.875) curveVertex(righthpoint1x,righthpoint1y)
  if (counter>106.875) curveVertex(460,150);
  if (counter>=106.875&&counter<=118.75) curveVertex(righthpoint2x,righthpoint2y);
  if (counter>=106.875&&counter<=118.75) curveVertex(righthpoint2x,righthpoint2y)
  if (counter>118.75) curveVertex(507.5,130);
  if (counter>=118.75&&counter<=130.625) curveVertex(righthpoint3x,righthpoint3y);
  if (counter>=118.75&&counter<=130.625) curveVertex(righthpoint3x,righthpoint3y);
  if (counter>130.625) curveVertex(560,150)
  if (counter>=130.625&&counter<142.5) curveVertex(righthpoint4x,righthpoint4y);
  if (counter>=130.625&&counter<142.5) curveVertex(righthpoint4x,righthpoint4y);
  if (counter>=142.5) curveVertex(570, 240);
  if (counter>=142.5) curveVertex(570, 240) 
  endShape() 
}
//////////////////////////////////////////////////////////////right line heart
  if(counter>=142.5&&counter<190){
    stroke(37, 87, 69)
    strokeWeight(10)
    line(570,240,rightheartlinex,rightheartliney)
    }
  else if(counter>0&&counter<142.5){}
  
  else{
    stroke(37, 87, 69)
    strokeWeight(10)
    line(570,240,440,400)
    }
////////////////////////////////////////////////////////////coding the sides
var Colourbass =map(bass,0,100,0,255)
var Colourdrum =map(drum,0,100,0,255)
var Colourother =map(other,0,100,0,255)


for(var j=0;j<=5;j++){
 let linesetStep=j*78
////////////////////////////////////////////////////////////////////left side
var lineStart = 0
var lineWidthsmall =map(other,0,100,10,60)
var lineWidthmiddle =map(drum,0,100,50,100)
var lineWidthlarge =map(bass,0,100,75,150)
var lineEndsmall= lineStart+lineWidthsmall
var lineEndmiddle= lineStart+lineWidthmiddle
var lineEndlarge= lineStart+lineWidthlarge

for(var i =1; i<= 2; i++){
  let lineStepsmall = i*38-25
  let lineStepmiddle = i*21
 strokeWeight(4)
 stroke(Colourbass,Colourdrum,Colourother)
 line(lineStart,lineStepsmall+linesetStep, lineEndsmall, lineStepsmall+linesetStep)
 stroke(Colourother,Colourdrum,Colourbass)
 line(lineStart,lineStepmiddle+linesetStep, lineEndmiddle, lineStepmiddle+linesetStep)
 }

for(var i =1; i<= 1; i++){
 var lineSteplarge = i*32
 stroke(Colourdrum,Colourbass,Colourother)
 strokeWeight(4)
 line(lineStart,lineSteplarge+linesetStep, lineEndlarge, lineSteplarge+linesetStep)
 }

image(leftpenImg,-100,linesetStep)
//////////////////////////////////////////////////////////////////////////////////// right side
var lineStartright = 800
var lineWidthrightsmall =map(other,0,100,10,60)
var lineWidthrightmiddle =map(drum,0,100,50,110)
var lineWidthrightlarge =map(bass,0,100,75,150)
var lineEndrightsmall= lineStartright-lineWidthrightsmall
var lineEndrightmiddle= lineStartright-lineWidthrightmiddle
var lineEndrightlarge= lineStartright-lineWidthrightlarge

for(var i =1;i<=2; i++){
 let lineStepsmall = i*38-25
 let lineStepmiddle = i*21
 strokeWeight(4)
 stroke(Colourbass,Colourdrum,Colourother)
 line(lineStartright,lineStepsmall+linesetStep, lineEndrightsmall, lineStepsmall+linesetStep)
 stroke(Colourother,Colourdrum,Colourbass)
 line(lineStartright,lineStepmiddle+linesetStep, lineEndrightmiddle, lineStepmiddle+linesetStep)
 }  

for(var i =1; i<= 1; i++){
 let lineSteplarge = i*32
 stroke(Colourdrum,Colourbass,Colourother)
 strokeWeight(4)
 line(lineStartright,lineSteplarge+linesetStep, lineEndrightlarge, lineSteplarge+linesetStep )
 }
 
image(rightpenImg,500,linesetStep)  
}
  
stroke(64,145,116)
strokeWeight(2)
  textFont('Lucida Handwriting'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(10);

   fill(37, 87, 69);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal/2.65);
   text(words, width/1.825, height-215);
//timer   
// fill(255, 255, 0); 
// let seconds = counter

// textSize(15);
// text(seconds, 200, height-30);
   
}
