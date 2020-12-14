import express, { Request, Response } from 'express'
import { Product } from '../models/Product'

const router = express.Router()

router.get('/get-products', async (req: Request, res: Response) => {
  const product = await Product.find({})
  return res.status(200).send(product)
})

router.post('/add-product', async (req: Request, res: Response) => {
  const { title, sellPrice, price, image, cType, stockQty } = req.body;

  const todo = Product.build({   title, sellPrice, price, image, cType, stockQty })
  await todo.save()
  return res.status(201).send(todo)
})

export { router as ProductRouter }
