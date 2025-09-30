# ASC_Cypress 🧪

A comprehensive Cypress End-to-End testing suite featuring automated browser testing, CI/CD integration, and beautiful HTML reporting.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Test Suites](#test-suites)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)
- [Documentation](#documentation)

## 🎯 Overview

ASC_Cypress is a robust testing framework built with Cypress 15.2.0 that provides comprehensive end-to-end testing capabilities for web applications. This project demonstrates testing best practices, advanced Cypress features, and modern CI/CD integration with automated reporting.

## ✨ Features

- **Modern Cypress Framework**: Built with Cypress 15.2.0 featuring the latest testing capabilities
- **Multiple Test Suites**: Covers various testing scenarios and real-world applications
- **Advanced Reporting**: Mochawesome integration with beautiful HTML reports
- **CI/CD Integration**: GitHub Actions workflow with automated test execution
- **XPath Support**: Extended selector capabilities with cypress-xpath
- **Experimental Studio**: Visual test recording and editing
- **GitHub Pages Deployment**: Automated report publishing

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.x recommended)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PratyushJaishankar/ASC_Cypress.git
   cd ASC_Cypress
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify Cypress installation**
   ```bash
   npx cypress verify
   ```

### Quick Start

Run the Cypress Test Runner in interactive mode:
```bash
npx cypress open
```

Run all tests in headless mode:
```bash
npx cypress run
```

## 📁 Project Structure

```
ASC_Cypress/
├── cypress/
│   ├── e2e/                          # Test specifications
│   │   ├── 1-getting-started/        # Basic Cypress examples
│   │   ├── 2-advanced-examples/      # Advanced Cypress features
│   │   ├── saucedemo/               # SauceDemo application tests
│   │   ├── orangehrm/               # OrangeHRM application tests
│   │   └── example/                 # Additional example tests
│   ├── fixtures/                    # Test data and mock responses
│   ├── support/                     # Custom commands and configuration
│   └── reports/                     # Generated test reports
├── .github/
│   └── workflows/                   # CI/CD pipeline configuration
├── cypress.config.js               # Cypress configuration
├── package.json                    # Project dependencies and scripts
└── README.md                       # Project documentation
```

## 🧪 Test Suites

### 1. Getting Started (`1-getting-started/`)
- **todo.cy.js**: Basic todo application testing demonstrating core Cypress concepts

### 2. Advanced Examples (`2-advanced-examples/`)
- **actions.cy.js**: Various user interaction testing (clicks, typing, hovering)
- **assertions.cy.js**: Comprehensive assertion examples and patterns
- **utilities.cy.js**: Cypress utility functions (Lodash, jQuery, Blob handling)
- **cypress_api.cy.js**: Cypress API demonstrations and custom commands
- **misc.cy.js**: Platform testing, screenshots, and system commands
- **viewport.cy.js**: Responsive design and viewport testing
- **cookies.cy.js**: Cookie management and testing
- **window.cy.js**: Window and browser testing
- **aliasing.cy.js**: Element aliasing and reusability patterns

### 3. SauceDemo Tests (`saucedemo/`)
Real-world e-commerce application testing:
- **assertion.cy.js**: Comprehensive assertion testing with XPath support
- **actions.cy.js**: User interaction testing (forms, checkboxes, selections)
- **navigation.cy.js**: Page navigation and URL testing
- **waits.cy.js**: Wait strategies and timing management
- **hooks.cy.js**: Test hooks and setup/teardown patterns
- **CommandsTrial.cy.js**: Custom command implementations

### 4. OrangeHRM Tests (`orangehrm/`)
- **hello.cy.js**: HR management system login and basic functionality testing

### 5. Example Tests (`example/`)
- **firstsample.cy.js**: Basic website navigation and assertion patterns

## 🏃‍♂️ Running Tests

### Interactive Mode (Cypress Test Runner)
```bash
npx cypress open
```
This opens the Cypress Test Runner GUI where you can:
- Select and run individual tests
- Watch tests run in real-time
- Debug test failures
- Use Cypress Studio for test recording

### Headless Mode (Command Line)
```bash
# Run all tests
npx cypress run

# Run specific test file
npx cypress run --spec "cypress/e2e/saucedemo/assertion.cy.js"

# Run tests in specific browser
npx cypress run --browser chrome

# Run tests with specific viewport
npx cypress run --config viewportWidth=1280,viewportHeight=720
```

### Environment-Specific Testing
```bash
# Development environment
npx cypress run --env environment=dev

# Staging environment
npx cypress run --env environment=staging
```

## 📊 Reporting

This project uses **Mochawesome** for generating beautiful HTML test reports.

### Report Generation
Reports are automatically generated when running tests:
```bash
npx cypress run
```

### Report Features
- **Interactive HTML Reports**: Navigate through test results with rich formatting
- **Screenshots**: Automatic screenshot capture on test failures
- **Test Statistics**: Pass/fail rates, execution times, and trends
- **Error Details**: Detailed error messages and stack traces

### Viewing Reports
After test execution, reports are available in:
- `cypress/reports/html/index.html` - Main HTML report
- `cypress/reports/` - Individual JSON reports

### Manual Report Generation
```bash
# Merge individual reports
npx mochawesome-merge cypress/reports/mochawesome*.json > cypress/reports/report.json

# Generate HTML report
npx marge cypress/reports/report.json -f report -o cypress/reports/html
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project includes a comprehensive GitHub Actions workflow (`.github/workflows/cypress-tests.yml`) that:

1. **Automated Testing**
   - Triggers on push to `main`/`develop` branches and pull requests
   - Uses Node.js 20.x in Ubuntu environment
   - Installs dependencies with npm ci
   - Runs full Cypress test suite

2. **Report Generation**
   - Merges individual test reports
   - Generates consolidated HTML report
   - Uploads reports as GitHub artifacts

3. **GitHub Pages Deployment**
   - Automatically deploys test reports to GitHub Pages
   - Makes reports accessible via web browser
   - Maintains report history

### Workflow Triggers
- Push to `main` or `develop` branches
- Pull requests to `main` branch
- Manual workflow dispatch

### Viewing CI Reports
1. Navigate to the Actions tab in your GitHub repository
2. Select the latest workflow run
3. Download the `html-report` artifact
4. Or view the deployed report on GitHub Pages

## 🤝 Contributing

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-test-suite`
3. Make your changes and add tests
4. Run the test suite: `npx cypress run`
5. Commit your changes: `git commit -m 'Add new test suite'`
6. Push to the branch: `git push origin feature/new-test-suite`
7. Submit a pull request

### Coding Standards
- Follow existing code formatting and structure
- Use descriptive test names and comments
- Include appropriate assertions and error handling
- Add fixtures for test data when needed
- Update documentation for new features

### Test Guidelines
- **Arrange-Act-Assert Pattern**: Structure tests clearly
- **Independent Tests**: Each test should be self-contained
- **Meaningful Assertions**: Use specific, descriptive assertions
- **Error Handling**: Include proper error handling and recovery
- **Data Management**: Use fixtures for consistent test data

### Adding New Test Suites
1. Create a new directory under `cypress/e2e/`
2. Add test files with `.cy.js` extension
3. Include relevant fixtures in `cypress/fixtures/`
4. Update this README with test suite documentation

## 📚 Documentation

### Cypress Configuration (`cypress.config.js`)
- **Experimental Studio**: Enabled for visual test creation
- **Default Timeout**: 10 seconds for better stability
- **Mochawesome Reporter**: Configured with embedded screenshots
- **Custom Tasks**: Console logging and debugging support

### Key Dependencies
- **cypress**: ^15.2.0 - Core testing framework
- **cypress-xpath**: ^2.0.1 - XPath selector support
- **mochawesome**: ^7.1.4 - HTML reporting
- **mochawesome-merge**: ^5.0.0 - Report consolidation
- **mochawesome-report-generator**: ^6.3.0 - HTML generation

### Useful Resources
- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)
- [GitHub Actions](https://docs.github.com/en/actions)

### Support and Community
- [Cypress Discord](https://discord.gg/cypress)
- [Cypress GitHub](https://github.com/cypress-io/cypress)
- [Stack Overflow - Cypress](https://stackoverflow.com/questions/tagged/cypress)

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Cypress.io](https://cypress.io) for the amazing testing framework
- [SauceDemo](https://www.saucedemo.com/) for providing a test application
- [OrangeHRM](https://opensource-demo.orangehrmlive.com/) for the HR demo application
- The Cypress community for continuous inspiration and support

---

**Happy Testing! 🎉**

For questions, issues, or contributions, please feel free to open an issue or submit a pull request.