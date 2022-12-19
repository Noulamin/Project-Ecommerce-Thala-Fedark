const express = require('express')
const router = express.Router()
const {getAllCategories,createCategory,deleteCategory,updateCategory} = require("../Controller/CategoryController");



router.get("/getAllCategorie",getAllCategories);
router.post("/add",createCategory );
router.delete("/delete/:id_categorie",deleteCategory);
router.put("/edit/:id_categorie",updateCategory);





module.exports = router