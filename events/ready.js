const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = async (client) => {
    client.user.setActivity(`${client.users.size.toLocaleString()} Users | ` + `${client.guilds.size} Servers`, { type: 'WATCHING' })
  console.log(chalk.bgGreen.black(`Everything is ready! The bot is now online!`));
};
