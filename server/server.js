require('dotenv').config();
const express = require('express');
const db = require('./Models')
const app = express();
const ProductRoutes = require("./Routes/ProductRoutes");
const fileUpload = require("express-fileupload");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    fileUpload({
      createParentPath: true,
    })
  );



db.sequelize.sync()

.then(() => {
    console.log('Base de données connecté');
})
.catch((err) => {
    console.log(err); 
})
// //Product Route

const commandRouter = require('./Routes/CommandRouter.js')

app.use("/Product",ProductRoutes);


const authRouter = require('./Routes/AuthRoutes')
const CodePromoRouter = require('./Routes/CodePromosRoutes')

app.use('/api/auth', authRouter)

app.use('/api/admin', commandRouter)

app.use('/PromoCode/', CodePromoRouter)




const port = process.env.PORT || 3001

app.listen(port, (err) => {
    if(!err){
        console.log(`the server is raning in the port ${port}`);
    }else{
        console.log(err);
    }
})


