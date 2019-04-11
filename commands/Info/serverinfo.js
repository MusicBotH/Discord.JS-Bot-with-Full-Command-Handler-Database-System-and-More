const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')
exports.run = (client, message, args) => {
const serverLevel = ["None", "Low", "Medium", "High", "Max"]
const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
let embed = new Discord.RichEmbed()
  .setTitle("Server Info")
  .setAuthor(message.guild.name)
  .setThumbnail(message.guild.iconURL)
  .setColor(0xFFFFFF)
  .setDescription(`**Owner:** ${message.guild.owner.user.tag}\n**ID:** ${message.guild.id}\n**Members:** ${message.guild.memberCount}\n**Bots:** ${message.guild.members.filter(mem => mem.user.bot === true).size}\n**Channels:** ${message.guild.channels.size}\n**Roles:** ${message.guild.roles.size}\n**Verification Level:** ${serverLevel[message.guild.verificationLevel]}\n**Creation Date:** ${moment.utc(message.guild.createdAt).format("dddd, MMMM Do, YYYY")}\n\n**Role List [${message.guild.roles.size -1}]:** ${message.guild.roles.map(r => r).join(" ").replace("@everyone", "")}\n**Emojis [${message.guild.emojis.size}]:** ${emojiList}`)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'serverinfo',
  description: 'serverinfo',
  usage: 'serverinfo'
};
