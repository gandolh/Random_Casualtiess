 /*
     //ruleset=[0,1,1,1,1,1,1,0]; 
      CA.prototype.display= function() {
             let passR=5,passG=5;
             let offset = this.generation % this.rows;


             for (let i = 0; i < this.cols; i++) {
                             let colorR = 255,colorG=255;
                 for (let j = 0; j < this.rows; j++) {
                     if(j%4==0)colorR-=passR,colorG-=passG;
                     if(colorR<=0)passR*=-1,passG*=-1;
                     let y = j - offset;
                     if (y <= 0) y = this.rows + y;
                                        
                     if (this.matrix[i][j] == 1) fill(0);
                     else fill(255);
                     
                     if (this.matrix[i][j] == 1) fill(colorR, colorG, 0);
                     else fill('#f4fa9c');
                     noStroke();
                     rect(i * this.w, (y - 1) * this.w, this.w, this.w);

                 }
             }
         }
     */
 /*
  //ruleset=[1,0,0,1,0,1,1,0]; 
  CA.prototype.display= function() {
         let passR=0  ,passG=5;
         let offset = this.generation % this.rows;


         for (let i = 0; i < this.cols; i++) {
                         let colorR = 0,colorG=255;
             for (let j = 0; j < this.rows; j++) {
                 if(j%4==0)colorR-=passR,colorG-=passG;
                 if(colorR<=0)passR*=-1,passG*=-1;
                 let y = j - offset;
                 if (y <= 0) y = this.rows + y;
                                    
                 if (this.matrix[i][j] == 1) fill(0);
                 else fill(255);
                 
                 if (this.matrix[i][j] == 1) fill(colorR, colorG, 0);
                 else fill('#17b978');
                 noStroke();
                 rect(i * this.w, (y - 1) * this.w, this.w, this.w);

             }
         }
     }
     */
 /* function brush(x, y, w, h,colorR,colorG,colorB) {
     xoff+=0.03;
     // console.log(xoff)

      for (let i = y; i <= y + h; i += 6) {
          // fill("#ba53de");

          ellipse(x+noise(xoff)*10, i, 12 , 12);
      }
  }*/
 /* 
 CA.prototype.display = function() {
      xoff=0;
      let ok = 0;
      let passR = 6,
          passG = 3,
          passB=2;
      let offset = this.generation % this.rows;


      for (let i = 0; i < this.cols; i++) {
          let colorR = 255,
              colorG = 192,
              colorB= 203
          for (let j = 0; j < this.rows; j++) {
              if (j % 4 == 0) colorR -= passR, colorG -= passG,colorB-=passB;
              if (colorR <= 0) passR *= -1, passG *= -1,passB*=-1;
              let y = j - offset;
              if (y <= 0) y = this.rows + y;


              if (this.matrix[i][j] == 1) {
                  fill(colorR, colorG, colorB);
                  ok = 1;
              } else fill('#574b90');
              noStroke();
              rect(i * this.w, (y - 1) * this.w, this.w, this.w);
              if (ok) {
                  brush(i * this.w, (y - 1) * this.w, this.w, this.w,colorR,colorG,colorB);
                  ok = 0;
              }


          }
      }
  }*/
 CA.prototype.display = function() {

     let offset = this.generation % this.rows;

     let colora = color('#facf5a');
     colorb = color('#085f63');
     for (let i = 0; i < this.cols; i++) {
         alphaa = 200, alphab = 150;
         for (let j = 0; j < this.rows; j++) {
             let y = j - offset;
             if (y <= 0) y = this.rows + y;


             if (this.matrix[i][j] == 1) {
                 colora.setAlpha(alphaa);
                 fill(colora);
                 ok = 1;
             } else {
                 colorb.setAlpha(alphab);
                 fill(colorb);
             }
             alphaa -= 0;
             alphab -= 0;
             /*noFill();
             if (this.matrix[i][j] == 1) {
                 stroke(255);
                 let r = int(random(3));
                 if (r == 1) {
                     arc(i * this.w, (y - 1) * this.w, this.w, this.w, 0, HALF_PI);
                     arc(i * this.w, (y - 1) * this.w, this.w, this.w, -PI, -HALF_PI);
                 } else {
                     arc(i * this.w, (y - 1) * this.w, this.w, this.w, -HALF_PI, 0)
                     arc(i * this.w, (y - 1) * this.w, this.w, this.w, PI / 2, PI);
                 }
             } else {
                 stroke(0);
                 arc(i * this.w, (y - 1) * this.w, this.w, this.w, -HALF_PI, 0)
                 arc(i * this.w, (y - 1) * this.w, this.w, this.w, PI / 2, PI);
             }*/
/*            if(this.matrix[i][j]==1){
                stroke(colora);
                line(i * this.w, (y - 1) * this.w,i * this.w + this.w, (y - 1) * this.w + this.w);
            }
            else {
               stroke(colorb);
                line(i * this.w, (y - 1) * this.w+this.w,i * this.w + this.w, (y - 1) * this.w ); 
            }*/
           
           // rect(i * this.w, (y - 1) * this.w, this.w, this.w);
            beginShape();

            let start=createVector(i*this.w,(y-1)*this.w);
            let pass= TWO_PI / 8;
            for(let i=0;i<TWO_PI;i+=pass){
                vertex(start.x+(this.w*sin(i)),start.y+(this.w*cos(i)))
            }
            endShape();

            // ellipse(i*this.w,(y-1)*this.w,this.w,this.w)
            //fill('#f5587b');
            // triangle(i*this.w,y*this.w, (i*this.w+i*this.w+this.w)/2,(y-1)*this.w,i*this.w+this.w,y*this.w);
             // if (ok) {
             //      brush(i * this.w, (y - 1) * this.w, this.w, this.w,colorR,colorG,colorB);
             //     ok = 0;
             // }


         }
     }
 }