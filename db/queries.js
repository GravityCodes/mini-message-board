const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function addNewMessage(message, user, date){
  await pool.query(`INSERT INTO messages(message, "user", added) VALUES($1, $2, $3);`, [message, user, date]);
}

async function getMessage(messageId) {
  const {rows}= await pool.query("SELECT * FROM messages WHERE id = $1;", [messageId]);
  return rows[0];
}

module.exports = {
  getAllMessages,
  addNewMessage,
  getMessage
}
