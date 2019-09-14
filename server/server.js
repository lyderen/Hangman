const express = require('express');
const path = require('path');
const {messages , hangman} = require('./images/images')
const movies = require('./images/movieJson')

const {listA,listB,listC} = require('./leter')


const app = express();

// Serve static files....
app.use(express.static(__dirname + '/../dist/hangman'));

app.get('/getleterA', function(req, res) {
  res.send(listA);
});

app.get('/getleterB', function(req, res) {
  res.send(listB);
});

app.get('/getleterC', function(req, res) {
  res.send(listC);
});

app.get('/messages', function(req, res) {
  res.send(messages);
});

app.get('/hangaction', function(req, res) {
  res.send(hangman);
});

app.get('/getmovies', function(req, res) {
  res.send(movies);
});


// Send all requests to index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/hangman/index.html'));
});



// default Heroku PORT
app.listen(process.env.PORT || 3000);