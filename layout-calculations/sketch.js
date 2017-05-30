function setup() {

  createCanvas(600, 600);
  noStroke();
  background(200);
  fill(30);

  var rectSize = 50;
  var circleRadius = 60;

  // draw a rectangle in the left corner
  rect(0, 0, rectSize, rectSize);

  // draw a rectangle in the right corner
  rect(width - rectSize, 0, rectSize, rectSize);

  // draw a rectangle in the center
  rect(width / 2 - rectSize / 2, 0, rectSize, rectSize);

  // draw a rectangle at the golden ratio x
  var golden = 1.61803398875;
  rect(width / golden, 0, rectSize, rectSize);

  // draw an ellipse in the center of screen
  ellipse(width / 2, height / 2, circleRadius*2, circleRadius*2);

  // draw an ellipse on the edge of the other ellipse, on 45 degrees
  var x = cos(radians(45)) * circleRadius;
  var y = sin(radians(45)) * circleRadius;
  ellipse((width / 2) + x, (height/2) + y, 30, 30);

}
