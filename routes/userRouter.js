const userController = require("../controllers/userController");
const Router = require("express").Router;
const router = new Router();

router.post("/create", userController.create);
router.post("/login", userController.login);

module.exports = router;
