//jshint esversion:6
const express = require('express');
const Person = require('./person');

const app = express();

app.use(express.static('public'));

//app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}); 

/*app.get('/', (req, res) => {
    $('.greybutton').on('click', function() {
        res.render('profile', {persons:persons[0]}, {persons:persons[1]}, {persons:persons[2]});
    });
});*/

app.listen(3001, () => {
    console.log('Server listening');
});



 



