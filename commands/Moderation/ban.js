const Discord = require('discord.js');
const db = require('quick.db')
const send = require('quick.hook')
exports.run = (client, message, args) => {
 if (!message.member.hasPermission("BAN_MEMBERS"))
 {
   if(!message.guild.me.hasPermission("BAN_MEMBERS"))
   {
     message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the ban command, you need to give/have these permissions:\n```User: BAN_MEMBERS\nBot: BAN_MEMBERS```" }})
     return;
   } else {
    message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the ban command, you need to have these permissions:\n```User: BAN_MEMBERS```" }})
    return;
  }
}
if(!message.guild.me.hasPermission("BAN_MEMBERS"))
{
  message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the ban command, you need to give these permissions:\n```Bot: BAN_MEMBERS```" }})
  return;
}
  let lolprefix = db.fetch(`prefix_${message.guild.id}`);
  if (lolprefix === null) {
      db.set(`prefix_${message.guild.id}`, `-`)
  }
  let prefix = lolprefix;
    let modlogchannel = db.fetch(`modlogchannel_${message.guild.id}`);
  if (modlogchannel === null) {
      db.set(`modlogchannel_${message.guild.id}`, `modlogs`)
  }
if(!args[0]) return message.channel.send({embed: { color: 0xFFFFFF, title: "Info", description: `**Description: **Permanently bans a user from your server. All users banned using this command will log into the modlogs channel, ${modlogchannel}.\n\n**Usage: **${lolprefix}ban <user> <reason>\n\n**Required Permissions: **` + "```User: BAN_MEMBERS\nBot: BAN_MEMBERS```"}})

 let reason = args.slice(1).join(' ');
if (message.mentions.users.size < 1) return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "You must mention a user to ban!" } }).catch(console.error);
 if(!args.slice(1).join(' ')) return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "You must specify a reason for this ban!"}})
 let user = message.mentions.users.first();
 let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
 let senduser = args.join(' ');
 let logchannel = message.guild.channels.find('name', modlogchannel);
  if (!message.guild.member(user).bannable) return message.reply({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "This user cannot be banned!" } }).catch(console.error);

	const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setFooter(`User ID: ${user.id}`)
    .setTitle(`:octagonal_sign: **Ban**`)
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);

    message.channel.send({
      embed: {
        color: 0xFFFFFF,
        title: "User has been banned! <a:ban:535283654025412608>",
        description: `${user.username} has been banned from the server for ${reason}\nThis ban has been logged in ${modlogchannel}`
      }}).catch(console.error);
  message.guild.member(dUser).ban(reason).catch(console.error);
  if (!logchannel) return;
  return client.channels.get(logchannel.id).send({embed}).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'ban',
  description: 'Mutes the user.',
  usage: 'ban <@user> <reason>'
};
