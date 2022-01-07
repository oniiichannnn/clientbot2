module.exports = {
    name: 'dm',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    description: 'DM',
    execute(client, message, args, cmd, Discord) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!user) return message.channel.send('Cant find that user')
        if(!args.slice(1).join(" ")) return message.channel.send("No meesage specified")
        user.send(args.slice(1).join(" ")).catch(() => message.channel.send("That user could not be DMed")).then(() => message.channel.send(`Message sent to <@${user.id}>`))
    }
}