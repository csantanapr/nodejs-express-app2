const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody hope this works OMG!");
});

module.exports.app = app;
