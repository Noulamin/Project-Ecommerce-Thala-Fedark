


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
 const register = (req, res) => {
    res.status(200).send('this register page')
}


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



module.exports = {login, register, forgetPassword, resetPassword} 