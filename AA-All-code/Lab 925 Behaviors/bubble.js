//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam, col, acc, loc, vel, num) {

  this.col = col;
  this.acc = acc;
  this.x = x;
  this.y = y;
  this.diam = diam;
  this.loc = loc;
  this.vel = vel;
  this.orbiter = [];
  this.num = num; // number of orbiters
// this.num = 1;
  this.loadOrbiter(this.num);

}

//  placing methods in the prototype (every ball shares functions)
Bubble.prototype.run = function () {
  this.checkEdges();
  this.update();
  this.render();
  this.runOrbiter();

}


Bubble.prototype.checkEdges = function () {


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


// renders a bubble to the canvas
Bubble.prototype.render = function () {

  context.strokeStyle = this.col;
  context.fillStyle = this.col;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0);
  context.stroke();
  context.fill();




}

//  update bubble every animation frame
Bubble.prototype.update = function () {
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.acc.multiply(0);

}

Bubble.prototype.loadOrbiter = function(n){
  for (let i = 0; i < n; i++) {

        let diam = 5;
       let radius = 40; // orbital radius
        let rad = (Math.PI*2)/n; // Radians between orbiters
        let angle = rad * i;
        let clr = "rgba(224,231,34, 255)";
      let angVel = 0.05;
        this.orbiter[i] = new Orbit(this, clr, diam, radius, angle, angVel);

    }
}


Bubble.prototype.runOrbiter = function(){
  for (let i = 0; i < this.orbiter.length; i++) {
    this.orbiter[i].run();
}
}
