// Define the number of circles to create
let numCircles = 60;

// Define an array
let circles = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
 // Create a new Circle object for each element in the circles array
  for (let i = 0; i < numCircles; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    circles.push(new Circle(x, y, r));
  }
}

function draw() {
  background(220);
  for (let i = 0; i < circles.length; i++){
    circles[i].update();
    circles[i].display();
  }

  // Creates a vibrating circle
      if (mouseIsPressed === true) {
      for (let i = 0; i < 5; i++){
      circle(mouseX, mouseY, random(50))
      ellipse(mouseX, mouseY, random(50))
      ellipse(mouseX, mouseY, random(50))
      circle(mouseX, mouseY, random(100))
      fill(random(255));
    }
     } else {
      fill("white");
    }
}

// Circle Class
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speedX = random(-2, 2);
    this.speedY= random(-2, 2);
    this.fillColor =color(random(255),random(255), random(255));
  }
  update() {
    // Move the circle by its speed
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off the canvas edges
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }
// Display circles
display() {
  fill(this.fillColor);
  stroke("black");
  strokeWeight(0);
  ellipse(this.x, this.y, this.r *2)
  }
}
