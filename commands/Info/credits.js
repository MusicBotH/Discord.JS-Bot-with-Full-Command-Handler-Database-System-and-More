  const Discord = require('discord.js');
  exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setTitle("Credits")
    .setDescription("Here are the credits:")
    .addField("Fro", "Owner of the bot.")
    .addField("Whogivsachit", "Made/Helped with almost all of the commands.")
    .addField("OofsL", "Test subject!")

    message.channel.send({embed}).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'credits',
  description: 'Credits!',
  usage: 'credits'
};
