class Branch {
    constructor(start, end, generation) {
        this.start = start;
        this.end = end;
        this.finished = false;
        this.generation = generation;
        this.green = color('#17b978');
        this.brown = color('#6e3b3b');
        this.fruitColor=['#D0FF16','#FFDE18','#E8B005','#FFAF13'];
    }
    branchA(generation) {

        let dir = p5.Vector.sub(this.end, this.start);
        dir.rotate(angle);
        dir.mult(0.66);
        let newEnd = p5.Vector.add(this.end, dir);
        let right = new Branch(this.end, newEnd, generation);
        return right;
    }
    branchB(generation) {
        let dir = p5.Vector.sub(this.end, this.start);
        dir.rotate(-angle);
        dir.mult(0.66);
        let newEnd = p5.Vector.add(this.end, dir);
        let left = new Branch(this.end, newEnd, generation);
        return left;
    }
    show() {
        stroke(lerpColor(this.brown, this.green, (this.generation) * 1 / 10));
        strokeWeight(map(1 / (this.generation +1), 0, 1, 1, 8));
        line(this.start.x, this.start.y, this.end.x, this.end.y);
        if(this.generation==10 && random(1)<0.5){
        	let foo=color(random(this.fruitColor));
        	noStroke();
        	foo.setAlpha(150);
        	fill(foo);
        	ellipse(this.start.x,this.start.y,10,10)
        	foo=color('#fc85ae');	
        	foo.setAlpha(175);
        	fill(foo);
        			ellipse(this.start.x+5,this.start.y,5,5)
        			ellipse(this.start.x-5,this.start.y,5,5)
        			ellipse(this.start.x,this.start.y+5,5,5)
        			ellipse(this.start.x,this.start.y-5,5,5)

        }
      
    }
}