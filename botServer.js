const http = require('http');
const { NODE_ENV } = process.env;

console.log(NODE_ENV);
if (NODE_ENV == 'development') {
  console.log('This is great');
  require('dotenv').config();
}

const bot = require('./lib/fbMessenger')


const PORT = process.env.PORT || 6999;
const HOST = process.env.HOST || '0.0.0.0';

const botMiddleware = bot.middleware();

const server = http.createServer(botMiddleware);

server.listen(PORT, HOST, (error) => {
  if (!error) {
    console.log('Server is listening on ' + HOST + ':' + PORT);
  } else {
    console.error('Error occured while listening');
    throw error;
  }
});