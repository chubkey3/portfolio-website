require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.port;

if (!process.env.port) {
  throw "Create a .env file with a PORT listed to run server"
}

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})