const router = require('express').Router()

const { AddPromoCode, UpdatePromoCode, DeletePromoCode, GetAllCodePromos } = require('../Controller/CodePromosController')


router.get('/', GetAllCodePromos)
router.post('/AddPromoCode', AddPromoCode)
router.post('/UpdatePromoCode/:id', UpdatePromoCode)
router.post('/DeletePromoCode/:id', DeletePromoCode)

module.exports = router