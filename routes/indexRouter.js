const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


indexRouter.get("/", (req, res) => {
  res.render("index", {messages});
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  let messageText = req.body.message;
  let messageUser = req.body.name;

  messages.push({text: messageText, user: messageUser, added: new Date()});

  res.redirect("/");
});

indexRouter.get("/message/:messageId", (req, res) => {
  const {messageId} = req.params;
  res.render("message", {message: messages[messageId]});
})

module.exports = indexRouter;