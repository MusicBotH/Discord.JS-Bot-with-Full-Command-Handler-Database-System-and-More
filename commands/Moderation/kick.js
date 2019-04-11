const Discord = require('discord.js');
const db = require('quick.db')
const send = require('quick.hook')
exports.run = (client, message, args) => {
 if (!msg.member.hasPermission("KICK_MEMBERS"))
 {
   if(!msg.guild.me.hasPermission("KICK_MEMBERS"))
   {
     msg.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the addrole command, you need to give/have these permissions:\n```User: KICK_MEMBERS\nBot: KICK_MEMBERS```" }})
     return;
   } else {
    msg.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the addrole command, you need to have these permissions:\n```User: KICK_MEMBERS```" }})
    return;
  }
}
if(!msg.guild.me.hasPermission("KICK_MEMBERS"))
{
  msg.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the addrole command, you need to give these permissions:\n```Bot: KICK_MEMBERS```" }})
  return;
}
let modlogchannel = db.fetch(`modlogchannel_${message.guild.id}`);
if (modlogchannel === null) {
    db.set(`modlogchannel_${message.guild.id}`, `modlogs`)
}
 let reason = args.slice(1).join(' ')
 let user = message.mentions.users.first();
 let logchannel = message.guild.channels.find('name', 'modlogs');
 if (message.mentions.users.size < 1) return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "You must mention a user to kick!" } }).catch(console.error);
 if (reason.length < 1) return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "You must specify a reason!" } }).catch(console.error);

if (!message.guild.member(user).kickable) return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "This user cannot be kicked!" } }).catch(console.error);



const embed = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setThumbnail(user.avatarURL)
.setFooter(`User ID: ${user.id}`)
.setTitle(`:octagonal_sign: **Kick**`)
.addField('User:', `${user.username}#${user.discriminator}`)
.addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
.addField('Reason', reason);

    message.channel.send({
      embed: {
        color: 0xFFFFFF,
				title: `User has been kicked! <a:ban:535283654025412608>`,
        description: `${user.username} has been kicked from the server for ${reason}\nThis kick has been logged in ${modlogchannel}`
      }})
    message.guild.member(user).kick();
		if(!logchannel) return;
  return client.channels.get(logchannel.id).send({embed}).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'kick',
  description: 'Kicks the user.',
  usage: 'kick <@user> <reason>'
};
