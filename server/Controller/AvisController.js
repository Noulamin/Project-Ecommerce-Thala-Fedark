const avis = require('../Models/index').AvisModel;
const asyncHandler = require('express-async-handler')

// function POST  commentaire selon l'id du produit : (default en cours)
/**
 * methode => POST
 * @Route => api/client/avis/:id_product
 * access => private
 */
       exports.postAvis  = asyncHandler(async (req,res) => {
        if(!req.body){
            res.json({message: "please add all fields"})
        }
        const avi = {
            avis : req.body.avis,
            produitIdProduit : req.params.produitIdProduit,
        }
        try {
            await avis.create(avi)
            return res.json({message: 'Avis created successfully , thank you !'})
            .status(200)
        } catch (error) {
            res.send(error)
            .status(400)
        }
  })