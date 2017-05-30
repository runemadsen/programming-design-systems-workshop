function setup() {

  createCanvas(600, 600);

  // Create a rectangle to fill the entire screen
  // and a smaller rectangle on top
  var grid = new EasyGrid({
    x: 50,
    y: 50,
    width: width - 100,
    height: height - 100,
    columns: 1,
    rows: 1
  });

  var mod = grid.getModule(1, 1);
  var size = 40;

  // draw the module so we can see it
  stroke(255, 0, 0);
  noFill();
  rect(mod.x, mod.y, mod.width, mod.height);

  noStroke();
  for(var i = 0; i < 50; i++)
  {
    fill(random(0, 255), random(0, 255), random(0, 255));
    var x = random(mod.width - size);
    var y = random(mod.height - size);
    rect(mod.x + x, mod.y + y, size, size)
  }
}
