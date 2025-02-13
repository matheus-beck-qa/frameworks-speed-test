import { testConfig } from './../testConfig.js';
import { chromium } from 'playwright';
import assert from 'assert';

const testRuns = process.env.TEST_RUNS || 10;
(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage();

  for (let i = 0; i < testRuns; i++) {
    console.log(`Test Run: ${i + 1}`);
    await page.goto(testConfig.url);
    await page.fill(testConfig.selectors.usernameField, testConfig.username);
    await page.fill(testConfig.selectors.passwordField, testConfig.password);
    await page.click(testConfig.selectors.loginButton);
    await page.waitForSelector(testConfig.selectors.inventoryList);
    await page.click(testConfig.selectors.firstItemButton);
    await page.click(testConfig.selectors.cartLink);
    await page.click(testConfig.selectors.checkoutButton);
    await page.fill(testConfig.selectors.firstNameField, testConfig.firstName);
    await page.fill(testConfig.selectors.lastNameField, testConfig.lastName);
    await page.fill(testConfig.selectors.postalCodeField, testConfig.postalCode);
    await page.click(testConfig.selectors.continueButton);
    await page.click(testConfig.selectors.finishButton);
    const successMessage = await page.innerText(testConfig.selectors.completeHeader);
    assert.strictEqual(successMessage, 'Thank you for your order!');
  }
  await browser.close();
})();
