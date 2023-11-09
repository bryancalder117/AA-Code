//  Snake constructor function +++++++++++++++++++++++++++++
function Snake(x, y, acc, loc, vel, col, length) {

  this.col = col;
  this.acc = acc;
  this.x = x;
  this.y = y;
  this.loc = loc;
  this.vel = vel;
  this.length = length;
  this.segments = [];
  this.loadSegments(this.length);
}

//  placing methods in the prototype (every snake shares functions)
Snake.prototype.run = function () {
  this.checkEdges();
  this.update();
  this.render();
  this.runSegments();
}


Snake.prototype.checkEdges = function () {


  if (this.loc.x < 5) {
    this.vel.x = -this.vel.x;
  }
  if (this.loc.x > canvas.width - 5) {
    this.vel.x = -this.vel.x;
  }
  if (this.loc.y < 5) {
    this.vel.y = -this.vel.y;
  }
  if (this.loc.y > (canvas.height - 5)) {
    this.vel.y = -this.vel.y;
  }

}


// renders a snake to the canvas
Snake.prototype.render = function () {
  context.save();
  context.translate(this.loc.x, this.loc.y);
  context.rotate(this.vel.getDirection() + Math.PI / 2);
  context.beginPath();
  context.strokeStyle = this.col;
  context.fillStyle = this.col;
  context.moveTo(0, -15);
  context.lineTo(-5, 5);
  context.lineTo(0, 0);
  context.lineTo(5, 5);
  context.closePath();
  context.stroke();
  context.fill();
  context.restore();

}

//  update snake every animation frame
Snake.prototype.update = function () {
  // this.vel.add(this.acc);
  // this.loc.add(this.vel);
  // this.acc.multiply(0);

  //  this.acc.setMagnitude(0);
  this.acc = JSVector.subGetNew(planet.loc, this.loc);
  this.acc.normalize();
  this.acc.multiply(0.01);

//this.acc = new JSVector(0, 0);
this.vel.add(this.acc);
this.vel.limit(1);
this.loc.add(this.vel);

}

Snake.prototype.loadSegments = function (n) {
  for (let i = 0; i < n; i++) {
    let diam = 10-i;
    let col = "rgba(255, 0, 0, 1)";
    let distance = i*15;
    this.segments[i] = new Segments(this, diam, col, distance);
  }
}

Snake.prototype.runSegments = function () {
  for (let i = 0; i < this.segments.length; i++) {
    this.segments[i].run();
  }
}
