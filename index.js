//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
//const Person = require('./person');

const app = express();
//const noether = new Person("Noether", "", "");

let persons = [
    {
        name: "Noether",
        image_url: "",
        description: ""
    },
    {
        name: "Mozart",
        image_url: "",
        description: ""
    },
    {
        name: "",
        image_url: "",
        description: ""
    },
    {
        name: "",
        image_url: "",
        description: ""
    },
];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
    //res.sendFile(__dirname + '/index.html');
}); 

/*app.get('/profile', (req, res) => {
    res.render('profile');
});*/

app.listen(3001, () => {
    console.log('Server listening');
});



 



