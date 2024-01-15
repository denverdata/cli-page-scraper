const validateUrl = require('../utils/validateUrl');

describe('validateUrl Utility', () => {
  it('should accept valid HTTP and HTTPS URLs', () => {
    expect(() => validateUrl('http://www.example.com')).not.toThrow();
    expect(() => validateUrl('https://www.example.com')).not.toThrow();
  });

  it('should accept URLs with various subdomains and TLDs', () => {
    expect(() => validateUrl('https://sub.example.com')).not.toThrow();
    expect(() => validateUrl('https://example.co.uk')).not.toThrow();
    expect(() => validateUrl('https://sub.sub2.example.com')).not.toThrow();
  });

  it('should accept URLs with paths, queries, and fragments', () => {
    expect(() => validateUrl('http://www.example.com/path')).not.toThrow();
    expect(() => validateUrl('http://www.example.com/path?query=param')).not.toThrow();
    expect(() => validateUrl('http://www.example.com/path#fragment')).not.toThrow();
  });

  it('should accept URLs without protocols, assuming HTTP', () => {
    expect(() => validateUrl('www.example.com')).not.toThrow();
    expect(() => validateUrl('example.com')).not.toThrow();
  });

  it('should reject URLs with invalid protocols', () => {
    expect(() => validateUrl('ftp://example.com')).toThrow();
    expect(() => validateUrl('file://example.com')).toThrow();
  });

  it('should reject malformed URLs', () => {
    expect(() => validateUrl('http:/example.com')).toThrow();
    expect(() => validateUrl('http//example.com')).toThrow();
    expect(() => validateUrl('://example.com')).toThrow();
  });

  it('should reject URLs with invalid characters', () => {
    expect(() => validateUrl('http://exa<mple.com')).toThrow();
    expect(() => validateUrl('http://exa mple.com')).toThrow();
  });

  it('should reject incomplete URLs', () => {
    expect(() => validateUrl('http://')).toThrow();
    expect(() => validateUrl('https://')).toThrow();
    expect(() => validateUrl('')).toThrow();
  });
});
