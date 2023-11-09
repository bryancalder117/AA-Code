function Segments(parent, diam, col, distance) {
    this.head = parent;
    this.diam = diam;
    this.col = col;
    this.loc = parent.loc.copy();
    this.distance = distance;
}

Segments.prototype.run = function () {
    this.update();
    this.render();
}

Segments.prototype.update = function () {
this.loc.x = this.head.loc.x - (this.distance+15);
this.loc.y = this.head.loc.y;
}

Segments.prototype.render = function () {
    context.strokeStyle = this.col;
    context.fillStyle = this.col;
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0);
    context.stroke();
    context.fill();
}