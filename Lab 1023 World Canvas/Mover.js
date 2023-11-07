function Mover(loc, vel, d, ctx1, ctx2, worldWidth, worldHeight, col) {
  //mover properties
  this.loc = loc;
  this.vel = vel;
  this.acc = new JSVector(0, 0);
 // this.clr = this.getRandomColor();
  this.diam = d;
  this.ctx1 = ctx1;
  this.ctx2 = ctx2;
  this.wWidth = worldWidth;
  this.wHeight = worldHeight;
  this.worldScale = new JSVector(this.wWidth, this.wHeight);
  this.col = col;
}//++++++++++++++++++++++++++++++++ end mover constructor
 
//++++++++++++++++++++++++++++++++ mover methods
Mover.prototype.run = function () {
  this.update();
  this.checkEdges();
  this.render();
}

Mover.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(3);
  this.loc.add(this.vel);
}


Mover.prototype.checkEdges = function () {
  if (this.loc.x >= world.dims.width / 2 || this.loc.x <= -world.dims.width / 2) {
    this.vel.x *= -1;
  }
  if (this.loc.y >= world.dims.height / 2 || this.loc.y < -world.dims.height  / 2) {
    this.vel.y *= -1;
  }
}


Mover.prototype.render = function () {
  //let col = this.getRandomColor();
   //  render balls in world
    let ctx1 = this.ctx1;
    ctx1.strokeStyle = this.col;
     ctx1.fillStyle = this.col
     ctx1.beginPath();
     ctx1.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
     ctx1.stroke();
     ctx1.fill();
   //  render balls in mini map
    let ctx2 = this.ctx2;
    ctx2.strokeStyle = this.col;
    ctx2.fillStyle = this.col
    ctx2.beginPath();
    ctx2.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    ctx2.stroke();
    ctx2.fill();
   
}
