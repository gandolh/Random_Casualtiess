let grid, rows, cols, scl =50;
let xoff=0,yoff=0;
let zoff=0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    rows = height / scl;
    cols = width / scl;
    grid = make2DArray();
    noStroke();
}

function draw() {
  background('rgb(51,51,51)');
  colorMode(HSB);
  generateValues();
  showGrid();
      zoff+=0.01;
}

function make2DArray() {
    let arr = [];
    for (let i = 0; i <= rows; i++) arr[i] = [];
    return arr;
}

function generateValues(){
  xoff=0;yoff=0;  
    for(let i=0;i<rows;i++){
      for(let j=0;j<=cols;j++){
        xoff+=0.03;
        grid[i][j]=noise(xoff,yoff,zoff);
      }
      xoff=0; 
      yoff+=0.03;
    }
}
function showGrid(){
      for(let i=0;i<rows;i++)
      for(let j=0;j<=cols;j++){
        let hue=ease(grid[i][j])*360;
        fill(hue,70,100)
        let rectSize=grid[i][j]*scl
        rect(j*scl,i*scl,rectSize,rectSize)
      }
}
// function ease(x){
// return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
// }
// function ease(x){
// const c5 = (2 * Math.PI) / 4.5;

// return x === 0
//   ? 0
//   : x === 1
//   ? 1
//   : x < 0.5
//   ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
//   : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
// }
function ease(x){
  return x;
}