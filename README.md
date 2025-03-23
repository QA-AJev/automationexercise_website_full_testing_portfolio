# 🧪 Cypress Automation Tests for [AutomationExercise](https://automationexercise.com/)

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-green?logo=cypress&logoColor=white)
![GitHub last commit](https://img.shields.io/github/last-commit/QA-AJev/automationexercise_website_full_testing_portfolio)
![GitHub repo size](https://img.shields.io/github/repo-size/QA-AJev/automationexercise_website_full_testing_portfolio)
![GitHub contributors](https://img.shields.io/github/contributors/QA-AJev/automationexercise_website_full_testing_portfolio)

This project contains **end-to-end (E2E) tests** for [AutomationExercise](https://automationexercise.com/) using **Cypress**.  
It automates various user flows like login, signup, product search, checkout, and API testing.

---

## 📖 Table of Contents
- [🔹 Features](#-features)
- [⚙️ Installation](#%EF%B8%8F-installation)
- [🚀 Running Tests](#-running-tests)
- [📂 Project Structure](#-project-structure)
- [📸 Screenshots](#-screenshots)
- [📌 Test Scenarios](#-test-scenarios)
- [💡 Tech Stack](#-tech-stack)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🔹 Features  
✅ Automated E2E UI Tests  
✅ API Testing with Cypress  
✅ Page Object Model (POM) for structured test cases  
✅ GitHub Actions for CI/CD integration  
✅ Test reports with Mochawesome  

---

## ⚙️ Installation  

Make sure you have **Node.js (>=16)** and **Cypress** installed.  

```sh
git clone https://github.com/QA-AJev/automationexercise_website_full_testing_portfolio.git
cd automationexercise_website_full_testing_portfolio
npm install
```

---

## 🚀 Running Tests  

### **Run all Cypress tests in UI mode**  
```sh
npx cypress open
```

### **Run tests in headless mode**  
```sh
npx cypress run
```

### **Generate test reports**  
```sh
npx cypress run --reporter mochawesome
```

---

## 📂 Project Structure  

```bash
automationexercise_website_full_testing_portfolio/
│-- cypress/
│   ├── integration/     # Test cases
│   ├── fixtures/        # Test data
│   ├── plugins/         # Plugins
│   ├── support/         # Custom commands & POM
│-- reports/             # Test reports (Mochawesome)
│-- cypress.json         # Cypress config
│-- package.json         # Dependencies
│-- README.md            # Project documentation
```

---

## 📸 Screenshots  

Example test execution:  

N/A

---

## 📌 Test Scenarios  

| Test Case  | Description |
|------------|-------------|
| ✅ Login Test  | Verify user login with valid credentials |
| ✅ Signup Test | Register a new user and verify account creation |
| ✅ Product Search | Search for a product and validate results |
| ✅ Checkout Test | Add items to cart and complete checkout |
| ✅ API Test | Validate API responses with Cypress |

---

## 💡 Tech Stack  

- 🛠 **Cypress** - JavaScript E2E testing framework  
- 📜 **Mochawesome** - HTML test reporting  
- ☁ **GitHub Actions** - CI/CD integration  

---

## 🤝 Contributing  

Contributions are welcome! 🚀  

1. Fork the repository  
2. Create a new branch (`feature-branch`)  
3. Commit changes and push  
4. Open a pull request  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

🔹 **Happy Testing! 🚀**
