function setup() {

  createCanvas(600, 600);
  noStroke();
  fill(255, 255, 0);

  // show will be true 50% of the time
  var show = random(1) > 0.5;

  if(show) {
    rect(200, 100, 200, 200);
  }

}
