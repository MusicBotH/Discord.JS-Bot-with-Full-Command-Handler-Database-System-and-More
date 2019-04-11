const Discord = require('discord.js');
const figlet = require('figlet');
exports.run = (client, message, args) => {
let ASCIIMESSAGE = args.slice(0).join(' ');
if(ASCIIMESSAGE.length < 0) return message.channel.send("```Cannot find a message to ASCII```")
figlet(ASCIIMESSAGE, function(err, data) {
    if (err) {
        message.channel.send("Somethin went wrong!")
        console.dir(err);
        return;
    }
    message.channel.send("```" + data + "```")
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'ascii',
  description: 'Text to ASCI',
  usage: 'ascii <message>'
};
