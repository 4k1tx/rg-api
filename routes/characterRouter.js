const characterController = require("../controllers/characterController");
const Router = require("express").Router;
const router = new Router();

router.post("/create", characterController.create);
router.get("/:userId", characterController.getByUser);
router.patch("/:userId/update", characterController.update);

module.exports = router;
