let graph = [],
  h, wd=10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i <= width / wd; i++) graph[i] = 0;
}

function draw() {
  noStroke();
  h = int(randomGaussian(graph.length/2,graph.length/8));
  graph[h] += wd;
  show();
}

function show() {
  for (let i = 0; i <= graph.length - 1; i++) {
    fill(255);
    rect(i * wd, height+10, wd, -graph[i],10);
    if(graph[i]>=600)noLoop();
  }
}