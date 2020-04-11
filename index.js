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

mongoose.connect('mongodb://localhost:27017/ninetynineshadesofgrey', {useNewUrlParser: true, useUnifiedTopology: true});

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model('Post', postSchema);

app.get('/', (req, res) => {
  res.render('index');
}); 

app.get('/profiles', (req, res) => {
  Post.find({}, function(err, posts){
    res.render('profiles', {posts: posts});
  });
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.post('/compose', (req, res) => {
  const post = new Post({
    title: req.body.profileTitle,
    content: req.body.postBody
  });
  post.save(function(err) {
    if (!err) {
      res.redirect('/profiles');
    }
  });
});

app.get('/posts/:postId', (req, res) => {
  const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post) {
    res.render('profile', {
      title: post.title,
      content: post.content
    });
  });
});

app.listen(3000, () => {
    console.log('Server listening');
});



 



