//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let names = ["Noether", "Mozart", "Franklin", "Hypatia", "Goodall", "Cannon", "Chopin", "Hamilton", "Germain", "Keller", "Nikolayeva", "Schweitzer", "Herschel", "Buber", "Cori", "Parks", "Witten", "Rubinstein", "Newton", "Ada", "Liszt", "Evans", "Woolf", "Curie", "Bassi", "Somerville", "Schumann", "Comnena", "Prokofjev", "Cleopatra", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Bach", "Beethoven", "Brahms"];

/*let pics = ["images/", "images/", "images/", "images/"];
let descriptions = [];*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
}); 

app.get('/profile', (req, res) => {
    res.render('profile', {personNames: names});
});

app.listen(3000, () => {
    console.log('Server listening');
});



 



