
const request = require('request');
const cheerio = require('cheerio');

const uri = 'https://memegen.link/examples';

const dir = './memes';
const fs = require('fs');

!fs.existsSync(dir) && fs.mkdirSync(dir);

request(uri, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(body);
    imgs = $('.meme-img').toArray();

    imgs
      .filter((item, i) => i < 10)
      .forEach(function (img, i) {
        const url = 'https://memegen.link' + img.attribs.src;

        console.log(url);

        const file = fs.createWriteStream(`./memes/image${i}.jpg`);

        request
          .get(url)
          .on('err', (err) => {
            console.log(err);
          })
          .pipe(file);
      });
  }
});


