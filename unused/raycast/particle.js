class Particle {
    constructor(fov) {
        this.pos = createVector(mapW / 2, mapH - squareHeight / 2);
        this.rays = [];
        this.heading = 0;
        this.updateFOV(fov)
        this.dx = this.cos(this.heading);
        this.dy = this.sin(this.heading);
    }

    updateFOV(fov) {
        this.fov = fov;
        this.rays = [];
        const step = this.fov * da;
        for (let a = -this.fov / 2; a < this.fov / 2; a += step) {
            this.rays.push(new Ray(this.pos, radians(a) + this.heading, radians(a)));
        }
    }

    cos(angle) {
        return Math.cos(angle * Math.PI / 180);
    }
    sin(angle) {
        return Math.sin(angle * Math.PI / 180);
    }

    rotate(angle) {
        this.heading += angle;
        let index = 0;
        const step = this.fov * da;
        for (let a = -this.fov / 2; a < this.fov / 2; a += step) {
            this.rays[index].setAngle(radians(a) + this.heading, radians(a));
            index++
        }
        this.dx = this.cos(this.heading);
        this.dy = this.sin(this.heading);
        console.log(this.dx,this.dy)
    }

    walk(speed) {
        // let nx = this.pos.x + (speed * this.dx);
        // let ny = this.pos.y + (speed * this.dy);
        // let cx = false;
        // let cy = false;
        // let close = Math.abs(speed);
        // for (let wall of walls) {
        //     var dist1 = wall.toPoint(nx, this.pos.y);
        //     var dist2 = wall.toPoint(this.pos.x, ny);
        //     if (Math.abs(dist1) < close) { cx = true; };
        //     if (Math.abs(dist2) < close) { cy = true; };
        //     console.log(nx, this.pos.y, dist1, 'dist1')
        //     console.log(this.pos.x, ny, dist2, 'dist2')
        // }
        const vel = p5.Vector.fromAngle(this.heading);
        vel.setMag(speed);
        this.pos.add(vel)
    }
    look(walls) {
        const scene = [];
        for (let i = 0; i < this.rays.length; i++) {
            const ray = this.rays[i];
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    let d = p5.Vector.dist(this.pos, pt);
                    if (d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            scene[i] = record * cos(ray.angleFromCenter);
        }
        return scene;
    }


    show() {
        fill(255);
        ellipse(this.pos.x / 2, this.pos.y / 2 + 5, 2);
        for (let ray of this.rays) {
            ray.show();
        }
    }
}