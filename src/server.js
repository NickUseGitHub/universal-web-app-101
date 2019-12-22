const express = require('express')

const port = 3000
const app = express()

app.get('/', function simpleController(req, res) {
  res.header('Content-Type', 'text/html; charset=UTF-8')
  res.send(`
  <html>
    <head>
      <title>This is an Universal Webapp</title>
    </head>
    <body>
      <div id="root">
        Hello world. This is Universal webapp
      </div>
    </body>
  </html>
  `);
})

app.listen(port, function(err) {
  if (err) {
    console.error(err)
    return
  }

  console.log(`> Ready on port: ${port}`)
})