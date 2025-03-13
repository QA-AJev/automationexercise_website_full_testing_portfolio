Automation Exercise - Full Testing Portfolio

This project contains automated tests for AutomationExercise.com, a demo e-commerce website used for UI and API automation testing. The tests cover various functionalities, including user authentication, product search, cart operations, and API validation.

📌 Features

End-to-end testing with Cypress

API testing with Postman & Cypress

Continuous Integration using GitHub Actions

Reporting with Allure Reports

Test execution in headless mode for CI/CD

🛠 Tech Stack

Cypress (JavaScript) - UI & API automation

Mocha & Chai - Assertions

Allure Reporter - Test reporting

GitHub Actions - CI/CD automation

🚀 Installation & Setup

Clone the repository:

git clone https://github.com/QA-AJev/automationexercise_website_full_testing_portfolio.git

cd automationexercise_website_full_testing_portfolio

Install dependencies:

npm install

Run tests locally:

UI tests:

npx cypress open

API tests:

npx cypress run --spec "cypress/e2e/api_tests/*.cy.js"

📊 Test Execution in CI/CD (GitHub Actions)

Tests are automatically executed on every push and pull request to the main branch.

To run tests manually:

git push origin main

This triggers GitHub Actions, running tests in a headless environment.

📄 Reporting

To generate test reports:

npm run allure:generate
npm run allure:open

📢 Contributing

Feel free to create a pull request if you'd like to contribute or improve existing tests.

📜 License

This project is licensed under the MIT License.

✅ Happy Testing!
