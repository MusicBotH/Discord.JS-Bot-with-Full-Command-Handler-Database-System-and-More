
exports.run = async (client, message, args) => {
  if(message.author.id !== "500772634154237952") return message.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: `You do not have permission to run this!` } });
    const guildArray = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })

    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)

  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'guilds',
  description: 'Guilds!',
  usage: 'guilds'
};
