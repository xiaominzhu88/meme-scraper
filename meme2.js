const request = require('request');
const cheerio = require('cheerio');
const imageDownloader = require('node-image-downloader');
request('https://memegen.link/examples', function (err, res, html) {
  const $ = cheerio.load(html);
  $('.row a').each((i, el) => {
    const url = 'https://memegen.link';
    const item = $(el).text();
    const img = $(el).attr('href').replace(/[']/g, '').split('?')[0];
    const link = url + img;
    if (i < 10) {
      const firstTen = link;
      imageDownloader({
        imgs: [
          {
            uri: link,
          },
        ],
        dest: './memes',
      });
      console.log(firstTen);
    }
  });
});
