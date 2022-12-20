const db = require("../Models");
// const Categorie = require("../Models/index").CategorieModel
const Product = db.ProduitModel;
const asyncHandler = require('express-async-handler')
const sequelize = require('sequelize')
const Op = sequelize.Op

exports.getAllProduct = async (req, res) => {
  const size = 8
  try {
  const data = await Product.findAll({});
  res.send(data).status(200)
} 
catch (error) 
{
    console.log(error);
    res.json({message: "product is not founded"})
    .status(400)
}
};

exports.getAllProductToRender = async (req, res) => {
  const data = await Product.findAll({});
  res.render("", {
    Products: data,
  });
};


//creat product :

exports.createProduct = async (req, res) => {

  const image_produit = [];
  req.files.forEach((filePath) => {
  const path = filePath.path.split("\\")
  const imgPath = "/" + path[1] + "/" + path[2];
  image_produit.push(imgPath);
  });
  console.log("hhhhhhhhhhhhhhh"+ image_produit)
  try {
    const data = await Product.create({
      title_produit: req.body.title_produit,
      image_produit: image_produit,
      description_produit: req.body.description_produit,
      prix_produit: req.body.prix_produit,
      stock_produit: req.body.stock_produit,
      pourcentage_produit: req.body.pourcentage_produit,
      categorie : req.body.categoryIdCategorie
    });
    console.log(data);
    res.send({
      success: true,
      message: "Production created successfully",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }

};

/// delete product:
try {
  exports.deleteProduct = async (req, res) => {
    const id_produit = req.params.id_produit;
    const data = await Product.destroy({
      where: {
        id_produit: id_produit,
      },
    });
    res.send({
      success: true,
      message: "product deleted successfully",
      data: data,
    });
  };



} catch (error) {
  console.log(err);
}



//update product:

exports.updateProduct = async (req, res) => {
  const id_produit = req.params.id_produit;
  const data = await Product.update(
    {
      title_produit: req.body.title_produit,
      description_produit: req.body.description_produit,
      image_produit: req.body.image_produit,
      prix_produit: req.body.prix_produit,
      stock_produit: req.body.stock_produit,
      pourcentage_produit: req.body.pourcentage_produit,
    },
    {
      where: {
        id_produit: id_produit,
      },
    }
  );

  res.send({
    success: true,
    message: "Product updated successfully",
    data: data,
  });
};


// function get  commentaire selon l'id du produit : (default en cours)
/**
 * methode => GET 
 * @Route => /Product/product/:id_categorie
 * access => private
 */
exports.getProductsByCategorie = async (req,res) => {  
    try {
      const idCategorie = req.params
      console.log(idCategorie);
      const data = await Product.findAll({
        where: {
          categoryIdCategorie : idCategorie.id
        } 
      })
      console.log(data);
      res
      .json(data)
      .status(200)
      
    } catch (error) {
      console.log(error.message);
      res
      .json({message: "this categorie is not found"})
      .status(400)

    }
  } 


  /**
* methode => GET 
* @Route => /Product/search
* access => public
*/

exports.searchProduit = asyncHandler(async (req, res) => {
  let search = req.body.searchkeyword
  const searchvar = search ? { title_produit: { [Op.like]: `%${search}%` } } : null

  const page = req.query.page || 0
  const size = req.query.size || 10
  const orderby = req.query.orderby || "createdAt";
  const value = req.query.value || "DESC";
  try {
    const option = await Product.findAll({
      raw: true,
      nest: true,
      limit: size,
      offset: page * size,
      order: [[orderby, value]],
      where: searchvar
    })
    res.send(option)
  } catch (err) {
    console.log(err);
  }

})
 
