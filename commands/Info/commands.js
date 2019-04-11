  const Discord = require('discord.js');
  const glob = require("glob");
  const fs = require('fs');
  const db = require('quick.db')
  exports.run = (client, message, args) => {
  glob('commands/**/*.js', (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
    if (!file.endsWith(".js")) return;
  })
  let category = args.slice(0).join(' ');

  //const embed = new Discord.RichEmbed()
    //.setColor(0xFFFFFF)
    //.setTimestamp()
    //.setTitle("Help")
    //.setDescription("Here's a list of commands, thanks to Whogivsachit for like most of the commands!")
    //.addField("Fun [12]", "```meme - self explanitory\nascii <message>\nsay <string> - make the bot say something\nknockknock - knockknock joke\ncat - cat photo\ndog - dog photo\n8ball <question> - it shall tell your destiny\nhamster - a hamster\nbunny - a bunny\nscreenshot <website> - take a screenshot of a website\nweather - <location>\nghost <message>```")
    //.addField("Info [7]", "```listemojis - list emojis\nhelp - help page\ncommands - bot commands\nping - check the API latency\nuptime - check the uptime of the bot\ncredits - credits lol\navatar <user> - displays the avatar of a user```")
    //.addField("Administration [1]", "```setup - setup the bot```")
    //.addField("Moderation [9]", "```addrole <user> - add a role to a user\nmute <user> - mute a user\npurge <user> - purge messages\nremoverole <user> - remove a role from a user\nclearwarns - clear warns\nwarn <user> <reason> - warn a user\nwarns <user> <reason>```")
    //.addField("Other [2]", "```suggest <suggestion> - add a sugggestion\npoll <desc> - start a poll```")
    //.addField("Owner [8]", "```eval <code> - evaluate js code\nmassping <user> - massping a user\nsetgame <string> - set the bot game\nsetnick <string> - set the bot nickname\nguilds - lists the guilds the bot is in\nreload - reload a command\nshutdown - murders me :(\ntest - test a command```")
    //message.channel.send(embed);
    if(category == "Fun")
    {
    	const embed = new Discord.RichEmbed()
    	.setColor(0xFFFFFF)
    	.setTitle("Fun Commands!")
    	.setDescription("```8ball <question> - randomly chooses an answer\nascii <message> - message to ASCII\nbird - picture of a bird\nbunny - picture of a bunny\ncat - picture of a cat\ndog - picture of a dig\nghost <message> - insta delete a message right after\nknockknock - knock-knock joke\nmeme - fresh memes\nrabbit - picture of a rabbit\nsay <message> - make the bot say something\nscreenshot <website> - make the bot screenshot a webpage\nweather <location> - see the weather```")
    	message.channel.send(embed)
            return;
    }
    if(category == "Info")
    {
    	const embed = new Discord.RichEmbed()
    	.setColor(0xFFFFFF)
    	.setTitle("Info Commands")
    	.setDescription("```avatar <user> - shows the avatar of a user\ncommands <category> - shows the commands\ncredits - shows the credits of the bot\nhelp - shows the help page\ninfo - shows info on the bot\nlistemojis - lists the emojis in the serber\nping - shows the ping\nprofile <user> - shows the profile of a user\nbotsuggest <suggestion> - suggest a feature for the bot\nuptime - shows the uptime of the bot```")
    	message.channel.send(embed)
            return;
    }
    if(category == "Administration")
    {
    	const embed = new Discord.RichEmbed()
    	.setColor(0xFFFFFF)
    	.setTitle("Administration Commands")
    	.setDescription("```setup - setup the bot\nsetprefix - set the prefix of the bot```")
    	message.channel.send(embed)
      return;
    }
    if(category == "Moderation")
    {
    	const embed = new Discord.RichEmbed()
    	.setColor(0xFFFFFF)
    	.setTitle("Moderation Commands")
    	.setDescription("```addrole <user> - add a role to a user\nmute <user> - mute a user\npurge <user> - purge messages\nremoverole <user> - remove a role from a user\nclearwarns - clear warns\nwarn <user> <reason> - warn a user\nwarns <user> <reason>```")
    	message.channel.send(embed)
    }
    if(category == "Other")
    {
    	const embed = new Discord.RichEmbed()
    	.setColor(0xFFFFFF)
    	.setTitle("Other Commands")
    	.setDescription("```suggest <suggestion> - add a sugggestion\npoll <desc> - start a poll```")
    	message.channel.send(embed)
    }
    if(category == "Owner")
    {
    	const embed = new Discord.RichEmbed()
    	.setColor(0xFFFFFF)
    	.setTitle("Owner Commands")
    	.setDescription("```eval <code> - evaluate js code\nmassping <user> - massping a user\nsetgame <string> - set the bot game\nsetnick <string> - set the bot nickname\nguilds - lists the guilds the bot is in\nreload - reload a command\nshutdown - murders me :(\ntest - test a command```")
    	message.channel.send(embed)
            return;
    }
    if(category == "Ticket")
    {
    	const embed = new Discord.RichEmbed()
    	.setColor(0xFFFFFF)
    	.setTitle("Ticket Commands")
    	.setDescription("```new - Open a new ticket\nclose - Close a ticket```")
    	message.channel.send(embed)
            return;
    }

    else
    {
      if(message.guild.id == "508396659701579796")
     	 {
         let lolprefix = db.fetch(`prefix_${message.guild.id}`);
         if (lolprefix === null) {
             db.set(`prefix_${message.guild.id}`, `-`)
         }
         let prefix = lolprefix;
    	  const embed = new Discord.RichEmbed()
   		   .setColor(0xFFFFFF)
   		   .setTitle("Categories")
  		   .setDescription("Here's a list of command categories!\nDo `" + prefix + "commands <category>` to list the commands in that specific category!\nNote that it's case sensative.")
    	   .addField("List of Categories", "```Fun\nInfo\nModeration\nAdministration\nOwner\nOther```")
   	 	   .setFooter(`${files.length} commands and counting`)
  	       message.channel.send(embed)
      }
      else
      {
        let lolprefix = db.fetch(`prefix_${message.guild.id}`);
        if (lolprefix === null) {
            db.set(`prefix_${message.guild.id}`, `-`)
        }
        let prefix = lolprefix;
    	  const embed = new Discord.RichEmbed()
    	   .setColor(0xFFFFFF)
  		   .setTitle("Categories")
  		   .setDescription("Here's a list of command categories!\nDo `" + prefix + "commands <category>` to list the commands in that specific category!\nNote that it's case sensative.")
  		   .addField("List of Categories", "```\nFun\nInfo\nTicket\nModeration\nNSFW\nAdministration\nOwner\nOther```")
   		   .setFooter(`${files.length} commands and counting`)
   		   message.channel.send(embed)
      }
    }
})
};

exports.conf = {
enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'commands',
  description: 'Get a list of commands',
  usage: 'commands'
};
