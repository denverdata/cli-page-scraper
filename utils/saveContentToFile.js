const fs = require('fs');
const path = require('path');

function saveContentToFile(content, directory, contentType) {
  const isTextContent = /^text\//.test(contentType);
  const extension = contentType.split('/').pop();
  const filename = `content_${Date.now()}.${isTextContent ? 'html' : extension}`;
  const filepath = path.join(directory, filename);

  fs.writeFileSync(filepath, content);
  if (isTextContent) {
    process.stdout.write(content);
  } else {
    process.stdout.write(`Saved file: ${filepath}\n`);
  }
  return filepath;
}

module.exports = saveContentToFile;
