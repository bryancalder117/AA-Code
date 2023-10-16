
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);
//Bryan Calder
// global variables
let canvas, context;
let bubbles = [];
let food = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBubbles(3);
    loadFood(20);
    random_rgba();
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement 
    // context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(0, 0, 0, 1)"
    context.fillRect(0, 0, canvas.width, canvas.height);
    runBubbles();   // run bubbles
    runFood();
    requestAnimationFrame(animate); // next cycle
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function loadBubbles(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        //let diam = 10;
        //let col = random_rgba();
       let col = "rgba(219,62,177, 255)";
        let acc = new JSVector(0, 0);
        let loc = new JSVector(x, y)
        let vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
        let diam = 10;
let num =Math.floor(Math.random() * 6) + 1; //Number of orbiters
//let num = 1;
        bubbles[i] = new Bubble(x, y, diam, col, acc, loc, vel, num);
    }
}


// move the circle to a new location
function runBubbles() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].run();
    }
}

function loadFood(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        //let diam = 10;
        //let col = random_rgba();
       let col = "rgba(27, 3, 163, 255)";
        let acc = new JSVector(0, 0);
        let loc = new JSVector(x, y)
        let vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
        let diam = 5;
        food[i] = new Food(x, y, diam, col, acc, loc, vel);
    }
}

function runFood() {
    for (let i = 0; i < food.length; i++) {
        food[i].run();
    }
}

