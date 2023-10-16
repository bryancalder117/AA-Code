// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x, y) {
    // called with two arguments
    this.x = x;
    this.y = y;
}


// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function (mag) {
    let theta = this.getDirection();
    this.x = Math.cos(theta) * mag;
    this.y = Math.sin(theta) * mag;
    return this;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function () {
    let mag = Math.sqrt((this.x * this.x) + (this.y * this.y));
    return mag;
}

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function (angle) {
    const mag = this.getMagnitude();
    this.x = mag * Math.cos(angle);
    this.y = mag * Math.sin(angle);
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function () {
    let angle = Math.atan2(this.y, this.x);
    return angle;
}


// Add another vector to this vector
JSVector.prototype.add = function (v2) {
    this.x += v2.x;
    this.y += v2.y
}

// Subtract another vector from this vector
JSVector.prototype.sub = function (v2) {
    this.x -= v2.x;
    this.y -= v2.y
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function (v1, v2) {
    return new JSVector(v1.x + v2.x, v1.y + v2.y);
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function (v1, v2) {
    return new JSVector(v1.x - v2.x, v1.y - v2.y);
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function (scalar) {
    return (this.getMagnitude() * scalar);
}

// Divide this vector by a scalar
JSVector.prototype.divide = function (scalar) {
    return (this.getMagnitude() / scalar);
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function () {
    this.setMagnitude(1);
    return this;

}

// Limit the magnitude of this vector
JSVector.prototype.limit = function (lim) {
    if (this.getMagnitude() >= lim) {
        this.setMagnitude(lim);
    }
    return this;
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function (v2) {

    let dist = Math.sqrt(this.distanceSquared(v2));
    return dist;
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function (v2) {
    let a = this.x - v2.x;
    let b = this.y - v2.y;

    let dist = (a * a + b * b);
    return dist;
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |

JSVector.prototype.rotate = function (angle) {
    this.x = Math.cos(angle) * this.x - Math.sin(angle) * this.y;
    this.y = Math.sin(angle) * this.x + Math.cos(angle) * this.y;
}


// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function (v2) {
    let angle = Math.cos(this.getMagnitude() / v2.getMagnitude());
    return angle;
}

// Make a copy of this vector
JSVector.prototype.copy = function () {
    return new JSVector(this.x, this.y);
}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function () {
    return "Magnitude = " + this.getMagnitude() + ", Direction = " + this.getDirection() + " Radians";
}
