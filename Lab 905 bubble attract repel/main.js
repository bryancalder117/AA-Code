
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let bubbles = [];
let movers = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBubbles(1000);
    loadMovers();
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

function loadBubbles(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let diam = Math.random() * 7 + 3;
        let col = "rgba(255, 191, 0, 255)";
        let colOverlap = "rgba(139, 64, 0, 255)";
        bubbles[i] = new Bubble(x, y, diam, col, colOverlap);
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

    for (let i = 0; i < 1; i++) {
        movers[0] = new Movers(x, y, diam, "rgba(0, 0, 255, 255)");
        movers[1] = new Movers(x, y, diam, "rgba(0, 255, 0, 255)");
    }



}

function runMovers() {
  //  movers[0].run();
     for (let i = 0; i < movers.length; i++) {
         movers[i].run();
    }
}