const express = require('express')
const app = express()

app.get('/about', function (req, res) {
  console.log("here")
  res.send('pinki')
});


app.listen(2000)


