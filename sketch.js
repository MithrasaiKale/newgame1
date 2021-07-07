var link
var wall1
var wall2
var wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12, wall13,wall14,wall15,wall16,wall17
var demon1,demon2
function setup(){
createCanvas(800,800)
link=createSprite(10,10,30,30)
wall1=createSprite(80,10,10,230)
wall2=createSprite(10,180,230,10)
wall3=createSprite(200,120,230,10)
wall4=createSprite(150,10,10,230)
wall5=createSprite(200,10,10,230)
wall6=createSprite(300,180,230,10)
wall7=createSprite(123,290,10,230)
wall8=createSprite(220,403,203,10)
wall9=createSprite(420,403,203,10)
wall10=createSprite(410,290,10,230)
wall11=createSprite(312,10,10,230)
wall12=createSprite(425,120,500,10)
wall13=createSprite(678,261,10,500)
wall14=createSprite(520,650,10,500)
wall15=createSprite(760,568,490,10)
wall16=createSprite(574,448,100,10)

}

function draw(){
background("white")
link.bounceOff(wall1)
link.bounceOff(wall2)
link.bounceOff(wall3)
link.bounceOff(wall4)
link.bounceOff(wall5)
link.bounceOff(wall6)
link.bounceOff(wall7)
link.bounceOff(wall8)
link.bounceOff(wall9)
link.bounceOff(wall10)
link.bounceOff(wall11)
link.bounceOff(wall12)
link.bounceOff(wall13)
link.bounceOff(wall14)
link.bounceOff(wall15)
link.bounceOff(wall16)
text(mouseX+","+ mouseY,mouseX,mouseY)
if(keyDown(DOWN_ARROW)){
  link.y=link.y+10
}
if(keyDown(UP_ARROW)){
  link.y=link.y-10
}
if(keyDown(LEFT_ARROW)){
  link.x=link.x-10
}
if(keyDown(RIGHT_ARROW)){
  link.x=link.x+10
}









drawSprites()


}