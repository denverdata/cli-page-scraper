const fs = require('fs');
const path = require('path');

function validateOutputPath(value) {
  const outputPath = path.resolve(process.cwd(), value);
  if (!fs.existsSync(outputPath)) {
    console.warn(`Output path does not exist, it will be created: ${outputPath}`);
    fs.mkdirSync(outputPath, { recursive: true });
  }

  return value;
}

module.exports = validateOutputPath;
