const Discord = require('discord.js');
exports.run = (client, message, args) => {
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.round(totalSeconds % 60);

let uptime = `**${days}** days, **${hours}** hours, **${minutes}** minutes and **${seconds}** seconds`;
	message.channel.send({embed: {
		color: 0xFFFFFF,
		title: "» Uptime!",
		description: "I've been online for " + uptime,
		footer: {
			icon_url: client.user.avatarURL,
			text: "♢ FroSkid"
		}
	}});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'uptime',
  description: 'Get the uptime of the bot!',
  usage: 'uptime'
};
