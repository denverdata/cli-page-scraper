const saveContentToFile = require('../utils/saveContentToFile');
const fs = require('fs');

describe('saveContentToFile Utility', () => {
  it('should save content to a file', () => {
    const path = 'test.txt';
    const content = 'Hello, world!';
    const contentType = 'text/plain';
    saveContentToFile(content, path, contentType);
    
    expect(fs.existsSync(path)).toBe(true);
    expect(fs.readFileSync(path, 'utf8')).toBe(content);

    // Clean up after test
    fs.unlinkSync(path);
  });
});
