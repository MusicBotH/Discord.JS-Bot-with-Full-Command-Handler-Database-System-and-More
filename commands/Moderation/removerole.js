const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    if (!msg.member.hasPermission("MANAGE_ROLES")) return  msg.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: "You do not have the required permission", footer:{ text: "Permission Required: MANAGE_ROLES"} } });
    if (msg.mentions.users.size === 0) return msg.reply({embed: { color: 0xFF0000, title: "» Error!", description: "Please mention a user!" } });
    let member = msg.guild.member(msg.mentions.users.first());
    if (!member) return msg.reply({embed: { color: 0xFF0000, title: "» Error!", description: "Invalid User!" } });
    let name = msg.content.split(" ").splice(2).join(" ");
    let role = msg.guild.roles.find("name", name);
    if (role.length < 1) return msg.reply({embed: { color: 0xFF0000, title: "» Error!", description: "Cannot find the role **" + name + "**!" } }).catch(console.error);
    member.removeRole(role).catch(e => {
    msg.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: "Failed to add the muted role because it's higher than my role." } });
    });
    msg.channel.send({
      embed: {
        color: 0xFFFFFF,
        title: "» Success!",
        description: `The **${name}** role has been removed from **${msg.mentions.users.first().username}**!`
      }})

let user = msg.mentions.users.first();
let logchannel = msg.guild.channels.find('name', 'modlogs');
 const embed = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setTitle(`:warning: **RemoveRole**`)
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`)
    .addField('Role', `${role}`)
    .setThumbnail(member.avatarURL)
    .setFooter(`User ID: ${member.id}`)

return client.channels.get(logchannel.id).send({embed}).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'removerole',
  description: 'Removes the role from a user.',
  usage: 'removerole'
};
