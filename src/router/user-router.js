const express = require("express");
const auth = require('../middleware/auth');
const { userCreateController} = require("../controller/user-controller");

const router = express.Router();

//router.get("/",getUsers);

router.post("/", userCreateController);

//router.get("/:id", getUser);

//router.delete('/:id', deleteUser);

//router.patch('/:id', updateUser);

module.exports = router;

