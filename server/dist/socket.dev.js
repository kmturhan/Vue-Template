"use strict";

var app = require("express")();

var http = require("http").Server(app);

var io = require("socket.io")(http);

http.listen(process.env, function () {
  console.log();
});