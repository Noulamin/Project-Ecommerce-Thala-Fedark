const dbConfig =  {
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    db : process.env.DB,
    dialect : process.env.DIALECT
}

module.exports = dbConfig