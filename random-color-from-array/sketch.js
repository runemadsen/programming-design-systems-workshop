function randomColor() {

  var colorlist = [
   color(255, 0, 0),
   color(0, 255, 0),
   color(0, 0, 255),
   color(100, 0, 255),
   color(0, 100, 255),
   color(255, 100, 0),
   color(255, 0, 100),
   color(100, 255, 0),
   color(0, 255, 100)
  ];

  var index = floor(random(colorlist.length));
  return colorlist[index];

  // If you want to only use a color once. Keep in mind
  // that at some point you'll run out of colors.
  // return colorlist.splice(index, 1);
}

function setup() {

  createCanvas(500, 500);
  noStroke();

  background(randomColor());

  fill(randomColor());
  rect(50, 70, 390, 380);

  fill(randomColor());
  rect(105, 155, 290, 280);

  fill(randomColor());
  rect(155, 225, 190, 190);
}
