const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody IBM Cloud Pack!");
});
 
module.exports.app = app;
