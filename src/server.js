const express = require('express')
const stringOutput = require('./app')

const port = 3000
const app = express()

app.use('/static/js/app.js', express.static(__dirname + '/app.js'))

app.get('/', function simpleController(req, res) {
  res.header('Content-Type', 'text/html; charset=UTF-8')
  res.send(`
  <html>
    <head>
      <title>This is an Universal Webapp</title>
    </head>
    <body>
      <div id="root">
        ${stringOutput}
      </div>
    </body>
    <script type="text/ecmascript" src="http://localhost:3000/static/js/app.js"></script>
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