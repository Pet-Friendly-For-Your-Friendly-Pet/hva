const keys = require("../config/keys");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ hi: " : ) " });
  });
};
