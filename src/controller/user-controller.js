const { mongoose, url } = require("../../config/mongoose");

const userCreateController = async (req, res, next) => {
  mongoose.connect(url, (err, db) => {
    if (err) throw err;
    db.collection("users")
      .insertOne(req.body)
      .then((result) => res.status(201).json({"result" :result}))
      .catch((error) => res.status(404).json({"result" :"error Occured"}));
  });
};

module.exports = {
  userCreateController,
};
