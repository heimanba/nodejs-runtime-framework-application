const express = require('express')
const app = express()

app.get('/express', (req, res) => {
  res.send('Hello Express!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(3000);
module.exports = app;
