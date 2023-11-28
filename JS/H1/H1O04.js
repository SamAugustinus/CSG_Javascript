function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // teken de grond
  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  // teken het huis
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');
  triangle(100,280,200,280,150,200)
  // teken de deur
  noStroke();
  // PAS ONDERSTAANDE REGEL AAN zodat de deur op de juiste plaats staat
  rect(120,330,30,50);
  // teken de maan
  fill('khaki');
  // VERVANG DEZE REGEL door een regel die de maan tekent met een diameter van 150 en 25 vanaf de rand
  ellipse(350,100,150)
  // teken de boom
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  // VERVANG DEZE REGEL door een regel die het groen van de boom tekent met behulp van ellipse
  ellipse(320,230,100,150)
}
