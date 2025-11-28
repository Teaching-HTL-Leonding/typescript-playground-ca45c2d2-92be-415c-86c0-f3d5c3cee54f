
function setup() {
  const num = Math.floor(random(0, 1_000_000));

  const digit1 = num % 10
  const digit2 = Math.floor(num / 10) % 10
  const digit3 = Math.floor(num / 100) % 10
  const digit4 = Math.floor(num / 1000) % 10
  const digit5 = Math.floor(num / 10000) % 10
  const digit6 = Math.floor(num / 100000) % 10

  createCanvas(400, 200)
  background("black")
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  const WIDTHRECT = width / 8
  const HEIGHTRECT = height / 3

  noFill()
  stroke("yellow")
  rect(width / 16, height / 3.5, WIDTHRECT, HEIGHTRECT)

  noFill()
  stroke("yellow")
  rect(width / 16 + WIDTHRECT + 10, height / 3.5, WIDTHRECT, HEIGHTRECT)

  noFill()
  stroke("yellow")
  rect(width / 16 + WIDTHRECT * 2 + 20, height / 3.5, WIDTHRECT, HEIGHTRECT)

  noFill()
  stroke("yellow")
  rect(width / 16 + WIDTHRECT * 3 + 30, height / 3.5, WIDTHRECT, HEIGHTRECT)

  noFill()
  stroke("yellow")
  rect(width / 16 + WIDTHRECT * 4 + 40, height / 3.5, WIDTHRECT, HEIGHTRECT)

  noFill()
  stroke("yellow")
  rect(width / 16 + WIDTHRECT * 5 + 50, height / 3.5, WIDTHRECT, HEIGHTRECT)


  textSize(40)
  fill("yellow")
  text(digit1, width / 16 + WIDTHRECT * 5 + 50 + WIDTHRECT / 2, height / 2.1)
  text(digit2, width / 16 + WIDTHRECT * 4 + 40 + WIDTHRECT / 2, height / 2.1)
  text(digit3, width / 16 + WIDTHRECT * 3 + 30 + WIDTHRECT / 2, height / 2.1)
  text(digit4, width / 16 + WIDTHRECT * 2 + 20 + WIDTHRECT / 2, height / 2.1)
  text(digit5, width / 16 + WIDTHRECT + 10 + WIDTHRECT / 2, height / 2.1)
  text(digit6, width / 16 + WIDTHRECT / 2, height / 2.1)
}
