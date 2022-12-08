const express = require("express");
const router = express.Router();
const { getAll, createProduct} = require("../controller/ProductController");


router.post("/add",createProduct );





module.exports = router;