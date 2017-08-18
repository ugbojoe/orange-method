var express = require('express');
var path = require('path');
var app     = express();
var port    = process.env.PORT || 3000;

var jokes = {
  1:"Three sql statements walked into a NoSQL bar. A little while later they walked out because they couldn't find a table.",
  2:"Why did the chicken eat the frog",
  3:"How many knocks does it take to ...."
};
app.use('/css', express.static('public'));

app.get('/joke/:jokeId', function(req, res) {
  let jokeId = req.params.jokeId;

  var template = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>CSS</title>
  </head>

  <body class="article toc2 toc-left">
    <div id="header">
      ${jokes[jokeId]}
    </div>
  </body>

  </html>`;
  res.send(template);
});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});



app.listen(port);

console.log('Server started on ' + port);
