const saveContentToFile = require('../utils/saveContentToFile');
const fs = require('fs');
const path = require('path');

describe('saveContentToFile Utility', () => {
  it('should save content to a file', () => {
    const directory = path.join(__dirname, 'output');
    const filename = 'test.txt';
    const filepath = path.join(directory, filename);
    const content = 'Hello, world!';
    const contentType = 'text/plain';
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    saveContentToFile(content, directory, contentType);
    
    expect(fs.existsSync(filepath)).toBe(true);
    expect(fs.readFileSync(filepath, 'utf8')).toBe(content);

    // Clean up after test
    fs.unlinkSync(filepath);
    fs.rmdirSync(directory);
  });
});
