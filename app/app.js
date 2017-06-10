import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import router from './routes/apiRouter'
import db from './db/models'

const isDev = process.env.NODE_ENV === 'dev'

const app = express()
if (isDev) app.use(logger('dev'))

app.use(bodyParser.json())
app.use(cookieParser())

// API router
app.use('/', router)

app.get('*', (req, res, next) => {
  res.status(200).send({ message: 'no endpoints here!' })
})

const port = parseInt(process.env.PORT, 10) || 5001
app.listen(port)
console.log(`ˁᵒ͡ˑ̉ᵒˀ Listening at port... ${port}`)
db.connection()
