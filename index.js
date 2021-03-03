const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./help');

let bot = new Client({
  fetchAllMembers: true, // Remove this if the bot is in large guilds.
  presence: {
    status: 'online',
    activity: {
      name: `${config.prefix}Gwacco code me`,
      type: 'NONE'
    }
  }
});

bot.on('ready', () => console.log(`Logged in as: ${bot.user.tag}.`));

bot.on('message', async message => {
  // Check for command
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();

    switch (command) {

      case 'e':
        let msg = await message.reply('e');
        await msg.reply(`E    `)
        break;
     }
    }
});

require('./server')();
bot.login(config.token);  