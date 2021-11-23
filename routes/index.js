const rootRouter = require("express").Router();
const msgRouter = require('./message');
const userRouter = require("./users");

rootRouter.use("/users", userRouter);
rootRouter.use("/messages", msgRouter);

module.exports = rootRouter;
