const router = require('express').Router()

const {login, register, forgetPassword, resetPassword} = require('../Controller/AuthController')


router.post('/login',login)
router.post('/register',register)
router.post('/forgetPassword',forgetPassword)
router.post('/resetPassword',resetPassword)

module.exports = router
