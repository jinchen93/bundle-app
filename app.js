const express = require('express');
const path = require('path');

const app = express();

function requireHTTPS(req, res, next) {
  if (!req.secure) {
    //FYI this should work for local development as well
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

app.use(requireHTTPS);
app.use(express.static('build'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, console.log('Running on Port 9000'));