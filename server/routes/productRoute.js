import express from "express";
import { getProduct } from "../controllers/product/getProduct.js";
import { saveProduct } from "../controllers/product/saveProduct.js";
import { updateProduct } from "../controllers/product/updateProduct.js";
import { deleteProduct } from "../controllers/product/deleteProduct.js";
import { searchProduct } from "../controllers/product/searchProduct.js";

const routerProduct = express.Router();


routerProduct.get('/', getProduct);
routerProduct.post('/save', saveProduct);
routerProduct.put("/update", updateProduct);
routerProduct.delete('/delete', deleteProduct);
routerProduct.get('/search', searchProduct);

export default routerProduct;