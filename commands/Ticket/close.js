const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(!message.guild.me.hasPermission("MANAGE_CHANNELS" && "MANAGE_ROLES"))
{
  message.channel.send({embed: { color: 0x7289DA, title: "<:BlurpleOutage:543908084343504907> Missing Permissions", description: "Uh oh! For me to use the new command, you need to give these permissions:\n```Bot: MANAGE_CHANNELS\nBot: MANAGE_ROLES```" }}).catch(console.error);
  return;
}
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

        message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`/confirm\`. This will time out in 10 seconds and be cancelled.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '/confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'close',
  description: 'close',
  usage: 'close'
};
