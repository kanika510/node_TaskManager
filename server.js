const express = require('express')

const { db } = require('./db')
const todoRoute = require('./route/todo')

const SERVER_PORT =process.env.PORT || 1410
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use('/todos', todoRoute)

db.sync()
  .then(() => {
    app.listen(SERVER_PORT)
  })
  .catch((err) => {
    console.error(err)
  })