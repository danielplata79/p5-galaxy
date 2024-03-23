let meteor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  meteor = new Meteor();
}

function draw() {
  background(0);
  meteor.update();
  meteor.display();
}

class Meteor {
  constructor() {
    this.x = random(width); // Starting x position
    this.y = random(-100, -10); // Starting y position
    this.speed = random(2, 5); // Speed of meteor
    this.len = random(30, 60); // Length of meteor tail
    this.thickness = random(2, 4); // Thickness of meteor
    this.tail = []; // Array to store tail positions
    for (let i = 0; i < this.len; i++) {
      this.tail.push(createVector(this.x, this.y));
    }
  }

  update() {
    this.x += this.speed; // Move meteor
    this.y += this.speed * 0.5; // Move meteor diagonally

    // Update tail
    this.tail.pop();
    this.tail.unshift(createVector(this.x, this.y));

    // If meteor goes off-screen, reset
    if (this.x > width || this.y > height) {
      this.x = random(width);
      this.y = random(-100, -10);
    }
  }

  display() {
    // Draw tail
    for (let i = 0; i < this.len - 1; i++) {
      let pos1 = this.tail[i];
      let pos2 = this.tail[i + 1];
      strokeWeight(this.thickness - i * 0.1);
      stroke(255, 150 - i * 2);
      line(pos1.x, pos1.y, pos2.x, pos2.y);
    }

    // Draw head
    strokeWeight(this.thickness);
    stroke(255);
    point(this.x, this.y);
  }
}
