
class Mover {
    constructor(x, y, radius, a) {
        this.pos = createVector(x, y)
        this.r = radius;
        this.a = a;
        this.angle=0;
  	 	this.pass=TWO_PI/random(20,200);
      // this.xoff=0;
    }
    show() {
        let b = color(255, 255, 255)
        let c = lerpColor(this.a, b, 0.3)

        fill(c)
        ellipse(this.pos.x, this.pos.y, this.r)
    }
    edges(){
    	if(this.pos.x<0)this.pos.x=width;
    	else if( this.pos.y<0)this.pos.y=height;
    	else if(this.pos.x>width)this.pos.x=0;
    	else if(this.pos.y>height)this.pos.y=0;
    }
   move(){
   	if(this.angle>=TWO_PI){
   		   	this.pass=TWO_PI/random(20,200);
   		   	if(random()<0.5)this.pass*=-1;
          // this.angle=0;
   	}
   	this.pass+=random(0,0.0005);
   	this.angle+=this.pass;
   	let velx=sin(this.angle)*this.r/8;
   	let vely=cos(this.angle)*this.r/8;
   	this.vel= createVector(velx,vely)
   	this.pos.add(this.vel)
   	this.edges();

   }

}

class Satelite extends Mover{
  constructor(planet,offset,radius,a){
    super()
    this.offset= createVector(offset,offset)
    this.planet=planet;
    this.r=radius;
    this.a=a;
    this.angle=0;
    // this.pos=createVector(this.planet.pos.x+this.offset.x, this.planet.pos.y+this.offset.y)  
  }
    move(){
      this.angle+=TWO_PI/60
      let velx=sin(this.angle)*this.offset.x*1.5;
      let vely=cos(this.angle)*this.offset.y*1.5;
      this.pos=createVector(this.planet.pos.x+velx, this.planet.pos.y+vely)


    }
}