# Cypress E2E Testing Project

## Student Information
Course: Software Testing  
Framework: Cypress

---

## Website Tested
https://www.saucedemo.com

---

# Task 1

The following End-to-End tests were implemented:

- Valid Login Test
- Invalid Login Test
- Empty Field Login Test
- Navigation Test 1
- Navigation Test 2
- Checkout Form Test

---

# Task 2

The following Cypress concepts were implemented:

- Assertions
- Negative Assertions
- Aliases
- Custom Commands
- beforeEach Hook

---

# Folder Structure

cypress/e2e/
- login.cy.js
- navigation.cy.js
- form.cy.js
- task2.cy.js

cypress/support/
- commands.js

---

# How to Run the Project

## Install Dependencies

```bash
npm install
```

## Open Cypress

```bash
npx cypress open
```

---

# Challenges Faced

One difficult thing I faced was finding reliable selectors for web elements. Initially some tests failed because the selected elements were hidden or dynamically loaded. I solved this by using Cypress Selector Playground and inspecting the HTML carefully. Another challenge was understanding negative assertions and custom commands. After experimenting with different assertions and creating a reusable login command, I better understood how Cypress reduces repeated code and improves automation testing efficiency.