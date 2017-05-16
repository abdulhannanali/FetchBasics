/**
 * Posts long articles to the Facebook Page so the link can be shared with the user
 */
const graph = require('../graphInit');

const {FB_PAGE_ID} = process.env;

// Character Limit after which the comment is divided into two parts
// Useful to divide the data between comments so, we can by pass the Facebook's restriction regarding
// this usage
const COMMENT_CHARACTER_LIMIT = 5000;

/**
 * Posts the given text to the page using it's specific Facebook Page ID
 * This function is going to be used to publish the given information about the article
 */
function postPage (messageText, callback) {
  const pagePost = { message: messageText }
  return graph.post('/' + FB_PAGE_ID + '/feed', pagePost, callback);
}

function pageComment (postId, comment, callback) {
  const comment = { message: comment }
  return graph.post('/' + postId + '/post' + '/comment', comment, callback);
}

/**
 * Splits the given message into more than one based on the `COMMENT_CHARACTER_LIMIT`
 * 
 * @param {String} message Given string to be splitted
 * @return {Array<String>} Array of splitted messages
 */
function splitMessageByLimit (message) {
  const numMessages = Math.ceil(message.length / COMMENT_CHARACTER_LIMIT);
  const splitMessages = [];

  for (let i = 0; i < numMessages.length; i++) {
    let startIndex = i * COMMENT_CHARACTER_LIMIT;
    let endIndex = startIndex + COMMENT_CHARACTER_LIMIT;
    splitMessages.push(message.slice(startIndex, endIndex));
  }

  return splitMessages;
}

module.exports = postPage;