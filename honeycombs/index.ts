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
    line(20,0,45,0)
    line(20,0,65,25)
    line(20,50,45,50)
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

function drawHoneycomb():void{

    for (let i = 0; i < 6;i++) {
        for (let o =0; o<7; o++)
    }
}