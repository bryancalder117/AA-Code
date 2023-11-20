function Snake(x, y){
  this.loc = new JSVector(x, y);
  let dx = Math.random() * 8 - 4;
  let dy = Math.random() * 8 - 4;
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0, 0);
  this.rad = 10;
  let clr = "rgba(250, 100, 8, 0.8)";
  this.clr = clr;
  this.segs = [];
  this.numSegs = 30;
  this.segLength = 15;
  for(let i = 0; i < this.numSegs; i++){

    this.segs.push(new JSVector(0, 0));
  
}
}

Snake.prototype.run = function(){
this.render();
this.update();
this.checkEdges();

}

Snake.prototype.render = function(){
  context.save();
  context.translate(this.loc.x, this.loc.y);
  context.rotate(this.vel.getDirection() + Math.PI / 2);
  context.scale(1.5, 1.5);
  context.beginPath();
  context.strokeStyle = this.clr;
  context.fillStyle = this.clr;
  context.moveTo(0, -15);
  context.lineTo(-10, 10);
  context.lineTo(0, 0);
  context.lineTo(10, 10);
  context.closePath();
  context.stroke();
  context.fill();
  context.restore();

}

Snake.prototype.update = function(){
  let d = this.loc.distance(target.loc);
  if(d < 900){
    this.acc = JSVector.subGetNew(target.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.01);
  }

  if(d < 500){
    this.acc = JSVector.subGetNew(target.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.05);
  }

  this.vel.add(this.acc);
  this.vel.limit(2);
  this.loc.add(this.vel);
this.updateSegments(0, this.loc);
  for(let i = 0; i < this.numSegs - 1; i++){
      this.updateSegments(i + 1, this.segs[i]);
  }
}

Snake.prototype.updateSegments = function(nextI, vec){
    let dx = vec.x - this.segs[nextI].x;
    let dy = vec.y - this.segs[nextI].y;
    let angle = Math.atan2(dy, dx);
    this.segs[nextI].x = vec.x - Math.cos(angle) * this.segLength;
    this.segs[nextI].y = vec.y - Math.sin(angle) * this.segLength;
    this.renderSegments(nextI, angle);
}

Snake.prototype.renderSegments = function(nextI, a){
context.save();
context.translate(this.segs[nextI].x, this.segs[nextI].y);
context.rotate(a + Math.PI / 2);
let scaleFactor = 1 + (3 / (nextI));
context.scale(scaleFactor, scaleFactor);
context.beginPath();
let r = 255 - nextI * 2;
let g = nextI * 2;
let b = nextI;
context.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
context.moveTo(0, -15);
context.lineTo(-10, 10);
context.lineTo(0, 0);
context.lineTo(10, 10);
context.closePath();
context.stroke();
context.fill();
context.restore();
}

Snake.prototype.checkEdges = function(){
  if (this.loc.x < 0) {
   this.vel.x = -this.vel.x;
  }
  if (this.loc.x > canvas.width ) {
    this.vel.x = -this.vel.x;
  }
  if (this.loc.y < 0) {
   this.vel.y = -this.vel.y;
  
  }
  if (this.loc.y > canvas.height) {
this.vel.y = -this.vel.y
  }
}
   