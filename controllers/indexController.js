const db = require("../db/queries");
const { format } = require("date-fns");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages })
}

function newMessageGet ( req, res) {
  res.render("form");
}

async function newMessagePost (req, res) {
  let message = req.body.message;
  let user = req.body.name;
  await db.addNewMessage(message, user, new Date());
  
  res.redirect("/");
}

async function getMessageGet (req, res) {
  const {messageId} = req.params;
  const message = await db.getMessage(messageId);
  res.render("message", {message: message});
}

module.exports = {
  getMessages,
  newMessageGet,
  newMessagePost,
  getMessageGet
}