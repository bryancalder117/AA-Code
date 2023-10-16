//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.loc = new JSVector(x, y)
  this.vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
  this.acc = new JSVector(0, 0.6);
  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
  this.isOverlapping = false;
}

//  placing methods in the prototype (every ball shares functions)
Bubble.prototype.run = function () {
  this.checkEdges();
  this.checkOverlapping()
  this.update();
  this.render();
}

//  Check to see if buuble leaves canvas area and reposition in necessary
Bubble.prototype.checkEdges = function () {

  if (this.loc.x < 0) {
    this.vel.x = -this.vel.x;
  }
  if (this.loc.x > canvas.width - 1) {
    this.vel.x = -this.vel.x;
  }
  if (this.loc.y < 0) {
    this.vel.y = -this.vel.y;
  }
  if (this.loc.y > canvas.height - 1) {
    this.vel.y = -this.vel.y;
  }

}

//  Sets "this.isOverlapping" to true if bubbles are overlapping
Bubble.prototype.checkOverlapping = function () {
  this.isOverlapping = false;

  for (let i = 0; i < bubbles.length; i++) {
    if (this !== bubbles[i]) {

      //let d = Math.sqrt((bubbles[i].loc.x - this.loc.x) * (bubbles[i].loc.x - this.loc.x) + (bubbles[i].loc.y - this.loc.y) * (bubbles[i].loc.y - this.loc.y));
      let d = this.loc.distance(bubbles[i].loc);
      if (d <= this.diam * 2) {
        this.isOverlapping = true;
        return;
      }

    }
  }
}


// renders a bubble to the canvas
Bubble.prototype.render = function () {
  if (this.isOverlapping) {
     context.strokeStyle = "rgba(255, 0, 0, 255)"
     context.fillStyle = "rgba(255, 0, 0, 255)"

  } else {
    context.strokeStyle = "rgba(0, 0, 255, 255)"
    context.fillStyle = "rgba(0, 0, 255, 255)"

  }
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
  context.stroke();
  context.fill();

}

//  update bubble every animation frame
Bubble.prototype.update = function () {
  //this.x += this.dx;//Math.random() * (5 - (-5)) - 5;
  //this.y += this.dy;//Math.random() * (5 - (-5)) - 5;
  this.acc.multiply(0.05);
   this.acc.limit(3);
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.acc.normalize();

}

