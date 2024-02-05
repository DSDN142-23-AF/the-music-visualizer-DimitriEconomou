let firstRun = true
let armImg;
let penImg;


//vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  
if(firstRun){
  rectMode(CENTER);
  armImg = loadImage("arm.png")
  penImg = loadImage("pen.png")

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


var lineWidthsmall =map(other,0,100,10,60)
var lineStart = 0
var lineEndsmall= lineStart+lineWidthsmall

for(var i =1; i<= 49; i++){
var lineStep = i*10
//stroke(Colourbass,Colourdrum,Colourother)
stroke(255)
strokeWeight(4)
line(lineStart,lineStep, lineEndsmall, lineStep )
}

var lineWidthmiddle =map(drum,0,100,50,100)
var lineStart = 0
var lineEndmiddle= lineStart+lineWidthmiddle

for(var i =1; i<= 24; i++){
var lineStep = i*20
//stroke(Colourother,Colourdrum,Colourbass)
stroke(255)
strokeWeight(4)
line(lineStart,lineStep, lineEndmiddle, lineStep )
}

var lineWidthlarge =map(bass,0,100,75,150)
var lineStart = 0
var lineEndlarge= lineStart+lineWidthlarge

for(var i =1; i<= 20; i++){
var lineStep = i*30
//stroke(Colourdrum,Colourbass,Colourother)
stroke(255)
strokeWeight(4)
line(lineStart,lineStep, lineEndlarge, lineStep )
}

if(counter>=0){


for(var ii =1; ii<= 5; ii++){
var rightpenStep=ii*70

var lineWidthrightsmall =map(other,0,100,10,60)
var lineStartright = 800
var lineEndrightsmall= lineStartright-lineWidthrightsmall

for(var i =1; i<= 5; i++){
var lineStep = i*11
stroke(Colourbass,Colourdrum,Colourother)
strokeWeight(4)
line(lineStartright,lineStep, lineEndrightsmall, lineStep)
}

var lineWidthrightmiddle =map(drum,0,100,50,100)
var lineStartright = 800
var lineEndrightmiddle= lineStartright-lineWidthrightmiddle
  
  for(var i =1; i<= 2; i++){
  var lineStep = i*22
  stroke(Colourother,Colourdrum,Colourbass)
  strokeWeight(4)
  line(lineStartright,lineStep, lineEndrightmiddle, lineStep )
  }

var lineWidthrightlarge =map(bass,0,100,75,150)
var lineStartright= 800
var lineEndrightlarge= lineStartright-lineWidthrightlarge

for(var i =1; i<= 1; i++){
  var lineStep = i*33
  stroke(Colourdrum,Colourbass,Colourother)
  strokeWeight(4)
  line(lineStartright,lineStep, lineEndrightlarge, lineStep )
  }
  
  
 for(var i=1; i<=10; i++){
  var penStep=i*-194.5
  scale(1.1)
  image(penImg,430,penStep)
    image(penImg,430,-134.5)
 }


  }
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
