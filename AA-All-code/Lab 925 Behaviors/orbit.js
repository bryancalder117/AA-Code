function Orbit(parent, clr, diam, radius, angle, av) {
this.mover = parent;
  this.diam = diam;
  this.col = clr;
  this.loc = parent.loc.copy();
  this.angle = angle;
  this.radius = radius;
  this.angVel = av;
  this.isEating = false;
  //this.index;
 
 
}

Orbit.prototype.run = function () {
  this.update();
 
  this.render();

  //this.eat();


}

Orbit.prototype.update = function () {

//  if(this.isEating === false){
  this.loc.x = this.mover.loc.x + Math.cos(this.angle) * this.radius;
    this.loc.y = this.mover.loc.y + Math.sin(this.angle) * this.radius;
    this.angle += this.angVel;
//   }
//      for(let j = 0; j < food.length; j++){
//       if(this.loc.distance(food[j].loc) < this.radius){
//         this.isEating = true;
//        /// food.splice(j, j-1);
//       //  this.index = j;
//       //  return index;
//       // this.loc.x = food[j].loc.x;
//       // this.loc.y = food[j].loc.y;
//       food.splice(j, j-1);
//     }
//     if(this.isEating === true){
//       this.loc.x = food[j].loc.x;
//           this.loc.y = food[j].loc.y;
//     }
//   }

  
}

Orbit.prototype.render = function () {
 
  context.strokeStyle = this.col;
  context.fillStyle = this.col;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0);
  context.stroke();
  context.fill();

}

// Orbit.prototype.eat = function(){
//     for(let j = 0; j < food.length; j++){
//       if(this.loc.distance(food[j].loc) < this.radius){
//         this.isEating = true;
//        /// food.splice(j, j-1);
//       //  this.index = j;
//       //  return index;
//       this.loc.x = food[j].loc.x;
//       this.loc.y = food[j].loc.y;
//       food.splice(j, j-1);
//     }
//   }
// }


