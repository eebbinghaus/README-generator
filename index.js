// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input


const createREADME = ({username, email, project, description, license, install, tests, contribute }) =>
`# ${project}
---
![license]

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${install}

## License

${license}

## Contributing

${contribute}

## Tests

${tests}

## Questions 

Contact me with questions at Email: ${email}, or GitHub: ${username}
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

  fs.writeFile('README.md', readMeContent, (err) => 
  err ? console.log(err) : console.log('README.md has been created')
  ); 

});

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
