//const imageDownloader = require('node-image-downloader');

const request = require('request');
const cheerio = require('cheerio');
const uri = 'https://memegen.link/examples';

request(uri, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(body);
    imgs = $('.meme-img').toArray();

    imgs
      .filter((item, i) => i <= 10)
      .forEach(function (img) {
        const url = 'https://memegen.link' + img.attribs.src;

        console.log(url);
      });
  }
});

//imageDownloader({
//  imgs: [
//    {
//      uri:
//      'https://memegen.link/patrick/your_text/goes_here.jpg?preview=true&watermark=none',
//      filename: 'meme-scraper',
//    },
//    {
//      uri:
//      'https://memegen.link/success/your_text/goes_here.jpg?preview=true&watermark=none',
//      filename: 'meme-scraper',
//    },
//    {
//      uri:
//      'https://memegen.link/tenguy/your_text/goes_here.jpg?preview=true&watermark=none',
//      filename: 'meme-scraper',
//    },
//    {
//      uri:
//      'https://memegen.link/apcr/your_text/goes_here.jpg?preview=true&watermark=none',
//      filename: 'meme-scraper',
//    },
//    {
//      uri: 'https://memegen.link/aag/_/aliens.jpg?preview=true&watermark=none',
//      filename: 'meme-scraper',
//    },
//    {
//      uri:
//      'https://memegen.link/tried/at_least/you_tried.jpg?preview=true&watermark=none',
//      filename: 'meme-scraper',
//    },
//    {
//      uri:
//      'https://memegen.link/biw/gets_iced_coffee/in_the_winter.jpg?preview=true&watermark=none',
//      filename: 'meme-scraper',
//    },
//    {
//      uri:
//      'https://memegen.link/blb/your_text/goes_here.jpg?preview=true&watermark=none',
//      filename: 'meme-scraper',
//    },
//    {
//      uri:
//      'https://memegen.link/ch/if_you_wanted_to_avoid_the_friend_zone///you_should_have_made_your_intentions_known_from_the_start.jpg?preview=true&watermark=none',
//      filename: 'meme-scraper',
//    },
//    {
//      uri:
//      'https://memegen.link/wonka/your_text/goes_here.jpg?preview=true&watermark=none',
//      filename: 'meme-scraper',
//    },
//  ],
//  dest: '/Users/mini/projects/meme-scraper',
//});
