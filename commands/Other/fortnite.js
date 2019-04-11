const Fortnite = require('fortnite');
const stats = new Fortnite(`c1e864cc-f5a0-4579-902f-762b7854aa55`);
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
  let platform;
  let username;
    //let lolprefix = db.fetch(`prefix_${message.guild.id}`);
  //if (lolprefix === null) {
    //  db.set(`prefix_${message.guild.id}`, `-`)
  //}
 // let prefix = lolprefix;
  let prefix = "-"
  if (!['pc','xbl','psn'].includes(args[0])) return message.channel.send({embed: { color: 0xFF0000, title: "Please specify a platform!", description: "Example: `" + prefix + "fortnite <pc, xbl, or psn> <username>`"}});
  if (!args[1]) return message.channel.send({embed: { color: 0xFF0000, title: "Please specify a username!", description: "Example: `" + prefix + "fortnite <pc, xbl, or psn> <username>`"}});
  platform = args.shift();
  username = args.join(' ');
  
  stats.user(username, platform).then( data => { 
    const embed = new Discord.MessageEmbed() 
      .setColor(0xffffff)
      .setTitle(`Stats for ${data.username}`)
      .setDescription(`**Top Placement**\n\n**Top 3s:** *${data.lifetimeStats[0].value}*\n**Top 5s:** *${data.lifetimeStats[1].value}*\n**Top 6s:** *${data.lifetimeStats[3].value}*\n**Top 12s:** *${data.lifetimeStats[4].value}*\n**Top 25s:** *${data.lifetimeStats[5].value}*`, true) // We can have other information look different, in fields or in the description.
      .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png')
      .addField('Total Score', data.lifetimeStats[6].value, true)
      .addField('Matches Played', data.lifetimeStats[7].value, true)
      .addField('Wins', data.lifetimeStats[8].value, true)
      .addField('Win Percentage', data.lifetimeStats[9].value, true)
      .addField('Kills', data.lifetimeStats[10].value, true)
      .addField('K/D Ratio', data.lifetimeStats[11].value, true)
      .addField('Kills Per Minute', data.lifetimeStats[12].value, true)
      .addField('Time Played', data.lifetimeStats[13].value, true)
      .addField('Average Survival Time', data.lifetimeStats[14].value, true)
    message.channel.send(embed)
    
  })
  .catch(error => {
    console.log(error)
    //message.channel.send({embed: { color: 0xFF0000, title: "Invalid Username", description: `Could not find the username ${args[1]}!`}});
  
  })
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'fortnite',
  description: 'Help Page.',
  usage: 'fortnite'
};
