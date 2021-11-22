const rootRouter = require("express").Router();
const userRouter = require("./users");

rootRouter.use("/users", userRouter);

module.exports = rootRouter;
