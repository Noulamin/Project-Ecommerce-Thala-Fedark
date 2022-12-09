const express = require('express');
const router = express.Router();

const {getUserClient} = require ('../Controller/ProfileClient')
const protect = require('../Middelware/AuthMiddlware')
const checkRoleClient = require('../Middelware/checkRoleClient')


router.get('/client/me', protect, checkRoleClient)


module.exports = router; 