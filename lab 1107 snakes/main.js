//lab 1107 Snakes
//Bryan Calder


// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let snakes = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadSnakes(1);
    loadPlanet();
    random_rgba();
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.fillStyle = "rgba(0, 0, 0, 1)"
    context.fillRect(0, 0, canvas.width, canvas.height);
    runSnakes();   // run bubbles
    runPlanet();   // run bubbles
    requestAnimationFrame(animate); // next cycle
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function loadSnakes(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let col = "rgba(0, 0, 255, 1)";
        //  let col = random_rgba();
        let acc = new JSVector(0, 0);
        let loc = new JSVector(x, y)
        let vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
        let length = 10; //num of snake body parts
        snakes[i] = new Snake(x, y, acc, loc, vel, col, length);
    }
}


// move the circle to a new location
function runSnakes() {
    for (let i = 0; i < snakes.length; i++) {
        snakes[i].run();
    }
}

function loadPlanet() {
   
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
   let col = "rgba(0, 255, 0, 255)";
    let acc = new JSVector(0, 0);
    let loc = new JSVector(x, y)
    let vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 1);
    let diam = 15;
  planet = new Planet(x, y, col,acc, loc, vel, diam);
}



// move the circle to a new location
function runPlanet() {
planet.run();
}

