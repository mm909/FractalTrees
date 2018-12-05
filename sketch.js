var a = Math.PI / 4;
var length = 150
var c = 0;
var mainStep = 0;
var step = 1;

var r;
var g;
var b;
var h;

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasContainer")
  h = random(255);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  colorMode(RGB)
  background(255, 247, 248);
  stroke(255)
  strokeWeight(1)
  // a = slider.value();
  a += 0.01
  translate(width / 2, height)
  branch(length, 1);
}

function branch(l, level) {
  var c = map(level, 1, 11, 0, 1)
  strokeWeight(11 - level)
  colorMode(HSB)
  stroke(h, 100 * (c + 0.05), 95, .85)
  // stroke(c * r, c * g, c * b)
  line(0, 0, 0, -l)
  translate(0, -l)
  if (l > 10) {
    push()
    rotate(a);
    branch(l * .66, level + 1)
    pop();
    rotate(-a);
    branch(l * .66, level + 1)
  }
}