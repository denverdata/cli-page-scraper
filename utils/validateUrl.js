function validateUrl(value) {
  // Simpler regex pattern that checks for the presence of a scheme and a domain
  const pattern = /^(https?:\/\/)?[\w\-._~%\/:?\[\]#@!$&'()*+,;=]+$/;
  if (!pattern.test(value)) {
    throw new Error('Invalid URL provided');
  }
  return value;
}

module.exports = validateUrl;
