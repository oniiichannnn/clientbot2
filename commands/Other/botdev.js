module.exports = {
    name: 'botdev',
    aliases: ['botmaker'],
    permissions: [],
    description: 'Bot Dev',
    execute(client, message, args, cmd, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription('<@523552462125269024> made <@922519956153843833>')
        message.channel.send({ embeds: [newEmbed] });
    }
}