
//  Eric Ettlin
//  231120
//  Flocking Lab

let game;   // a single global object

window.onload = init;//  After the window has been loaded, go to init

function init(){
    game = new Game();  // global game
    animate();          // kick off the animation
}

//  animation loop called 60 fps
function animate(){
    // paint the canvas with mostly transparent black
  game.ctx.fillStyle = 'rgba(0,0,0,.5)'
  game.ctx.fillRect(0,0,game.canvas.width,game.canvas.height);
  game.run();    // run the game
  requestAnimationFrame(animate);
}
