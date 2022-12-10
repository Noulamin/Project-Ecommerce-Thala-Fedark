require('dotenv').config();
const express = require('express');
const db = require('./Models')
const app = express();
const fileUpload = require("express-fileupload");
const coockieparser = require('cookie-parser')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    fileUpload({
        createParentPath: true,
    })
);

app.use(coockieparser())
const cors = require('cors');
app.use(cors({origin: true, credentials: true}));


db.sequelize.sync()

    .then(() => {
        console.log('Base de données connecté');
    })
    .catch((err) => {
        console.log(err);
    })


const clientRouter = require('./Routes/ClientRoutes')
const adminRouter = require('./Routes/AdminRoutes')
const authRouter = require('./Routes/AuthRoutes')
const ProductRoutes = require("./Routes/ProductRoutes");
const categorieRoutes = require('./Routes/CategoryRoutes')
const commandRouter = require('./Routes/CommandRouter.js')
const CodePromoRouter = require('./Routes/CodePromosRoutes')

app.use('/api/user', clientRouter)

app.use('/api/user', adminRouter)

app.use("/categorie", categorieRoutes)

app.use('/api/auth', authRouter)

app.use("/Product", ProductRoutes);

app.use('/api/admin', commandRouter)

app.use('/PromoCode', CodePromoRouter)




const port = process.env.PORT || 3001

app.listen(port, (err) => {
    if (!err) {
        console.log(`the server is raning in the port ${port}`);
    } else {
        console.log(err);
    }
})


