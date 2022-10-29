const { mongoose, url } = require("../../config/mongoose");
const User = require("../models/user-model");
const bcrypt = require('bcrypt');

const userCreateController = async (req, res, next) => {
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password
  });
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  newUser.save().then(user => {
    res.status(200).json(user);
  });
};

const usersGetController = async (req, res, next) => {
  User.find({}).then(user => {
    res.status(200).json(user);
  });
};
const userGetByUsernameController = async (req, res, next) => {
  const username = req.params.username;
  User.findOne({ username }).then(user => {
    res.status(200).json(user);
  });
};
const userUpdateByUsernameController = async (req, res, next) => {
  const username = req.body.username;
  const mobile = req.body.mobile;

  User.updateOne({ username }, { $set: { mobile } }).then(result => {
    res.send('User Data Updated');
  });
};
const userDeleteByUsernameController = async (req, res, next) => {
  const username = req.params.username;
  User.deleteOne({ username }).then(user => {
    res.status(200).json({ Message: 'User Deleted' });
  });
};

module.exports = {
  userCreateController,
  usersGetController,
  userGetByUsernameController,
  userUpdateByUsernameController,
  userDeleteByUsernameController
};
