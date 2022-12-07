const db = require('../Models')
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const asyncHandler = require('express-async-handler')
const sendEmail = require('../Utils/sendEmail');
const { where } = require('sequelize');
// const genToken = require('../Utils/generateToken');
// const cookie = require('cookie-parser')


const UserModel = db.UserModel;


/**
 * methode => post
 * url => api/auth/login
 * access => public
 */
const login = (req, res) => {
    res.status(200).send('this login page')
}


/**
 * methode => post
 * url => api/auth/register
 * access => public
 */
 const register = asyncHandler( async (req, res) => {
    const { first_Name, last_Name, email, password, password2, phone_number, city, adress } = req.body

    if (!first_Name || !last_Name || !email || !password || !password2 || !phone_number || !city || !adress) {
        res.status(400).send('please add all fields')
    } else if (password != password2) {
        res.status(400)
        throw new Error('password not match')
    }

    const emailExist = await UserModel.findOne({ where: { email } })
    
    // if (emailExist) {
    //     res.status(400)
    //     throw new Error('Opps!! Email has been already taken')
    // }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await await bcrypt.hash(password, salt);


    const data = {
        first_Name,
        last_Name,
        email,
        password: hashPassword,
        password2: password,
        phone_number,
        city,
        adress,
        ValidateToken: crypto.randomBytes(64).toString('hex'),
    }

    const user = await UserModel.create(data)
    
    const url = `<h2 >Please click Her For validate Your Email <a href="http://localhost:8080/api/auth/verifierEmail/${data.ValidateToken}">validation</a></h2>`
    const subject = 'Email Validation'
    sendEmail(data.email, data.ValidateToken, subject, url)

    if (user) {
        // res.status(201).send('user created successufly')
        res.status(201).json({ user })
    } else {
        throw new Error('samthing is wrong')
    }
})


/**
 * methode => post
 * url => api/auth/forgetPassword
 * access => public
 */
 const forgetPassword = (req, res) => {
    res.status(200).send('this forgetPassword page')
}


/**
 * methode => post
 * url => api/auth/resetPassword
 * access => public
 */
 const resetPassword = (req, res) => {
    res.status(200).send('this resetPassword page')
}


/**
 * methode => get
 * url => api/auth/verifierEmail/:token
 * access => public
 */

const verifierEmail = asyncHandler( async (req, res) => {
    const token = req.params.token
    const user = await UserModel.findOne({ where: { ValidateToken: token } })

    if (user) {
        user.isVerified = true
        user.ValidateToken = null
        await user.save()
        res.status(201).send('Validation Saccssefuly')
    }else {
        throw new Error('somthing is wrong')
    }
})


module.exports = {login, register, forgetPassword, resetPassword, verifierEmail} 