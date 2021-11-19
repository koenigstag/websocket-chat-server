const userRouter = require('express').Router();

userRouter.get('/', (req, res, next) => {
    try {
        res.send('all users')
    } catch (error) {
        next(error);
    }
})

userRouter.post('/', (req, res, next) => {
    try {
        res.send('created users')
    } catch (error) {
        next(error);
    }
})

userRouter.put('/', (req, res, next) => {
    try {
        res.send('updated users')
    } catch (error) {
        next(error);
    }
})


userRouter.delete('/', (req, res, next) => {
    try {
        res.send('deleted users')
    } catch (error) {
        next(error);
    }
})

