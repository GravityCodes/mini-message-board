const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');
/*
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), "MMMM dd yyyy" )
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), "MMMM dd yyyy" )
  }
];
*/

indexRouter.get("/", indexController.getMessages);

indexRouter.get("/new", indexController.newMessageGet);

indexRouter.post("/new", indexController.newMessagePost);

indexRouter.get("/message/:messageId", indexController.getMessageGet);

module.exports = indexRouter;