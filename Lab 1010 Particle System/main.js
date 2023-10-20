// Bryan Calder Particle System

// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let particleSystem = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadPS();
    random_rgba();
    animate();      // kick off the animation

    canvas.addEventListener("click", (event) => {
        let x = event.offsetX;
        let y = event.offsetY;
        let loc = new JSVector(x, y);
        let col = "rgba(255, 0, 0, 255)";
        let diam = 20;
        particleSystem.push(new ParticleSystem(x, y, loc, col, diam));

    });

}

onclick = (event) => { };

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement 
    // context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(0, 0, 0, 1)"
    context.fillRect(0, 0, canvas.width, canvas.height);
    runPS();
    requestAnimationFrame(animate); // next cycle
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function loadPS() {
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let loc = new JSVector(x, y);
    let col = "rgba(255, 0, 0, 255)";
    let diam = 20;
    particleSystem.push(new ParticleSystem(x, y, loc, col, diam));


}

function runPS() {
    for (let i = 0; i < particleSystem.length; i++) {
        particleSystem[i].run();
    }

}

