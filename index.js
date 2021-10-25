const inquirer = require('inquirer')
const fs = require('fs')

// Access the required license text and store to global variables
fs.readFile('./licenses/Apache_License_2.0.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  apache = data
})

fs.readFile('./licenses/GNU_AGPLv3.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  gnuAgplv3 = data
})

fs.readFile('./licenses/GNU_GPLv3.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  gnuGplv3 = data
})

fs.readFile('./licenses/GNU_LGPLv3.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  gnuLgplv3 = data
})

fs.readFile('./licenses/MIT_License.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  mitLicense = data
})

fs.readFile('./licenses/Mozilla_Public_License_2.0.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  mozilla = data
})

fs.readFile('./licenses/The_Unlicense.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  unlicense = data
})
// Inquirer to obtain user information
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
    {
        type: 'list',
        message: 'Which license is applicable to your project?',
        choices: ['MIT_License', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'GNU_AGPLv3', 'The_Unlicense'],
        name: 'userLicense',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'userGitHubName',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'userEmail',
},
    
  ])
  // Set the README license text depending on which license is selected.
  .then( function (response) {
    let licenseText = ''
    if (response.userLicense === "MIT_License") {
        licenseText = mitLicense    
    } else if (response.userLicense === "GNU_GPLv3") {
        licenseText = gnuGplv3
    } else if ((response.userLicense === "GNU_LGPLv3")) {
        licenseText = gnuLgplv3
    } else if ((response.userLicense === "Mozilla_Public_License_2.0")) {
        licenseText = mozilla
    } else if ((response.userLicense === "Apache_License_2.0")) {
        licenseText = apache
    } else if ((response.userLicense === "GNU_AGPLv3")) {
        licenseText = gnuAgplv3
    } else if ((response.userLicense === "The_Unlicense")) {
        licenseText = unlicense
    }
// Wite the README file with entered user data
  fs.writeFile('generatedREADME.md', 
  `# ${response.userProjectTitle}
  ![license](https://img.shields.io/badge/license-${response.userLicense}-blue)
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
  -   GitHub: [${response.userGitHubName}](https://github.com/${response.userGitHubName}) ![GitHub](https://img.shields.io/github/followers/${response.userGitHubName}?style=social)
  -   Email:  [${response.userEmail}](mailto:${response.userEmail}) 📧
  ## License
  This project is covered under the "${response.userLicense.replace(/[_-]/g, " ")}" license as detailed below.
  
  <pre>${licenseText}</pre>
`, (err) =>
  err ? console.error(err) : console.log('README Generated!')
)})
