const router = require('express').Router()

const {AddPromoCode, UpdatePromoCode, DeletePromoCode} = require('../Controller/CodePromosController')


router.post('/AddPromoCode', AddPromoCode)
router.post('/UpdatePromoCode/:id', UpdatePromoCode)
router.post('/DeletePromoCode/:id', DeletePromoCode)

module.exports = router