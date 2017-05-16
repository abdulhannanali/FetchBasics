const fetchPage = require('./lib/mercuryParser');
const fs = require('fs');

console.time('fetch');
fetchPage('https://www.mindful.org/notice-shift-rewire-brain/').then(content => {
  console.timeEnd('fetch');
  console.log(content);
  fs.writeFileSync('./textContent', content.textContent);
}).catch(console.log);