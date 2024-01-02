import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    brand: String,
    image: Array,
    price: Number,
    sellPrice: Number,
    category: String,
});


const Product = mongoose.model("Product", productSchema);

export default Product;