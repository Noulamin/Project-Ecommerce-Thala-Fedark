const express = require("express");
const router = express.Router();
const { getAll,createProduct,deleteProduct,updateProduct , getProductsByCategorie, searchProduit} = require("../Controller/ProductController");


router.post("/add", createProduct);
router.delete("/delete/:id_produit", deleteProduct);
router.put("/edit/:id_produit", updateProduct);
router.get('/product/:id',getProductsByCategorie)

// router.get('/search/:key', searchProduit)






module.exports = router;