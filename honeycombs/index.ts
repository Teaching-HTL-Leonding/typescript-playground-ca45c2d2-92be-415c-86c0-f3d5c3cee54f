function setup() {
    createCanvas(450, 370);   // create a 450×370 px drawing surface
    background("black");      // fill the canvas with black
    stroke("yellow");         // all future lines will be yellow
    noFill()

    // Move the coordinate origin 10 px right and 10 px down.
    // Every subsequent drawing call is now relative to (10, 10),
    // giving us a small margin around the hive.

    translate(10, 10);
    drawHoneycomb()
    //
    // Vertex layout (pixel coordinates, origin = top-left of bounding box):
    //
    //          (20,0) ──────── (45,0)
    //         /                      \
    //      (0,25)                  (65,25)
    //         \                      /
    //          (20,50) ──────── (45,50)
    //
    // Each line() call: line(x1, y1, x2, y2)
    // <<< ADD YOUR CODE HERE >>>
}

function drawHoneycomb(): void {

    for (let i = 0; i <=7; i++) {
        for (let o = 0; o < 10; o++) {
            let x = o * 45
            let y = i * 50
            
            if (i % 2 === 1) {
                //x += 22.5
            
            }if (o % 2 === 1){ 
                y += 22.5
            }
            
            drawHexagon(x,y)
         
        }
    }
}

function drawHexagon(x: number, y: number): void {
    line(x + 20, y + 0, x + 45, y + 0)
    line(x + 20, y + 0, x + 0, y + 25)
    line(x + 0, y + 25, x + 20, y + 50)
    line(x + 45, y + 50, x + 65, y + 25)
    line(x + 20, y + 50, x + 45, y + 50)
    line(x + 65, y + 25, x + 45, y + 0)
}








