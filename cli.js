4#!/usr/bin/env node
const { program } = require('commander');
const validateUrl = require('./utils/validateUrl.js');
const validateOutputPath = require('./utils/validateOutputPath.js');
const validateVerbosity = require('./utils/validateVerbosity.js');
const handleErrors = require('./utils/handleErrors.js');
const saveContentToFile = require('./utils/saveContentToFile.js');
const authenticateWithPuppeteer = require('./utils/authenticateWithPuppeteer.js');
const fetchContent = require('./utils/fetchContent.js');

program
  .name('cli-page-scraper')
  .description('A command-line tool for scraping web pages')
  .version('0.1.0');

program.requiredOption('-u, --url <url>', 'URL of the web page to scrape', validateUrl);
program.option('-o, --output <path>', 'The output path to save files', validateOutputPath, 'downloads');
program.option('-v, --verbosity <level>', 'Set the verbosity level for error output', validateVerbosity, 'info');

program.option('-un, --username <username>', 'Username for authentication');
program.option('-pw, --password <password>', 'Password for authentication');

program.option('-e, --encoding <encoding>', 'Character encoding for the output, defaults to utf8', 'utf8');

program.action(async (options) => {
  try {
    let page;
    if (options.username && options.password) {
      page = await authenticateWithPuppeteer(options.url, {
        username: options.username,
        password: options.password
      });
    }
    const { content, contentType } = await fetchContent(options.url, options.encoding);
    saveContentToFile(content, options.output, contentType);
  } catch (error) {
    handleErrors(error, options.verbosity);
  }
});

program.parse(process.argv);
