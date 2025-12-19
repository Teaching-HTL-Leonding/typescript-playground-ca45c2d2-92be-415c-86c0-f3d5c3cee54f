function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    for (let i = 1; i <= 15; i += 1) {
        fill("yellow")
        rect(i*25, i*25, GRID, GRID)

        fill("lime")
        rect(i*25,height-GRID-i*25,GRID,GRID)
      
    }
}