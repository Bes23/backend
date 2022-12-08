const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const questionsRoute = require('./routes/questions')

app.use(cors())

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err))

app.use(express.json())
app.use('/api', questionsRoute)

app.listen(5000, () => {
  console.log(`server is running`)
})
