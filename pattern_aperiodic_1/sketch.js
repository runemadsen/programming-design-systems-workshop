var maxLevel = 4;
var color1, color2, color3, color4;

function drawL(x, y, rot, len, level, color) {

  push();
  translate(x, y);
  rotate(radians(rot));

  fill(color);
  noStroke();
  beginShape();
    vertex(0, 0)
    vertex(0, len)
    vertex(len, len)
    vertex(len, len/2)
    vertex(len/2, len/2)
    vertex(len/2, 0);
  endShape();

  if(level < maxLevel)
  {
    level++;

    drawL(len/4, len/4, 0, len/2, level, color1);
    drawL(len/2, 0, 90, len/2, level, color2);
    drawL(0, len/2, 0, len/2, level, color3);
    drawL(len/2, len, -90, len/2, level, color4);
  }
  pop();
}


function setup() {

  createCanvas(600, 600);

  color1 = color(60, 100, 150);
  color2 = color(140, 180, 220);
  color3 = color(40, 40, 40);
  color4 = color(50, 60, 70);

  drawL(0, 0, 0, 600, 0, color1);
}
