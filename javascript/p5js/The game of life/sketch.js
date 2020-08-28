let grid, cols,
    rows, resolution = 10;
function setup() {
    createCanvas(windowWidth, windowHeight);
    cols = Math.floor(width / resolution) + 1;
    rows = Math.floor(height / resolution) + 1;
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++)
        for (let j = 0; j < rows; j++)
            grid[i][j] = floor(random(2));
}

function draw() {
    background(0);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255);
                rect(x, y, resolution - 1, resolution - 1);
            }

        }
    }
    let next = make2DArray(cols, rows);
    //compute next based

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
        	let state= grid[i][j];

        	//count live neighbours
        	let sum=0;
        	let neighbours = countNeighbors(grid,i,j);
        	if(state==0 && neighbours== 3)next[i][j]=1;
        	else if(state==1 && (neighbours<2 || neighbours>3))next[i][j]= 0;
        	else next[i][j]=state;
        	}
    }
    grid = next;
}

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) arr[i] = new Array(rows);
    return arr;
}
function countNeighbors(grid,x,y){
	let sum=0;
	for(let i=-1;i<2;i++){
	for(let j=-1;j<2;j++){
		sum+=grid[(x+i+cols)%cols][(y+j+rows)%rows];
	}
	}
	sum-=grid[x][y];
	return sum;
}