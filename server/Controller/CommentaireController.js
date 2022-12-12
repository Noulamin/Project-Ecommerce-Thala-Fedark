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
        console.log(idprod);
        const userId = req.params.userIdUser
        console.log(userId);

        const comment = {
            commentaire : req.body.commentaire,
            produitIdProduit : idprod,
            userIdUser : userId
        }
        try {
            await comments.create(comment)
            return res.json({message: 'comment created successfully , thank you !'})
            .status(200)
            console.log('inserted');
        } catch (error) {
            res.send(error)
            .status(400)
            console.log('not inserted');
            console.log(error);
        }
  })