function drawCircle(x, y, size)
{

  // draw circle
  noStroke();
  fill(random(30, 200));
  ellipse(x, y, size, size);

  // call the function again. We need an if statement,
  // otherwise it goes on forever
  if(size > 10)
  {
    drawCircle(x, y, size - 30);
  }
}

function setup() {

  createCanvas(600, 600);
  background(30);

  drawCircle(width/2, height/2, 700);


}
