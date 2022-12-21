const express = require("express");
const router = express.Router();
const { getProductById, getAllProduct,createProduct,deleteProduct,updateProduct , getProductsByCategorie, searchProduit} = require("../Controller/ProductController");
const {upload} = require('../Middelware/ImageMiddleware')

router.get("/getAllProduct",getAllProduct);
router.post("/add",upload,createProduct);
router.delete("/delete/:id_produit", deleteProduct);
router.put("/edit/:id_produit", updateProduct);
router.get('/product/:id',getProductsByCategorie)
router.get('/product/details/:id' ,getProductById)

router.get('/search', searchProduit)






module.exports = router;