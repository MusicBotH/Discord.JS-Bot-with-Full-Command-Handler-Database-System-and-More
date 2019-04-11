const settings = require('../settings.json');
const Emap = require("enmap");
const fs = require('fs');
const db = require('quick.db')
const send = require('quick.hook')
exports.run = async (bot, message) => {
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return;
  // We define the default settings per user. This will run when a new user joins and sends a message. Creates the db entry for the user.
  const keywarns = `${message.guild.id}-${message.author.id}`; // Warn
      bot.warns.ensure(`${message.guild.id}-${message.author.id}`, {
        user: message.author.id,
        warns: 0
      });

 let client = message.client;
 //if(message.author.id == 394331308429541377) return message.delete();
  if (message.author.bot) return;
  if(message.channel.type === "dm") return;
  //Prefix System
  let lolprefix = await db.fetch(`prefix_${message.guild.id}`);
  if (lolprefix === null) {
      db.set(`prefix_${message.guild.id}`, `-`)
  }
  let prefix = lolprefix;

    let mutedb = await db.fetch(`mute_${message.guild.id}:${message.author.id}`);
  if (mutedb === "true") {
    let mutemessage = await db.fetch(`mutemessage_${message.guild.id}`);
    if (mutemessage === null) {
        db.set(`mutemessage_${message.guild.id}`, `yes`)
    }
    if(mutemessage === "yes") {
      message.channel.send(`**${message.author.username} tried to speak but is muted!\nRemove this message in the config.**`)
    }
       return message.delete();
  }
  let mutestatus = mutedb;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
  console.log("[LOG] Command Executed By: " + message.author.username + "#" + message.author.discriminator + " in " + message.guild.name)
  console.log("Command Content:" + message.content)
};
