const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs')
const db = require('quick.db')
const client = require('discord.js')
exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("MANAGE_GUILD"))
 {
   if(!message.guild.me.hasPermission("MANAGE_GUILD"))
   {
     message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the config command, you need to give/have these permissions:\n```User: MANAGE_GUILD\nBot: MANAGE_GUILD```" }})
     return;
   } else {
    message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the config command, you need to have these permissions:\n```User: MANAGE_GUILD```" }})
    return;
  }
}
if(!message.guild.me.hasPermission("MANAGE_GUILD"))
{
  message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the config command, you need to give these permissions:\n```Bot: MANAGE_GUILD```" }})
  return;
}
  let lolprefix = db.fetch(`prefix_${message.guild.id}`);
  if (lolprefix === null) {
      db.set(`prefix_${message.guild.id}`, `-`)
  }
  let prefix = lolprefix;
  let modlogchannel = await db.fetch(`modlogchannel_${message.guild.id}`);
  if (modlogchannel === null) {
      db.set(`modlogchannel_${message.guild.id}`, `modlogs`)
  }
  let logchannel = modlogchannel;
  let options = args[0]
  let set = args[1]

  let mutemessage = await db.fetch(`mutemessage_${message.guild.id}`);
  if (mutemessage === null) {
      db.set(`mutemessage_${message.guild.id}`, `yes`)
  }

  let messagedeleteevent = await db.fetch(`messagedeleteevent_${message.guild.id}`);
  if (messagedeleteevent === null) {
      db.set(`messagedeleteevent_${message.guild.id}`, `yes`)
  }

  //let welcomechannel = db.fetch(`welcomechannel_${message.guild.id}`);
 // if (welcomechannel === null) {
  //    db.set(`welcomechannel_${message.guild.id}`, `member-log`)
 // }

  if(options == "prefix")
  {
      if(set.length < 1) return message.channel.send({embed: { color: 0xFF0000, title: ":octagonal_sign: Error", description: "Invalid Prefix"}})
      db.set(`prefix_${message.guild.id}`, set)
      const embed = new Discord.RichEmbed()
      .setColor(0xFFFFFF)
      .setTimestamp()
      .setTitle("Success!")
      .setDescription("I have set the prefix to " + args[1] + " :eyes:")
      message.channel.send(embed)
      return;
  }
 // if(options == "welcomechannel")
//  {
   //   if(set.length < 1) return message.channel.send({embed: { color: 0xFF0000, title: ":octagonal_sign: Error", description: "Invalid Channel Name"}})
   //   db.set(`welcomechannel_${message.guild.id}`, set)
  //    const embed = new Discord.RichEmbed()
   //   .setColor(0xFFFFFF)
   //   .setTimestamp()
   //   .setTitle("Success!")
  //    .setDescription("I have set the welcome message channel to " + args[1] + " :eyes:\nMake sure you didn't include #!")
 //     message.channel.send(embed)
  //    return;
  //}
  if(options == "mutemessage") {
    if(args[1] == "yes") {
      db.set(`mutemessage_${message.guild.id}`, "yes")
      const embed = new Discord.RichEmbed()
      .setColor(0xFFFFFF)
      .setTimestamp()
      .setTitle("Success!")
      .setDescription("Mute message has been enabled.")
      message.channel.send(embed)
      return;
    }
    if(args[1] == "no") {
      db.set(`mutemessage_${message.guild.id}`, "no")
      const embed = new Discord.RichEmbed()
      .setColor(0xFFFFFF)
      .setTimestamp()
      .setTitle("Success!")
      .setDescription("Mute message has been disabled.")
      message.channel.send(embed)
      return;
    }
    else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setTimestamp()
      .setTitle(":octagonal_sign: Invalid Value")
      .setDescription(`${args[1]} not expected, put either yes or no`)
      message.channel.send(embed)
      return;
    }
  }
  if(options == "modlogchannel")
  {
      if(set.length < 1) return message.channel.send({embed: { color: 0xFF0000, title: "<:angryaf:548216672654196748> Error", description: "You need to put a channel dummy!"}})
      db.set(`modlogchannel_${message.guild.id}`, set)
      const embed = new Discord.RichEmbed()
      .setColor(0xFFFFFF)
      .setTimestamp()
      .setTitle("Success!")
      .setDescription("I have set the modlogchannel to " + args[1] + " :eyes:")
      message.channel.send(embed)
      return;
  }
  if(options == "messagedelete") {
    if(args[1] == "yes") {
      db.set(`messagedeleteevent_${message.guild.id}`, "yes")
      const embed = new Discord.RichEmbed()
      .setColor(0xFFFFFF)
      .setTimestamp()
      .setTitle("Success!")
      .setDescription("MessageDelete has been enabled!")
      message.channel.send(embed)
      return;
    }
    if(args[1] == "no") {
      db.set(`messagedeleteeven_${message.guild.id}`, "no")
      const embed = new Discord.RichEmbed()
      .setColor(0xFFFFFF)
      .setTimestamp()
      .setTitle("Success!")
      .setDescription("MessageDelete has been disabled!")
      message.channel.send(embed)
      return;
    }
    else {
      const embed = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setTimestamp()
      .setTitle(":octagonal_sign: Invalid Value")
      .setDescription(`${args[1]} not expected, put either yes or no`)
      message.channel.send(embed)
      return;
    }
  }
    const embed = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setTitle("Configuration Options")
    .setDescription("Use the command `" + prefix + "config <setting> <option>`\nExample: `" + prefix + "config prefix !`\n\n**prefix: **" + prefix + "\n**modlogchannel: **" + modlogchannel + "\n**mutemessage: **" + mutemessage + "\n**messagedelete: **" + messagedeleteevent)
    message.channel.send(embed)

  //  db.set(`prefix_${message.guild.id}`, args[0])
  //	message.channel.send("I set the prefix to " + reason +  " :eyes:")

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'config',
  description: 'config',
  usage: 'config'
};
