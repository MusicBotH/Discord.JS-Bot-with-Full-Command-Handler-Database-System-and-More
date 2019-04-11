const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
  {
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES"))
    {
      message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the purge command, you need to give/have these permissions:\n```User: MANAGE_MESSAGES\nBot: MANAGE_MESSAGES```" }})
      return;
    } else {
     message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the purge command, you need to have these permissions:\n```User: MANAGE_MESSAGES```" }})
     return;
   }
 }
 if(!message.guild.me.hasPermission("MANAGE_MESSAGES"))
 {
   message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the purge command, you need to give these permissions:\n```Bot: MANAGE_MESSAGES```" }})
   return;
 }
  const deleteCount = parseInt(args[0], 10);
    
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "Please provide a number between 2 and 100." } });

  const fetched = message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    message.channel.send({ embed: { title: "Messages Purged", color: 0x008000, description: `I have purged ${deleteCount} messages!`}})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'purge',
  description: 'Purges X amount of messages from a given channel.',
  usage: 'purge <number>'
};
