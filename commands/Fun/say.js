exports.run = (client, message, args) => {
 message.delete()
 message.channel.send(args.join(' '))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'say',
  description: 'say',
  usage: 'say'
};
