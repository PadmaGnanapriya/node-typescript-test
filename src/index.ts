import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { ProductRouter } from './routes/ProductRoute'

const app = express()
app.use(json())
app.use(ProductRouter)

mongoose.connect('mongodb://localhost:27017/cominglevel', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to database')
})

const port= 3500

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
