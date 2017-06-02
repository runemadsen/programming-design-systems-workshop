function setup() {

  createCanvas(600, 600);
  background(30);
  noFill();

  // random()
  // -------------------------------------------------------

  stroke(255);
  strokeWeight(2);
  translate(0, 100);
  beginShape();
  for(var x = 0; x < width; x += 15) {
    vertex(x, random(100));
  }
  endShape();

  // noise()
  // -------------------------------------------------------

  noiseStep = 0;

  // To make the noise look the same on each run
  // noiseSeed(1);

  // To control the curves of the noise
  // noiseDetail(1)

  translate(0, 200);
  beginShape();
  for(var x = 0; x < width; x += 15) {
    var y = noise(noiseStep) * 100;
    vertex(x, y);
    noiseStep += 0.1;
  }
  endShape();

}
