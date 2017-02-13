// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle
function RightTriangle () {
this.side1 = side1;
this.side2 = side2;
this.base = base;
this.area = function () {
  side1 * side2 * base;
};
this.perimeter = function() {
  side1 + side2 + base;
};
}
// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
console.log(RightTrinagle.area(10,10,10));
console.log(RightTrinagle.perimeter(5,5,5));
