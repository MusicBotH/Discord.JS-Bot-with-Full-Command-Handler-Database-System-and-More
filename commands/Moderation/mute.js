const Discord = require('discord.js');
const db = require('quick.db')
const send = require('quick.hook')
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
  {
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES"))
    {
      message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the mute command, you need to give/have these permissions:\n```User: MANAGE_MESSAGES\nBot: MANAGE_MESSAGES```" }})
      return;
    } else {
     message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the mute command, you need to have these permissions:\n```User: MANAGE_MESSAGES```" }})
     return;
   }
 }
 if(!message.guild.me.hasPermission("MANAGE_MESSAGES"))
 {
   message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the mute command, you need to give these permissions:\n```Bot: MANAGE_MESSAGES```" }})
   return;
 }
     let modlogchannel = db.fetch(`modlogchannel_${message.guild.id}`);
  if (modlogchannel === null) {
      db.set(`modlogchannel_${message.guild.id}`, `modlogs`)
  }

    if (message.mentions.users.size === 0) return message.reply({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "Please mention a user!" } });
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "Invalid User!" } });
	let user = message.mentions.users.first();
   let logchannel = message.guild.channels.find('name', modlogchannel);
   let reason = args[1]
   if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "That user cannot be muted!" } });
   db.set(`mute_${message.guild.id}:${member.id}`, 'true');
	message.channel.send({embed: { color: 0xFFFFFF, title: "Success!", description: `${user.username} has been muted for ${reason}\nThis mute has been logged in ${modlogchannel}`} });
		   const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle(`<:angryaf:548216672654196748> **Mute**`)
    .setThumbnail(member.avatarURL)
    .setFooter(`User ID: ${user.id}`)
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', `${reason}`)
	  return client.channels.get(logchannel.id).send({embed}).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'mute',
  description: 'Mutes the user.',
  usage: 'mute <@user>'
};
