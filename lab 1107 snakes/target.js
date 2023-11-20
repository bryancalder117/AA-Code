
function Target(x, y, col, acc, loc, vel, diam) {

    this.col = col;
    this.acc = acc;
    this.x = x;
    this.y = y;
    this.loc = loc;
    this.vel = vel;
    this.diam = diam;
  }
  
  
 Target.prototype.run = function () {
    this.update();
    this.render();
    this.checkEdges();
  
  }
  
 
 Target.prototype.render = function () {
  
    context.strokeStyle = this.col;
    context.fillStyle = this.col;
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0);
    context.stroke();
    context.fill();
  
  }
  
  
  Target.prototype.update = function () {
  
         let dist = this.loc.distance(snake.loc);
      if (dist < 300) {
          this.acc = JSVector.subGetNew(this.loc, snake.loc);
          this.acc.normalize();
          this.acc.multiply(-0.55);
          this.vel.add(this.acc);
          this.vel.limit(0.55);
          this.loc.add(this.vel);
        } 
        if(dist < 100) {
          this.loc.x = Math.random() * (canvas.width -1)+1;
          this.loc.y = Math.random() * (canvas.height -1)+1;
    
        }
  
  }
   
  Target.prototype.checkEdges = function(){
    
    if (this.loc.x < 0) {
        this.loc.x = Math.random() * (canvas.width -1)+1;
        this.loc.y = Math.random() * (canvas.height -1)+1;
    }
    if (this.loc.x > canvas.width - 1) {
        this.loc.x = Math.random() * (canvas.width -1)+1;
        this.loc.y = Math.random() * (canvas.height -1)+1;
    }
    if (this.loc.y < 0) {
        this.loc.x = Math.random() * (canvas.width -1)+1;
        this.loc.y = Math.random() * (canvas.height -1)+1;
    }
    if (this.loc.y > canvas.height - 1) {
        this.loc.x = Math.random() * (canvas.width -1)+1;
        this.loc.y = Math.random() * (canvas.height -1)+1;
    }
  }
  