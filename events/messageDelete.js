const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require('fs')
const db = require('quick.db')
const send = require('quick.hook')
const client = new Discord.Client();
exports.run = async (client, messageDelete, message) => {
  let messagedeleteevent = await db.fetch(`messagedeleteevent_${messageDelete.guild.id}`);
  if (messagedeleteevent === null) {
      db.set(`messagedeleteevent_${messageDelete.guild.id}`, `yes`)
  }

  if(messagedeleteevent = "no") { 
    return;
  }
   let mutedb = await db.fetch(`mute_${messageDelete.guild.id}:${messageDelete.author.id}`);
  if (mutedb === "true") {
    return;
  }
  if(messageDelete.content.length < 1) return;
 let modlogchannel = await db.fetch(`modlogchannel_${messageDelete.guild.id}`);
  if (modlogchannel === null) {
      db.set(`modlogchannel_${messageDelete.guild.id}`, `modlogs`)
  }

const embed = new Discord.RichEmbed()
  .setColor(0xFFFFFF)
  .setTimestamp()
  .setThumbnail(messageDelete.author.avatarURL)
  .setFooter(`User ID: ${messageDelete.author.id}`)
  .setTitle(`<a:Talking:452895780705927189> Message Deleted`)
  .addField(`User:`, `${messageDelete.author.tag}`)
  .addField('Content:', `${messageDelete.content}\u200b`)
  .addField('Channel:', `${messageDelete.channel}`);
  let logchannel123 = messageDelete.guild.channels.find(channel => channel.name === modlogchannel);
      if (!logchannel123) return;
   if(messageDelete.author.bot)
   if (messageDelete.content.startsWith(`-`))
   if (messageDelete.content.startsWith(`~`))
    console.log(logchannel123.id)
   return client.channels.get(logchannel123.id).send({embed}).catch(console.error);
};
