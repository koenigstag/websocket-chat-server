const authRouter = require('express').Router();
const AuthController = require('../controllers/auth');

/* Path - /api/auth */

authRouter.post('/login', AuthController.login);
authRouter.post('/registration', AuthController.register);

authRouter.post('/refresh', AuthController.refresh);

module.exports = authRouter;
