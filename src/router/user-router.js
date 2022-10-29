const express = require("express");
const auth = require("../middleware/auth");
const {
  userCreateController,
  usersGetController,
  userGetByUsernameController,
  userUpdateByUsernameController,
  userDeleteByUsernameController,
} = require("../controller/user-controller");

const router = express.Router();

router.get("/", auth,usersGetController);

router.post("/", userCreateController);

router.get("/:username",auth, userGetByUsernameController);

router.delete('/:username',auth, userDeleteByUsernameController);

router.patch('/',auth, userUpdateByUsernameController);

module.exports = router;
