#!/usr/bin/env node

/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs');

var app = express();

app.configure(function(){
  app.set('port', 8080);
  app.set('views', __dirname + '/app/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

/**
 * ROUTES
 */

var main = require('./app/routes/main');
var songs = require('./app/routes/songs');
app.get('/'        , main.index);
app.get('/songs'   , songs.index);

var music = require('./app/routes/music');
app.get('/Music/*' , music.stream);

/**
 * HTTP SERVER
 */

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});

