const authenticateWithPuppeteer = require('../utils/authenticateWithPuppeteer');

describe('authenticateWithPuppeteer Utility', () => {
  it('should authenticate with provided credentials', async () => {
    const page = await browser.newPage();
    await page.goto('https://example.com/login');

    await page.type('#username', 'user');
    await page.type('#password', 'password');
    await page.click('#submit');

    await page.waitForNavigation();
    expect(page.url()).toBe('https://example.com/dashboard');
  });
});
