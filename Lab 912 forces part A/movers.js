function Movers(x, y, diam, col, force) {
  //this.x = x;
  // this.y = y;
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 6 - 1, Math.random() * 6 - 1);
  this.acc = new JSVector(0, 0);
  this.diam = diam;
  this.col = col;
  this.force = force;
}

Movers.prototype.run = function () {
  this.checkEdges();
  //this.checkOverlapping()
  this.update();
  this.render();
  this.applyForce();
}

Movers.prototype.applyForce = function () {
  //let force;
  for (let i = 0; i < bubbles.length; i++) {
    this.force = bubbles[i].diam * bubbles[i].acc;
  }
  return this.force;
}


Movers.prototype.checkEdges = function () {

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

Movers.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(10);
  this.loc.add(this.vel);
}

Movers.prototype.render = function () {
  context.strokeStyle = this.col;
  context.fillStyle = this.col;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
  context.stroke();
  context.fill();
}