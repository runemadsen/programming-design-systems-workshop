function setup() {

  createCanvas(800, 500);
  noStroke();

  // First we must load the font file
  opentype.load('Roboto-Regular.ttf', function(err, font) {

    // Now we get a path object from a string of text
    var path = font.getPath("Hello Rune!", 0, 0, 120);

    translate(50, 200);
    fill(30);

    // Now loop through the commands in the path.
    for(var i = 0; i < path.commands.length; i++) {

      // Get the specific command
      var cmd = path.commands[i];

      // if you want to mess around with the location,
      // you can do it here.
      cmd.x += random(-3, 3);
      cmd.y += random(-3, 3);

      if(cmd.type == 'M') {
        beginShape();
      }
      else if(cmd.type == 'L') {
        vertex(cmd.x, cmd.y);
      }
      else if(cmd.type == 'Q' && typeof cmd.x2 === 'undefined') {
        quadraticVertex(cmd.x1, cmd.y1, cmd.x, cmd.y);
      }
      else if(cmd.type == 'Q') {
        bezierVertex(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
      }
      else if(cmd.type == 'Z') {
        endShape(CLOSE)
      }
    }

  });

}
