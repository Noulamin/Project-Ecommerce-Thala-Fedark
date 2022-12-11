const avis = require('../Models/index').AvisModel;
const asyncHandler = require('express-async-handler')

// function POST  commentaire selon l'id du produit : (default en cours)
/**
 * methode => POST
 * @Route => api/client/avis
 * access => private
 */
       exports.postAvis  = asyncHandler(async (req,res) => {
        if(!req.body){
            res.json({message: "please add all fields"})
        }
        const idprod = req.params.produitIdProduit
        console.log(idprod);
        const idAvis = req.params.id_avis
        console.log(idAvis);
 
        const avi = {
            id_avis: idAvis,
            avis : req.body.avis,
            produitIdProduit : idprod,
        }
        try {
            await avis.create(avi)
            return res.json({message: 'Avis created successfully , thank you !'})
            .status(200)
            console.log('inserted');
        } catch (error) {
            res.send(error)
            .status(400)
            console.log('not inserted');
            console.log(error);
        }
  })