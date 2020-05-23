const cheerio = require('cheerio');
const request = require('request');
request(
  {
    method: 'GET',
    url: 'https://memegen.link/examples',
  },
  (err, res, body) => {
    if (err) return console.error(err);
    let $ = cheerio.load(body);
    console.log(body);
  },
);
