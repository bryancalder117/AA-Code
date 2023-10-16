
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let bubbles = [];
let movers = [];
//let gravity = false;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBubbles(200);
    loadMovers();
    //loadListeners();
//    console.log("Gravity = " + gravity);
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runBubbles();   // run bubbles
    runMovers();
    requestAnimationFrame(animate); // next cycle
}

// function loadListeners(){

// //called when mouse clicked
// canvas.addEventListener("click", (event) => {
//     console.log("++++++ Mouse Clicked ++++++");
//     gravity = !gravity;
//     console.log("Gravity = " + gravity);
//     //console.log(this);
   
// });

// onclick = (event) => {};



function loadBubbles(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let diam = Math.random() * 7 + 3;
        let col = "rgba(255, 191, 0, 255)";
        let colOverlap = "rgba(139, 64, 0, 255)";
       let acc = new JSVector(0,0);
        bubbles[i] = new Bubble(x, y, diam, col, colOverlap, acc);
    }
}


// move the circle to a new location
function runBubbles() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run();
    }
}


function loadMovers() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let diam = 10;
    let force = 0;
    for (let i = 0; i < 1; i++) {
        movers[0] = new Movers(x, y, diam, "rgba(0, 0, 255, 255)", force);
        movers[1] = new Movers(x, y, diam, "rgba(0, 255, 0, 255)", force);
    }



}

function runMovers() {
  //  movers[0].run();
     for (let i = 0; i < movers.length; i++) {
         movers[i].run();
    }
}