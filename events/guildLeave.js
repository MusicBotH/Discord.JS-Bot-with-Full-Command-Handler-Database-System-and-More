exports.run = async (client, guildLeave, message) => {
      client.user.setActivity(`${client.users.size.toLocaleString()} Users | ` + `${client.guilds.size} Servers`, { type: 'WATCHING' })
};
