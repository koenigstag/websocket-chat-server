const msgRouter = require("express").Router();
const MessageController = require("../controllers/message");

/* Path - /api/messages */

msgRouter.get("/", MessageController.getAllMsgs);

msgRouter
  .route("/:userId")
  .get(MessageController.getAllMsgs)
  .post(MessageController.createMsg);

module.exports = msgRouter;
