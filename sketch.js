//Red eyes by Maariah
"use strict";

let eyesCollection = [];

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < 2; i++) {
    addEye();
  }
}

function draw() {
  background("#191D2D");
  stroke("#191D2D");
  cursor("http://www.rw-designer.com/cursor-view/137065.png");

  for (let i = 0; i < eyesCollection.length; i++) {
    eyesCollection[i].display();
    eyesCollection[i].update(mouseX, mouseY);
  }
}

function addEye() {
  let colors = ["#bf0d2a", "#f74848", "#fc173c", "#ff0000", '#851b1b'];
  for (var x = 0; x < width * 2; x += width / 5) {
    for (var y = 0; y < height * 2; y += height / 5) {
      const newEye = new Eye(x, y, random(colors));
      eyesCollection.push(newEye);
    }
  }
}

class Eye {
  constructor(tx, ty, tc) {
    this.x = tx;
    this.y = ty;
    this.size = 40;
    this.angle = 30;
    this.color = tc;
  }

  update(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  }

  openEye() {
    push();
    fill("#6e0202");
    ellipse(0, 0, this.size + 10, this.size + 10);
    rotate(this.angle);
    fill(this.color);
    ellipse(0, 0, this.size, this.size);
    fill(0);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 1.7);
    pop();
    push();

    noStroke();
    fill(255, 255, 255, 70);
    ellipse(this.size / 200, 10, this.size / 3, this.size / 2);
    pop();

  }

  closedEye() {
    stroke("white");
    line(-37, 0, 37, 0);
  }

  display() {
    push();
    fill(255, 255, 255, 70);
    translate(this.x, this.y);
    beginShape();
    vertex(-40, 0);
    bezierVertex(-10, -40, 10, -40, 40, 0);
    bezierVertex(10, 40, -10, 40, -40, 0);
    endShape();

    if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
       this.closedEye();
    } else {
      this.openEye();
    }
    pop();
  }
}
