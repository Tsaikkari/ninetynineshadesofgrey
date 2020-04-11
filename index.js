//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/ninetynineshadesofgrey', {useNewUrlParser: true, useUnifiedTypology: true});

const personSchema = {
  name: String,
  description: String
};

const Person = mongoose.model('Person', personSchema);

let posts = [];

app.get('/', (req, res) => {
  res.render('index');
}); 

app.get('/profiles', (req, res) => {
  res.render('profiles', {posts: posts});
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.post('/compose', (req, res) => {
  const post = {
    title: req.body.profileTitle,
    content: req.body.postBody,
  };
  posts.push(post);
  res.redirect('/profiles');
});

app.get('/posts/:profileTitle', (req, res) => {
  const requestedTitle = _.lowerCase(req.params.profileTitle);
  posts.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title);
    if (storedTitle === requestedTitle) {
      res.render('profile', {
        title: post.title,
        content: post.content,
      });
    }
  });
});

app.listen(3000, () => {
    console.log('Server listening');
});



 



