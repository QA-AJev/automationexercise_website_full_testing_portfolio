Automation Exercise - Full Testing Portfolio
Welcome to the Automation Exercise Full Testing Portfolio, a comprehensive project designed to showcase automated testing for AutomationExercise.com. This demo e-commerce website serves as an excellent platform for UI and API automation testing. The project includes end-to-end test cases covering user authentication, product search, cart operations, and API validation, ensuring robust test coverage and reliability.

📌 Key Features
End-to-End Testing: Automated UI testing using Cypress.

API Testing: Comprehensive API validation with Postman and Cypress.

Continuous Integration (CI/CD): Seamless integration with GitHub Actions for automated test execution.

Detailed Reporting: Generate and visualize test results using Allure Reports.

Headless Mode Execution: Optimized for CI/CD pipelines with headless browser support.

🛠 Tech Stack
Cypress (JavaScript) - For UI and API automation.

Mocha & Chai - For assertions and test framework.

Allure Reporter - For detailed test reporting and visualization.

GitHub Actions - For Continuous Integration/Continuous Deployment (CI/CD) automation.

🚀 Installation & Setup
1. Clone the Repository
bash
Copy
git clone https://github.com/QA-AJev/automationexercise_website_full_testing_portfolio.git
cd automationexercise_website_full_testing_portfolio
2. Install Dependencies
bash
Copy
npm install
3. Run Tests Locally
UI Tests (Cypress):
bash
Copy
npx cypress open
API Tests (Cypress):
bash
Copy
npx cypress run --spec "cypress/e2e/api_tests/*.cy.js"
📊 Test Execution in CI/CD (GitHub Actions)
Tests are automatically executed on every push and pull request to the main branch. To trigger manual tests:

bash
Copy
git push origin main
This will initiate GitHub Actions to run the tests in a headless environment, ensuring continuous integration and delivery.

📄 Reporting
To generate and view detailed test reports:

Generate Reports:

bash
Copy
npm run allure:generate
Open Reports:

bash
Copy
npm run allure:open
The Allure Reports provide a comprehensive overview of test results, including detailed logs, screenshots, and metrics.

📢 Contributing
We welcome contributions to enhance this project! If you'd like to contribute or improve existing tests, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix.

Submit a pull request with a detailed description of your changes.

📜 License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.

✅ Happy Testing! 🎉
