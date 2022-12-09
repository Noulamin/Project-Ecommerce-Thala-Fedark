const router = require('express').Router()

const { login, register, forgetPassword, resetPassword, verifierEmail } = require('../Controller/AuthController')


router.post('/login', login)
router.post('/register', register)
router.post('/forgetPassword', forgetPassword)
router.post('/resetPassword/:token', resetPassword)
router.get('/verifierEmail/:token', verifierEmail)

module.exports = router
