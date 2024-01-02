import Product from "../../models/productModel.js";


export const getProduct = async (req, res) => {
    console.log("get Product..");
    try {
        const data = await Product.find({});
        res.send(data);
    } catch (error) {
        res.send({ message: err })
    }
};