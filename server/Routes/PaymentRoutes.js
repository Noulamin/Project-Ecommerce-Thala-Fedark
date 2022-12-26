const express = require('express');
const router = express.Router();




router.post("/Payment/create-payment-intent", async (req, res) => {
    const { amount, currency, paymentMethodType } = req.body;
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method_types: [paymentMethodType],
      });
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router; 