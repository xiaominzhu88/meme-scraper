const cheerio = require('cheerio');
//const fs = require('fs');
const request = require('request');

//const $ = cheerio.load('<img class="meme-img">...</img>');

//request('https://memegen.link/examples', function (error, response, body) {
//  console.error('error:', error);
//  console.log('statusCode:', response && response.statusCode);
//  console.log('body:', body);
//});

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
