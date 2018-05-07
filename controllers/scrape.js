var request = require('request');
var cheerio = require('cheerio');

request('https://amazon.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});

request('https://target.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});

request('https://kohls.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});

