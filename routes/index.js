const rootRouter = require('express').Router();
const authRouter = require('./auth');
const msgRouter = require('./message');
const userRouter = require('./users');

rootRouter.use('/users', userRouter);
rootRouter.use('/messages', msgRouter);
rootRouter.use('/auth', authRouter);

module.exports = rootRouter;
