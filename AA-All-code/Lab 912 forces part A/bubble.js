//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam, col, colOverlap, acc) {
  this.loc = new JSVector(x, y)
  this.vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
  this.isOverlapping = false;
  this.col = col;
  this.colOverlap = colOverlap;
  this.acc = acc;
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
    context.strokeStyle = this.colOverlap;
    context.fillStyle = this.colOverlap;

  } else {
    context.strokeStyle = this.col;
    context.fillStyle = this.col;

  }
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
  context.stroke();
  context.fill();

}

//  update bubble every animation frame
Bubble.prototype.update = function () {
  this.acc = new JSVector(0, 0)
 
 
    for (let i = 0; i < movers.length; i++) {
      let dist1 = this.loc.distance(movers[0].loc);
      if (dist1 < 150) {//  attraction
  
        this.acc = JSVector.subGetNew(movers[0].loc, this.loc);
        this.acc.normalize();
        this.acc.multiply(0.02 * movers[0].applyForce());
      }
      if (dist1 < 20) {//  repell
        this.acc = JSVector.subGetNew(this.loc, movers[0].loc);
        this.acc.normalize();
        this.acc.multiply(0.1);
      }
    }
    let dist2 = this.loc.distance(movers[1].loc);
    if (dist2 < 450) {
      this.acc = JSVector.subGetNew(this.loc, movers[1].loc);
      this.acc.normalize();
      this.acc.multiply(0.1 * movers[1].applyForce());
    }
    if (dist2 < 35) {//  repell
      this.acc = JSVector.subGetNew(this.loc, movers[1].loc);
      this.acc.normalize();
      this.acc.multiply(0.2);
    }
  
    
  

  this.vel.add(this.acc);
  this.vel.limit(3)
  this.loc.add(this.vel);
  
}

