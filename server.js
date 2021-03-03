const app = require('express')();

app.get('/', (req, res) => res.send('The Bot ${bot.user.tag} is starting.'));

module.exports = () => {
  app.listen(3000);
}