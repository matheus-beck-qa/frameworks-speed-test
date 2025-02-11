import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import chrome from 'selenium-webdriver/chrome.js';

const testRuns = process.env.TEST_RUNS || 10;

(async function seleniumCheckoutTest() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--headless'))
    .build();

  try {
    for (let i = 0; i < testRuns; i++) {
      console.log(`Test Run: ${i + 1}`);
      await driver.get('https://www.saucedemo.com/');
      await driver.findElement(By.id('user-name')).sendKeys('standard_user');
      await driver.findElement(By.id('password')).sendKeys('secret_sauce');
      await driver.findElement(By.id('login-button')).click();
      await driver.wait(until.elementLocated(By.css('.inventory_list')), 10000);
      await driver.findElement(By.css('.inventory_item:first-child button')).click();
      await driver.findElement(By.css('.shopping_cart_link')).click();
      await driver.findElement(By.css('.checkout_button')).click();
      await driver.findElement(By.id('first-name')).sendKeys('John');
      await driver.findElement(By.id('last-name')).sendKeys('Doe');
      await driver.findElement(By.id('postal-code')).sendKeys('12345');
      await driver.findElement(By.css('#continue')).click();
      await driver.findElement(By.css('#finish')).click();

      const successMessage = await driver.findElement(By.css('.complete-header')).getText();
      expect(successMessage).to.equal('Thank you for your order!');
    }
  } finally {
    await driver.quit();
  }
})();
