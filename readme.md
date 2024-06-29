# Setup and run

## Pre-requisites

1. Node Version: should be greater than `v14.x.x`
   - check Node version in your local, in your terminal run: `node -v`
   - refer this website for more information on how to download and install Node in your local [this website](https://nodejs.org/en/download/)
2. Visual Studio Code:
   - if you want to open this code in any code editor then use Visual Studio Code
   - - refer this website for more information on how to download and install Node in your local [this website](https://code.visualstudio.com/download)

## Getting Started

1. Clone this repository
2. Open your terminal and navigate to the location of repository
3. Run `npm install` to install the necessary dependencies
4. Run the required Tests

## How to run tests

### headless mode ( You can not see the execution)

- To run `all tests`, use the following command:

```sh
npm run test
```
- To run all `regression tests`, use the following command:

```sh
npm run regression
```

## Test results and Reports

- We haven't implemented any reports yet however you can check screenshots for failed testcases and execution videos here
  - Screenshot path: `cypress\screenshots`
  - Video path: `cypress\videos`

## Project Structure

- The `cypress/e2e/pages-module` directory contains all of the page objects and page actions
- The `cypress/e2e/test-module` directory contains all of the test files organized by page
- The `cypress/e2e/testData` directory contains all of the test files that is used as a test data
- The `cypress/support` directory contains the `index.js` file which is where the custom commands are defined.
- The `cypress/fixture` directory contains all the test data related to different pages

## Page Objects

- The Page Object Model design pattern is used in this project to separate the tests from the implementation details of the web pages.
- Each page of the web application has its own page object that contains all of the elements and actions that can be performed on that page.
- To use a page object in a test, it must first be imported and then instantiated. For example:
  `const loginPage = new LoginPage()`

## Custom commands

- This project also uses custom commands which are defined in the `cypress/support/index.js` file. - These custom commands make it easy to perform common actions across multiple tests.

## Continuous integration

- We haven't implemented any CI pipelines
