//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam, col,  acc) {
  this.loc = new JSVector(x, y)
  this.vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
//this.isOverlapping = false;
  this.col = col;
 
  this.acc = acc;
}

//  placing methods in the prototype (every ball shares functions)
Bubble.prototype.run = function () {
  this.checkEdges();
 
  this.update();
  this.render();

}


//  Check to see if buuble leaves canvas area and reposition in necessary
Bubble.prototype.checkEdges = function () {
if(gravity === false && wind === false){
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
} else {

  if (this.loc.x < 0) {
    this.vel.x = -this.vel.x;
    this.vel.y = -this.vel.y;
  }
  if (this.loc.x > canvas.width - 1) {
   this.vel.x = - this.vel.x;
   this.vel.y = -this.vel.y;
  }
  if (this.loc.y < 0) {
    this.vel.y = -this.vel.y;
    this.vel.x = -this.vel.x;
  }
  if (this.loc.y > canvas.height - 1) {
     this.vel.y = -this.vel.y;
     this.vel.x = -this.vel.x;
  }

 
}
}


// renders a bubble to the canvas
Bubble.prototype.render = function () {
    context.strokeStyle = this.col;
    context.fillStyle = this.col;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
  context.stroke();
  context.fill();

}

//  update bubble every animation frame
Bubble.prototype.update = function () {
  this.acc = new JSVector(0, 0)
 
  if (gravity === true) {
    this.acc = new JSVector(0,0.06);
  } 
  if(wind === true){
    this.acc = new JSVector(0.03, 0);
  } 
  if(wind === true && gravity === true){
    this.acc = new JSVector(0.03, 0.06);
  } 


  this.vel.add(this.acc);
  this.vel.limit(4)
  this.loc.add(this.vel);
  
}

