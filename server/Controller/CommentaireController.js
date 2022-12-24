const comments = require('../Models/index').CommentModel;
const asyncHandler = require('express-async-handler')

// function POST  commentaire selon l'id du produit : (default en cours)
/**
 * methode => POST
 * @Route => api/client/comment/idProduit/iduser
 * access => private
 */
       exports.postCommentaire  = asyncHandler(async (req,res) => {
        if(!req.body){
            res.json({message: "please add all fields"})
        }
        const idprod = req.params.produitIdProduit
        const userId = req.params.userIdUser
        const comment = {
            commentaire : req.body.commentaire,
            produitIdProduit : idprod,
            userIdUser : userId
        }
        try {
            await comments.create(comment)
            return res.json({message: 'comment created successfully , thank you !'})
            .status(200)
        } catch (error) {
            res.send(error)
            .status(400)
            console.log('not inserted');
            console.log(error);
        }
  })

  /**
 * methode => GET
 * @Route => commentaire/allcomments/:produitIdProduit
 * access => private
 */

  exports.getComments = asyncHandler(async(req,res) => {
    const produitIdProduit = req.params.produitIdProduit;
    try {
         data = await comments.findAll({
            where : {
                produitIdProduit : produitIdProduit
            }
         })
         res.json(data)
            .status(200)
    } catch (error) {
        res.status(400)
    }
  })