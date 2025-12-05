
let centerX: number = 150
let centerY: number = 53

let directionX = 2
let directionY = 2
let startnumber: number = 10

function setup() {
    createCanvas(300, 300);

}

function draw() {
    background("gold");
    noFill()
    strokeWeight(5)
    stroke("aqua")

    if (directionX < 0 && directionY < 0) {
        stroke("red")
    } else {
        stroke("aqua")
    }
    line(centerX - 50, centerY, centerX, centerY - 50)
    if (directionX >0 && directionY < 0) {
        stroke("red")
    } else {
        stroke("aqua")
    }
    line(centerX, centerY - 50, centerX + 50, centerY)
    if (directionX > 0 && directionY > 0) {
        stroke("red")
    } else {
        stroke("aqua")
    }
    line(centerX + 50, centerY, centerX, centerY + 50)
    if (directionX < 0 && directionY > 0) {
        stroke("red")
    } else {
        stroke("aqua")
    }
    line(centerX, centerY + 50, centerX - 50, centerY)

    centerX += directionX
    centerY += directionY

    if (centerX - 53 <= 0 || centerX + 53 >= width) {
        directionX *= -1;
    }
    if (centerY - 53 <= 0 || centerY + 53 >= height) {
        directionY *= -1;
    }

    if (centerX - 53 <= 0 || centerX + 53 >= width) {
        startnumber -= 1;
    }
    if (centerY - 53 <= 0 || centerY + 53 >= height) {
        startnumber -= 1;
    }
    textAlign(CENTER, CENTER)
    noStroke()
    textSize(20)
    fill("black")
    text(startnumber, centerX, centerY)

    if (startnumber <= 0) {
        directionX = 0
    }
    if (startnumber <= 0) {
        directionY = 0
    }

    if (startnumber <= 0) {
        startnumber = 1
    }



}
