const Discord = require('discord.js');
exports.run = (client, message, args) => {
	    if (message.author.id !== "500772634154237952") return (message.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: `You do not have permission to run this!` } })); 
    let newname = args.join(' ')
    client.user.setUsername(newname)
 message.channel.send({embed: { color: 0xFFFFFF, title: "? Success!", description: "I set my nickname to " + newname}});
    };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'setnick',
  description: 'Set the nickname of the bot.',
  usage: 'setnick <nickname>'
};
