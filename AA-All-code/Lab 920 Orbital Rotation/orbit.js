function Orbit(parent, clr, diam, radius, angle, av) {
this.mover = parent;
  this.diam = diam;
  this.col = clr;
  this.loc = parent.loc.copy();
 //s this.loc = new JSVector(parent.loc.x, parent.loc.y);
  this.angle = angle;
  this.radius = radius;
  this.angVel = av;
 
 
}

Orbit.prototype.run = function () {
  this.update();
 
  this.render();


}

Orbit.prototype.update = function () {
  this.loc.x = this.mover.loc.x + Math.cos(this.angle) * this.radius;
 this.loc.y = this.mover.loc.y + Math.sin(this.angle) * this.radius;
 // this.loc.x = this.mover.loc.x + this.radius * Math.cos(this.angle);
  //this.loc.y = this.mover.loc.y + this.radius * Math.sin(this.angle);
  this.angle += this.angVel;



}

Orbit.prototype.render = function () {
  context.strokeStyle = this.col;
  context.fillStyle = this.col;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0);
  context.stroke();
  context.fill();
}


