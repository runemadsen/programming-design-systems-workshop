function randomColor() {
  return color(random(0, 40), random(40, 100), random(10, 60));
}

function setup() {

  createCanvas(500, 500);
  colorMode(HSL);
  noStroke();

  background(randomColor());

  fill(randomColor());
  rect(50, 70, 390, 380);

  fill(randomColor());
  rect(105, 155, 290, 280);

  fill(randomColor());
  rect(155, 225, 190, 190);
}
