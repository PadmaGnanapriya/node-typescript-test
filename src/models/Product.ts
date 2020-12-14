import mongoose from 'mongoose'

interface IProduct {
  title: string;
  sellPrice: number;
  price: number | null;
  image: string;
  cType: string;
  stockQty: number;
}

interface productModelInterface extends mongoose.Model<ProductDoc> {
  build(attr: IProduct): ProductDoc
}

interface ProductDoc extends mongoose.Document {
  title: string;
  sellPrice: number;
  price: number | null;
  image: string;
  cType: string;
  stockQty: number;
}

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  sellPrice:  {
    type: Number,
    required: true
  },
  price:  {
    type: Number,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  cType: {
    type: String,
    required: true
  },
  stockQty: {
    type: Number,
    required: true
  },

})

productSchema.statics.build = (attr: IProduct) => {
  return new Product(attr)
}

const Product = mongoose.model<ProductDoc, productModelInterface>('Product', productSchema)

export { Product }




