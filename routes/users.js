const userRouter = require('express').Router();
const UserController = require('../controllers/user');

/* Path - /api/users */

/* User crud */
userRouter.get('/', UserController.getAllUsers);
userRouter.post('/', UserController.createUser);
userRouter.put('/:userId', UserController.updateUser);
userRouter.delete('/:userId', UserController.deleteUser);

module.exports = userRouter;
