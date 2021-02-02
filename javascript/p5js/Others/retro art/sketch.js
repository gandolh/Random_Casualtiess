let grid;
let rows, cols;
let scl =10;
// use it at 1080x1080 or it isnt responsive,sorry guys
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    rows = height / scl;
    cols = width / scl;
    grid = new2DArray();
    resetGrid();

    fill(255);
    generateArtPiece();
}

function generateArtPiece() {
  let colors=['#88e1f2','#ffd082','#ff7c7c','#45969b'];
  background(colors[0]);
  stroke(colors[0]);
    //top clouds

    for (let i = -1; i < cols; i += 10) drawRect(5, i, 8, 3);
    for (let i = 1; i < cols; i += 10) drawRect(15, i, 8, 3);
    for (let i = -3; i < cols; i += 10) drawRect(10, i, 8, 3);
    //triangle
  fill(colors[1]); //clouds
  applyColor();
  drawingStol();
  fill(colors[2]); //stol
  applyColor();
  //lines
  for(let k=5;k<=25;k+=3){
     drawLine(rows,cols-k,rows-k,cols);
     
       }
  for(let k=23;k<=35;k+=2){
     drawLine(rows,cols-k,rows-k,cols);
       }
       fill(colors[3])//lines
    applyColor();
  //ellipse
    drawEllipse(30,20,5,5);
    fill(colors[2]); //intre nori
    applyColor();
    drawEllipse(89,55,15,5);
    fill(colors[1]); // circus circle
    applyColor();
    for(let len=5;len>0;len-=2)
      drawEllipse(rows/2-15,cols/2,len,len);
    fill(colors[2]); // tinta
    applyColor();
    let offset=16;
    for(let len=10;len>0;len-=2)
      drawEllipse(cols/2-offset,rows,len,rows/2-offset);
    fill(colors[3]);//terrain
    applyColor();    
}

function applyColor() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
              rect(j * scl, i * scl, scl, scl);
            grid[i][j]=0;
          }
        }
    }
}

function new2DArray() {
    let arr = [];
    for (let i = 0; i <= rows; i++) arr[i] = [];
    return arr;
}

function resetGrid() {
    for (let i = 0; i <= rows; i++)
        for (let j = 0; j <= cols; j++)
            grid[i][j] = 0;

    // grid[int(rows / 2)][int(cols / 2)] = 1;
}