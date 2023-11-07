//  Snake constructor function +++++++++++++++++++++++++++++
function Snake(x, y, acc, loc, vel, col, length) {

  this.col = col;
  this.acc = acc;
  this.x = x;
  this.y = y;
  this.loc = loc;
  this.vel = vel;
  this.length = length;
}

//  placing methods in the prototype (every snake shares functions)
Snake.prototype.run = function () {
  this.checkEdges();
  this.update();
  this.render();
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
  context.rotate(this.vel.getDirection() + Math.PI /2);
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
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.acc.multiply(0);

}
