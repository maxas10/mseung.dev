let ray;
let particle;
let walls = [];
const map = [
    [0,1,0,0,0,1,0,0,0],
    [0,1,0,1,1,1,1,1,0],
    [0,1,0,1,0,0,0,0,0],
    [0,1,0,0,0,1,1,1,0],
    [0,1,1,1,1,1,0,1,0],
    [0,1,0,0,0,0,0,1,0],
    [0,1,0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0],
];

let sceneW = window.innerWidth;
let sceneH = window.innerHeight;
const squareWidth = 70;
const squareHeight = 70;
const mapW = map[0].length * squareWidth;
const mapH = map.length * squareHeight;

const speed = 2;

const da = 1/sceneW;

setInterval(function() {
    changeSize();
}, 1000);
  
function changeSize() {
    var oldSceneH = sceneH;
    var oldSceneW = sceneW;
    sceneH = window.innerHeight;
    sceneW = window.innerWidth;
    if(oldSceneH != sceneH || oldSceneW != sceneW) {
        document.getElementById("defaultCanvas0").style.width = sceneW + "px";
        document.getElementById("defaultCanvas0").style.height = sceneH + "px";
        document.getElementById("defaultCanvas0").width = sceneW ;
        document.getElementById("defaultCanvas0").height = sceneH;
        setup();
    }
}

function setup() {
    createCanvas(sceneW, sceneH);
    pixelDensity(1);
    // for(let i = 0; i < 5; i++) {
    //     let x1=random(sceneW);
    //     let y1=random(sceneH);
    //     let x2=random(sceneW);
    //     let y2=random(sceneH);
    //     walls[i] = new Boundary(x1,y1,x2,y2);
    // }
    for(let y = 0; y < map.length; y++) {
        for(let x = 0; x < map[y].length; x++) {
            if(map[y][x] == 1) {
                walls.push(new Boundary(x*squareWidth,y*squareHeight,(x+1)*squareWidth,y*squareHeight));
                walls.push(new Boundary(x*squareWidth,y*squareHeight,x*squareWidth,(y+1)*squareHeight));
                walls.push(new Boundary(x*squareWidth,(y+1)*squareHeight,(x+1)*squareWidth,(y+1)*squareHeight));
                walls.push(new Boundary((x+1)*squareWidth,y*squareHeight,(x+1)*squareWidth,(y+1)*squareHeight));
            }
        }
    }
    walls.push(new Boundary(0,0,mapW/2-squareWidth/2,0));
    walls.push(new Boundary(mapW/2+squareWidth/2,0,mapW,0));
    walls.push(new Boundary(mapW,0,mapW,mapH));
    walls.push(new Boundary(mapW,mapH,0,mapH));
    walls.push(new Boundary(0,mapH,0,0));

    particle = new Particle(70);
}
function draw() {
    if (keyIsDown(LEFT_ARROW))  particle.rotate(-speed/30);
    if (keyIsDown(RIGHT_ARROW)) particle.rotate(speed/30);
    if (keyIsDown(UP_ARROW))    particle.walk(speed, walls);
    background(18, 20, 34);
    const scene = particle.look(walls);
    for(let i in scene) {
        if(scene[i] < 10) {
            if (keyIsDown(UP_ARROW)) {
                particle.walk(-speed);
            }
            break;
        }
    }

    if(particle.pos.y < 0 || particle.pos.y > mapH || particle.pos.x < 0 || particle.pos.x > mapW) {
        document.getElementById("win").style.display = 'flex';

    }

    const w = sceneW / scene.length;
    push();
    for(let i=0; i<scene.length; i++) {
        noStroke();
        const d = scene[i]/sceneW;
        let b;
        if(0.5/d + 2 > 10) {
            b = 10;
        } else {
            b = 0.5/d + 2;
        }
        const h = 30/d;
        colorMode(HSB);
        fill(0,0,0);
        rect((i+0.5)*w, sceneH + h/2,w+1,sceneH);
        colorMode(HSB);
        fill(143, 96, b);
        rectMode(CENTER);
        rect((i+0.5)*w, sceneH/2,w+1,h);
    }
    pop();
    for (let wall of walls) {
        wall.show();
      }
      particle.show();
}