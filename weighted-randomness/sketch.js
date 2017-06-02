// Define function used to find weights.
function chooseWeighted(opts) {

  // get sum of all the weights. This is where underscore is really great.
  var sum = _.reduce(opts, function(memo, opt) { return memo + opt.weight; }, 0);

  // now pick a random number between 0 and the sum of the weights
  var ran = random(sum);

  // loop through all the options until you find a weight that is greater
  // or equal to the random number. Subtract weight from random num every time.
  for( var i = 0; i < opts.length; i++){

    var opt = opts[i];

    if(opt.weight >= ran) {
      return opt.value;
    }

    ran -= opt.weight;
  }
}

function setup() {

  createCanvas(600, 600);

  // call function to find random color based on weight.
  var randomColor = chooseWeighted([
    { value: color(255, 0, 0), weight: 4 },
    { value: color(0, 255, 0), weight: 2 },
    { value: color(0, 0, 255), weight: 1 }
  ]);

  // draw rectangle with this color.
  noStroke();
  fill(randomColor)
  rect(200, 100, 200, 200);
}
