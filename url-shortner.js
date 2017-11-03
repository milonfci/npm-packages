// load module
var UrlShorter = require('node-url-shorter');
 
// Get short url
UrlShorter
    .getShortUrl('https://www.facebook.com/')
    .then(function(data){
        console.log('getShortUrl success = ', data);
    })
    .fail(function(err){
        console.log('getShortUrl fail err = ', err);
    });
 
// Get original url
UrlShorter
    .getLongUrl('http://goo.gl/fbsS')
    .then(function(data){
        console.log('getLongUrl success = ', data);
    })
    .fail(function(err){
        console.log('getLongUrl fail err = ', err);
    });