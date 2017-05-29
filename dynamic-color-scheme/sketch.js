var colorlist = [];

function setup() {

  createCanvas(500, 500);
  noStroke();

  // Generate analogos color scheme.
  var baseHue = random(0, 360);
  for(var i = 0; i < 4; i++) {
    var hue = baseHue + (i*15);
    var sat = random(60, 100);
    var lig = random(40, 60);
    var rgb = hsluv.hsluvToRgb([hue, sat, lig]);
    colorlist.push(color(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255))
  }

  background(colorlist[0]);

  fill(colorlist[1]);
  rect(50, 70, 390, 380);

  fill(colorlist[2]);
  rect(105, 155, 290, 280);

  fill(colorlist[3]);
  rect(155, 225, 190, 190);
}
