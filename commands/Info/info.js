const glob = require("glob");
const Discord = require('discord.js');
const fs = require('fs');
var os = require('os');
exports.run = (client, message, args) => {
  glob('commands/**/*.js', (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
    if (!file.endsWith(".js")) return;
  })
let djs = require('discord.js').version
let njs = process.versions.node
let ram = Math.round(process.memoryUsage().heapUsed / 1024 / 1024);
const embed = new Discord.RichEmbed()
    .setAuthor(`FroSkid Information`)
    .setTitle("Bot Info")
    .addField("» Ping", `${Math.round(client.ping)}ms`, true)
    .setColor(0xFFFFFF)
    .addField("» Servers", `${client.guilds.size}`, true)
    .addField("» Channels", `${client.channels.size}`, true)
    .addField("» Users", `${client.users.size.toLocaleString()}`, true)
    .addField("» OS", `Windows 10`, true)
    .addField("» Node Version", njs, true)
    .addField("» Discord.js Version", djs, true)
    .addField("» Ram Usage", ram + "MB / 32GB", true)
    .addField("» Commands", files.length, true)
    .addField("» Announcement", "Updated the bot! A bunch of new commands\nAlso fixed some old commands\nAll image commands are 100x faster\nVersion number: 0.1")
    .setTimestamp()
    message.channel.send(embed)
})
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'info',
  description: 'Get information about the bot.',
  usage: 'info'
};
