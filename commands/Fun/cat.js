const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');
exports.run = async (client, message, args) => {
  try {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/cats.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('We are out of memes :(');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setTitle(allowed[randomnumber].data.title)
        //.addField("Info:", "Upvotes: " + allowed[randomnumber].data.ups + "Comments: " + allowed[randomnumber].data.num_comments + ":upvote:")
        .setImage(allowed[randomnumber].data.url)
        .setFooter(`Posted By: ${allowed[randomnumber].data.author} Upvotes: ${allowed[randomnumber].data.ups} Comments: ${allowed[randomnumber].data.num_comments}`)
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'cat',
  description: 'cat',
  usage: 'cat'
};
