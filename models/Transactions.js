const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionsSchema = new Schema({
  name: String,
  servicesRendered: String
});

mongoose.model("transactions", transactionsSchema);
