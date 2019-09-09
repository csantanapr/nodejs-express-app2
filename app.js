const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody hope this works OMG Demo");
});

module.exports.app = app;
