const express = require('express');

const PORT = process.env.PORT || 3500;

//Create our app
var app = express();

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Express server is up on port 3500 ' + port);
});
