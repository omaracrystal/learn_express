var express = require('express'),
  app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // use res.render
  res.render('index', {name: "Elie"});
});
