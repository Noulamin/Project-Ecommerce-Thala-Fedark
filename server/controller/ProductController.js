const db = require("../Models/ProduitModel");
const Product = db.ProduitModel;

exports.getAll = async (req, res) => {
    const Products = await Product.findAll({});
    return Products;
  };
  
  exports.getAllProductToRender = async (req, res) => {
    const data = await Product.findAll({});
    res.render("index", {
      Products: data,
    });
  };
  
exports.createProduct = async (req, res) => {
    const image = req?.files?.image;
  
    if (!image) {
      res.send({
        success: false,
        message: "No file uploaded",
      });
      return;
    }
    const rootPath = process.cwd();
    image.mv(`${rootPath}/public/images/${image}`);
  
    const data = await Product.create({
      title: req.body.title,
     description: req.body.description,
      image: image,
      prix:prix,
      stock:stock,
      promotion:promotion,
      categoryId: req.body.categoryId,
    });
  
    res.send({
      success: true,
      message: "Production created successfully",
      data: data,
    });
  };