import { chromium } from 'playwright';
import assert from 'assert';

(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage();

  for (let i = 0; i < 50; i++) {
    console.log(`Test Run: ${i + 1}`);
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForSelector('.inventory_list');
    await page.click('.inventory_item:first-child button');
    await page.click('.shopping_cart_link');
    await page.click('.checkout_button');
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');
    await page.click('#finish');

    const successMessage = await page.innerText('.complete-header');
    assert.strictEqual(successMessage, 'Thank you for your order!');
  }

  await browser.close();
})();
