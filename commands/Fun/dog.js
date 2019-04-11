const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {

    var subreddits = [
        'dog',
        'dogs'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFileSync(`dog.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlinkSync(`./dog.jpg`)
            })
        })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'dog',
  description: 'Dogs!',
  usage: 'dog'
};
