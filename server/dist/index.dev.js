"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());

var posts = require('./routes/api/posts');

var _require = require('./routes/api/posts'),
    post = _require.post;

app.use('/api/posts', posts);
app.use('/api/', posts);
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("Server started on port ".concat(port));
});