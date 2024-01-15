const validateOutputPath = require('../utils/validateOutputPath');

describe('validateOutputPath Utility', () => {
  it('should verify the existence or creation of the output path', () => {
    const fs = require('fs');
    const path = require('path');

    const outputPath = 'path/to/output';
    const existentPath = 'path/to/existent';
    const nonExistentPath = 'path/to/non-existent';

    jest.spyOn(fs, 'existsSync').mockImplementation((p) => p === existentPath);
    jest.spyOn(fs, 'mkdirSync').mockImplementation();

    expect(validateOutputPath(existentPath)).toBe(true);
    expect(fs.existsSync).toHaveBeenCalledWith(existentPath);
    expect(() => validateOutputPath(nonExistentPath)).toThrow('Output path does not exist');
    expect(fs.mkdirSync).toHaveBeenCalledWith(path.resolve(nonExistentPath));
  });
});
