import express, { Request, Response } from 'express'
import { Product } from '../models/Product'

const router = express.Router()

router.get('/get-products', async (req: Request, res: Response) => {
  const products = await Product.find({})
  return res.status(200).send(products)
})

router.post('/add-product', async (req: Request, res: Response) => {
  const { title, sellPrice, price, image, cType, stockQty } = req.body;
  const product = Product.build({   title, sellPrice, price, image, cType, stockQty })
  await product.save()
  return res.status(201).send(product)
})

export { router as ProductRouter }
