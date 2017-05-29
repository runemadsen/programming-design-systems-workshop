function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function setup() {

  createCanvas(800, 500);
  noStroke();

  var numRects = 20;
  var rectWidth = width / numRects;

  var fromHue = 0;
  var fromSat = 60;
  var fromLig = 30;
  var toHue = 230;
  var toSat = 100;
  var toLig = 70;

  // Or if you like vectors
  //var from = createVector(0, 60, 30);
  //var to = createVector(230, 100, 70);

  for(var i = 0; i < numRects; i++) {

    var hue = lerp(fromHue, toHue, i / numRects);
    var sat = lerp(fromSat, toSat, i / numRects)
    var lig = lerp(fromLig, toLig, i / numRects)
    fillHsluv(hue, sat, lig)

    // Or if you like vectors
    // var col = p5.Vector.lerp(from, to, i / numRects);
    // fillHsluv(col.x, col.y, col.z);

    rect(i * rectWidth, 0, rectWidth, height);
  }

}
