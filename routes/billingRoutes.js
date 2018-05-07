const keys = require("../config/keys");

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "Hill View Arena Fees",
      source: req.body.id
    });
  });
};
