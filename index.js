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
        for (let i = 0; i < persons.lenght; i++) {
            res.render('profile', {persons:persons[i].name}, {persons:persons[i].image}, {persons:persons[i].description});
        };
    });
});*/

app.listen(3001, () => {
    console.log('Server listening');
});



 



