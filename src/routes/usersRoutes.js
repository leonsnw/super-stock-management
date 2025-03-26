const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.createUser);
router.get("/", usersController.getAllUsers);
router.put("/:id", usersController.updateUsers);
router.delete("/:id", usersController.deleteUsers);

module.exports = router;
