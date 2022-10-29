const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Student = require("../models/user-model");
//const Token = require('../middleware/authToken.js');
const logger = require("../../logger");

const login = async (req, res) => {

    let student = await Student.findOne({ email: req.body.email });
    if (!student) {
        logger.info('Incorrect email or password.');
        return res.status(400).send('Incorrect email or password.');
    }

    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password, student.password);
    if (!validPassword) {
        logger.info('Incorrect email or password.');
        return res.status(400).send('Incorrect email or password.');
    }
    const token = jwt.sign({ _id: student._id }, 'PrivateKey');
    res.json({
        Student:student,
        token:token
    });
};
module.exports = {
    login
  };