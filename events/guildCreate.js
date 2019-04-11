exports.run = async (client, guildCreate, message) => {
    client.user.setActivity(`${client.users.size.toLocaleString()} Users | ` + `${client.guilds.size} Servers`, { type: 'WATCHING' })
};
