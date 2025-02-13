import { testConfig } from './../testConfig.js';
import { expect } from 'chai';
import chrome from 'selenium-webdriver/chrome.js';
import { Builder, By, until } from 'selenium-webdriver';

const testRuns = process.env.TEST_RUNS || 10;

(async function seleniumCheckoutTest() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--headless'))
    .build();

  try {
    for (let i = 0; i < testRuns; i++) {
      console.log(`Test Run: ${i + 1}`);
      await driver.get(testConfig.url);
      await driver.findElement(By.css(testConfig.selectors.usernameField)).sendKeys(testConfig.username);
      await driver.findElement(By.css(testConfig.selectors.passwordField)).sendKeys(testConfig.password);
      await driver.findElement(By.css(testConfig.selectors.loginButton)).click();
      await driver.wait(until.elementLocated(By.css(testConfig.selectors.inventoryList)), 10000);
      await driver.findElement(By.css(testConfig.selectors.firstItemButton)).click();
      await driver.findElement(By.css(testConfig.selectors.cartLink)).click();
      await driver.findElement(By.css(testConfig.selectors.checkoutButton)).click();
      await driver.findElement(By.css(testConfig.selectors.firstNameField)).sendKeys(testConfig.firstName);
      await driver.findElement(By.css(testConfig.selectors.lastNameField)).sendKeys(testConfig.lastName);
      await driver.findElement(By.css(testConfig.selectors.postalCodeField)).sendKeys(testConfig.postalCode);
      await driver.findElement(By.css(testConfig.selectors.continueButton)).click();
      await driver.findElement(By.css(testConfig.selectors.finishButton)).click();
      const successMessage = await driver.findElement(By.css(testConfig.selectors.completeHeader)).getText();
      expect(successMessage).to.equal('Thank you for your order!');
    }
  } finally {
    await driver.quit();
  }
})();