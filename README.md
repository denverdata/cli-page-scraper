# cli-page-scraper

cli-page-scraper is a command-line interface tool that allows users to scrape content from web pages. It outputs the raw content of the specified page to stdout or saves non-text files locally as binary files. The tool is designed to handle user authentication, follow redirects, and provide detailed error messages.

## Features
- Retrieve and output the complete content of a web page.
- Error reporting through stderr with adjustable verbosity levels.
- User authentication for secure web pages.
- Handles redirects and reports the process.
- Supports multiple character encodings for content output.

## Source
git clone https://github.com/denverdata/cli-page-scraper

## Installation

Ensure you have Node.js installed, then install cli-page-scraper globally using npm:

```
npm install -g cli-page-scraper
```

## Usage

Run the tool from the command line as follows:

```
cli-page-scraper --url <URL> [OPTIONS]
```

Options:
- `-u, --url <url>`: URL of the web page to scrape (required).
- `-o, --output <path>`: Path to save the scraped file, defaults to 'downloads'.
- `-v, --verbosity <level>`: Verbosity level for error output, defaults to 'info'.

Additional options and detailed usage can be found by running `cli-page-scraper --help`.

## Technologies Used

- Node.js
- Libraries: axios, cheerio, commander, dotenv, puppeteer, chalk, fs

## Configuration

Set up environment variables for authentication in a `.env` file:

```
USERNAME=your_username
PASSWORD=your_password
```

## Development

Developers can contribute to the project by cloning the repository and submitting pull requests, or by opening issues for bugs or feature requests.

## License

cli-page-scraper is open-source software licensed under the ISC license.

## Author

Tom DeGerlia - tomdegerlia@coloradodigital.com