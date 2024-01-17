const validateOutputPath = require('../utils/validateOutputPath');
const os = require('os');
const fs = require('fs');
const path = require('path');

describe('validateOutputPath Utility', () => {
  it('should create the output directory if it does not exist', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cli-page-scraper-'));
    const outputPath = path.join(tempDir, 'output');
    expect(() => validateOutputPath(outputPath)).not.toThrow();
    expect(fs.existsSync(outputPath)).toBe(true);
    fs.rmdirSync(tempDir, { recursive: true });
  });

  it('should not throw and return the existing output directory', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cli-page-scraper-'));
    const outputPath = path.join(tempDir, 'output');
    fs.mkdirSync(outputPath, { recursive: true });
    expect(() => validateOutputPath(outputPath)).not.toThrow();
    expect(fs.existsSync(outputPath)).toBe(true);
    fs.rmdirSync(tempDir, { recursive: true });
  });
});
