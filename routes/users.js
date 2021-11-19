const userRouter = require("express").Router();
const User = require("../models/user");

userRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const createdUser = await User.create(req.body);
    res.send(createdUser);
  } catch (error) {
    next(error);
  }
});

userRouter.put("/:userId", async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { ...req.body },
      { returnDocument: "after" }
    );
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});

userRouter.delete("/:userId", async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).send({ error: "User not found" });
    }

    res
      .status(200)
      .send({ data: deletedUser, meta: { userId: req.params.userId } });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
