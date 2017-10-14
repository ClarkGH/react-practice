'use strict';

const express = require('express'),
  app = express(),
  fs = require('fs'),
  manifest = require('./manifest.json');

app.get('/manifest', (req, res) => {
  res.send(manifest);
});

module.exports = app;
