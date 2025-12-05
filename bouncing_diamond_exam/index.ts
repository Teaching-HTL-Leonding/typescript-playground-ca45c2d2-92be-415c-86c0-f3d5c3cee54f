
let centerX:number=150
let centerY:number=53

let directionX=2
let directionY=2
let startnumber:number=10

function setup() {
    createCanvas(300, 300);
    
}

function draw() {
    background("gold");
    noFill()
    strokeWeight(5)
    stroke("white")
    line(centerX-50,centerY,centerX,centerY-50)
    line(centerX,centerY-50,centerX+50,centerY)
    line(centerX+50,centerY,centerX,centerY+50)
    line(centerX,centerY+50,centerX-50,centerY)

    centerX += directionX
    centerY += directionY

      if (centerX-53 <= 0 || centerX+53 >= width) {
        directionX *= -1;
    }
    if (centerY-53 <= 0 || centerY+53 >= height) {
        directionY *= -1;
    }
    
     if (centerX-53 <= 0 || centerX+53 >= width) {
        startnumber-= 1;
    }
    if (centerY-53 <= 0 || centerY+53 >= height) {
        startnumber-= 1;
    }
 textAlign(CENTER,CENTER)
 noStroke()
 fill("white")
 text(startnumber,centerX,centerY)




}
