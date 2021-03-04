/****************************************
 * 1. Skapa en prototyp som beskriver en punkt
 * i en tvådimensionell värld.
 * Använd ES5-syntax.
 * 2. Skapa en metod i prototypen som
 * beräknar avståndet mellan två punkter.
 * 3. Skapa två punkter (två olika objekt).
 * 4. Beräkna avståndet mellan punkterna.
 */

// En lösning från Kevin

// En prototyp som beskriver "avståndsformeln"
function DistanceFormula(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

DistanceFormula.prototype.calculate = function () {
  return Math.sqrt(
    Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)
  );
};

// En instans av avståndsformeln
let distance = new DistanceFormula(0, 0, 5, 0);

console.log(distance.calculate().toFixed(2) + " längdenheter");

// En lösning från Kristoffer

// En prototyp som beskriver en punkt i en tvådimensionell värld. Använd ES5-syntax.
function Dot(x, y) {
  this.x = x;
  this.y = y;
}

// Metoden beräknar avståndet mellan en punkt och x,y (utan någon punkt) !!!!!!!!
Dot.prototype.distance = function (x, y) {
  return Math.hypot(this.x - x, this.y - y);
};

// En instans av en punkt
const dot = new Dot(0, 0);
console.log(dot.distance(0, 5));

// En lösning från Mikael

/*
// En prototyp som beskriver en punkt som enbart har x och y
function Dot(x, y){
    this.x = x;
    this.y = y;
}

Dot.prototype.calculate = function (){
   let calc = (this.x[0] - this.y[0])**2 + (this.x[1] - this.y[1])**2;
   let root = Math.sqrt(calc)
   console.log(root)
}

const dot = new Dot([-1, -1], [4, 3]); 
// YAGNI: Man ska inte skicka arrayer till en enda punkt
dot.calculate();
*/

// En lösning från Niklas
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.calculate = function (point) {
  console.log(Math.hypot(this.x - point.x, this.y - point.y));
};

const punkt1 = new Point(0, 0);
const punkt2 = new Point(10, 0);

punkt1.calculate(punkt2);
punkt2.calculate(punkt1);

// Lösning från Mahmud

function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.distance = function (point) {
  return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
};

const p1 = new Point(0, 0);
const p2 = new Point(3, 4);

console.log(p1.distance(p2));
console.log(p2.distance(p1));
