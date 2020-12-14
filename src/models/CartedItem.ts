import mongoose from 'mongoose'

interface ICartedItem {
    productTitle: string;
    cQty: number;
}

interface productModelInterface extends mongoose.Model<ICartedItemDoc> {
    build(attr: ICartedItem): ICartedItemDoc
}

interface ICartedItemDoc extends mongoose.Document {
    title: string;
    sellPrice: number;
    price: number | null;
    image: string;
    cType: string;
    stockQty: number;
}

const CartedItemSchema = new mongoose.Schema({
    productTitle: {
        type: String,
        required: true
    },

    cQty: {
        type: Number,
        required: true
    },

})

CartedItemSchema.statics.build = (attr: ICartedItem) => {
    return new CartedItem(attr)
}

const CartedItem  = mongoose.model<ICartedItemDoc, productModelInterface>('CartedItem', CartedItemSchema)

export { CartedItem }




