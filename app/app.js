import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import router from './routes/apiRouter'

const isDev = process.env.NODE_ENV === 'dev'

const app = express()
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
