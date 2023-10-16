
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let bubbles = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBubbles(200);
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runBubbles();   // run bubbles
    requestAnimationFrame(animate); // next cycle
}

function loadBubbles(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let diam = Math.random() * 5 + 5;
        bubbles[i] = new Bubble(x, y, diam);
    }
}

// move the circle to a new location
function runBubbles() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run();
    }
}

