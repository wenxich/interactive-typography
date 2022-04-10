function setup() {
  createCanvas(470, 400);
  
}

function draw() {
  background(255,mouseX+110,mouseX-75);
  
  strokeWeight(max(2, min(mouseX/5, 90)));
  stroke(255, mouseX, mouseX-75);

  //W
  line(20,100,40,300);
  line(40,300,70,100);
  line(70,100,100,300);
  line(100,300,120,100);

  //A
  
  line(130,300,180,100);
  line(180,100,230,300);
  line(180,100,230,300);
  line(155,200,205,200);

  //R
  
  line(240,300,240,100);
  line(240,100,300,100);
  line(300,100,320,140);
  line(320,140,300,180);
  line(300,180,240,200);
  line(240,200,300,220);
  line(300,220,340,300);

  //M
  
  line(350,300,350,100);
  line(350,100,400,200);
  line(400,200,450,100);
  line(450,100,450,300);

}
