#!/usr/bin/env node --harmony

var log = console.log.bind(console);

// Module dependencies
var render = require('./lib/render'),
  logger = require('koa-logger'),
  route = require('koa-route'),
  serve = require('koa-static'),
  parse = require('co-body'),
  koa = require('koa'),
  app = koa();

// "database"
var posts = [];

// middleware
app.use(logger());

// Show all posts
app.use(route.get('/', function *() {
  this.body = yield render('portfolio', { posts: posts });
}));

// Show all posts
app.use(route.get('/blog', function *() {
  this.body = yield render('list', { posts: posts });
}));

// Show new post form
app.use(route.get('/blog/new', function *() {
  this.body = yield render('new');
}));

// Show posts
app.use(route.get('/blog/:id', function *(id) {
  var post = posts[id];
  if (!post) this.throw(404, 'invalid post id');
  this.body = yield render('show', { post: post });
}));

// Add new post
app.use(route.post('/blog', function *() {
  var post = yield parse(this);
  var id = posts.push(post) - 1;
  post.created_at = new Date();
  post.id = id;
  this.redirect('/');
}));

app.use(serve(__dirname + '/public'));

app.listen(3000);
console.log('listening on port 3000');