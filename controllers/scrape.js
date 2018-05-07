var request = require('request');
var cheerio = require('cheerio');

// request('https://amazon.com', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });

var url = "https://www.target.com/p/women-s-good-vibes-graphic-tank-top-grayson-threads-juniors-blue/-/A-53380599?preselect=53168686#lnk=sametab"

request(url, function(err, resp, body){
	var $ = cheerio.load(body);
	var price = $(".h-padding-h-default .h-text-xl");
	var priceText = price.text();

	var productName = $(".h-margin-v-tight .h-text-hd2");
	var productNameText = productName.text();

	var image = $(".Carousel-s1morhm0-0 .Col-lvtw7q-0 ");
	var imageText = image.attr();

	var product = {
		price: priceText,
		productName: productNameText,
		image: imageText,

	};

	console.log(product);
});

var url2 = "https://www.kohls.com/product/prd-3053982/womens-apt-9-torie-straight-leg-capri-pants.jsp?color=Cumin%20Spice&prdPV=9"

request(url2, function(err, resp, body){
	var $ = cheerio.load(body);
	var price2 = $(".main-price");
	var price2Text = price2.text();

	var productName2 = $(".pdp-product-title");
	var productName2Text = productName2.text();

	var image2 = $(".pdp-hero-image");
	var image2Text = image2.attr();

	var product2 = {
		price2: price2Text,
		productName2: productName2Text,
		image2: image2Text,
	}
	console.log(product2);

});

var url3= "https://www.amazon.com/Levis-Womens-Classic-Trucker-Jacket/dp/B00J2UNBJG/ref=lp_17718257011_1_1?s=apparel&ie=UTF8&qid=1525730966&sr=1-1&nodeID=17718257011&psd=1"

request(url3, function(err, resp, body){
	var $ = cheerio.load(body);
	var price3 = $("#priceblock_ourprice_row");
	var price3Text = price3.text();

	var productName3 = $("#productTitle");
	var productName3Text = productName3.text();

	var image3 = $("#imgTagWrapperId");
	var image3Text = image3.attr();

	var product3 = {
		price3: price3Text,
		productName3: productName3Text,
		image3: image3Text,
	}
	console.log(product3);

});