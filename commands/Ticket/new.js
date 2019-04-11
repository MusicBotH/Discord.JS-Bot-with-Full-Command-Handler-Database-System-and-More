const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(!message.guild.me.hasPermission("MANAGE_CHANNELS" && "MANAGE_ROLES"))
{
  message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the new command, you need to give these permissions:\n```Bot: MANAGE_CHANNELS\nBot: MANAGE_ROLES```" }}).catch(console.error);
  return;
}
const reason = message.content.split(" ").slice(1).join(" ");
if(reason.length < 1) {
  let reason = "No Reason Specified"
}
if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "There is no Support Team role in this Discord!" } }).catch(console.error);
if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error!", description: "You already have a ticket open!" } }).catch(console.error);
message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
    let role1 = message.guild.roles.find("name", "Support Staff");
    let role2 = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role1, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
    }).catch(console.error);
    c.overwritePermissions(role2, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
    }).catch(console.error);
    c.overwritePermissions(message.author, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
    }).catch(console.error);
    message.channel.send(`<a:PartyGlasses:452895469954400256> Your ticket has been created, #${c.name}.`);
    c.send("@here")
    const embed = new Discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        .addField(`Hey **${message.author.username}**!`, `Please try explain why you opened this ticket with as much detail as possible.\nThe **Support Team** will be there to assist you soon!\nReason: ${reason}`)
        .setFooter(`User ID: ${message.author.id}`)
    c.send({
        embed: embed
    }).catch(console.error);
}).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'new',
  description: 'new',
  usage: 'new'
};
