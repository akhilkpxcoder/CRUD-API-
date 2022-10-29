const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
//const Token = require('../middleware/authToken.js');


const login = async (req, res, next) => {

    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        console.info('Incorrect email or password.');
        return res.status(400).send('Incorrect email or password.');
    }

    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        console.info('Incorrect email or password.');
        return res.status(400).send('Incorrect email or password.');
    }
    const token = jwt.sign({ username: user.username }, 'PrivateKey');
    res.status(200).json({
        User:user,
        token:token
    });
};
module.exports = {
    login
  };