const express = require('express')

const port = 3000
const app = express()

app.get('/', function simpleController(req, res) {
  res.header('Content-Type', 'text/html; charset=UTF-8')
  res.send('Hello world');
})

app.listen(port, function(err) {
  if (err) {
    console.error(err)
    return
  }

  console.log(`> Ready on port: ${port}`)
})