function setup() {

  createCanvas(800, 700);
  colorMode(HSL);
  noStroke();

  var words = [
    "Hello",
    "My",
    "Name",
    "is",
    "Rune"
  ];

  // Create a rectangle to fill the entire screen
  // and a smaller rectangle on top
  var grid = new EasyGrid({
    x: 20,
    y: 20,
    width: width - 40,
    height: height - 40,
    gutter: round(random(0, 20)),
    columns: round(random(4, 8)),
    rows: round(random(4, 6))
  });

  var size = 40;

  // Loop through each row and column dynamically
  for(var row = 1; row <= grid.state.rows; row++) {
    for(var col = 1; col <= grid.state.columns; col++) {

      var mod = grid.getModule(col, row);

      // draw a gradient from the module
      fill(col * row * 2, 100, 50);
      rect(mod.x, mod.y, mod.width, mod.height);

      // pick a random word and draw it
      var fontSize = mod.width * 0.25;
      textSize(fontSize)
      textAlign(CENTER);
      fill(255);
      var word = words[floor(random(words.length))];
      text(word, mod.x + (mod.width/2), mod.y + (mod.height/2) + (fontSize/2))



    }
  }

}
