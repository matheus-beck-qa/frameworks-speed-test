# **Speed Comparison of Testing Frameworks**

[![Youtube Thumbnail](what-is-the-fastest-testing-framework.png)](https://youtu.be/Sw0vnM7j_5g)

🚀 This repository compares the execution time of four popular test automation frameworks: **Cypress, Selenium (JavaScript), Playwright, and Robot Framework**. 

The number of times to run each test can be defined in **GitHub Actions** and the tests run in parallel. The execution times were recorded and visualized in an **Excel graph** to analyze performance differences.

The test itself was made on this fake webpage: https://www.saucedemo.com/. All the frameworks perform the same steps. They access this webpage, authenticate, add an item to the cart, go to the cart, click on buy, fill in checkout information, and verify if the success message appears.

---

## **📂 Repository Structure**

```
/tests/                         # Testing scripts
/testConfig.js                  # Testing config for JS frameworks
/testConfig.py                  # Testing config for Robot framework
/.github/workflows/             # GitHub Actions workflow file
```

---

## **⚙️ Running the Tests**

The tests were executed manually via GitHub Actions using the 'workflow_dispatch' function.

To run/debug the tests locally (not in parallel):

1. Clone this repository:
   ```sh
   git clone https://github.com/matheus-beck-qa/frameworks-speed-test.git
   cd frameworks-speed-test
   ```
2. Install all dependencies:
   ```sh   
   npm install
   npx playwright install
   pip install robotframework robotframework-browser
   rfbrowser init
   ```
3. Run all tests:
   ```sh   
   npm run test:all
   ```

---

## **📜 GitHub Actions Workflow**

The **GitHub Actions** workflow (`.github/workflows/test.yml`) executes the tests in parallel on the same browser (chrome). The workflow:

- Runs all four frameworks **simultaneously**. 
- Varies the number of test executions per framework. 
- The execution time of each test framework can be seen inside https://github.com/matheus-beck-qa/frameworks-speed-test/actions/workflows/test.yml
- Excel file for reference: `Frameworks Performance Benchmark.xlsx`

---

## **📢 Contributions & Feedback**

Feel free to **open issues** or **submit pull requests** if you want to improve the tests or suggest optimizations! 🚀
