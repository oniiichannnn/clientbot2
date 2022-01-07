module.exports = {
    name: 'serverinfo',
    permissions: [],
    description: 'Server Info',
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setThumbnail(message.guild.iconURL())
            .addFields(
                { name: 'Owner', value: ``,},
                { name: 'Server Created', value: `${message.guild.createdAt}`},
                { name: 'Total Members', value: `${message.guild.memberCount}`},
                { name: 'Total Roles', value: `${message.guild.roles.cache.size}`},
                { name: 'Total Channels', value: `${message.guild.channels.cache.size}`},
                { name: 'Boost Level', value: `Coming Soon`},
                { name: 'Total Boosts', value: `Coming Soon`},
            )
            .setFooter(`Server Name: ${message.guild.name} | ServerID: ${message.guild.id}`)
            message.channel.send({ embeds: [newEmbed] });

    }
}