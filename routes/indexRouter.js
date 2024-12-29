const {format} = require('date-fns');

const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');

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


indexRouter.get("/", indexController.getMessages);

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  let messageText = req.body.message;
  let messageUser = req.body.name;

  messages.push({text: messageText, user: messageUser, added: format(new Date(), "MMMM dd yyyy" )});

  res.redirect("/");
});

indexRouter.get("/message/:messageId", (req, res) => {
  const {messageId} = req.params;
  res.render("message", {message: messages[messageId]});
})

module.exports = indexRouter;