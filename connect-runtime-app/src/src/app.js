const connect = require('connect')
const app = connect();

app.use((req, res, next) => {
  res.end('Hello World');
});

// app.listen(3000);
module.exports = app;
