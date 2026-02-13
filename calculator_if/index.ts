const MARGIN_NUM = 10;

let num: string = "";          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(300, 600);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");

    noStroke();
    fill("white");
    rect(MARGIN_NUM, MARGIN_NUM, width - 2 * MARGIN_NUM, lineHeight - 2 * MARGIN_NUM);
    stroke("black");
    fill("black");
    strokeWeight(2);
    textSize(50);
    textAlign(RIGHT, CENTER);
    text(num, width - MARGIN_NUM * 2, lineHeight / 2);
    textAlign(CENTER, CENTER);

    line(0, lineHeight, width, lineHeight)
    line(0, lineHeight * 2, width, lineHeight * 2)
    line(0, lineHeight * 3, width, lineHeight * 3)
    line(0, lineHeight * 4, width, lineHeight * 4)


    line(cellWidth, lineHeight, cellWidth, lineHeight * 4)
    line(cellWidth * 2, lineHeight, cellWidth * 2, height)

    text(7, 0 + cellWidth / 2, lineHeight + lineHeight / 2)
    text(8, cellWidth + cellWidth / 2, lineHeight + lineHeight / 2)
    text(9, cellWidth * 2 + cellWidth / 2, lineHeight + lineHeight / 2)
    text(4, 0 + cellWidth / 2, lineHeight * 2 + lineHeight / 2)
    text(5, cellWidth + cellWidth / 2, lineHeight * 2 + lineHeight / 2)
    text(6, cellWidth * 2 + cellWidth / 2, lineHeight * 2 + lineHeight / 2)
    text(1, 0 + cellWidth / 2, lineHeight * 3 + lineHeight / 2)
    text(2, cellWidth + cellWidth / 2, lineHeight * 3 + lineHeight / 2)
    text(3, cellWidth * 2 + cellWidth / 2, lineHeight * 3 + lineHeight / 2)
    text(0, cellWidth, height - lineHeight / 2)
    text("C", cellWidth * 2 + cellWidth / 2, height - lineHeight / 2)

}


function mouseClicked() {
    const x = floor(mouseX / cellWidth)
    const y = floor(mouseY / lineHeight)

    if (y === 1) {
        if (x === 0) {
            num += 7
        } else if (x === 1) {
            num += 8
        } else if (x === 2) {
            num += 9
        }
    } else if (y === 2) {
        if (x === 0) {
            num += 4
        } else if (x === 1) {
            num += 5
        } else if (x === 2) {
            num += 6
        }
    } else if (y === 3) {
        if (x === 0) {
            num += 1
        } else if (x === 1) {
            num += 2
        } else if (x === 2) {
            num += 3
        }
    } else if (y === 4) {
        if (x === 0) {
            num += 0
        } else if (x === 1) {
            num += 0
        } else if (x === 2) {
            num = ""
        }

    }
}