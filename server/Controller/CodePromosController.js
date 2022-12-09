const db = require('../Models');
const asyncHandler = require('express-async-handler')

const CodePromosModel = db.CodePromosModel;

// Get
const GetAllCodePromos = asyncHandler(async (req, res) => {
    const data = await CodePromosModel.findAll({});
    res.send(data);
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
    const result = await CodePromosModel.Create(data)

    if (result) {
        res.status(201).json({user })
    }else {
        res.status(201).send("Something is wrong.")
    }

})

// Update
const UpdatePromoCode = asyncHandler(async (req, res) => {
    const { old_code_promo, new_code_promo, new_pourcentage_promo, new_date_expiration } = req.body;
    if (!old_code_promo || !new_code_promo || !new_pourcentage_promo || !new_date_expiration) {
        res.status(400).send('Please fill all fields.')
    }

    await CodePromosModel.update(
        {
            code_promo: new_code_promo,
            pourcentage_promo: new_pourcentage_promo,
            date_expiration: new_date_expiration,
        },
        {
            where: { code_promo: old_code_promo },
        }
    );
})

// Delete
const DeletePromoCode = asyncHandler(async (req, res) => {
    const { code_promo } = req.body;
    if (!code_promo) {
        res.status(400).send('Needs PromoCode to delete it.')
    }

    await CodePromosModel.destroy({
        where: { code_promo: code_promo },
    });
})

module.exports = { AddPromoCode, UpdatePromoCode, DeletePromoCode, GetAllCodePromos }