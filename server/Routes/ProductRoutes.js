const express = require("express");
const router = express.Router();
const { getAllProduct,createProduct,deleteProduct,updateProduct , getProductsByCategorie} = require("../Controller/ProductController");
const {upload} = require('../Middelware/ImageMiddleware')

router.get("/getAllProduct",getAllProduct);
router.post("/add",upload,createProduct);
router.delete("/delete/:id_produit", deleteProduct);
router.put("/edit/:id_produit", updateProduct);
router.get('/product/:id',getProductsByCategorie)

// router.get('/search/:key', searchProduit)






module.exports = router;