const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, msg, args) => {
 if (!msg.member.hasPermission("MANAGE_ROLES"))
 {
   if(!msg.guild.me.hasPermission("MANAGE_ROLES"))
   {
     msg.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the addrole command, you need to give/have these permissions:\n```User: MANAGE_ROLES\nBot: MANAGE_ROLES```" }})
     return;
   } else {
    msg.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the addrole command, you need to have these permissions:\n```User: MANAGE_ROLES```" }})
    return;
  }
}
if(!msg.guild.me.hasPermission("MANAGE_ROLES"))
{
  msg.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the addrole command, you need to give these permissions:\n```Bot: MANAGE_ROLES```" }})
  return;
}
  let lolprefix = db.fetch(`prefix_${msg.guild.id}`);
  if (lolprefix === null) {
      db.set(`prefix_${msg.guild.id}`, `-`)
  }
  let prefix = lolprefix;
    let modlogchannel = db.fetch(`modlogchannel_${msg.guild.id}`);
  if (modlogchannel === null) {
      db.set(`modlogchannel_${msg.guild.id}`, `modlogs`)
  }
if(!args[0]) return msg.channel.send({embed: { color: 0xFFFFFF, title: "Info", description: `**Description: **Adds a role to a user. All users that have recieved roles using this command will log into the modlogs channel, ${modlogchannel}.\n\n**Usage: **${lolprefix}addrole <user> <role>\n\n**Required Permissions: **` + "```User: MANAGE_ROLES\nBot: MANAGE_ROLES```"}})
    if (msg.mentions.users.size === 0) return msg.reply({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "Please mention a user to add a role to!" } });
    let member = msg.guild.member(msg.mentions.users.first());
    if (!member) return msg.reply({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "Invalid User!" } });
    let name = msg.content.split(" ").splice(2).join(" ");
    let role = msg.guild.roles.find("name", name);
    if (!role) return msg.reply({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "Cannot find the role: **" + name + "**!" } });
    let botRolePosition = msg.guild.member(client.user).highestRole.position;
    let rolePosition = role.position;
    if (botRolePosition <= rolePosition) return msg.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "Failed to add the role role because it's higher than my role." } });
    member.addRole(role).catch(e => {
        return msg.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "ERROR" } });
    });
    msg.channel.send({
      embed: {
        color: 0xFFFFFF,
        description: `The **${name}** role has been added to **${msg.mentions.users.first().username}**!`
      }})
let user = msg.mentions.users.first();
 const embed = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setTitle(`<:dab:538813300989886464> **AddRole**`)
    .setThumbnail(user.avatarURL)
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`)
    .addField("Role:", `${name}`)
    .setFooter(`User ID: ${user.id}`)

	let logchannel = msg.guild.channels.find('name', modlogchannel);
  return client.channels.get(logchannel.id).send({embed}).catch(console.error);



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'addrole',
  description: 'Add a role.',
  usage: 'addrole'
};
