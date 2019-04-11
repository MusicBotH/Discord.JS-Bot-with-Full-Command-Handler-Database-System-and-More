const Discord = require('discord.js');;
exports.run = (client, message, args) => {
if (message.author.id !== "500772634154237952") return (message.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: `You do not have permission to run this!`, footer: { text: "You need to be the bot owner"} } })); 
let user = message.mentions.users.first();
let silent = args.slice(1).join(' ');
if(silent == "--silent")
{
	  message.delete();
	  message.channel.send("You are being mass pinged" + user + "!").then(sentEmbed => {1
      sentEmbed.delete();
      console.log("Sent massping! 1")
  })
	  message.channel.send("You are being mass pinged" + user + "!").then(sentEmbed => {1
      sentEmbed.delete();
      console.log("Sent massping! 2")
  })
	  message.channel.send("You are being mass pinged" + user + "!").then(sentEmbed => {1
      sentEmbed.delete();
      console.log("Sent massping! 3")
  })
	  message.channel.send("You are being mass pinged" + user + "!").then(sentEmbed => {1
      sentEmbed.delete();
      console.log("Sent massping! 4")
  })
	  message.channel.send("You are being mass pinged" + user + "!").then(sentEmbed => {1
      sentEmbed.delete();
      console.log("Sent massping! 5")
  })
  return;
}

message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
message.channel.send("You are being mass pinged " + user + "!");
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'massping',
  description: 'Mass-ping someone!',
  usage: 'massping <user>'
};
