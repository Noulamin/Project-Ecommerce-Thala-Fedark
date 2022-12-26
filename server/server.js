require('dotenv').config();
const express = require('express');
const db = require('./Models')
const app = express();
const coockieparser = require('cookie-parser')
const bodyParser = require('body-parser')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(coockieparser())
const cors = require('cors');
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({ extended: false }))



const commentaireRouter = require('./Routes/commentaireRoutes')
const avisRouter = require('./Routes/AvisRoutes')


const clientRouter = require('./Routes/ClientRoutes')
const adminRouter = require('./Routes/AdminRoutes')
const authRouter = require('./Routes/AuthRoutes')
const ProductRoutes = require("./Routes/ProductRoutes");
const categorieRoutes = require('./Routes/CategoryRoutes')
const commandRouter = require('./Routes/CommandRouter.js')
const CodePromoRouter = require('./Routes/CodePromosRoutes')

app.use(express.static('public'))

app.use('/api/user', clientRouter)

app.use('/api/user', adminRouter)

app.use("/categorie", categorieRoutes)

app.use('/api/auth', authRouter)

app.use("/Product", ProductRoutes);

app.use('/api/admin', commandRouter)

app.use('/PromoCode', CodePromoRouter)

app.use('/commentaire' ,commentaireRouter)

app.use('/avis' ,avisRouter)


db.sequelize.sync()

    .then(() => {
        console.log('Base de données connecté');
    })
    .catch((err) => {
        console.log(err);
    })

    

const port = process.env.PORT || 8080

app.listen(port, (err) => {
    if (!err) {
        console.log(`the server is raning in the port ${port}`);
    } else {
        console.log(err);
    }
})


module.exports = app


