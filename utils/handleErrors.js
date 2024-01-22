const chalk = require('chalk');

function handleErrors(error, verbosity) {
  switch(verbosity) {
    case 'error':
      console.error(chalk.bold.red('Error:'), error.message);
      break;
    case 'warn':
      console.warn(chalk.bold.yellow('Warning:'), error.message);
      break;
    case 'info':
      console.info(chalk.bold.blue('Info:'), error.message);
      break;
    case 'verbose':
      console.log(chalk.bold.cyan('Verbose:'), error.message);
      break;
    case 'debug':
      console.debug(chalk.bold.magenta('Debug:'), error);
      break;
    case 'silly':
      console.log(chalk.bold.green('Silly:'), error.message, error.stack);
      break;
    default:
      console.log(chalk.bold('Log:'), error.message);
  }
}

module.exports = handleErrors;
