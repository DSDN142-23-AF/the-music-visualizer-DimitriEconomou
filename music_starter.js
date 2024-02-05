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
image(armImg,125,armMovement)
}
  
else{
image(armImg,125,-60)
}


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
  textSize(15);

   fill(37, 87, 69);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal/2);
   text(words, width/1.85, height-250);
  




  

  




fill(255, 255, 0); 
let seconds = counter

textSize(15);
text(seconds, 200, height-30);
   
}
