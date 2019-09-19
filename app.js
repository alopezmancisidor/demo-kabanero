const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody ana demo!");
});
 
module.exports.app = app;
