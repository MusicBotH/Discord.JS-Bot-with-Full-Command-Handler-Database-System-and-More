const encode = require('strict-uri-encode');
exports.run = (client, message, args) => {
  let question = encode(args[0])
  let link = `https://www.lmgtfy.com/?q=${question}`;
  message.channel.send(`**<${link}>**`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'lmgtfy',
  description: 'SHORRTEN KINK',
  usage: 'lmgtfy <url>'
};
