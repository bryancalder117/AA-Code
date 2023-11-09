function World() {
  //  this is our main Canvas that will show only a small portion of the world
  this.cnvMain = document.getElementById('cnv1');
  this.ctxMain = this.cnvMain.getContext('2d');
  //This smaller canvas will show the entire world at one forth the size of the main canvas
  this.cnvMini = document.getElementById('cnv2');
  this.ctxMini = this.cnvMini.getContext('2d');
  //  Create a Vector that will move the Canvas location relative to the world
  this.cnvMainLoc = new JSVector(0, 0);

  this.dims = {//  object literal that prvides bounds for the entire world
    top: -1500,
    left: -2000,
    bottom: 1500,
    right: 2000,
    width: 4000,
    height: 3000
  }

  this.movers = [];
  this.loadMovers(2800, this.ctxMain, this.ctxMini, this.dims.width, this.dims.height);

  //reduce world to fit inside of mini Canvas
  this.scaleX = (this.cnvMini.width / this.dims.width);
  this.scaleY = (this.cnvMini.height / this.dims.height);

  // add an event handler such that the a, s, w, d keys
  // will reposition the canvas within the world.
  window.addEventListener("keypress", function (event) {
    switch (event.code) {
      case "KeyW":
        world.cnvMainLoc.y += 20;
        break;
      case "KeyS":
          world.cnvMainLoc.y -= 20;
        break;
      case "KeyA":
          world.cnvMainLoc.x += 20;
        break;
      case "KeyD":
          world.cnvMainLoc.x -= 20;
        break;
    }
  }, false);
}//++++++++++++++++++++++++++++++  end world constructor

      
// run the world in animation
World.prototype.run = function () {
  //this.ctxMain.strokeStyle = 'rgb(255, 0, 255)';//  color of outer border on Main canvas
  this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);//  clear the canvas

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++  run the movers
  //  save the context for the main Canvas
  this.ctxMain.save();
  this.ctxMini.save();
  //  move the main canvas inside of the world (translate according to this.cnvMainLoc)
  this.ctxMain.translate(this.cnvMainLoc.x+400, this.cnvMainLoc.y+300);
  //  clear the mini rect
  this.ctxMini.clearRect(0, 0, this.cnvMini.width, this.cnvMini.height);
  //  save the miniContext
 
//  //  scale world to fit in mini canvas (this.scaleX and this.scaleY)
  this.ctxMini.scale(this.scaleX, this.scaleY);
  //  center rect in the miniCanvas
  this.ctxMini.translate(this.dims.width/2, this.dims.height/2);
  //  run all of the movers
  for(let i = 0; i < this.movers.length; i++){
    this.movers[i].run();
  }
  //  restore the main and mini contexts
  this.ctxMini.restore();
  this.ctxMain.restore();                                        
 

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++ Draw the main and mini Canvas with bounds and axes

  // save the main context
  this.ctxMain.save();
 
  
  //draw x and y axes on miniMap
  // scale cnvMini - contain the entire world (scaleX, and scaleY)
  this.ctxMini.save();
  this.ctxMini.beginPath();
  this.ctxMini.lineWidth = 30;
  this.ctxMini.strokeStyle = "rgba(0, 30, 255, 1)";
  this.ctxMini.scale(this.scaleX, this.scaleY);

  //center cnvMini in world
 this.ctxMini.translate(this.dims.width/(2), this.dims.height/(2));


  //outline box inside of cnvMini
  this.ctxMini.strokeStyle = "rgba(0, 0, 0, 1)";
  this.ctxMini.strokeRect(-this.cnvMainLoc.x - 400, -this.cnvMainLoc.y - 300, 800, 600);

  //draw x and y axes on miniMap
  this.ctxMini.strokeStyle = "rgba(240, 52, 52, 1)";
  this.ctxMini.moveTo(0, this.dims.top);
  this.ctxMini.lineTo(0, this.dims.bottom);
  this.ctxMini.stroke();
  this.ctxMini.moveTo(this.dims.left, 0);
  this.ctxMini.lineTo(this.dims.right, 0);
  this.ctxMini.stroke();
  
  // restore both ctxMain and ctxMini
  this.ctxMini.restore();
  this.ctxMain.restore();  
}

//  Load mover array
//  Load each context into each Mover
World.prototype.loadMovers = function (numMovers, ctx1, ctx2, w, h) {
  for (let i = 0; i < numMovers; i++) {
    let diam = 10;
    let x = Math.random() * (this.dims.width - 2 * diam) + diam - this.dims.width / 2;
    let y = Math.random() * (this.dims.height - 2 * diam) + diam - this.dims.height / 2;
    let loc = new JSVector(x, y);
    let dx = Math.random() * 2 - 1;
    let dy = Math.random() * 2 - 1;
    let vel = new JSVector(dx, dy);
    let col = random_rgba();
    //each mover gets a reference to both canvas objects
    this.movers.push(new Mover(loc, vel, diam, ctx1, ctx2, w, h, col));
  }
}


