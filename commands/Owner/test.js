const Discord = require("discord.js");
const math = require('mathjs')

exports.run = (client, message, args) => {
	if(!args[0]) return message.channel.send("Put a problem to calculate dummy!")
	let resp;
	try {
		resp = math.eval(args.join(' '));
	} catch (e) {
		return message.channel.send("Valid calculations only!")
	}
	const embed = new Discord.MessageEmbed()
	.setColor(0xFFFFFF)
	.setTitle("Calculation")
	.addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
	.addField('Output', `\`\`\`js\n${resp}\`\`\``)
	message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'test',
  description: 'Test a command',
  usage: 'test'
};
