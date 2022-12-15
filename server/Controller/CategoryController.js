const db = require("../Models");
const categories = db.CategorieModel ;


exports.getAllCategories = async (req, res) => {
  try {
    const data = await categories.findAll({});
    res.send(data).status(200)
    } 
    catch (error) 
    {
        console.log(error);
        res.json({message: "0 catégories founded"})
        .status(400)
    }};
// create categorie :

exports.createCategory = (req, res) => {
  const categorie = req.body.categorie;
  console.log(categorie)
  if (!categorie) {
    res.status(400).send({
      success: false,
      message: "empty categorie",
    });
    return;
  }
  categories
    .create({
      categorie: categorie,
    })
    .then((data) => {
      res.send({
        success: true,
        message: "category created successfully",
        data: data,
      });
    })
    .catch((err) => console.log(err));
};
//delete categorie:

exports.deleteCategory = async (req, res) => {
  let   id_categorie = req.params.id_categorie;
  const  data= await categories.destroy({
    where: {
        id_categorie:id_categorie,
    },
  });
  console.log(data);

  res.send({
    success: true,
    message: "Category deleted successfully",
    data: data,
  });
};
// update categorie:

exports.updateCategory = async (req, res) => {
  const categorie = req.body.categorie;
  const   id_categorie = req.params.id_categorie;
  if (!categorie) {
    res.status(400).send({
      success: false,
      message: "empty category name",
    });
    return;
  }

  const data = await categories.update(
    {
        categorie:categorie,
    },
    {
      where: {
          id_categorie:id_categorie,
      },
    }
  );

  res.send({
    success: true,
    message: "Category updated successfully",
      data: data,
  });
};



exports.getCategoryById = async (req, res) => {
  const {   id_categorie } = req.params;
  const data = await categories.findOne({
    where: {
        id_categorie:id_categorie,
    },
  });
  return data;
};









