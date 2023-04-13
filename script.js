//complete this code
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get widtH() {
    return this.width;
  }
  get heighT() {
    return this.height;
  }
  getArea() {
    return (this.height * this.width);
  }
}

class Square extends Rectangle {
  getPerimeter() {
    return (4 * super.width);
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
