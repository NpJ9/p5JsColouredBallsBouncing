
function setup() {
    initializeFields();
    background(color(0x07, 0x18, 0x1d));
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
  
function draw() {
    background(color(0x07, 0x18, 0x1d));
    translate(width / 2, height / 2);
    strokeWeight(2.5);

    // Purple Dots
    for (var k = 0; k < totalLines; k++) {
        stroke(color(250, 59, 207));
        line(x2(t + k), y4(t - k), x3(t + k), y3(t + k));
    }

    // Blue Line
    for (var z = 0; z < totalLines; z++) {
      stroke(color(60, 60, 177));
      line(x1(t - z), y5(t - z), x1(t - z), y3(t - z));
    }
 
    // Red Dots
    for (var l = 0; l < totalLines; l++) {
        stroke(color(153, 12, 0));
        line(x1(t - l), y4(t - l), x2(t - l), y3(t - l));
    }

  // Teal Dots
    for (var l = 0; l < totalLines; l++) {
        stroke(color(60,78, 107));
        line(x1(t - l), y4(t + l), x2(t - l), y2(t + l));
    }
    
    t += 0.2;
}
    // 
    function x1(t) {;
        return sin(t / 5) * 160;
      }
      
      function y1(t) {
        return sin((t / 10) * 150);
      }
      
      function x2(t) {
        return sin(t / 20) * 200;
      }
      
      function y2(t) {
        return sin(t / 40) * 50;
      }
      
      function x3(t) {
        return cos(t / 5) * 20;
      }
      
      function y3(t) {
        return sin(t / 10) * 150;
      }
      
      function x4(t) {
        return sin(t / 0) * 200;
      }
      
      function y4(t) {
        return sin(t / 0) * 350;
      }
      
      function y5(t) {
        return sin(t /20) * 200;
      }

      function x5(t) {
        return sin(t / 40) * 50;
      }
      
      function initializeFields() {
        totalLines = 36;
        t = 0;
      }
      
      
 