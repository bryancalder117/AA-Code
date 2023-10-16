//  Food constructor function +++++++++++++++++++++++++++++
function Food(x, y, diam, col, acc, loc, vel) {

    this.col = col;
    this.acc = acc;
    this.x = x;
    this.y = y;
    this.diam = diam;
    this.loc = loc;
    this.vel = vel;
    this.isDead = false;
  
  }
  
  //  placing methods in the prototype (every ball shares functions)
  Food.prototype.run = function () {
    this.checkEdges();
    this.update();
    this.render();
    //this.checkDist();
  
  }
  
  
  Food.prototype.checkEdges = function () {
  
  
    if (this.loc.x < 0) {
      this.loc.x = canvas.width - 5;
    }
    if (this.loc.x > canvas.width - 1) {
      this.loc.x = 5;
    }
    if (this.loc.y < 0) {
      this.loc.y = canvas.height - 5;
    }
    if (this.loc.y > canvas.height - 1) {
      this.loc.y = 5
    }
  
  }
  
  
  // renders a Food to the canvas
 Food.prototype.render = function () {
  
    context.strokeStyle = this.col;
    context.fillStyle = this.col;
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0);
    context.stroke();
    context.fill();
  
  
  
  
  }
  
  //  update bubble every animation frame
  Food.prototype.update = function () {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.multiply(0);
  
    for(let i = 0; i < bubbles.length; i++){
      
    }
  }
  
 