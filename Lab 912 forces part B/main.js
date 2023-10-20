
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let bubbles = [];
//let movers = [];
let gravity = false;
let wind = false;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBubbles(300);
    //loadMovers();
    loadListeners();
    random_rgba();
    console.log("++++++ Start ++++++");
    console.log("Gravity = " + gravity);
    console.log("Wind = " + wind);
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    //context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(0, 0,0, 0.1)"
    context.fillRect(0, 0, canvas.width, canvas.height);
    runBubbles();   // run bubbles
    //runMovers();
    requestAnimationFrame(animate); // next cycle
}

function loadListeners(){

//called when mouse clicked
canvas.addEventListener("click", (event) => {
    console.log("++++++ Mouse Clicked ++++++");
    if (event.altKey){
        wind = !wind;
        console.log("Gravity = " + gravity);
        console.log("Wind = " + wind);
    } else {
        gravity = !gravity;
        console.log("Gravity = " + gravity);
        console.log("Wind = " + wind);
    }
  
});
 onclick = (event) => {};


}
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function loadBubbles(n) {
    
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let diam = 3;
       let col = random_rgba();
       let acc = new JSVector(0,0);
        bubbles[i] = new Bubble(x, y, diam, col,  acc);
    }
}


// move the circle to a new location
function runBubbles() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run();
    }
}
