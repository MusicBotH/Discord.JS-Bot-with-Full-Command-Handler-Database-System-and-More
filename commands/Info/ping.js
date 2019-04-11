const Discord = require('discord.js');
exports.run = (client, message) => {
message.channel.send("Checking Ping... :bar_chart:").then((msg)=>{
	const ping = Math.round((msg.createdTimestamp - message.createdTimestamp) - client.ping)
	msg.edit({embed: { color: 0xFFFFFF, title: "PONG! :ping_pong:", description: `**Time Taken:** ${ping}ms\n**WebSocket Ping:** ${Math.round(client.ping)}ms`}})
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping...? PONG!',
  usage: 'ping'
};
