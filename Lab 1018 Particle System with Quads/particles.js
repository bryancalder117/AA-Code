function Particle(parent, col, acc, vel, diam, shapeNum) {
    this.loc = parent.loc.copy();
    this.col = col;
    this.acc = acc;
    this.vel = vel;
    this.diam = diam;
    this.lifeSpan = 300;
    this.shapeNum = shapeNum;

}

Particle.prototype.run = function () {
    this.update();
    this.render();
}

Particle.prototype.update = function () {
    this.acc = new JSVector(0, 0.06);
    this.vel.add(this.acc);
    this.vel.limit(4)
    this.loc.add(this.vel);
    this.lifeSpan -= 1;
}

Particle.prototype.render = function () {

    if (this.shapeNum <= 5) {
        // Draw a circle
        context.strokeStyle = this.col;
        context.fillStyle = this.col;
        context.beginPath();
        context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0);
        context.stroke();
        context.fill();
    } else if (this.shapeNum <= 10) {
        // Draw a rectangle
        context.fillRect(this.loc.x, this.loc.y, this.diam * 2, this.diam * 2);
    } else if (this.shapeNum <= 15) {
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

}



