let rotation: number[] = []
let centerX: number[] = []
let centerY: number[] = []
function setup() {
    createCanvas(500, 500)
    background("bllack")
    strokeWeight(2)
    noFill()
    angleMode(DEGREES)
}

function draw() {
    background(255,255,255,10)

    for (let i = 0; i < centerX.length; i++) {
        push()
        translate(centerX[i], centerY[i])
        rotate(rotation[i])
        line(-50, 0, 50, 0)
        pop()
        rotation[i] += 1
    }
}
function mouseClicked() {
    centerX.push(mouseX)
    centerY.push (mouseY)
    rotation.push(0)
}