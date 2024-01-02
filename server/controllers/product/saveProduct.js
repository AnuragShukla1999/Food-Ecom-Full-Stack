import Product from "../../models/productModel.js";


export const saveProduct = async (req, res) => {
    console.log(req.body);
    try {
        const data = await Product(req.body);
        const save = await data.save();
        res.send(data);
    } catch (error) {
        res.send({ message: err })
    }
};