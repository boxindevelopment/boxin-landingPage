const express = require('express');
const path = require('path');
const port = process.env.port || 8080;
const app = express();

let root = path.join(__dirname, './dist')

app.use(express.static(root))
app.use(express.static(__dirname, + "public"))
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})
app.use(express.static('/'))
app.listen(port);
console.log('Server started')
