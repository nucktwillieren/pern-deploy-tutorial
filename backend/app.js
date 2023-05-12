const express = require('express')
var cors = require('cors')

const app = express()
const port = 8000

app.use(cors())

app.get('/', (req, res) => {
  res.json({
    healthy: 'ok'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})