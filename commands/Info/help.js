const Discord = require('discord.js');
const fs = require('fs')
const db = require('quick.db')
exports.run = (client, message, args) => {
  let lolprefix = db.fetch(`prefix_${message.guild.id}`);
  if (lolprefix === null) {
      db.set(`prefix_${message.guild.id}`, `-`)
  }
  let prefix = lolprefix;
const embed = new Discord.RichEmbed()
  .setTitle("FroSkid")
  .setAuthor(`${client.user.username}'s Help Page`, "https://vgy.me/OJ8K1o.png")
  .setColor(0xFFFFFF)
  .setDescription("I'm a bot with a lot of commands!")
  .setFooter("Thank you for using FroSkid!")
  .setThumbnail("https://vgy.me/OJ8K1o.png")
  .setTimestamp()
  .setURL("https://discordapp.com/oauth2/authorize?client_id=506886932790509570&scope=bot&permissions=6666666")
  .addField("» Prefix", "`" + prefix + "`")
  .addField("» Commands", "`" + prefix + "commands <category name>`\nTo get a list of categories, do " + prefix + "commands")
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'help',
  description: 'Help Page.',
  usage: 'help'
};
