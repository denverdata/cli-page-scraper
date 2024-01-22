function validateVerbosity(value) {
  const validVerbosityLevels = ['error', 'warn', 'info', 'verbose', 'debug', 'silly'];
  if (!validVerbosityLevels.includes(value.toLowerCase())) {
    throw new Error('Invalid verbosity level provided. Valid options are: ' + validVerbosityLevels.join(', '));
  }
  return value;
}

module.exports = validateVerbosity;
