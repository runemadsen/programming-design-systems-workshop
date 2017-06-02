function drawRect(x, y, w, h)
{
  // first draw a rectangle
  noFill();
  strokeWeight(3);
  rect(x, y, w, h)

  // then figure out if we need to draw another
  var splitWidth = random(1) > 0.5;
  var splitWhere = random(0.3, 0.8);

  // if we're splitting the width
  if(splitWidth && w > 100)
  {
    drawRect(x, y, w * splitWhere, h);
    drawRect(x + (w * splitWhere), y, w * (1 - splitWhere), h);
  }
  // else if we're splitting the height
  else if(h > 100)
  {
    drawRect(x, y, w, h * splitWhere);
    drawRect(x, y + (h * splitWhere), w, h * (1 - splitWhere));
  }
}

function setup() {
  createCanvas(600, 600);
  drawRect(100, 100, width - 200, height - 200);
}
