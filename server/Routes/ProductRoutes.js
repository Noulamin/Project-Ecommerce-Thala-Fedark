const express = require("express");
const router = express.Router();
const { getAll,createProduct,deleteProduct,updateProduct} = require("../Controller/ProductController");


router.post("/add",createProduct );
router.delete("/delete/:id_produit",deleteProduct);
router.put("/edit/:id_produit",updateProduct);






module.exports = router;