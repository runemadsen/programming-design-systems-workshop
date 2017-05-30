function setup() {

  createCanvas(600, 600);

  // Create a rectangle to fill the entire screen
  // and a smaller rectangle on top
  var grid = new EasyGrid({
    x: 50,
    y: 50,
    width: width - 100,
    height: height - 100,
    gutter: 20,
    columns: 3,
    rows: 3
  });

  var size = 40;

  // Loop through each column
  for(var i = 1; i < 4; i++) {
    for(var j = 1; j < 4; j++) {

      var mod = grid.getModule(i, j);

      // draw the module so we can see it
      stroke(255, 0, 0);
      noFill();
      rect(mod.x, mod.y, mod.width, mod.height);

      noStroke();
      for(var k = 0; k < 50; k++)
      {
        fill(random(0, 255), random(0, 255), random(0, 255));
        var x = random(mod.width - size);
        var y = random(mod.height - size);
        rect(mod.x + x, mod.y + y, size, size)
      }

    }
  }

}
