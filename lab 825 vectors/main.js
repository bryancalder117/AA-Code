
window.addEventListener("load", init);

let v1, v2;

function init(){
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    animate();
}



function animate(){

    context.clearRect(0, 0, canvas.width, canvas.height);
    v1 = new JSVector(420,69);
    v2 = new JSVector(69,420);
    console.log(v1.toString());
    console.log("x = " + v1.x + ", y = " + v1.y);
    v1.setMagnitude(420);
    v1.setDirection(69);
    console.log(" ");
    console.log(v1.toString());
    console.log("New x = " + v1.x + ", New y = " + v1.y);
    console.log(" ");
    console.log("v1 + v2 = " + v1.add(v2));
    console.log("v1 - v2 = " + v1.sub(v2));
    console.log(" ");
    console.log(JSVector.addGetNew(v1, v2));
    console.log(JSVector.subGetNew(v1, v2));
    console.log(" ");
    console.log(v1.multiply(69));
    console.log(v1.divide(420));
    console.log(" ");
    console.log("Dist between v1 and v2 = " + v1.distance(v2));
    console.log("Squared dist between v1 and v2 = " + v1.distanceSquared(v2));
    console.log(" ");
    console.log("Before rotate: " + v1.toString());
    v1.rotate(25);
    console.log("After rotate: " + v1.toString());
    console.log(" ");
    console.log("Angle between v1 and v2 = " + v1.angleBetween(v2) + " radians");
    v1.setMagnitude(600);
    console.log(" ");
    v1.limit(69);
    console.log("Limited vector = " +  v1.getMagnitude());
    v1.normalize();
    console.log("Normalized vector = " + v1.getMagnitude());
    console.log(" ");
    console.log("Copy of v1: " + v1.copy());

}