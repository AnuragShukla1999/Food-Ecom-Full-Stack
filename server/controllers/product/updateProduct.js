import Product from "../../models/productModel.js";


export const updateProduct = async (req, res) => {
    console.log(req.body);
    try {
        const data = await Product.updateOne(
            { _id : Object(req.body._id) },
            { $set: req.body },
            { upsert: false }
        )
        res.send(data);
    } catch (error) {
        res.send({ message: error })
    }
}