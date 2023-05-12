const express = require('express')
var cors = require('cors')

const app = express()
const port = 8000

app.use(cors())

app.get('/api/health', (req, res) => {
  res.json({
    health: 'ok'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})