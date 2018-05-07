var request = require('request');
var cheerio = require('cheerio');

// request('https://amazon.com', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });

// request('https://target.com', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });

// request('https://kohls.com', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });

var url = "https://www.target.com/"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var price = $(".h-padding-h-default .h-text-xl");
	var priceText = price.text();

	var productName = $(".h-margin-v-tight .h-text-hd2");
	var productNameText = productName.text();

	var image = $(".Carousel-s1morhm0-0 .Col-lvtw7q-0 ");
	var imageText = image.text();

	var product = {
		price: priceText,
		productName: productNameText,
		image: imageText,

	};

	console.log(product);
	
	
});