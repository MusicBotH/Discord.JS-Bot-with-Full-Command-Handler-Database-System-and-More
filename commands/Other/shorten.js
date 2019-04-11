const Discord = require('discord.js');
const shorten = require('isgd');
exports.run = (client, message, args) => {
 if (!args[0]) return message.channel.send({embed: {color: 0xFF0000, title: "» Error!", description: "Specify a URL!"}})
 if (!args[1]) {
   shorten.shorten(args[0], function(res) {
  if (res.startsWith('Error:')) return message.channel.send({embed: {color: 0xFF0000, title: "» Error!", description: "Invalid URL"}})
  message.channel.send(`**<${res}>**`);
})}
else {
  shorten.custom(args[0], args[1], function(res){
  if (res.startsWith('Error:')) return message.channel.send(`${res}`);
  message.channel.send(`**<${res}>**`)
})}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'shorten',
  description: 'SHORRTEN KINK',
  usage: 'shorten <url> <title>'
};
