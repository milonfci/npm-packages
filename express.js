var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
});


app.get('/test', function (req, res) {
  res.send('This is test page using express js routing....')
})

app.listen(3000);