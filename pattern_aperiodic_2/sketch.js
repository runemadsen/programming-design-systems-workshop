var maxLevel = 5;
var factor, color1, color2;

function drawTriangle(x, y, size, rot, level, drawSingle, color) {

  var b = size / 2;
  var c = size / factor;
  var a = sqrt((c*c) - (b*b)); // a2 + b2 = c2

  push();
  translate(x, y);
  rotate(radians(rot));

  fill(color);
  beginShape();
    vertex(0, 0)
    vertex(-b, a)
    vertex(b, a);
  endShape();

  if(drawSingle && level < maxLevel)
  {
    level++;
    drawTriangle(0, 0, size, 0, level, false, color1);
  }
  else if(level < maxLevel)
  {
    level++;

    drawTriangle(-(a / factor), a, c, 150, level, false, color1);
    drawTriangle(a / factor, a, c, -150, level, false, color1);

    var childBottom = c / factor;
    var childB = childBottom / 2;
    var childC = childBottom / factor;
    var childA = sqrt((childC*childC) - (childB*childB)); // a2 + b2 = c2

    // all these small triangles should draw a big one, not subdivide immediately.
    drawTriangle(0, a - childA, childBottom, 0, level, true, color2);
    drawTriangle(0, a - childA, childBottom, 120, level, true, color2);
    drawTriangle(0, a - childA, childBottom, -120, level, true, color2);
  }

  pop();
}

function setup() {

  createCanvas(600, 600);

  factor = sqrt(3);
  color1 = color(0, 60, 130);
  color2 = color(80, 200, 250);

  drawTriangle(width/2, 0, 800, 0, 0, false, color1);
}
