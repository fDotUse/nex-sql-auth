const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const isDev = process.env.NODE_ENV === 'dev'
const router = require('./app/routes/apiRouter')

let app = express()
if (isDev) app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(cookieParser())

// API router
app.use('/', router)

app.get('*', (req, res, next) => {
  res.status(200).send({ message: 'no endpoints here!' })
})

const port = process.env.PORT || 5001
app.listen(port)
console.log(`ˁᵒ͡ˑ̉ᵒˀ Listening at port... ${port}`)
