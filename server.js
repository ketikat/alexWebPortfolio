
'use strict'
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const chalk = require('chalk')
const app = express()


const PORT = 1234

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, 'public')))
// this shit was key! line below, line above wasn't so much.
app.use(express.static(path.join(__dirname)))


// Send index.html for any other requests
app.use('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(chalk.magenta(`listening at http://localhost:${PORT}`))
})

module.exports = app
