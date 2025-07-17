class Boundary {
    constructor(x1, y1, x2, y2) {
        this.a = createVector(x1,y1);
        this.b = createVector(x2,y2);
        this.lensq = ((y2-y1)*(y2-y1)) + ((x2-x1)*(x2-x1));
    }

    show() {
        stroke(255);
        line(this.a.x/2, this.a.y/2 + 5, this.b.x/2, this.b.y/2 + 5);
    }

    toPoint(x,y) {
        let A = x - this.a.x;
        let B = y - this.a.y;
        let C = this.b.x-this.a.x;
        let D = this.b.y-this.a.y;
        let dot = A * C + B * D;
        let param = (this.lensq != 0) ? dot / this.lensq : -1;
        let xx, yy, dx, dy;
      
        if (param < 0) {
          xx = this.a.x;
          yy = this.a.y;
        } else if (param > 1) {
          xx = this.b.x;
          yy = this.b.y;
        } else {
          xx = this.a.x + param * C;
          yy = this.a.y + param * D;
        }
      
        dx = x - xx;
        dy = y - yy;
        return Math.sqrt((dx*dx) + (dy*dy));     
    }
}