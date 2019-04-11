const Discord = require('discord.js');
exports.run = (client, message, args) => {
let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL : message.author.avatarURL;
if (message.mentions.users.size > 0) {
let embed = new Discord.RichEmbed()
.setTitle("Nice, sexy avatar!")
.setImage(avatar)
.setColor(0xFFFFFF)
message.channel.send(embed)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'avatar',
  description: 'Get avatar',
  usage: 'avater <user>'
};
