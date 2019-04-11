const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
    message.channel.send({embed: {
      title: "Emojis in this server:",
      description: emojiList,
      color: 0xFFFFFF,
      footer: {
        icon_url: message.guild.iconURL,
        text: `${message.guild.name} ♢ FroSkid`
      }
     }})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'listemojis',
  description: 'listemojis',
  usage: 'listemojis'
};
