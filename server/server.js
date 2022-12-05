require('dotenv').config();
const express = require('express')
const app = express();
const port =  process.env.PORT || 5252;
const db = require('./models/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=> {
    res.send('Hello Wolrd!');
});

app.listen(port, () => {
    console.log(`this app is running under PORT : ${port}`);
})

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((error => console.error('Unable to connect to the database:', error)))