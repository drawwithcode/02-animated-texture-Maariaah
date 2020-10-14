"use strict";

let eyesCollection = [];

function setup() {
  let colors = ["orange", "red", "blue"];

  createCanvas(900, 900);
  noStroke();
  for (let i = 0; i < 10; i++) {
    for (let c = 0; c < colors.length; c++) {
      addEye(
        Math.random() * 900,
        Math.random() * 900,
        Math.random() * 70,
        colors[c]
      );
    }
  }
}

function draw() {
  background('#0024');

  for (let i = 0; i < eyesCollection.length; i++) {
    eyesCollection[i].display();
    eyesCollection[i].update(mouseX, mouseY);
  }
}

function addEye(a, b, c, d) {
  newEye = new Eye(a, b, c, d);
  eyesCollection.push(newEye);
}

class Eye {
  constructor(tx, ty, ts, tc) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 30;
    this.color = tc;
  }
  update(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  }
  display() {
    push();

    translate(this.x, this.y);
    fill(255, 255, 255, 127);
    beginShape();
    vertex(-80, 0);
    bezierVertex(-30, -50, 30, -50, 80, 0);
    bezierVertex(30, 50, -30, 50, -80, 0);
    endShape();

    if (random(20) < 2) {
      frameRate(1);
      stroke(255);
      line(-80, 00, -30 + 110, 0);
    } else {
      ellipse(0, 0, this.size + 10, this.size + 10);
      rotate(this.angle);
      fill(this.color);
      ellipse(0, 0, this.size, this.size);
      fill(0);
      ellipse(this.size / 4, 0, this.size / 2, this.size / 1.7);
    }
    pop();
  }
}
