const ELEMENT = 250
const SCALE = 400
const DIAMETER = 70
const OBJECT = 150
function setup() {
  createCanvas(600, 600);
  background("white")

  noFill()
  stroke("green")
  strokeWeight(17)
  angleMode(DEGREES);
  arc(115, 370, 200, ELEMENT, -72, 60,)


  noStroke()
  fill("lightgreen")
  circle(200, ELEMENT, DIAMETER)

  noStroke()
  fill("lightgreen")
  circle(106, ELEMENT + 31.9, DIAMETER)

  noStroke()
  fill("lightgreen")
  circle(106, ELEMENT - 31.9, DIAMETER)

  noStroke()
  fill("lightgreen")
  circle(OBJECT + 15.5, ELEMENT - 47.5, DIAMETER)

  noStroke()
  fill("lightgreen")
  circle(OBJECT + 15.5, ELEMENT + 47.5, DIAMETER)


  noStroke()
  fill("yellow")
  circle(OBJECT, ELEMENT, 65)

  noFill()
  stroke("green")
  strokeWeight(17)
  angleMode(DEGREES);
  arc(365, 370, 200, ELEMENT, -72, 60,)


  strokeWeight(2)
  stroke("green")
  fill("lightgreen")
  circle(450, ELEMENT, 80)

  strokeWeight(2)
  stroke("green")
  fill("lightgreen")
  circle(SCALE, 300, 80)

  strokeWeight(2)
  stroke("green")
  fill("lightgreen")
  circle(350, ELEMENT, 80)

  strokeWeight(2)
  stroke("green")
  fill("lightgreen")
  circle(SCALE, 200, 80)

  noStroke()
  fill("yellow")
  circle(SCALE, ELEMENT, 65)



}
