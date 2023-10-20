function ParticleSystem(x, y, loc, col, diam) {
    this.x = x;
    this.y = y;
    this.loc = loc;
    this.particles = [];
    this.loadParticle();
    this.col = col;
    this.diam = diam;

}

ParticleSystem.prototype.run = function () {
    this.runParticles();
    this.update();
}

ParticleSystem.prototype.loadParticle = function () {

    let col = random_rgba();
    let acc = new JSVector(0, 0);
    let vel = new JSVector(Math.random() * 2 - 1, Math.random() * 2 - 4);
    let diam = Math.random() * (6 - 3) + 3;
    let shapeNum = Math.random() * (15 - 1) + 1;
    this.particles.push(new Particle(this, col, acc, vel, diam, shapeNum));

}

ParticleSystem.prototype.runParticles = function () {
    for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].run();
    }
}

ParticleSystem.prototype.update = function () {
    this.loadParticle();

    for (let i = this.particles.length - 1; i >= 0; i--) {
        if (this.particles[i].lifeSpan === 0) {
            this.particles.splice(i, 1);
        }

    }

}