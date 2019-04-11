const Discord = require('discord.js');
const weather = require('weather-js')
exports.run = (client, message, args) => {
   message.delete(1)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'ghost',
  description: 'ghost',
  usage: 'ghost <message>'
};
