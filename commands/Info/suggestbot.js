const Discord = require('discord.js');
exports.run = (client, message, args) => {
let suggestion = args.slice(0).join(' ');
if(suggestion.length < 0) return message.channel.send("You forgot the suggestion!")
client.guilds.get("541498726636716034").channels.get("541500977233264640").send({embed: { color: 0xFFFFFF, title: "» Suggestion!", description: suggestion, footer: { icon_url: message.author.avatarURL, text: `Suggested by: ${message.author.username}#${message.author.discriminator}`}}})
message.channel.send({embed: { color: 0xFFFFFF, title: "» Success!", description: "Your suggestion will be reviewed and noted!"}})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'suggestbot',
  description: 'Put a bot suggestion!',
  usage: 'suggestbot'
};
