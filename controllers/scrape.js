var request = require('request');
var cheerio = require('cheerio');

// request('https://amazon.com', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });
module.export = function getInfo(url) {

if (url.slice(0,23) === "https://www.target.com/") {
    request(url, function(err, resp, body) {
        var $ = cheerio.load(body);
        var price = $(".h-padding-h-default .h-text-xl");
        var priceText = price.text();

        var productName = $(".h-margin-v-tight .h-text-hd2");
        var productNameText = productName.text();

        // var image = $(".Carousel-s1morhm0-0 .Col-lvtw7q-0 ");
        // var imageText = image.attr();

        var product = {
            price: priceText,
            productName: productNameText,
            // image: imageText,

        };

        console.log(product);
    });


} else if (url.slice(0,22) === "https://www.kohls.com/") {
    request(url, function(err, resp, body) {
        var $ = cheerio.load(body);
        var price2 = $(".main-price");
        var price2Text = price2.text();

        var productName2 = $(".pdp-product-title");
        var productName2Text = productName2.text();

        // var image2 = $(".pdp-hero-image");
        // var image2Text = image2.attr();

        var product2 = {
            price2: price2Text,
            productName2: productName2Text,
            // image2: image2Text,
        }
        console.log(product2);

    });

} else {
    request(url, function(err, resp, body) {
        var $ = cheerio.load(body);
        var price3 = $("#priceblock_ourprice_row");
        var price3Text = price3.text();

        var productName3 = $("#productTitle");
        var productName3Text = productName3.text();

        // var image3 = $("#imgTagWrapperId");
        // var image3Text = image3.attr();

        var product3 = {
            price3: price3Text,
            productName3: productName3Text,
        //     image3: image3Text,
         }
        console.log(product3);

    });

};

};
