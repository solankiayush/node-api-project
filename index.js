const router = require('./routers/');
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;

// starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
