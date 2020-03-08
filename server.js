const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
nunjucks.configure('views', { express: server, autoescape: true, noCache: true });

server.use(express.static('public'));
server.set('view engine', 'njk');

server.get('/', (req, res) => {
  return res.render('index');
})

server.get('/about', (req, res) => {
  return res.render('about');
})

server.get('/recipes', (req, res) => {
  return res.render('recipes');
})

server.listen(3000, () => console.log('Server started and listening on port 3000.'));
