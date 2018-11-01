const express = require('express');
const packageInfo = require('./package.json');

const app = express();

app.get('/', ( req, res ) => {
  res.json({
     });
});

const server = app.listen( process.env.PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Web server started at http://%s:%s', host, port);
});