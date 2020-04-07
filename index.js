//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

//let names = ["Noether", "Mozart", "Franklin", "Hypatia", "Goodall", "Cannon", "Chopin", "Hamilton", "Germain", "Keller", "Nikolayeva", "Schweitzer", "Herschel", "Buber", "Cori", "Parks", "Witten", "Rubinstein", "Newton", "Ada", "Liszt", "Evans", "Woolf", "Curie", "Bassi", "Somerville", "Schumann", "Comnena", "Prokofjev", "Cleopatra", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Bach", "Beethoven", "Brahms"];

/*let pics = ["images/", "images/", "images/", "images/"];
let descriptions = [];*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

let posts = [];

app.get('/', (req, res) => {
  res.render('index');
}); 

app.get('/profile', (req, res) => {
  res.render('profile', {posts: posts});
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.post('/compose', (req, res) => {
  console.log(req.body.profileTitle);
  const post = {
    personName: req.body.profileTitle,
    description: req.body.descriptionBody
  };
  posts.push(post);
  res.redirect('/profile');
});

app.listen(3001, () => {
    console.log('Server listening');
});



 



