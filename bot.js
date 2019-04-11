const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const fs = require('fs');
const glob = require("glob");
const Enmap = require('enmap');

client.warns = new Enmap({name: "warns"});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
glob('commands/**/*.js', (err, files) => {
    if (err) console.log(err);
		console.log(`Starting... Thanks to CHIT for the handlers...`);
		files.forEach(file => {
		if (!file.endsWith(".js")) return;
		let props = require(`./` + file);
		let commandName = file.split(".")[0];
	  client.commands.set(props.help.name, props);
	  console.log(`Loaded Command: ${props.help.name} `);
	});
	console.log(`Loaded ${files.length} commands!`);
	console.log(`Events have been loaded!`);
	console.log(`fropvp.com | Fro#7704`);
});

fs.readdir("./events/", (err, files) => {
	if (err) console.log(err);
	files.forEach(file => {
		if (!file.endsWith(".js")) return;
		let eventFunc = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		client.on(eventName, (...args) => eventFunc.run(client, ...args));
	});
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.elevation = message => {
  let permlvl = 0;
  if (message.author.id === settings.ownerid) permlvl = 5;
  if (message.author.id === settings.friendids) permlvl = 666;
  return permlvl;
};

client.login(settings.token);
