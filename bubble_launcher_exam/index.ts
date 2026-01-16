let circleX: number = 0;
let circleY: number = 150;
let direction: number = 1;

const SPEED: number = 2;
const RADI: number = 10;
const DIAM: number = RADI * 2;

function setup() {
    createCanvas(500, 300);
}

function draw() {
    background("white");

    fill('lightgray');
    stroke('darkgray');
    rect(0, 0, DIAM, height);
    for (let i=1;i<10;i++){
   

    circle(circleX, circleY, DIAM);
     fill('yellow');
    stroke('gold');
   
    circleX += SPEED * direction;
    if (circleX - RADI < 0 || circleX + RADI > width) {
        direction *= -1;
        circleX = max(RADI, min(width - RADI, circleX));
         push();
    translate( random(0, circleY));
    }
    }
}

function mouseClicked() {

}
