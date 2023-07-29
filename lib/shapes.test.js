const { Square, Circle, Triangle } = require("./shapes.js");

describe("Shapes", () => {
  test("Create a blue triangle logo with white text", () => {
    const shape = new Triangle("white", "blue", "KEC");

    // Template literal allows for multi-line string
    expect(shape.render()).toEqual(`
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="transparent" />
    <polygon points="150,10 45,190 255,190" fill="blue"/>
    <text x="150" y="150" font-size="60" font-family="sans-serif" text-anchor="middle" fill="white">KEC</text>
    </svg>`);
  });

  test("Create a circle logo with green text and a background color of #00517b", () => {
    const shape = new Circle("green", "#00517b", "KEC");

    expect(shape.render()).toEqual(`
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="transparent" />
    <circle cx="150" cy="100" r="80" fill="#00517b"/>
    <text x="150" y="120" font-size="60" font-family="sans-serif" text-anchor="middle" fill="green">KEC</text>
    </svg>`);
  });

  test("Create a red square logo with white text", () => {
    const shape = new Square("white", "red", "KEC");

    expect(shape.render()).toEqual(`
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="transparent" />
    <rect x="75" y="25" width="150" height="150" fill="red"/>
    <text x="150" y="120" font-size="60" font-family="sans-serif" text-anchor="middle" fill="white">KEC</text>
    </svg>`);
  });
});
