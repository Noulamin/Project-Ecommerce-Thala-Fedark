const db = require("../Models");
// const Categorie = db.CategorieModel
const Product = db.ProduitModel;

// const asyncHandler = require('express-async-handler')
// const sequelize = require('sequelize')
// const Op = sequelize.Op

exports.getAll = async (req, res) => {
  const Products = await Product.findAll({});
  return Products;
};

exports.getAllProductToRender = async (req, res) => {
  const data = await Product.findAll({});
  res.render("", {
    Products: data,
  });
};
//creat product :

exports.createProduct = async (req, res) => {

  try {
    const data = await Product.create({
      title_produit: req.body.title_produit,
      description_produit: req.body.description_produit,
      image_produit: req.body.image_produit,
      prix_produit: req.body.prix_produit,
      stock_produit: req.body.stock_produit,
      pourcentage_produit: req.body.pourcentage_produit,
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


// function POST  commentaire selon l'id du produit : (default en cours)
/**
 * methode => POST
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
      .send(data)
      .status(200)
      
    } catch (error) {
      console.log(error.message);
      res
      .json({message: "this categorie is not found"})
      .status(400)

    }
  } 



  // exports.searchProduit = asyncHandler(async (req, res) => {
  //   console.log(req.params.key);
  //   res.send('search done')
  //   // let {search} = req.query
  //   // search = search.toLowerCase()
  //   // // let categories = await Categorie.findAll({
  //   // //   raw: true,
  //   // //   nest: true
  //   // // })
  //   // await Product.findAll({
  //   //   where : {  title_produit : { [Op.like]: `%${search}%` }},
  //   //   raw: true,
  //   //   nest: true
  //   // }).then(produits => {
  //   //   res.render('index', {
  //   //     produits, layout: 'main',
  //   //     page: `Results for ${keyword}`
  //   //   })
  //   // }).catch(err => res.send(err))
  // })
 