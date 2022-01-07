module.exports = {
    name: 'ping',
    aliases: ['botmaker'],
    permissions: [],
    description: 'Bot Dev',
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription('Calculating ping')
        message.channel.send({ embeds: [newEmbed] }).then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription(`**Bot latency:** ${ping}\n\n**API Latency:** ${client.ws.ping}`)
            resultMessage.edit({ embeds: [newEmbed] });
        })
    }
}