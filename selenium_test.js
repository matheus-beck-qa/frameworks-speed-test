const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require ('chai');
const chrome = require('selenium-webdriver/chrome');
(async function seleniumCheckoutTest() {
  const driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
  const startTime = Date.now();
  try {
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
  } finally {
    const endTime = Date.now();
    const executionTime = (endTime - startTime) / 1000;
    console.log(`🔥 Selenium Test Execution Time: ${executionTime} seconds`);
    await driver.quit();
  }
})();
