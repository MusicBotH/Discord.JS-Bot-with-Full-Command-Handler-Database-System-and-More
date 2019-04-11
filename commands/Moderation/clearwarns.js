const Discord = require('discord.js');
exports.run = (client, message, args) => {
 if (!msg.member.hasPermission("MANAGE_MESSAGES"))
 {
   if(!msg.guild.me.hasPermission("MANAGE_MESSAGES"))
   {
     msg.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the addrole command, you need to give/have these permissions:\n```User: MANAGE_MESSAGES\nBot: MANAGE_MESSAGES```" }})
     return;
   } else {
    msg.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the addrole command, you need to have these permissions:\n```User: MANAGE_MESSAGES```" }})
    return;
  }
}
if(!msg.guild.me.hasPermission("MANAGE_MESSAGES"))
{
  msg.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the addrole command, you need to give these permissions:\n```Bot: MANAGE_MESSAGES```" }})
  return;
}
let user = message.author;
let tagged = message.mentions.users.first();
let curLevel = 0;
client.warns.ensure(`${message.guild.id}-${user.id}`, {
      user: user.id,
      warns: 0
    });
const key = `${message.guild.id}-${user.id}`;
    client.warns.ensure(key, {
      user: user.username.id,
      warns: 0
    });

if (!args[0]) {
     message.channel.send({embed: { color: 0xFFFFFF, title: "Success!", description: `Your warns have been reset.` } });
      client.warns.set(key, curLevel, "warns");
      let user = msg.mentions.users.first();
      const embed = new Discord.RichEmbed()
      .setColor(0xFFFFFF)
      .setTimestamp()
      .setTitle(`<:dab:538813300989886464> **ClearWarns**`)
      .setThumbnail(user.avatarURL)
      .addField('User:', `${message.author.username}#${message.author.discriminator}`)
      .setFooter(`User ID: ${message.author.id}`)

} else {
       message.channel.send({embed: { color: 0xFFFFFF, title: "Success!", description: `${tagged}'s warns have been reset.` } });
       client.warns.set(`${message.guild.id}-${tagged.id}`, curLevel, "warns");
       let user = message.mentions.users.first();
     const embed = new Discord.RichEmbed()
      .setColor(0xFFFFFF)
      .setTimestamp()
      .setTitle(`<:dab:538813300989886464> **ClearWarns**`)
      .setThumbnail(user.avatarURL)
      .addField('User:', `${user.username}#${user.discriminator}`)
      .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`)
      .setFooter(`User ID: ${user.id}`)

}




};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'clearwarns',
  description: 'Clears your warns',
  usage: 'clearwarns <@user>'
};
