import express, { Request, Response } from 'express'
import {CartedItem} from "../models/CartedItem";

const router = express.Router()

router.get('/get-cartedItems', async (req: Request, res: Response) => {
    const cartedItems = await CartedItem .find({})
    return res.status(200).send(cartedItems)
})

router.post('/add-to-cart', async (req: Request, res: Response) => {
    const { productTitle, cQty } = req.body;
    const cartedItem = CartedItem .build({   productTitle, cQty})
    await cartedItem.save()
    return res.status(201).send(cartedItem)
})

export { router as CartedItemRouter }
