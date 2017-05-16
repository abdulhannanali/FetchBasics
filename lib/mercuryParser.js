const axios = require('axios');
const h2t = require('html-to-text');

const MERCURY_BASE_URL = process.env.MERCURY_BASE_URL || 'https://mercury.postlight.com/';
const MERCURY_API_KEY = process.env.MERCURY_PARSER_KEY;

/**
 * Parses the Text Content from Content having HTML in it. 
 * Uses Cheerio for this purpose
 */
function parseText (webContent) {
  const parsedText = h2t.fromString(webContent, {
    wordwrap: null,
    ignoreImage: true,
    singleNewLineParagraphs: true
  });
  return parsedText;
}

/**
 * Fetches the contents of the page using `parseMercury` function
 * and parses the text out of the html too
 */
function fetchPageContent (url) {
  if (!url) {
    throw new Error('url-not-present');
  }

  return parseMercury(url).then(function (response) {
    const data = response.data;

    if (data && data.content) {
      const parsedContent = parseText(data.content);
      response.data.textContent = parsedContent;
    }

    return response.data;
  });
}

function parseMercury (url) {
  return axios({
    method: 'GET',
    url: '/parser',
    baseURL: MERCURY_BASE_URL,
    headers: {
      'x-api-key': MERCURY_API_KEY
    },
    params: {
      url: url
    }
  });
}

module.exports = fetchPageContent;