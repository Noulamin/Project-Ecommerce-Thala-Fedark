const express = require('express')
const router = express.Router();
const { postCommentaire } = require('../Controller/CommentaireController');

router.post('/client/:produitIdProduit/:userIdUser',postCommentaire);


module.exports = router;