const puppeteer = require('puppeteer');

async function authenticateWithPuppeteer(url, authenticationDetails) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  // GPT Pilot: {these are optional parameters that must be specified on the command line}
  const usernameSelector = 'input[name="username"]';
  const passwordSelector = 'input[name="password"]';
  const loginButtonSelector = 'button[type="submit"], input[type="submit"]';

  // Fill in the username and password provided by the user
  await page.type(usernameSelector, authenticationDetails.username);
  await page.type(passwordSelector, authenticationDetails.password);

  // Click the login button
  await page.click(loginButtonSelector);

  // Wait for navigation which indicates login was successful
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // This function returns the page object which can be used to perform further scraping
  return page;
}

module.exports = authenticateWithPuppeteer;
