// Import packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./lib/shapes.js");

// Array of questions for user input
// text, text color, shape, shape color
const questions = [
  {
    type: "input",
    name: "logoText",
    message:
      "What is the text for the logo? (Provide no more than three characters)\n",
  },
  {
    type: "input",
    name: "textColor",
    message: "What should the color of the text be?\n",
  },
  {
    type: "list",
    name: "logoShape",
    message: "What shape do you want the logo to be?",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    name: "logoColor",
    message: "What should the color of the logo be?\n",
  },
];

function generateSVGContent(data) {
  // Create a mapping object to map shape names to the corresponding classes
  const shapeClasses = {
    Square,
    Circle,
    Triangle,
  };

  // Get the class based on the shape name provided by the user
  const logoClass = shapeClasses[data.logoShape];

  // Instantiate the class with the provided data
  const logoShape = new logoClass(
    data.textColor,
    data.logoColor,
    data.logoText
  );

  return logoShape.render();
}

// Function to write SVG file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("SVG file generated and saved as 'logo.svg'")
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const svgContent = generateSVGContent(data);
    writeToFile("./examples/logo.svg", svgContent);
  });
}

// Function call to initialize app
init();
