const keys = require("../config/keys");
const Mailer = require("../services/Mailer");
const checkoutTemplate = require("../services/emailTemplates/checkoutTemplate");

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "Hill View Arena Fees",
      source: req.body.id,
      subject,
      recipient
    });
    //After the charge is created, and charged, send off email
    const mailer = new Mailer(charge, checkoutTemplate(charge));
  });
};
