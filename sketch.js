/* 
PIE TWO = Pie chart "Dorms vs. University Apartments vs. Off Campus"
*/

const colorNames = ['rgb(212, 123, 80)', 'rgb(237, 128, 76)', 'rgb(207, 149, 114)']; // creates array of pie colors
const hoverColorNames = ['rgb(214, 96, 36)', 'rgb(237, 109, 47)', 'rgb(224, 111, 40)']; // creates array of pie colors if hovered
let segments = [7000, 2250, 42550]; // array of the size of each pie piece
let angles;

const radius = 400; 
let centerX, centerY;
let a;
let extraCanvas;
let start = 0;
let dorms;
let uhdApts;
let offCampus;
let mouseDist;


function setup() {
  createCanvas(1200, 1000);
  extraCanvas = createGraphics(1200, 1000);
  extraCanvas.clear();
  background(219, 201, 162);
  ellipseMode(RADIUS);
  angleMode(DEGREES);
  extraCanvas.ellipseMode(RADIUS);
  extraCanvas.angleMode(DEGREES);
  centerX = width/2;
  centerY = height/2;
  a = 0;
  centerX = width/2;
  centerY = height/2;
  noStroke();
  
  let total = segments.reduce((v, s) => v + s, 0); // sums array of 'segments' and reduces values to be representated by 'v'
  angles = segments.map(v => v/total * 360); // maps out each value 'v' in order to calculate the degree value to find angles
  colors = colorNames.map(n => color(n)); // maps out each color value in 'colorNames' array
  hoverColors = hoverColorNames.map(m => color(m)); }// maps out each hover color values in 'hoverColorNames' array


function draw() {
background(219, 201, 162);
  
  
  // PIE Title
  fill(214, 96, 36);
  textSize(60);
  stroke(168, 74, 50);
  strokeWeight(6);
  text('UT', 28, 70);
  
  fill(168, 74, 50);
  textSize(45);
  noStroke();
  text('Students Living in', 120, 70);
  
  fill(212, 123, 80);
  textSize(60);
  stroke(168, 74, 50);
  strokeWeight(4);
  text('UHD', 465, 70);
  
  fill(168, 74, 50);
  textSize(30);
  noStroke();
  text('*', 595, 50);
  
  fill(168, 74, 50);
  textSize(45);
  noStroke();
  text('vs.', 620, 70);
  
  fill(207, 149, 114);
  textSize(60);
  stroke(168, 74, 50);
  strokeWeight(4);
  text('Off-Campus', 685, 70);
     
  fill(168, 74, 50);
  textSize(45);
  noStroke();
  text('Housing', 1000, 70);
       
  fill(168, 74, 50);
  textSize(50);
  noStroke();
  text('(2019)', 520, 970);
  
  fill(168, 74, 50);
  textSize(30);
  noStroke();
  text('*University (-owned) Housing & Dining', 705, 110);
  
  
// defining variables for arc bounds
  let start = 0; 
  let mouseAngle = atan2(mouseY - centerY, mouseX - centerX); // recenter at origin to calculate angle between mouse coords and origin 
  
  if(mouseAngle < 0){ // add 360 if negative values are returned
  mouseAngle += 360;
  }
  
  let mouseDist = dist(centerX, centerY, mouseX, mouseY); // find distance beteen circle center and mouse coords
  
  /* p = array entries in PIE ONE */
for(let p = 0; p < angles.length; p++){ 
    let uhdHousing = 9250/51800 * 360; // University housing angle value calculation
    let offCampus = 42550/51800 * 360; // off campus housing angle value calculation
    let dorms = 7000/51800 * 360; // living in dorms angle value calculation
    let uhdApts = 2250/51800 * 360; // living in University apartments calculation
    
    let hoverOffCampus = mouseDist < radius && mouseAngle >= uhdHousing && mouseAngle < angles[p] + offCampus // constrains the area of 'offCampus' arc
    
    let hoverDorms = mouseDist < radius && mouseAngle >= start && mouseAngle < dorms // constrains the area of 'dorms' arc
    
    let hoverUhdApts = mouseDist < radius && mouseAngle >= dorms && mouseAngle < offCampus // constrains the area of 'uhdApts' arc
    
    let hover = mouseDist < radius && mouseAngle >= start && mouseAngle < start + angles[p]; // constrains entire circle area

    noStroke();
  if(hover && hoverOffCampus === true){ // change color to hover color if hovering over entire circle AND offCampus arc

    fill(224, 111, 40);
    textSize(50);
    stroke(168, 74, 50);
    strokeWeight(4);
    push();
    translate(205, 350);
    rotate(300);
    text('82.14%', 0, 0);
    pop();
    
    extraCanvas.fill(207, 149, 114);
    extraCanvas.textSize(50);
    extraCanvas.noStroke();
    extraCanvas.push();
    extraCanvas.translate(290, 340);
    extraCanvas.rotate(30);
    extraCanvas.text('42,550', 0, 0);
    extraCanvas.pop();
    
    extraCanvas.fill(207, 149, 114);
    extraCanvas.textSize(30);
    extraCanvas.noStroke();
    extraCanvas.push();
    extraCanvas.translate(417, 412);
    extraCanvas.rotate(30);
    extraCanvas.text('Students', 0, 0);
    extraCanvas.pop();
    
    stroke(168, 74, 50);
    strokeWeight(6);
    fill(hoverColors[p]);
  } else if(hover && hoverDorms === true){ // change color to hover color if hovering over entire circle AND dorms arc
    fill(214, 96, 36);
    textSize(50);
    stroke(168, 74, 50);
    strokeWeight(4);
    push();
    translate(985, 750);
    rotate(295);
    text('13.51%', 0, 0);
    pop();
    
    extraCanvas.fill(212, 123, 80);
    extraCanvas.textSize(50);
    extraCanvas.noStroke();
    extraCanvas.push();
    extraCanvas.translate(710, 570);
    extraCanvas.rotate(18);
    extraCanvas.text('7,000', 0, 0);
    extraCanvas.pop();
    
    extraCanvas.fill(212, 123, 80);
    extraCanvas.textSize(30);
    extraCanvas.noStroke();
    extraCanvas.push();
    extraCanvas.translate(825, 605);
    extraCanvas.rotate(18);
    extraCanvas.text('Students', 0, 0);
    extraCanvas.pop();
    
    stroke(168, 74, 50);
    strokeWeight(6);
    fill(hoverColors[p]);
    } else if(hover && hoverUhdApts === true){ // change color to hover color if hovering over entire circle AND uhdApts arc 
    fill(237, 109, 47);
    textSize(50);
    stroke(168, 74, 50);
    strokeWeight(4);
    push();
    translate(800, 910);
    rotate(328);
    text('4.34%', 0, 0);
    pop();
    
    extraCanvas.fill(237, 128, 76);
    extraCanvas.textSize(50);
    extraCanvas.noStroke();
    extraCanvas.push();
    extraCanvas.translate(670, 635);
    extraCanvas.rotate(55);
    extraCanvas.text('2,250', 0, 0);
    extraCanvas.pop();
    
    extraCanvas.fill(237, 128, 76);
    extraCanvas.textSize(30);
    extraCanvas.noStroke();
    extraCanvas.push();
    extraCanvas.translate(742, 732);
    extraCanvas.rotate(55);
    extraCanvas.text('Students', 0, 0);
    extraCanvas.pop();
    
    stroke(168, 74, 50);
    strokeWeight(6);
    fill(hoverColors[p]);
    } else { // fill default 'colorNames' colors if not hovering any specific arc (outside of the circle) 
  fill(colors[p]);
  }
  arc(centerX, centerY, radius, radius, start, start + angles[p]); // creates arcs using 'angles' values, beginning at start (0) with x,y coords at the circle center and radius (400)
    
  start += angles[p]; // start at each iteration of 'angles' values
  }
  image(extraCanvas, 0, 0);
  } 
// image(extraCanvas, 0, 0); 
  
   // image(extraCanvas, 0, 0);
  