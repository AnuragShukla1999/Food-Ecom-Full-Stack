import Product from "../../models/productModel.js";


export const searchProduct = async (req, res) => {
    console.log(req.query.q);
    const query = req.query.q;
    const regex = new Regex(query, "i", "g")

    const data =  await Product.find({ "$or": [
        {"title" : regex},
        {"category" : regex}
    ] })

    if(data.length){
        res.send({message : "Search Results", data,alert : "success"})
    }
    else{
        res.send({message : "No Search Results", data,alert : "success"})
    }
}