const db = require('../Models');
const asyncHandler = require('express-async-handler')

const CodePromosModel = db.CodePromosModel;

// Get
const GetAllCodePromos = asyncHandler(async (req, res) => {
    const result = await CodePromosModel.findAll({});
    if (result) {
        res.send(result).status(200).send("Sending date.")
    } else {
        res.status(404).send("Something is wrong.")
    }
})

// Add
const AddPromoCode = asyncHandler(async (req, res) => {
    const { code_promo, pourcentage_promo, date_expiration } = req.body;
    if (!code_promo || !pourcentage_promo || !date_expiration) {
        res.status(400).send('Please fill all fields.')
    }

    const data = {
        code_promo: code_promo,
        pourcentage_promo: pourcentage_promo,
        date_expiration: date_expiration,
    }

    console.log(data)

    const result = await CodePromosModel.create(data)
    if (result) {
        res.status(200).send("Created successfully.")
    } else {
        res.status(404).send("Something is wrong.")
    }

})

// Update
const UpdatePromoCode = asyncHandler(async (req, res) => {
    const { code_promo, pourcentage_promo, date_expiration } = req.body;
    if (!code_promo || !pourcentage_promo || !date_expiration) {
        res.status(400).send('Please fill all fields.')
    }

    id_promos = req.params.id

    const result = await CodePromosModel.update(
        {
            code_promo: code_promo,
            pourcentage_promo: pourcentage_promo,
            date_expiration: date_expiration,
        },
        {
            where: { id_promos: id_promos },
        }
    );

    if (result) {
        res.status(200).send("Updated successfully.")
    } else {
        res.status(404).send("Something is wrong.")
    }
})

// Delete
const DeletePromoCode = asyncHandler(async (req, res) => {

    id_promos = req.params.id

    const result = await CodePromosModel.destroy({
        where: { id_promos: id_promos },
    });

    if (result) {
        res.status(200).send("Deleted successfully.")
    } else {
        res.status(404).send("Something is wrong.")
    }
})

module.exports = { AddPromoCode, UpdatePromoCode, DeletePromoCode, GetAllCodePromos }