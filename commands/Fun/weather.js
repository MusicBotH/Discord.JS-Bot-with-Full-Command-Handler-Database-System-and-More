const Discord = require('discord.js');
const weather = require('weather-js')
exports.run = (client, message, args) => {
   let test = args.slice(0).join(' ');
   if (test.length < 1) return message.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: "Invalid Location" } }).catch(console.error);
  weather.find({ search: args.join(" "), degreeType: "C" }, function (err, result) {
    if (!result == "antarctica") return message.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: "Invalid Location" } }).catch(console.error);
   if (result.length < 1) return message.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: "Invalid Location" } }).catch(console.error);

    var current = result[0].current;
    var location = result[0].location;

    const embed = new Discord.RichEmbed()
      .setDescription(`*${current.skytext}*`)
      .setAuthor(`The Weather for ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor(0xFFFFFF)
      .setFooter("FroSkid ♢ Thanks Trey!")
      .addField('Timezone:', `UTC${location.timezone}`, true)
      .addField('Temperature:', `${current.temperature}°${location.degreetype}`, true)
      .addField('Feels Like:', `${current.feelslike}°${location.degreetype}`, true)
      .addField('Winds:', current.winddisplay, true)
      .addField('Humidity:', `${current.humidity}%`, true)

    message.channel.send({ embed });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'weather',
  description: 'weather',
  usage: 'weather <place>'
};
