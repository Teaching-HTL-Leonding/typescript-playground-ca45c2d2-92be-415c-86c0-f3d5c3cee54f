// Layout constants
const GROUPS_PER_ROW = 10;
const ROWS = 10;
const MARKS_PER_GROUP = 5;
const TOTAL = ROWS * GROUPS_PER_ROW * MARKS_PER_GROUP; // 500
const COLOR_EMPTY = "grey"
const GROUP_W = 42;   // width of one tally group
const GROUP_H = 36;   // height of the vertical strokes
const COL_GAP = 10;   // gap between groups
const ROW_GAP = 16;   // gap between rows
const MARGIN = 16;
const TITLE_HEIGHT = 30;
const COLOR_STROKE = "black"
const CELL_W = GROUP_W + COL_GAP;
const CELL_H = GROUP_H + ROW_GAP;

// Colors
const COLOR_FILLED = "steelblue";
let groupIndex = 0

let randomNumber: number;

function isColored(row: number, col: number, n: number): boolean {
    return row * COL_GAP + col < n;
}
let strokes = 0

function drawline(colored:number): void {

    push();
    stroke(COLOR_STROKE);
    strokeWeight(2);
    fill(colored ? COLOR_FILLED : COLOR_EMPTY);
    for (let i = 0; i < colored; i++) {
        line(i * 10, 0, i * 10, GROUP_H)
    }
    if (strokes === 5) {
        line(0, GROUP_H, 30, 0,)
    }
    translate(CELL_W, 0)
    groupIndex++
    pop()
    translate(0, CELL_H)
}

function setup(): void {
    const canvasW = GROUPS_PER_ROW * CELL_W + 2 * MARGIN;
    const canvasH = ROWS * CELL_H + TITLE_HEIGHT + MARGIN;
    createCanvas(canvasW, canvasH);

    randomNumber = Math.floor(Math.random() * (TOTAL + 1));


    background("white");

    // Title
    noStroke();
    fill("black");
    textSize(14);
    textAlign(CENTER);
    text(`Random number: ${randomNumber} /500`, width / 2, 20);


    translate(MARGIN + CELL_W / 2, TITLE_HEIGHT + CELL_W / 2);
    for (let row = 0; row < ROWS; row++) {
        push();
        for (let col = 0; col < COL_GAP; col++) {
            drawline(5);
            translate(CELL_W, 0);
        }
        pop();
        translate(0, CELL_W);
    }
}