require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./Models')

db.sequelize.sync()

.then(() => {
    console.log('Base de données connecté');
})
.catch((err) => {
    console.log(err);
})


const port = process.env.PORT || 8081

app.listen(port, (err) => {
    if(!err){
        console.log(`the server is raning in the port ${port}`);
    }else{
        console.log(err);
    }
})
