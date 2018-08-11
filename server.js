const express = require('express');
const bodyParser = require('body-parser');
const p = require('./routes/posts');
const comm = require('./routes/comments');

var app = express();
app.use(bodyParser.json());

app.get('/posts', (req,res) => p.getPosts(req,res));

app.post('/posts', (req,res) => p.addPost(req, res));

app.put('/posts/:postID', (req,res) => p.updatePost(req,res));

app.delete('/posts/:postID', (req,res) => p.removePost(req,res));

app.get('/posts/:postID/comments', (req,res) => comm.getComments(req,res));

app.post('/posts/:postID/comments', (req,res) => comm.addComment(req, res));

app.put('/posts/:postID/comments/:commentID', (req,res) => comm.updateComment(req,res));

app.delete('/posts/:postID/comments/:commentID', (req,res) => comm.removeComment(req,res));

app.listen(3000);