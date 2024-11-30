const Router = require("express").Router;
const router = new Router();
const characterRouter = require("./characterRouter");
const userRouter = require("./userRouter");

router.use("/characters", characterRouter);
router.use("/users", userRouter);

module.exports = router;
