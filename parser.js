const parser = require('rss-url-parser');

parser('http://rss.cnn.com/rss/edition.rss').then(function(data){
	for(var i=0;i<2;i++){
		console.log("Title: "+data[i].title);
	}
});