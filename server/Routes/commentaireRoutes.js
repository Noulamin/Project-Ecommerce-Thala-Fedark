const express = require('express')
const router = express.Router();
const  {postCommentaire , getComments} = require('../Controller/CommentaireController');

router.post('/client/:produitIdProduit/:userIdUser',postCommentaire);
router.get('/allcomments/:produitIdProduit',getComments)

module.exports = router;