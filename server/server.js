require('dotenv').config();
const express = require('express');
const db = require('./Models')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



db.sequelize.sync()

.then(() => {
    console.log('Base de données connecté');
})
.catch((err) => {
    console.log(err); 
})

const commandRouter = require('./Routes/CommandRouter.js')
const authRouter = require('./Routes/AuthRoutes')

app.use('/api/auth', authRouter)
app.use('/api/admin', commandRouter)



const port = process.env.PORT || 3001

app.listen(port, (err) => {
    if(!err){
        console.log(`the server is raning in the port ${port}`);
    }else{
        console.log(err);
    }
})


