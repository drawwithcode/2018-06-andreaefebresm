var myData;
var myColors = ['#84A59D', '#EF8354', '#F5CAC3', '#F7EDE2', '#F6BD60'];
var a = true;


function preload() {
  myData = loadJSON('assets/students.json');

}

var balls = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < myData.students.length; i++) {
    var stud = myData.students[i];


    // variabili per ball
    var x = random(width);
    var y = random(height);
    var id = stud._id;
    var d = stud.name;
    var s = stud.score;
    var newBall = new Ball(x, y, d, s, id);
    balls.push(newBall);
    console.log(stud);

  }
}


function mousePressed() {
  for (var j = 0; j < balls.length; j++) {
    balls[j].click();

  }
}

// function keyPressed() {
//   if (keyIsPressed) {
//     this.display = function() {
//
//       text(this._id, this.x - 40, this.y - 40);
//     };
//   } else {
//     this.display = function() {
//
//       text(this.name, this.x - 40, this.y - 40);
//     }
//   }
// }

function draw() {
  background(color(myColors[0]));

  fill(color(myColors[2]));
  textFont('Courier');
  textSize(60);
  var t = windowWidth / 2.7;
  var u = windowHeight / 10;
  text('MORE THAN ID NUMBERS', t, u);


  for (var j = 0; j < balls.length; j++) {
    balls[j].display();
    balls[j].move();
  }


}


function Ball(_x, _y, _name, _score, _id) {

  this.x = _x;
  this.y = _y;
  this.name = _name;
  this.score = _score;
  this.id = _id;
  this.speed = 1;

  this.color = color(myColors[0, 1, 2, 3, 4]);

  this.size = 50;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);

    fill(color(myColors[3]));
    textFont('Futura');
    textSize(20);
    text(this.id, this.x - 40, this.y - 40);

  }

  this.click = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size) {
      this.display = function() {
        textFont('Futura');
        textSize(20);
        text(this.name, this.x - 40, this.y - 40);
      }
    }
  }
  //
  //   // if (keyIsPressed) {
  //   //   background('black');
  //   // }
  //
}
//
//
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
