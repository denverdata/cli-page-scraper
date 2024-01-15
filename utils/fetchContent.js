const axios = require('axios');

async function fetchContent(url, encoding = 'utf8') {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
    });

    const contentType = response.headers['content-type'];
    let content;

    const contentEncoding = encoding === 'auto' ? determineEncoding(response.headers['content-encoding'], contentType) : encoding;

    if (contentType.startsWith('text/') || contentType.includes('json')) {
      content = response.data.toString(contentEncoding);
    } else {
      content = response.data;
    }
    return { content, contentType };
  } catch (error) {
    throw error;
  }
}

function determineEncoding(contentEncodingHeader, contentTypeHeader) {
  if (!contentEncodingHeader && contentTypeHeader) {
    const matches = /charset=([a-z0-9-]+)/i.exec(contentTypeHeader);
    return matches && matches[1] ? matches[1] : 'utf8';
  }
  return contentEncodingHeader || 'utf8';
}

module.exports = fetchContent;
