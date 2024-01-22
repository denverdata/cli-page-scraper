const validateVerbosity = require('../utils/validateVerbosity');

describe('validateVerbosity Utility', () => {
  it('should validate the verbosity level', () => {
    expect(validateVerbosity('info')).toBe('info');
    expect(validateVerbosity('debug')).toBe('debug');
    expect(validateVerbosity('warn')).toBe('warn');
    expect(validateVerbosity('error')).toBe('error');
    expect(() => validateVerbosity('')).toThrow();
    expect(() => validateVerbosity('verbose')).toThrow();
    expect(() => validateVerbosity(3)).toThrow();
    expect(() => validateVerbosity(null)).toThrow();
    expect(() => validateVerbosity(undefined)).toThrow();
  });
});
