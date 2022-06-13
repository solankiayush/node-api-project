const express = require('express');
const app = express();
const controller = require('../controller');

app.get('/', controller.sendDefaultResponse);
