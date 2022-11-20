const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input

const createREADME = ({
  username,
  email,
  project,
  description,
  license,
  install,
  tests,
  contribute,
}) =>
  `# ${project}
---
![license](https://img.shields.io/badge/license-${license
    .split(" ")
    .join("")}-green.svg)
   

## Description

${description}

---

## Table of Contents

* [Installation](#installation)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

---

## Installation

To install the necessary dependancies, run the following command:

${install}

---

## License

This project is licensed under the ${license} license.

---

## Contributing

${contribute}

---

## Tests

To run tests, run the following command:

${tests} 

---

## Questions / Issues

Contact me with any questions about the repo or report any issues at ${email}


Find more of my projects at my GitHub: [${username}](https://github.com/${username})
`;

const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the name of your project?",
    name: "project",
  },
  {
    type: "input",
    message: "Please write a short description of your project:",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
    name: "license",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribute",
  },
];

inquirer.prompt(questions).then((response) => {
  const readMeContent = createREADME(response);

  fs.writeFile("README.md", readMeContent, (err) =>
    err ? console.log(err) : console.log("README.md has been created")
  );
});

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
