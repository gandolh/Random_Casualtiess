let cols,rows,scl=10;
let flowfield;
let boids=[];
let xoff=0,yoff=0;
let fox;
function preload() {
  fox = loadImage('porsche9191.jpg');
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(255);
    fox.resize(width,height);
    // image(fox,0,0)
    // colorMode(HSB);
    noStroke();
    cols=Math.floor(width/scl);
    rows=Math.floor(height/scl);
    flowfield= new FlowField();
    for(let i=0;i<=30;i++)boids[i]=new Boid(random(width),random(height),flowfield);
}
function draw(){
    for(let i=0;i<10;i++)
    for(let b of boids){
        b.show();
        b.update();
    }
    // console.log(frameRate());
     // flowfield.show();
}

class FlowField{
    constructor(){
    this.grid=this.generateFlowfield(); //2d array for perlin noise flowfield
    // console.table(this.grid)
    }
    generateFlowfield(){
        let grid=[];
        for(let i=0;i<=cols;i++)grid[i]=[];
        yoff=0;
        for(let i=0;i<=cols;i++){
            for(let j=0;j<=rows;j++){
                let theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
                grid[i][j]=createVector(cos(theta), sin(theta));
                grid[i][j].mult(random(3,5));
                yoff+=0.03;
            }
        xoff+=0.03;

        }
    return grid;
    }
    show(){
        stroke(255);
        for(let i=0;i<=cols;i++)
            for(let j=0;j<=rows;j++){
                line(i*scl,j*scl,i*scl+this.grid[i][j].x*10,j*scl+this.grid[i][j].y*10);
                ellipse(i*scl+this.grid[i][j].x*10,j*scl+this.grid[i][j].y*10,10);
            }
    }
}
class Boid{
    constructor(x,y,flowfield){
       this.pos=createVector(x,y);
       this.lifespaninit=10;
       this.lifespan=this.lifespaninit; 
       this.flowfield=flowfield;
       // this.hue=random(360);
       // this.vel=p5.Vector.random2D();
       // this.vel.mult(random(3,5));
       this.color=color(fox.get(int(this.pos.x),int(this.pos.y)));
    }
    update(){
        // console.log(int(this.pos.x/scl),int(this.pos.y/scl));
        let xg=int(this.pos.x/scl);
        let yg=int(this.pos.y/scl);

        if(xg<cols && xg>0 && yg<rows && yg>0)this.vel=this.flowfield.grid[xg][yg];
        this.pos.add(this.vel);
        // if(this.pos.x>width)this.pos.x=0;
        //     else if(this.pos.x<0)this.pos.x=width;
        //         else if(this.pos.y>height)this.pos.y=0;
        //             else if(this.pos.y<0)this.pos.y=height;
        this.lifespan-=1;
        if(this.lifespan<=0){
            this.pos.x=random(width);
            this.pos.y=random(height);
            this.lifespan=this.lifespaninit;
            // this.hue=random(360);
             this.color=color(fox.get(int(this.pos.x),int(this.pos.y)));
        }                
    }
    show(){
        fill(this.color);
        // this.hue+=0.5;
        // if(this.hue>360)this.hue-=360;
        // fill(this.hue,255,360,0.4);
        ellipse(this.pos.x,this.pos.y,this.lifespan);

    }
}