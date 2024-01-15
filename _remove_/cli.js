#!/usr/bin/env node
const { program } = require('commander');
const validateUrl = require('./utils/validateUrl.js');
const validateOutputPath = require('./utils/validateOutputPath.js');
const validateVerbosity = require('./utils/validateVerbosity.js');
const fetchContent = require('./utils/fetchContent.js');

program
  .name('cli-page-scraper')
  .description('A command-line tool for scraping web pages')
  .version('0.1.0');

program.requiredOption('-u, --url <url>', 'URL of the web page to scrape', validateUrl);

program.option('-o, --output <path>', 'The output path to save files', validateOutputPath, 'downloads');

program.option('-v, --verbosity <level>', 'Set the verbosity level for error output', validateVerbosity, 'info');

program.action(async (options) => {
  console.log(`URL: ${options.url}`);
  console.log(`Output path: ${options.output}`);
  console.log(`Verbosity level: ${options.verbosity}`);
  try {
    const content = await fetchContent(options.url);
    // Additional code for handling content and saving it to the specified output path
    console.log('Page content fetched successfully.');
  } catch (error) {
    console.error('Error fetching page content:', error.message);
    if (options.verbosity === 'debug') {
      console.error(error);
    }
  }
});

program.parse(process.argv);
