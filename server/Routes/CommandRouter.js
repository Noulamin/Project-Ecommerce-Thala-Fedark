const express = require('express')
const router = express.Router()

const { getAllCommand, getCommandLivre, updateStatus } = require('../Controller/CommandeController');

router.get('/commands', getAllCommand);
router.patch('/command/update/:id', updateStatus)

module.exports = router;