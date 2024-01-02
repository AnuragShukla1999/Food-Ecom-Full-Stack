import Product from "../../models/productModel.js";


export const deleteProduct = async (req, res) => {
    console.log(req.body);
    try {
        const data = await Product.deleteOne({ _id: isObjectIdOrHexString(req.body._id) });
        res.send(data);
    } catch (error) {
        res.send(err)
    }
}