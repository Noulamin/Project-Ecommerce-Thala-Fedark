const express = require('express')
const router = express.Router();
const  {postAvis}  = require('../Controller/AvisController');

router.post('/client/:produitIdProduit',postAvis);


module.exports = router;