const Discord = module.require('discord.js');

var fortunes = [
    "Yes",
    "No",
    "Of course!",
    "Hell no!",
    "Maybe...",
    "I don't know, try again!"
];


module.exports.run = async (bot, message, args) => {

if(!args[0]){
  return message.channel.send("Put a question you would like answered!")
}
if (args[0])  message.channel.send({embed: { color: 0xFFFFFF, title: `8ball! :8ball: `, description: fortunes[Math.floor(Math.random() * fortunes.length)]} }).catch(console.error); //fortunes[Math.floor(Math.random() * fortunes.length)]
else message.channel.send("Idiot! Put a question!");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: '8ball',
  description: 'Some random ball that I got off of some shady website',
  usage: '8ball <question>'
};
