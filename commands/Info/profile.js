const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')
exports.run = (client, message, args) => {
let user = message.mentions.users.first() || message.author;

let userinfo = {};
userinfo.avatar = user.avatarURL
userinfo.name = user.username;
userinfo.discrim = `#${user.discriminator}`;
userinfo.id = user.id;
userinfo.status = user.presence.status.toString().toUpperCase();
userinfo.game = message.author.presence.game === null ? "Nothing" : message.author.presence.game.name;
userinfo.registered = moment.utc(message.guild.members.get(user.id).user.createdAt).format("dddd, MMMM Do, YYYY")
userinfo.joined = moment.utc(message.guild.members.get(user.id).joinedAt).format("dddd, MMMM Do, YYYY")

let embed = new Discord.RichEmbed()
  .setTitle("Profile")
  .setThumbnail(userinfo.avatar)
  .setColor(0xFFFFFF)
  .setDescription(`**Username:** ${userinfo.name}#${userinfo.discrim}\n**ID:** ${userinfo.id}\n**Status:** ${userinfo.status}\n**Playing:** ${userinfo.game}\n**Registered:** ${userinfo.registered}\n**Joined:** ${userinfo.joined}`)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'profile',
  description: 'profile',
  usage: 'profile'
};
