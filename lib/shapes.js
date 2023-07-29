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
  constructor(textColor, shapeColor, textContent, x, y, size) {
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
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
    </svg>`;
  }
}

// Circle class
class Circle extends Shape {
  constructor(textColor, shapeColor, textContent, cx, cy, radius) {
    super(textColor, shapeColor, textContent);
    this.cx = 150;
    this.cy = 100;
    this.radius = 80;
  }

  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="grey" />
    <circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.shapeColor}"/>
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
    </svg>`;
  }
}

// Triangle class (equilateral triangle)
class Triangle extends Shape {
  constructor(textColor, shapeColor, textContent, x1, y1, x2, y2, x3, y3) {
    super(textColor, shapeColor, textContent);
    this.x1 = 150;
    this.y1 = 10;
    this.x2 = 45;
    this.y2 = 190;
    this.x3 = 255;
    this.y3 = 190;
  }

  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="grey" />
    <polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.shapeColor}"/>
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
    </svg>`;
  }
}

// Export the classes as an object
module.exports = {
  Square,
  Circle,
  Triangle,
};
