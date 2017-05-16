const Bot = require('messenger-bot');

const {
  BOT_PAGE_TOKEN,
  BOT_VERIFY_TOKEN,
  APP_SECRET
} = process.env;

const bot = new Bot({
  token: BOT_PAGE_TOKEN,
  verify: BOT_VERIFY_TOKEN,
  app_secret: APP_SECRET
})

// This can be replaced with templates in the future, for fine grained messages
const PROCESSING_TEXT = 'The link you provided is being processsed and fetched. Please wait!!!'
const INVALID_TEXT = 'We only accept text messages for now!'


/**
 * The user will somehow want to know, if their request is being even parsed or not
 * We need a consistent interface at least from here we can use to check for errors
 * and then return those errors as a result
 */
bot.on('message', function (payload, reply) {
  const { message } = payload;

  if (message && message.text) {
    processingResponse(reply);
  } else {
    invalidTypeResponse(reply);
  }
});

function processingResponse (reply) {
  reply({ text: PROCESSING_TEXT })
}

function invalidTypeResponse (reply) {
  reply({ text: INVALID_TEXT });
}

module.exports = bot;