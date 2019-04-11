const webshot = require("webshot");
const fs = require('fs')
const rn = require("random-number")
var path = require('path');

exports.run = (client, message, args) => {
    //if (!message.channel.nsfw) return message.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: "Please go to an NSFW channel!" } }).catch(console.error);
  let random = rn();
  let website = args.join(' ');
  webshot(website, 'images/' + random + 'website.png')
  console.log("Screenshot requested!")
  setTimeout(function2, 8000);
  function2();
  function function2() {
  message.channel.send("Here's a screenshot of the website!", {files: ["./images/" + random + "website.png"]}).catch(console.error);
}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'screenshot',
  description: 'Screenshot a webpage!',
  usage: 'screenshot <website URL>'
};
