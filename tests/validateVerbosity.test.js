const validateVerbosity = require('../utils/validateVerbosity');

describe('validateVerbosity Utility', () => {
  it('should validate the verbosity level', () => {
    expect(validateVerbosity('info')).toBe(true);
    expect(validateVerbosity('debug')).toBe(true);
    expect(validateVerbosity('warn')).toBe(true);
    expect(validateVerbosity('error')).toBe(true);
    expect(validateVerbosity('')).toBe(false);
    expect(validateVerbosity('verbose')).toBe(false);
    expect(validateVerbosity(3)).toBe(false);
    expect(validateVerbosity(null)).toBe(false);
    expect(validateVerbosity(undefined)).toBe(false);
  });
});
