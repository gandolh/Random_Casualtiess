
function nPoly(x,y,r,nsides){
	let points=[];
	let sx,sy;
	angle=TWO_PI/nsides;
	for(let i=0;i<TWO_PI;i+=angle){
		sx=x+cos(i)*r;
		sy=y+sin(i)*r;
		points.push(createVector(sx,sy));
	}

	return points;
}

function deform(points,depth,variance,vdiv){
	let sx1,sy1,sx2=0,sy2=0;
	let newPoints=[];
	if(points.length==0)return newPoints;
	for(let i=0;i<points.length;i++){
		sx1=points[i].x;
		sy1=points[i].y;
		sx2=points[(i+1)%points.length].x;
		sy2=points[(i+1)%points.length].y;
		newPoints.push(createVector(sx1,sy1));
		subDivide(newPoints,sx1,sy1,sx2,sy2,depth,variance,vdiv)
	}
	return newPoints;
}
function subDivide(newPoints,x1,y1,x2,y2,depth,variance,vdiv){
	let midx,midy;
	let nx,ny;
	if(depth>=0){
		midx=(x1+x2)/2;
		midy=(y1+y2)/2;
		nx=midx+randomGaussian()*variance;
		ny=midy+randomGaussian()*variance;
		subDivide(newPoints, x1, y1, nx, ny,
        depth - 1, variance/vdiv, vdiv);
    	newPoints.push(createVector(nx, ny));
    	subDivide(newPoints, nx, ny, x2, y2,
		depth - 1, variance/vdiv, vdiv);
	}

}
function polyStack(x,y,r,nsides){
	let stack=[];
	let poly=[];
	basePoly= nPoly(x,y,r,nsides);
	basePoly= deform(basePoly,5,r/10,2);
	for(let k=0;k<=10;k++){
		poly=deform(basePoly,2,random(r/15,r/5),4);

		stack.push(poly);
	}
return stack;
}





