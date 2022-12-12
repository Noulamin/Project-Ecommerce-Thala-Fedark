const express = require('express')
const router = express.Router();
const  {postAvis}  = require('../Controller/AvisController');

router.post('/client/:id_avis/:produitIdProduit',postAvis);


module.exports = router;