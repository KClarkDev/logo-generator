// Base Shape class
// 300x200px
class Shape {
  constructor(textColor, shapeColor, textContent) {
    // Common attributes among all shapes
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.textContent = textContent;
  }
}

// Square class
class Square extends Shape {
  constructor(x, y, size, textColor, shapeColor, textContent) {
    super(textColor, shapeColor, textContent);
    this.x = 75;
    this.y = 25;
    this.size = 150;
  }

  // Make background fill transparent in final version
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="grey" />
    <rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" fill="${this.shapeColor}"/>
    <text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
    </svg>`;
  }
}

// Circle class
class Circle extends Shape {
  constructor(cx, cy, radius) {
    super();
    this.cx = cx;
    this.cy = cy;
    this.radius = radius;
  }

  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="transparent" />
    <circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.shapeColor}"/>
    </svg>`;
  }
}

// Triangle class
class Triangle extends Shape {
  constructor(x1, y1, x2, y2, x3, y3) {
    super();
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="transparent" />
    <polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.shapeColor}"/>
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;
  }
}

// Export the classes as an object
module.exports = {
  Square,
  Circle,
  Triangle,
};
