let rs = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(80, 125, 150);
  randomSeed(rs);
  
  let x, y, r;
  let delta = 100;
  
  let iceC = map(mouseX, 0, windowWidth, 0, 55);
  let sunLight = map(mouseY, 0, windowHeight, 0, 100);
  
  for (y=0; y<windowHeight; y+=delta) {
    for (x=0; x<windowWidth; x+=delta) {
      r = random(0, 1);
      if (r<1/3) {
        stroke(255);
        strokeWeight(1);
        fill(iceC+random(150,255));
        rect(x, y, delta, delta, 20);
      } else if (r>=1/3 && r<2/3) {
        stroke(255);
        strokeWeight(1);
        fill(100, 160, iceC+random(150,255));
        quad(x+10, y+10, x+85, y+30, x+70, y+80, x+20, y+70);
      }
    }
  }
  stroke(255, 230, 200, sunLight);
  fill(255, 230, 200, sunLight);
  ellipse(0, 0, 800, 800);
  ellipse(300, 300, 400, 400);
  ellipse(500, 500, 200, 200);
  ellipse(600, 600, 100, 100);
}

function mouseReleased() {
  rs += 1;
}
