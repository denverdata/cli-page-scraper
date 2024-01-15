const path = require('path');

function saveBinaryContent(content, directory) {
  const filename = `binary_content_${Date.now()}.bin`;
  const filepath = path.join(directory, filename);

  fs.writeFileSync(filepath, content);

  return filepath;
}

module.exports = saveBinaryContent;
