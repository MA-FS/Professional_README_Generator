const inquirer = require('inquirer')
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'userProjectTitle',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'userDescription',
    },
    {
      type: 'input',
      message: 'What are the installation instructions of your project?',
      name: 'userInstallation',
    },
    {
      type: 'input',
      message: 'How do you use your project?',
      name: 'userUsage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines to your project?',
        name: 'userContributing',
    },
    {
        type: 'input',
        message: 'What is the test information of your project?',
        name: 'userTests',
    },
  ])
  .then((response) => 
  fs.writeFile('generatedREADME.md', 
  `# ${response.userProjectTitle}
  ![license](https://img.shields.io/badge/license-{userLicense}-blue)
  ## Description
  ${response.userDescription}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Installation
  ${response.userInstallation}
  ## Usage
  ${response.userUsage}
  ## Contributing
  ${response.userContributing}
  ## Tests
  ${response.userTests}
  ## Questions
  Have questions? Feel free to get in touch with me via either of the following methods;
  -   GitHub: [{userGitHubName}](https://github.com/{userGitHubName})
  -   Email:  [{userEmail}](mailto:{userEmail})
  ## License
  This project is covered under the {userLicense} license as detailed below.
  
  >{licenseText}
`, (err) =>
  err ? console.error(err) : console.log('README Generated!')
));
