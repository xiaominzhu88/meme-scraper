const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const uri = 'https://memegen.link/examples';
// create dir 'memes'
const dir = './memes';
!fs.existsSync(dir) && fs.mkdirSync(dir);

//make request on uri and get correct response back
request(uri, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    // use 'cheerio' to load body
    const $ = cheerio.load(body);

    // choose css selection to change the imgs into array so that i can filter and loop in it
    // to get the first 10 images
    const imgs = $('.meme-img').toArray();
    imgs
      .filter((item, i) => i < 10)
      .forEach(function (img, i) {
        const url = 'https://memegen.link' + img.attribs.src;
        console.log(url);
        // create jpg
        const file = fs.createWriteStream(`./memes/image${i}.jpg`);

        request
          .get(url) // get the url which returns before
          .on('err', (err) => {
            console.log(err);
          })
          .pipe(file); // save the data into file
      });
  }
});
